#!/usr/bin/env sh

set -e 

npm run docs:build

git pull
git add -A
git commit -m 'Machine Learning overview'
git push -u origin main