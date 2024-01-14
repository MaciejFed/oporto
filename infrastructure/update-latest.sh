#!/bin/bash

echo "Fetching latest changes..."
git fetch --all

latest_branch=$(git for-each-ref --sort=-committerdate refs/remotes/ \
                --format='%(refname:short)' | head -n 1)

# Extract the branch name without remote part
branch_name=${latest_branch#*/}

echo "Latest branch name: [${branch_name}]"

git checkout "${branch_name}"

git pull

echo "$(date) Code update completed on branch: [${branch_name}]"
