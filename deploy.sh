#!/usr/bin/env sh

set -e 

npm run docs:build

git pull
git add -A
git commit -m 'numpy update'
git push -u origin main