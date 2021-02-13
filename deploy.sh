#!/usr/bin/env sh

set -e 

npm run docs:build

git pull
git add -A
git commit -m 'fixed link error'
git push -u origin main