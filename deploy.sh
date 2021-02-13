#!/usr/bin/env sh

set -e 

npm run docs:build

git pull
git add -A
git commit -m 'missing semester shell update'
git push -u origin main