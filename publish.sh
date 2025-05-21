#!/bin/bash

# Run bump.sh
echo "Bumping version..."
if ! ./bump.sh; then
  echo "Bump failed"
  exit 1
fi

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
