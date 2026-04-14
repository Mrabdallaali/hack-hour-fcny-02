<!-- markdownlint-disable RuleID MD033 -->
# Hack Hour Release Cheat Sheet

## Purpose

Use this workflow to release the weekly Hack Hour challenges into the student-facing repo.

This repo is the only repo students should use.

---

## Important Rules

- Do NOT give students access to the master repo
- Do NOT copy solutions
- Do NOT push directly to `main`
- Always release through a branch + PR
- Only copy selected weekly challenges and matching test files

---

## Repo Setup

### Student-Facing Repo

`codesmith-prep/hack-hour-fcny-02`

### Master Source Repo

`CodesmithLLC/hack-hour-ts`

---

## One-Time Setup (Only if not already configured)

**Run this once in your terminal:**

```bash
git remote add masterrepo https://github.com/CodesmithLLC/hack-hour-ts.git

git fetch masterrepo
```

---

```md
## Verify
```

**Run this to confirm your setup:**

```bash
git remote -v
```

Expected remotes:

origin → Class repo

masterrepo → Master repo

Repo URLs:

<https://github.com/codesmith-prep/hack-hour-fcny-02.git>
<https://github.com/CodesmithLLC/hack-hour-ts.git>

---

```md
## Weekly Release Steps
```

### 1) Update Local Repo

**Run this before every release:**

```bash
git checkout main
git pull origin main
```

---

```md
### 2) Run the Release Script
```

**Run this to create the weekly release:**

```bash
./scripts/release-week.sh <week-number> <challenge1> <challenge2> ...
```

Example:
>./scripts/release-week.sh **<u>39 stack-queue balanced-parens >linked-list-remove reverse-linked-list kth-to-last-node</u>**

---

```md
### 3) Open the Pull Request
```

The script will print a GitHub link.

Create a PR:

- base: `main`
- compare: `week-XX`

```md
### 4) Review the PR
```

Confirm:

- only selected files were added
- only files in `challenges/` and `__tests__/`
- no `solutions/` files
- filenames are correct

```md
### 5) Merge the PR
```

```md
### 6) Clean Up After Merge
```

**Run this after the PR is merged:**

```bash
git checkout main
git pull origin main
git branch -D week-XX
git push origin --delete week-XX
```

**Replace XX with the correct week number.**

---

```md
## What the Script Does
```

The script:

- fetches latest from both repos
- checks out fresh `main`
- creates a new branch `week-XX`
- copies:
  - `challenges/<name>.ts`
  - `__tests__/<name>.test.ts`
- commits the files
- pushes the branch
- prints PR instructions

## Naming Rules

Use only the base challenge name.

Correct:

```bash
stack-queue
```

Incorrect:

```bash
stack-queue.ts
challenges/stack-queue.ts
```

---

```md
## Common Errors
```

### Missing Challenge File

>Cause:
>
>- incorrect filename
>
>Fix:
>
>- verify exact name in master repo
>
### Missing Test File

>Cause:
>
>- test file name mismatch
>
>Fix:
>
>- verify file in `__tests__/`
>
### Working Tree Not Clean

>Cause:
>
>- uncommitted changes
>
>Fix:
>
>```bash
>git status
>```
>
>Then commit, stash, or discard changes.

---

### Push to Main Rejected

>Cause:
>
>- branch protection
>
>Fix:
>
>- expected behavior
>- always use PR workflow

### No Changes Detected

>Cause:
>
>- challenge already exists in repo
>
>Fix:
>
>- confirm it hasn’t already been released

## Quick Friday Workflow

**Run this sequence:**

```bash
git checkout main
git pull origin main
./scripts/release-week.sh <week-number> <challenge1> <challenge2> ...
```

Then:

- open PR
- review
- merge
- delete branch

---

```md
## Internal Use Only
```

`scripts/release-week.sh` is for instructors and fellows only.

Students do not need to run this script.
