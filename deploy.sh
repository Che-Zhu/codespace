#!/usr/bin/env sh

set -e 

npm run docs:build

git pull
git add -A
git commit -m 'missing_semester shell update'
git push -u origin main