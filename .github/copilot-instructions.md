<!-- Workspace Copilot instructions: concise, link-first guide for AI agents -->
# Copilot / Agent Instructions

Purpose
- Provide brief, workspace-specific guidance for Copilot-style agents to be immediately productive.

Repository context
- This is a small Node/Express exercise project (see [README.md](../README.md)).
- No build system is assumed; prefer `npm install` then `npm start` or `node server.js` if present.

Quick Workflow (follow these steps when acting as an agent)
1. Discover existing conventions: search for agent files and docs (copilot-instructions.md, AGENTS.md, README.md).
2. Explore code: identify entry point, routes, static assets, and package.json scripts.
3. Generate or update succinct files only — prefer links to existing docs ("Link, don't embed").
4. Iterate with the human: add examples, run tests or start the server if requested, ask clarifying questions.

Repository specifics
- Main task: implement a basic Express blog with a root route and a `/bacheca` JSON route returning posts.
- Keep static assets in `public/` or `assets/` and expose them with `express.static()`.

Example agent prompts
- "Add an Express route `/bacheca` that returns the posts array as JSON and serve images from `/public`." 
- "Create a minimal `server.js` that starts the server on port 3000 and exposes static assets." 
- "Add an array of five sample blog posts (title, content, image path, tags) and a `/bacheca` route that returns them." 

Link, don't embed
- Prefer referencing existing documents here rather than duplicating their content. When adding details, include brief links back to the files you changed.



If something is unclear, ask a concise question about expected behavior (e.g., routes, port, or sample content language).

---
Created by automation to bootstrap agent guidance. Edit as desired.
