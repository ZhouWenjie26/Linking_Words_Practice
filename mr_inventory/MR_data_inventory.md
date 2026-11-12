# MR 题数据与过程数据盘点：核实结果

日期：2026-11-12。对应交接文档第 6 节的任务 1 至 4。
标注"已核实"的内容来自实际读取的页面、元数据或原始文件；"未核实"的内容没有读到一手材料。

## 结论

1. **IRW 里有现成可用的认知类 MR 数据**，且原始来源保留选项层面作答和逐题毫秒计时：MGKT（N = 19,218，32 题，每题 10 选 5）和 FSIQ（N = 3,194，19 题，每题 8 个选项、3 至 5 个正确）。两者公开、CC BY 4.0，不需要申请。
2. 这两份数据**没有点击序列和修改次数**，过程信息只到"每题总用时"这一层，和自有 MRM 数据的粒度大致相同。
3. IRW 的 PISA 表带过程变量，但作答已计分，选项层面信息要回到 OECD 原始文件。
4. NAEP 2017 仍是唯一确认带逐条点击日志的来源。申请走 SAP Portal，**PPO 必须是博士后及以上**，学生不能自己当 PPO。
5. 文献检索没有找到直接研究"MR 题加过程数据"的实证论文，这一块看起来是空白（检索范围有限，见第 3 节）。

## 1. 任务 1：IRW 筛查（已核实）

### 做法

- IRW 网站已迁到 itemresponsewarehouse.org。元数据在 Redivis 的 `datapages.irw_meta` 数据集里，**公开 REST API 不需要账号或 token** 就能读表。因此没有用 R 包 `irw`。
- 可复现脚本：`irw_screen.py`（只用 Python 标准库），输出 `irw_candidates.csv`（34 张表）。
- IRW 的 item format 标签只有 5 类（Likert/selected response、Mixed、Constructed Response、Slider、NA），**无法用标签找 MR 题**。实际靠表名和描述的关键词，再回原始文件核对。

### 总体数字

| 项目 | 数量 |
|---|---|
| core 表 | 7,740 |
| 带 `rt` 的表 | 169 |
| 带原始作答（`resp_raw` 或 `raw_resp`）的表 | 93 |
| 同时带 `rt` 和原始作答 | 13 |
| nominal 表（`text` 列存原始选项） | 140 |

数据标准要点：`resp` 必须是数值；`resp_raw` 存计分前的作答；`rt` 单位为秒；`item_family` 标记可能违反局部独立的题组。IRW 对 MR 题的做法是另建一张 `_options` 表，每个选项一行 0/1，`item_family` 为题号。

### A 类：认知 MR，选项层面作答加逐题用时

| 数据 | IRW 表 | N | 题目 | 作答形式 | 时间 |
|---|---|---|---|---|---|
| MGKT（Multifactor General Knowledge Test） | `mgkt`（题分和 `rt`）、`mgkt_options`（320 个选项 0/1） | 19,218 | 32 题，10 个选项，5 个正确 | 告知有 5 个正确，"会多少选多少，不要猜" | 每题毫秒 |
| FSIQ 词汇 | `fullscaleiq_vocab`、`fullscaleiq_vocab_options` | 3,194 | 7 题，8 个选项，3 至 5 个正确 | 选对加 1 分，选错减 1 分 | 每题毫秒 |
| FSIQ 心理旋转 | `fullscaleiq_mentalrotation`、`..._options` | 3,194 | 6 题，同上 | 同上 | 每题毫秒 |
| FSIQ 短时记忆 | `fullscaleiq_memory`、`..._options` | 3,194 | 6 题，同上 | 同上 | 每题毫秒 |

来源均为 openpsychometrics.org/_rawdata/（`MGKT_data.zip`、`FSIQ_0.1_data.zip`）。下载并读了 codebook 和数据：

