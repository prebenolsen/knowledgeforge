# Content format

All content is bilingual. Every user-facing string is an object with `en` and `no`
keys. The import script accepts a JSON file that is an **array of categories**.

## Shape

```jsonc
[
  {
    "slug": "economics",                          // unique, lowercase, no spaces
    "name": { "en": "Economics", "no": "Økonomi" },
    "icon": "📈",                                  // any emoji
    "subcategories": [
      {
        "slug": "stocks-and-markets",
        "name": { "en": "Stocks and Markets", "no": "Aksjer og markeder" },
        "questions": [
          {
            "difficulty": "easy",                  // "easy" | "medium" | "hard"
            "question": {
              "en": "In what country is NASDAQ based?",
              "no": "I hvilket land ligger NASDAQ?"
            },
            "answers": [                            // exactly 4
              { "en": "United States", "no": "USA" },
              { "en": "United Kingdom", "no": "Storbritannia" },
              { "en": "Germany", "no": "Tyskland" },
              { "en": "Japan", "no": "Japan" }
            ],
            "correct": 0,                           // 0-based index into answers
            "explanation": {
              "en": "NASDAQ is headquartered in New York City, United States.",
              "no": "NASDAQ har hovedkontor i New York City, USA."
            },
            "tags": ["stock exchanges", "financial markets"]
          }
        ]
      }
    ]
  }
]
```

## Difficulty scale

| Level | Meaning |
|----------|---------|
| `easy`   | Basic recall and understanding |
| `medium` | Application |
| `hard`   | Connecting concepts / advanced reasoning |

## Importing

```bash
npm run import -- path/to/your-batch.json
```

- Categories and subcategories are matched by `slug` and upserted — safe to re-run.
- Questions are inserted. To avoid duplicates, import each batch once.
- `correct` must be an integer 0–3 matching the position in `answers`.
- If you omit the `no` translation on any field, the app falls back to `en`.

## Tips

- Keep `slug` stable once content exists — progress data references it.
- Mix difficulties within a subcategory so the placement test and adaptive mode
  have a full range to draw from.
- Tags are free-form and currently used for grouping/weak-topic labelling.
