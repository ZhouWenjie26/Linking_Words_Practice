"""Screen the Item Response Warehouse (IRW) for multiple-response (MR) candidates.

Uses only the public Redivis REST API (no account or token was needed on
2026-11-12) and the Python standard library.

    python3 irw_screen.py [cache_dir] [out_csv]

It downloads the IRW metadata tables, then flags core and nominal tables that
(a) are option-level companions of MR items, (b) mention an MR format in their
description, or (c) carry process variables. Item format tags in IRW are too
coarse to find MR items, so the search runs on table names and descriptions.
"""
import csv
import os
import re
import sys
import urllib.request

API = "https://redivis.com/api/v1/tables/datapages.irw_meta.{}/rows?format=csv&maxResults=100000"
TABLES = ["metadata", "biblio", "nominal_metadata", "nominal_biblio"]
MR_WORDS = re.compile(
    r"multiple[- ]respon|select[- ]all|check[- ]all|multiple[- ]select|multi[- ]select"
    r"|multiple true|all that apply|tick[- ]all|option[- ]level|per person x option"
    r"|pair of words chosen",
    re.I,
)
PROCESS_VARS = {"num_actions", "num_visits", "time_to_first_action", "timing_of_last_visit"}

csv.field_size_limit(10**9)


def load(name, cache):
    path = os.path.join(cache, name + ".csv")
    if not os.path.exists(path):
        urllib.request.urlretrieve(API.format(name), path)
    with open(path, encoding="utf-8") as f:
        return {r["table"]: r for r in csv.DictReader(f)}


def main():
    cache = sys.argv[1] if len(sys.argv) > 1 else "irw_meta_cache"
    out = sys.argv[2] if len(sys.argv) > 2 else "irw_candidates.csv"
    os.makedirs(cache, exist_ok=True)
    meta, bib, nmeta, nbib = (load(t, cache) for t in TABLES)

    def variables(row):
        return [v.strip() for v in (row.get("variables") or "").split("|") if v.strip()]

    n_rt = sum("rt" in variables(r) for r in meta.values())
    n_raw = sum(bool({"resp_raw", "raw_resp"} & set(variables(r))) for r in meta.values())
    print(f"core tables: {len(meta)}; with rt: {n_rt}; with raw responses: {n_raw}; nominal tables: {len(nmeta)}")

    rows = []
    for family, m, b in (("core", meta, bib), ("nominal", nmeta, nbib)):
        for table in sorted(set(m) | set(b)):
            desc = (b.get(table, {}).get("Description") or "").replace("\n", " ")
            v = variables(m.get(table, {}))
            why = []
            if table.endswith("_options"):
                why.append("option-level companion")
            hit = MR_WORDS.search(desc)
            if hit:
                why.append("description: " + hit.group(0).lower())
            if PROCESS_VARS & set(v):
                why.append("process variables")
            if not why:
                continue
            rows.append({
                "family": family,
                "table": table,
                "n_persons": m.get(table, {}).get("n_participants", ""),
                "n_items": m.get(table, {}).get("n_items", ""),
                "n_categories": m.get(table, {}).get("n_categories", ""),
                "has_rt": "rt" in v,
                "has_raw_resp": bool({"resp_raw", "raw_resp"} & set(v)),
                "why": "; ".join(why),
                "source_url": b.get(table, {}).get("URL__for_data_", ""),
                "description": desc[:300],
            })
    with open(out, "w", newline="", encoding="utf-8") as f:
        w = csv.DictWriter(f, fieldnames=list(rows[0]))
        w.writeheader()
        w.writerows(rows)
    print(f"{len(rows)} candidate tables written to {out}")


if __name__ == "__main__":
    main()