- MGKT 每题四个字段：`QxS`（选对数减选错数）、`QxA`（所选选项，如 `A0A2A1`）、`QxE`（该题用时，毫秒）、`QxI`（该题在测验中的呈现位置，题目顺序随机）。另有年龄、性别、母语、国家、整卷用时。
- MGKT 选项个数分布（614,976 个人题组合）：选 0 个 2.9%，选 1 至 4 个 54.0%，恰好选 5 个 41.8%，多于 5 个 1.4%。少选远多于多选。每题用时中位数 15.2 秒。
- FSIQ 字段同构（`VQ1s`、`VQ1a`、`VQ1e`）。未给出正确个数，多选和少选都常见，更接近典型 SATA。
- **`A` 字段里的选项顺序不是点击顺序。** FSIQ 压缩包附带的 demo 源码显示，选项随机排列，提交时按屏幕位置依次收集已勾选项。所以该顺序是"被选中选项的呈现顺序"。MGKT 没有附源码，90% 的多选作答不按选项编号排列，推测机制相同，**未核实**。
- 这两份数据没有：点击时间戳、勾选后取消的记录、选项间间隔、回访次数。

注意 IRW 的 `mgkt` 表 `resp` 是净得分（-4 至 5），`rt` 已换算成秒；要选项层面作答需用 `mgkt_options` 或直接用原始 zip。原始 zip 更完整（含题目位置）。

### B 类：有选项层面作答，但过程信息弱或题型不典型

| 数据 | 说明 |
|---|---|
| VIQT（`vocabulary_iq`、`vocabulary_iq_nom`） | N = 12,173，45 题，5 个词里选 2 个同义词。固定选 2，属 select-N。原始文件有 `E1` 至 `E45`，数值像毫秒用时，但 codebook 没有说明（**未核实**），IRW 表里没有 `rt`。 |
| `ding_2020_covid_knowledge` | N = 1,461，COVID 知识题，tick-all-that-apply，每个选项一行，带 `resp_raw`。无 `rt`。 |
| `enke_2023_wason` | Wason 选择任务本质是 4 选若干，带 `rt`，但 IRW 只有对错计分，原始选择需回溯。未核实。 |

### C 类：问卷里的 check-all-that-apply（非认知，无 `rt`）

`condon_2025_caq`（N = 5,650，81 项）、`duque_2017_flu_*`（N = 1,164，4 张表）、`hakkarainen_2021_use_types`、`uffler_2017_seat_reasons`、`naja_2024_challenges`、`voropaeva_2026_health_media_nom` 等。均为每选项 0/1，没有正确答案，可用于研究选择倾向，不适合能力模型。
`irw_candidates.csv` 里 8 张 `xu_2026_gai_*` 表是关键词误中的可能性大（描述是 Likert 量表），使用前需人工确认。

### D 类：带过程变量但已计分

`pisa2015_*`、`pisa2018_*`、`pisa2022_*` 共 10 张表，含 `rt`、`num_actions`、`num_visits`、`time_to_first_action`（2015 为 `timing_of_last_visit`，2022 另有 `num_short_visits`）。`resp` 只有 3 个取值，没有原始作答。要看 complex MC 的逐行选择，仍需 OECD 原始认知文件。

## 2. 任务 2：NAEP restricted-use license

### 流程（已核实，来源为 IES 和 NCES 页面）

1. 新申请自 2022-12-08 起统一走 **SAP Portal**（sap.nsf.gov）。旧的 NCES 在线系统只用于修改已有 license。
2. 步骤：在 SAP 目录里找到数据，提交申请，NCES 审核并在 SAP 里通知结果，批准后在 SAP 之外完成数据安全手续。
3. 只授予美国境内的机构，个人须通过机构申请，数据只能在美国境内访问。IES 页面称通过 NCES 的 secure virtual data enclave 访问。
4. 需要指定三个角色：
   - **PPO**（Principal Project Officer）：学术机构须为博士后及以上，访问学者不行。**博士生不能当 PPO**，需导师或其他教师出面。
   - **SO**（Senior Official）：有权代表学校签合同的人，通常在 sponsored projects office。PPO 不能兼任。
   - **SSO**（Systems Security Officer）：全职员工，学生不能担任，PPO 可兼任。
5. 每个 license 最多 7 名使用者（含 PPO）。
6. 文件：签署的 License Document、经公证的 Affidavit of Nondisclosure、Security Plan。申请前须读 Restricted-Use Data Procedures Manual。
7. 联系邮箱：IESData.Security@ed.gov。

