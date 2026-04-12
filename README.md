
# Interactive CV & Personal Website

This is my personal website and an experiment in making a CV more useful, explorable, and reflective of how product work actually gets evaluated.

Rather than relying on a static document, the site combines structured content (roles, case studies, and achievements) with a lightweight AI layer that allows visitors to ask questions and explore relevant experience dynamically.

## What this is

- A personal website and portfolio
- An interactive CV powered by a constrained AI interface
- A practical example of applying AI in a product context (not just as a feature, but as part of the experience)

## How it works

The AI CV is built on a simple retrieval + generation pattern:

1. Content is stored as structured markdown (roles, case studies, achievements)
2. When a question is asked, the server retrieves the most relevant content
3. A language model generates a response grounded in that content
4. The response is returned with a focus on clarity and relevance

The system is intentionally scoped — it only answers questions about my experience and does not behave as a general-purpose chatbot.

## Tech stack

- **Frontend / App:** Next.js (React)
- **Styling:** Tailwind CSS
- **Content:** Markdown files (case studies, roles, summaries)
- **AI Layer:** OpenAI API (server-side)
- **Development:** Cursor
- **Design:** Figma Make
- **Hosting:** Vercel

## Why this exists

Most CVs optimise for scanning, not understanding.

This project is an attempt to:
- make experience easier to explore
- surface relevant examples quickly
- demonstrate how AI can be used in a practical, product-oriented way

## Running locally

```bash
npm install
npm run dev
