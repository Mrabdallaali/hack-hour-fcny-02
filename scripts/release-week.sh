# INTERNAL USE ONLY
# This script is used by instructors/fellows to release weekly challenges.
# Students do NOT need to run this.

#!/bin/bash

set -e

# Usage:
# ./scripts/release-week.sh <week-number> <challenge1> <challenge2> ...

if [ "$#" -lt 2 ]; then
  echo "Usage: $0 <week-number> <challenge1> <challenge2> ..."
  exit 1
fi

WEEK_NUM=$1
shift
CHALLENGES=("$@")

MASTER_REMOTE="masterrepo"
MASTER_BRANCH="main"
CLASS_BRANCH="main"
NEW_BRANCH="week-${WEEK_NUM}"

CHALLENGE_DIR="challenges"
TEST_DIR="__tests__"

echo "----------------------------------------"
echo "Releasing Hack Hour Week ${WEEK_NUM}"
echo "Branch: ${NEW_BRANCH}"
echo "Challenges: ${CHALLENGES[*]}"
echo "----------------------------------------"

git rev-parse --is-inside-work-tree >/dev/null 2>&1 || {
  echo "Error: Not inside a git repository."
  exit 1
}

echo "Fetching latest from origin and ${MASTER_REMOTE}..."
git fetch origin
git fetch "${MASTER_REMOTE}"

if [ -n "$(git status --porcelain)" ]; then
  echo "Error: Working tree is not clean. Commit or stash changes first."
  exit 1
fi

echo "Checking out ${CLASS_BRANCH}..."
git checkout "${CLASS_BRANCH}"
git pull origin "${CLASS_BRANCH}"

if git show-ref --verify --quiet "refs/heads/${NEW_BRANCH}"; then
  echo "Local branch ${NEW_BRANCH} already exists. Deleting it first..."
  git branch -D "${NEW_BRANCH}"
fi

echo "Creating branch ${NEW_BRANCH}..."
git checkout -b "${NEW_BRANCH}"

for challenge in "${CHALLENGES[@]}"; do
  SRC_CHALLENGE="${MASTER_REMOTE}/${MASTER_BRANCH}:${CHALLENGE_DIR}/${challenge}.ts"
  SRC_TEST="${MASTER_REMOTE}/${MASTER_BRANCH}:${TEST_DIR}/${challenge}.test.ts"

  echo "Processing ${challenge}..."

  if ! git cat-file -e "${SRC_CHALLENGE}" 2>/dev/null; then
    echo "Error: Missing challenge file in master repo: ${CHALLENGE_DIR}/${challenge}.ts"
    exit 1
  fi

  if ! git cat-file -e "${SRC_TEST}" 2>/dev/null; then
    echo "Error: Missing test file in master repo: ${TEST_DIR}/${challenge}.test.ts"
    exit 1
  fi

  git show "${SRC_CHALLENGE}" > "${CHALLENGE_DIR}/${challenge}.ts"
  git show "${SRC_TEST}" > "${TEST_DIR}/${challenge}.test.ts"

  echo "Copied:"
  echo "  - ${CHALLENGE_DIR}/${challenge}.ts"
  echo "  - ${TEST_DIR}/${challenge}.test.ts"
done

git add "${CHALLENGE_DIR}" "${TEST_DIR}"

if git diff --cached --quiet; then
  echo "No changes detected. Nothing to commit."
  exit 1
fi

git commit -m "Release Hack Hour Week ${WEEK_NUM}"
git push -u origin "${NEW_BRANCH}"

echo ""
echo "✅ Week ${WEEK_NUM} branch pushed successfully."
echo ""
echo "Next steps:"
echo "1. Open GitHub"
echo "2. Create PR: ${NEW_BRANCH} -> ${CLASS_BRANCH}"
echo "3. Review changed files"
echo "4. Merge PR after confirmation"