NCES 旧页面仍写"先提交 Formal Request，再邮寄三份文件"，和 IES 页面的 SAP 流程并存。以 SAP 为准，细节建议邮件确认。

### 2017 数学过程数据的内容（已核实，来源为 nationsreportcard.gov/process_data）

| | 4 年级 | 8 年级 |
|---|---|---|
| 公开的 block | MA（14 题中公开 13 题）、MI（20 题中公开 16 题） | MC（15 题全部公开） |
| 学生数 | MA 约 29,100，MI 约 30,300 | MC 约 28,200 |
| form 层面 | MI 加 MA，约 2,900 人 | MI 加 MC，约 2,800 人 |
| 预先算好的过程变量 | 无，需自己从日志提取 | 有 |

**更正交接文档**："两个 block 共 29 题"是 4 年级（13 + 16），不是 8 年级。8 年级是一个 block、15 题。

日志变量：`PSEUDO`、`BLOCKCODE`、`ACCESSIONNUMBER`、`ITEMTYPECODE`、`OBSERVABLETYPE`（动作类型）、`CUMULATIVETIME`（block 内累计秒数）、`EXTENDEDINFO`。配套文件含原始作答和计分作答。这一结构可以还原点击顺序、修改次数和选项间间隔。

### 未核实

- **Berkeley 是否已有 NAEP license**：没有公开的持证机构名单，网上查不到。需要问导师、BEAR Center 或学校的 sponsored projects office，也可以直接邮件问 IES。
- **公开 block 里有几道 Multiple-Selection 题**：NCES 页面没写。Jiang et al. (2021) 应该有题型表，但全文没取到（见第 3 节）。这决定 NAEP 值不值得申请，建议先确认。

## 3. 任务 3：文献

### 读到全文的

Betts, Muntean, Kim & Kao (2021). Evaluating Different Scoring Methods for Multiple Response Items Providing Partial Credit. *Educational and Psychological Measurement*, 82(1), 151-176. DOI: 10.1177/0013164421994636（PMC8725057，读了方法部分）。

- 数据：2,243 道 MR 题，5 个选项（1,982 题）或 6 个选项（261 题），1 至 5 个正确答案，SATA 指导语，放在一项运营考试的预测试题池里随机投放，每题平均约 888 份作答。作者单位为 NCSBN。
- 用到了每题作答时间，用来比较不同计分法的"单位时间信息量"。
- 文中没有数据公开声明。这类数据需要合作才能拿到，和交接文档的判断一致。
- 参考文献里有一条线索：Muntean, Betts, Kao & Woo (2018), "A hierarchical framework for response times and signal detection theory"，NCME 年会报告。从标题看是 MR 题加反应时的联合建模，没有 DOI，内容未读。

### 检索情况

跑了 9 组检索（MR 题与 process data、log data、response time、answer change、eye tracking、NAEP、PISA/PIAAC、NCLEX 的组合）。**没有找到专门分析 MR 题选项层面过程数据的实证研究**。搜到的相邻工作都是单选题或建构反应题的作答修改、拖拽题的策略、题型间的用时比较。这只是搜索引擎层面的结论，没有查 ERIC、PsycINFO 或 Google Scholar 引文链。

另外发现 CRAN 包 `eyeprocess`（0.12.1，2026-10-22）带一篇 vignette "Multiple-Response Items, Revisiting, and Local Dependence"，主题和本项目高度重合，vignette 本身没读到。

### 拿不到全文的论文（待加入 Zotero）

以下只有书目信息，没有读内容，不对其结论做任何概括。

