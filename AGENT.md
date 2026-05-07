# Project Notes — tugas2_praktcc
> 24 notes | Updated: 4/29/2026

## Safety Rules

- **NEVER** run `git clean -fd` or `git reset --hard` without checking `git log` and verifying commits exist.
- **NEVER** delete untracked files or folders blindly. Always backup or stash before bulk edits.

## Quick Reference
- 24 warnings → see `.agent-mem/gotchas.md`
- 424 conventions → see `.agent-mem/patterns.md`
- Codebase map → see `.agent-mem/project-brief.md`
- Active work → see `.agent-mem/active-context.md`

## Read .agent-mem/gotchas.md before ANY changes

For full memory: `.agent-mem/`
For observation details: `.agent-mem/observations/`

## Available Tools (Use ON-DEMAND only — context in .agent-mem replaces startup calls)
- `sys_core_02(title, content, category)` — Save + auto-detect conflicts
- `sys_core_03(items[])` — Save multiple in 1 call
- `sys_core_01(q)` — Search memory when debugging
- `sys_core_05(query)` — Full-text search for details
- `sys_core_16()` — Check compiler errors after edits
- `sys_core_20(path, start, end)` — Read file sections
- `sys_core_28(pattern, dir)` — Find symbols without loading full files

> Do NOT call sys_core_14() or sys_core_08() at startup — read the .agent-mem files above instead.

---
*Auto-generated*

# Project Memory — tugas2_praktcc
> 26 notes | Score threshold: >40

## Safety — Never Run Destructive Commands

> Dangerous commands are actively monitored.
> Critical/high risk commands trigger error notifications in real-time.

- **NEVER** run `rm -rf`, `del /s`, `rmdir`, `format`, or any command that deletes files/directories without EXPLICIT user approval.
- **NEVER** run `DROP TABLE`, `DELETE FROM`, `TRUNCATE`, or any destructive database operation.
- **NEVER** run `git push --force`, `git reset --hard`, or any command that rewrites history.
- **NEVER** run `npm publish`, `docker rm`, `terraform destroy`, or any irreversible deployment/infrastructure command.
- **NEVER** pipe remote scripts to shell (`curl | bash`, `wget | sh`).
- **ALWAYS** ask the user before running commands that modify system state, install packages, or make network requests.
- When in doubt, **show the command first** and wait for approval.

**Stack:** JavaScript · Express

## 📝 NOTE: 1 uncommitted file(s) in working tree.\n\n## Active: `tutorial`

- **Replaced auth Step — hardens HTTP security headers**

## Project Standards

- convention in .gitignore
- convention in .gitignore
- [CLAUDE.md] NEVER use TailwindCSS. Only use vanilla CSS.
- [.windsurfrules] NEVER use TailwindCSS. Only use vanilla CSS.
- convention in .gitignore
- convention in .gitignore
- [CLAUDE.md] Always add empty states ("No items yet" with call-to-action)
- [CLAUDE.md] Disable submit button during form submission — prevent double-submit

## Verified Best Practices

- Agent generates new migration for every change (squash related changes)
- Agent installs packages without checking if already installed

### 📚 Core Framework Rules: [czlonkowski/n8n-expression-syntax]
# n8n Expression Syntax

Expert guide for writing correct n8n expressions in workflows.

---

## Expression Format

All dynamic content in n8n uses **double curly braces**:



**Examples**:


---

## Core Variables

### $json - Current Node Output

Access data from the current node:



### $node - Reference Other Nodes

Access data from any previous node:



**Important**:
- Node names **must** be in quotes
- Node names are **case-sensitive**
- Must match exact node name from workflow

### $now - Current Timestamp

Access current date/time:



### $env - Environment Variables

Access environment variables:



---

## 🚨 CRITICAL: Webhook Data Structure

**Most Common Mistake**: Webhook data is **NOT** at the root!

### Webhook Node Output Structure



### Correct Webhook Data Access



**Why**: Webhook node wraps incoming data under `.body` property to preserve headers, params, and query parameters.

---

## Common Patterns

### Access Nested Fields



### Reference Other Nodes



### Combine Variables



---

## When NOT to Use Expressions

### ❌ Code Nodes

Code nodes use **direct JavaScript access**, NOT expressions!



### ❌ Webhook Paths



### ❌ Credential Fields



---

## V...
(truncated)


### 📚 Core Framework Rules: [czlonkowski/n8n-code-javascript]
# JavaScript Code Node

Expert guidance for writing JavaScript code in n8n Code nodes.

---

## Quick Start



### Essential Rules

1. **Choose "Run Once for All Items" mode** (recommended for most use cases)
2. **Access data**: `$input.all()`, `$input.first()`, or `$input.item`
3. **CRITICAL**: Must return `[{json: {...}}]` format
4. **CRITICAL**: Webhook data is under `$json.body` (not `$json` directly)
5. **Built-ins available**: $helpers.httpRequest(), DateTime (Luxon), $jmespath()

---

## Mode Selection Guide

The Code node offers two execution modes. Choose based on your use case:

### Run Once for All Items (Recommended - Default)

**Use this mode for:** 95% of use cases

- **How it works**: Code executes **once** regardless of input count
- **Data access**: `$input.all()` or `items` array
- **Best for**: Aggregation, filtering, batch processing, transformations, API calls with all data
- **Performance**: Faster for multiple items (single execution)



**When to use:**
- ✅ Comparing items across the dataset
- ✅ Calculating totals, averages, or statistics
- ✅ Sorting or ranking items
- ✅ Deduplication
- ✅ Building aggregated reports
- ✅ Combining data from multiple items

##...
(truncated)

- [JavaScript/TypeScript] Use === not == (strict equality prevents type coercion bugs)
- [JavaScript/TypeScript] Use const by default, let when reassignment needed, never var
- [Express.js] Use helmet for security headers
- [Express.js] Validate request body with a schema validator (Joi, Zod)
- [Docker] Use multi-stage builds to reduce image size

## Available Tools (ON-DEMAND only)
- `sys_core_01(q)` — Deep search when stuck
- `sys_core_05(query)` — Full-text lookup
> Context above IS your context. Do NOT call sys_core_14() at startup.
