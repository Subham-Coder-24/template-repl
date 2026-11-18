# template-repl

Starter projects for the CodeSpace online IDE. When a user creates a project, the server copies the
folder of the chosen stack from this repo into that user's workspace.

```
react/    React + Vite
python/   Python 3
node/     Node.js
html/     Static HTML/CSS/JS
templates.json
```

## Adding a new stack

1. Create a folder, e.g. `java/`, with the default files for a new project.
2. Add an entry to `templates.json` using the **folder name as the key**:

```json
"java": {
  "label": "Java",
  "description": "Java console app",
  "entry": "Main.java",
  "run": "javac Main.java; java Main"
}
```

3. Commit and push to `main`. The server picks it up the next time a project is created. No server change needed.

### `templates.json` fields

| Field | Meaning |
| --- | --- |
| `label`, `description` | Shown on the "Create a project" screen |
| `entry` | File opened in the editor when the workspace loads |
| `run` | Command the **Run** button types into the terminal. Omit it if there is nothing to run |
| `preview` | `"port"` shows an iframe of the dev server on the project's port, `"static"` serves the files directly. Omit for no preview |

Placeholders usable in `run`: `{{PORT}}` is the project's preview port, `{{PYTHON}}` is the server's Python command.
Use `;` (not `&&`) to chain commands so it also works in Windows PowerShell.
