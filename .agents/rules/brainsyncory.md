

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
