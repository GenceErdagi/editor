# Markdown Torture Test Document

> A deliberately feature-rich Markdown file for renderer testing.
> Includes headings, lists, tables, links, images, code, math, footnotes, task lists, blockquotes, HTML, details/summary, definition lists, callouts, and more.

---

## Table of Contents

1. [Introduction](#introduction)
2. [Text Formatting](#text-formatting)
3. [Lists](#lists)
4. [Blockquotes](#blockquotes)
5. [Code](#code)
6. [Tables](#tables)
7. [Links and References](#links-and-references)
8. [Images and Figures](#images-and-figures)
9. [Math](#math)
10. [Footnotes](#footnotes)
11. [HTML in Markdown](#html-in-markdown)
12. [Advanced/Extended Features](#advancedextended-features)
13. [Escaping and Edge Cases](#escaping-and-edge-cases)
14. [Large Mixed Example](#large-mixed-example)

---

## Introduction

Markdown is simple on purpose, but real-world renderers often support **extensions**.
This document intentionally combines *many* syntax forms to test parsing, styling, layout, and fallback behavior.

### Heading Levels

# H1 (inside body)

## H2

### H3

#### H4

##### H5

###### H6

---

## Text Formatting

Normal paragraph text with **bold**, *italic*, ***bold italic***, and ~~strikethrough~~.

You can also show `inline code`, <kbd>Ctrl</kbd> + <kbd>C</kbd>, and ==highlight== (if supported).

Superscript: 2^10^
Subscript: H~2~O

Unicode tests:

* Turkish: İstanbul, Çekmeköy, ğüşiöç
* Emoji: 😀 🚀 🧪 📚 ✅
* Symbols: © ™ ® § ¶ † ‡ • … — ± ≈ ∞

Horizontal rules:

---

---

---

Line break test (two spaces at end):
First line with hard break.
Second line.

Soft wrap test:
This is a long sentence that should wrap in most layouts but remain one paragraph semantically unless a hard line break is inserted.

---

## Lists

### Unordered Lists

* Item A
* Item B

  * Nested B.1
  * Nested B.2

    * Deep B.2.a
* Item C

- Alternate marker 1
- Alternate marker 2

* Another marker style
* Another item

### Ordered Lists

1. First
2. Second
3. Third

   1. Sub-first
   2. Sub-second
4. Fourth

### Mixed List

1. Step one

   * Note one
   * Note two
2. Step two

   1. Inner numbered item
   2. Inner numbered item

      * Bullet in numbered in bullet universe.
3. Step three

### Task Lists

* [x] Write parser
* [x] Render basic text
* [ ] Add table alignment
* [ ] Add footnote backlinks
* [ ] Fuzz test malformed input

  * [x] Seed corpus
  * [ ] Coverage report

---

## Blockquotes

> Simple quote.
>
> Multi-paragraph quote with **formatting**.
>
> * Lists inside quote
>
> * Another bullet
>
> > Nested quote level 2
> >
> > > Nested quote level 3

> “Programs must be written for people to read, and only incidentally for machines to execute.”
> — Harold Abelson

---

## Code

### Fenced Code Block (no language)

```
plain text block
special chars: <>&*()[]{}\
```

### Syntax Highlighting Examples

```python
from dataclasses import dataclass
from typing import Iterable

@dataclass
class User:
    id: int
    name: str
    active: bool = True

def active_names(users: Iterable[User]) -> list[str]:
    return [u.name for u in users if u.active]

if __name__ == "__main__":
    users = [User(1, "Ada"), User(2, "Linus", False), User(3, "Grace")]
    print(active_names(users))
```

```javascript
function debounce(fn, delay = 250) {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), delay);
  };
}
```

```bash
#!/usr/bin/env bash
set -euo pipefail
for f in *.md; do
  echo "checking $f"
done
```

```json
{
  "name": "markdown-test",
  "version": "1.0.0",
  "features": ["tables", "footnotes", "math", "task-lists"]
}
```

```yaml
title: Markdown Renderer Test
authors:
  - name: Example Author
    role: QA
flags:
  hard_mode: true
```

### Indented Code Block

```
This is indented code.
It should still render as preformatted text.
Tabs	and spaces	may mix.
```

---

## Tables

### Basic Table

| Feature    | Status | Notes                   |
| ---------- | :----: | ----------------------- |
| Headings   |    ✅   | All levels supported    |
| Lists      |    ✅   | Nested tested           |
| Tables     |    ✅   | Alignment tested        |
| Footnotes  |   ⚠️   | Extension dependent     |
| Definition |   ⚠️   | Not standard everywhere |

### Alignment Table

| Left Align | Center Align | Right Align |
| :--------- | :----------: | ----------: |
| alpha      |     beta     |           1 |
| gamma      |     delta    |        2000 |
| epsilon    |     zeta     |      300000 |

### Escaped Pipes in Table

| Raw   | Escaped  |
| ----- | -------- |
| a | b | `a \| b` |

---

## Links and References

### Inline Links

* Markdown Guide: [Markdown Guide](https://www.markdownguide.org)
* Example with title: [OpenAI](https://openai.com "OpenAI Homepage")
* Auto-link URL: [https://example.com](https://example.com)
* Auto-link email: [test@example.com](mailto:test@example.com)

### Reference Links

This uses a [reference-style link][md-guide] and [another one][spec].

[md-guide]: https://www.markdownguide.org "Markdown Guide"
[spec]: https://spec.commonmark.org "CommonMark Spec"

### Internal Anchor Links

Jump to [Math](#math) or [Escaping and Edge Cases](#escaping-and-edge-cases).

---

## Images and Figures

### Standard Image

![Placeholder image](https://picsum.photos/640/240 "Random placeholder")

### Image with Reference

![Reference image][img-ref]

[img-ref]: https://picsum.photos/seed/markdown/500/220 "Seeded image"

### Figure via HTML (for caption test)

<figure>
  <img src="https://picsum.photos/seed/caption/520/220" alt="Figure image" />
  <figcaption>Figure 1 — HTML figure/figcaption rendering test.</figcaption>
</figure>

---

## Math

> Math rendering depends on your engine (KaTeX/MathJax/etc.)

Inline math: ( e^{i\pi} + 1 = 0 )

Block math:

[
\int_{-\infty}^{\infty} e^{-x^2},dx = \sqrt{\pi}
]

[
\text{argmin}*{\theta} \sum*{i=1}^{n} \left(y_i - f_\theta(x_i)\right)^2
]

Matrix:

[
A =
\begin{bmatrix}
1 & 2 & 3 \
0 & 1 & 4 \
5 & 6 & 0
\end{bmatrix}
]

---

## Footnotes

Here is a statement with a footnote.[^1]
Here is another one with more detail.[^longnote]

[^1]: Short footnote content.

[^longnote]: This is a longer footnote that contains multiple sentences.
    It can also include code like `x = y + z`, and even a list:

    * item one
    * item two

---

## HTML in Markdown

<div style="padding:10px;border:1px solid #999;border-radius:8px;">
  <strong>HTML block test:</strong>  
  Some renderers sanitize styles/scripts.  
  <em>If sanitized, structure may remain while attributes are removed.</em>
</div>

<br />

<details>
  <summary>Click to expand (details/summary test)</summary>

Hidden content appears here.

* Works in many modern renderers
* Useful for collapsible sections

```text
You can include code blocks inside details.
```

</details>

---

## Advanced/Extended Features

### Definition List (extension-dependent)

Term 1
: Definition for term 1

Term 2
: First definition line
: Second definition line

### Abbreviation (extension-dependent)

*[HTML]: HyperText Markup Language
*[CSS]: Cascading Style Sheets

Using abbreviations: HTML and CSS are core web technologies.

### Callout-like Blocks (non-standard, often in docs engines)

> [!NOTE]
> This is a note callout syntax used by some renderers.

> [!TIP]
> Keep parser fallbacks graceful for unknown directives.

> [!WARNING]
> Unclosed fences and malformed lists are common in user input.

---

## Escaping and Edge Cases

Escaped punctuation:

*not italic*
_not italic_
`not code`
[not link]([https://example.com](https://example.com))

Literal backticks in inline code:

Use `` `code` `` to show backticks.

Unclosed emphasis edge case test:
This **text might remain open depending on parser behavior.

HTML entity tests:

© & <div>hello</div>

Very long word test (overflow/wrapping):
LooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooongWord

---

## Large Mixed Example

### Mini Article

**Title:** Building a Markdown Renderer Test Harness
**Author:** QA Bot
**Date:** 2026-02-14

> *Abstract:*
> We present a comprehensive Markdown sample that stresses parser correctness, renderer consistency, and extension compatibility.

#### Requirements

1. Parse CommonMark core.
2. Gracefully support GFM tables and task lists.
3. Fallback safely for unsupported extensions.
4. Keep performance stable on long documents.

#### Sample Data Table

| ID | Input Snippet     | Expected Behavior        | Priority |
| -: | ----------------- | ------------------------ | :------: |
|  1 | `# Heading`       | Render H1                |   High   |
|  2 | `- [x] Done`      | Render checked task      |  Medium  |
|  3 | `[^a]` + footnote | Link + note block        |  Medium  |
|  4 | `<details>`       | Collapsible (if allowed) |    Low   |

#### Pseudocode

```text
for each test_case in corpus:
    ast = parse(test_case.input)
    html = render(ast)
    assert html matches snapshot
```

#### Checklist

* [x] Core syntax coverage
* [x] Extension syntax coverage
* [x] Stress nesting depth
* [ ] Add random fuzz corpus
* [ ] Differential test vs reference parser

#### Final Notes

If your renderer passes this file with clean output and sane fallbacks, you’re in great shape.
If it fails, the failing section names should make debugging straightforward.

---

## Appendix A: Nested Madness

* Level 1

  * Level 2

    * Level 3

      * Level 4

        * Level 5

          1. Numbered at deep level
          2. Another

             * Bullet in deep numbered list
             * `inline code`
             * **bold text**

               > Quote inside deep list
               >
               > * Quoted list item
               > * Another item

---

## Appendix B: Renderer Compatibility Notes

| Feature          | CommonMark | GFM  | Many Static Site Generators |
| ---------------- | ---------- | ---- | --------------------------- |
| Tables           | ❌          | ✅    | ✅                           |
| Task lists       | ❌          | ✅    | ✅                           |
| Footnotes        | ❌          | ❌/✅* | ✅*                          |
| Math             | ❌          | ❌    | ✅*                          |
| Definition lists | ❌          | ❌    | ✅*                          |

* depends on plugin configuration.

---

End of test document.