1. Using process data to understand problem-solving strategies and processes for drag-and-drop items in a large-scale mathematics assessment. Jiang et al. (2021)（标题和作者据记忆，以 DOI 导入结果为准）. *Large-scale Assessments in Education*, 9. DOI: 10.1186/s40536-021-00095-4。Springer 页面有反爬验证，PMC 未收录。
2. 交接文档列的过程数据综述 (2024). *Large-scale Assessments in Education*, 12. DOI: 10.1186/s40536-024-00202-1。同上。标题和作者未能从页面确认。
3. Analyzing Response Change in NAEP Mathematics ...（标题不全）. Ni, Abeysinghe, & Hicks. *International Electronic Journal of Elementary Education*。无 DOI，URL: https://iejee.com/index.php/IEJEE/article/download/2395/704/10271 。站点不在可访问范围。
4. ETS 研究报告 (2022)，关于 PIAAC 的 selected-response 题型变体。标题和作者未确认。URL: https://ets.org/research/policy_research_reports/publications/report/2022/kdki.html 。
5. The impact of technology-enhanced items on test-taker disengagement. NWEA research brief (2019)。URL: https://www.nwea.org/uploads/2022/10/researchbrief-the-impact-of-technology-enhanced-items-on-test-taker-disengagement-2019.pdf 。
6. *Education Sciences*, 12(2), 104 (2022)，题目和主题均未确认，检索时作为相关条目出现。URL: https://mdpi.com/2227-7102/12/2/104 。

可批量导入的 DOI：

```
10.1186/s40536-021-00095-4
10.1186/s40536-024-00202-1
```

## 4. 任务 4：自有 MRM 数据

没有做。数据不在这个仓库里；在 Google Drive 里按 "MRM-LD"、"MRM"、"multiple response model" 搜了一次，没有找到明显的数据文件。需要提供位置。

## 5. 更新后的数据源排序

| 优先级 | 数据源 | 选项层面作答 | 过程数据 | 获取 |
|---|---|---|---|---|
| 1 | 自有 MRM 数据 | 有 | 反应时 | 已有，结构待整理 |
| 2 | MGKT（Open Psychometrics，IRW 收录） | 有，10 选 5 | 每题用时、题目位置 | 公开，已下载核对 |
| 3 | FSIQ（同上） | 有，8 选 3 至 5，三个分测验 | 每题用时 | 公开，已下载核对 |
| 4 | NAEP 2017 数学 | 有（原始作答） | 逐条点击日志 | SAP 申请，需教师做 PPO；MS 题数量未核实 |
| 5 | PISA（IRW 或 OECD） | IRW 无，OECD 原始文件有 | 用时、动作次数、访问次数、首次动作时间 | 公开 |
| 6 | VIQT | 有，固定选 2 | 可能有每题用时（未核实） | 公开 |
| 7 | NCLEX 类执照考试 | 有 | 有每题用时 | 不公开 |

对照交接文档第 4 节的过程变量：MGKT 和 FSIQ 能提供"题目总反应时"和"最终选中个数"，另有题目呈现位置；其余五项（首次点击潜伏期、点击顺序、修改次数、选项间间隔、回访次数）只有 NAEP 能提供，PISA 能提供首次动作时间、动作次数和访问次数但没有顺序。

## 6. 建议的下一步

1. 用 MGKT 和 FSIQ 做外部验证数据，替代原计划里"先等 NAEP"的安排。FSIQ 没告知正确个数，更适合看多选和少选倾向。
2. 申请 NAEP 之前先确认公开 block 里 MS 题的数量，并和导师确认谁做 PPO。
3. 把第 3 节的论文加进 Zotero，之后再读全文补文献。
4. 提供自有 MRM 数据的位置，完成任务 4。

## 来源

- IRW 数据标准：https://itemresponsewarehouse.org/standard.html
- IRW nominal 标准：https://itemresponsewarehouse.org/nominal_standard.html
- IRW 元数据说明：https://itemresponsewarehouse.org/metadata.html
- IRW 元数据集（Redivis 公开 API）：https://redivis.com/api/v1/datasets/datapages.irw_meta/tables
- Open Psychometrics 原始数据：https://openpsychometrics.org/_rawdata/
- NAEP 过程数据：https://www.nationsreportcard.gov/process_data/
- IES restricted-use 数据：https://ies.ed.gov/about/restricted-use-data
- NCES license 说明：https://nces.ed.gov/statprog/instruct.asp ，https://nces.ed.gov/statprog/instruct_apply.asp?type=rl
- Betts et al. (2021)：https://pmc.ncbi.nlm.nih.gov/articles/PMC8725057/
- CRAN `eyeprocess`：https://cran.r-project.org/web/packages/eyeprocess/index.html
- CRAN `pisaRT`：https://cran.r-project.org/web/packages/pisaRT/index.html
