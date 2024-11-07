#!/bin/bash

# Pull the latest changes from the main branch
echo "Pulling the latest changes from the main branch..."
git pull origin main

# Update patch version in package.json
echo "Updating patch version in package.json..."
npm version patch --no-git-tag-version

# Store the new version in a variable
VERSION=$(node -p "require('./package.json').version")
echo "New version: $VERSION"

# Run npm install
echo "Running npm install..."
if ! npm install; then
  echo "npm install failed"
  exit 1
fi

# Run npm rollup
echo "Running npm rollup..."
if ! npm run rollup; then
  echo "npm run rollup failed"
  exit 1
fi

# Add all changes to git
echo "Adding all changes to git..."
git add .

# Commit changes with version number in the message
echo "Committing changes with version $VERSION..."
git commit -m "Update to version $VERSION"

# Run npm publish
echo "Publishing package..."
if ! npm publish; then
  echo "npm publish"
  exit 1
fi

# Push changes to the main branch
echo "Pushing changes to main branch..."
git push origin main

echo "Done!"
