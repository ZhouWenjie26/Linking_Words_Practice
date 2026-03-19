# Linking Words Practice

An interactive single-page web app for learning and practicing English linking words (conjunctive adverbs, transition phrases, and conjunctions). Built for academic writing learners who want to master cohesive devices.

## Features

### Flashcards
- Swipe through 56 linking expressions with tap-to-reveal definitions
- Each card shows meaning, sentence position, register (Academic / Spoken & Daily), and example sentences
- Filter by category or study all at once

### Quiz — Fill in the Blank
- 15-question single-choice quiz generated from real sentence contexts
- Smart distractor selection: synonyms and near-equivalents (e.g. *However* / *Nevertheless* / *Nonetheless*) are automatically excluded from wrong-answer options, ensuring every question has exactly one unambiguous correct answer
- Instant feedback with usage notes and example sentences

### Quiz — Sentence Position
- Judge whether a linking word is placed correctly in 5 different sentences
- Covers beginning, mid-sentence, and end positions with proper punctuation
- Helps build intuition for natural word order

### Browse Table
- Searchable, sortable reference table of all 56 expressions
- Columns: Category, Register, Expression, Position, Usage Note
- Quick lookup while writing essays

### Position Guide
- Visual guide explaining where linking words can appear in a sentence
- Covers 9 position patterns (sentence-initial, mid-clause, between clauses, etc.)
- Punctuation rules for each position

## Word Categories

| Category | Examples |
|----------|----------|
| Addition | Furthermore, Moreover, In addition, Also, Besides |
| Contrast | However, Nevertheless, On the other hand, Yet |
| Cause & Effect | Therefore, Thus, Consequently, As a result |
| Example | For example, For instance, Specifically, Notably |
| Emphasis | Indeed, In fact, Above all, Most importantly |
| Sequence | First / Second / Third, Meanwhile, Subsequently |
| Conclusion | In conclusion, In summary, To sum up, Overall |
| Condition | Otherwise, In that case, If so |

## Tech Stack

- **Pure HTML + CSS + JavaScript** — no frameworks, no build step
- `index.html` — UI, styles, and application logic
- `data.js` — structured database of 56 linking words with contexts, position quizzes, and alternative mappings
- Deployable on GitHub Pages as a static site

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/ZhouWenjie26/Linking-Words-Practice.git
   ```
2. Open `index.html` in a browser, or serve with any static file server.

## Live Demo

Deployed via GitHub Pages: [https://zhouwenjie26.github.io/Linking-Words-Practice/](https://zhouwenjie26.github.io/Linking-Words-Practice/)

## License

MIT
