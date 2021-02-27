#!/usr/bin/env sh

set -e 

npm run docs:build

git pull
git add -A
git commit -m 'machine learning linear model update'
git push -u origin main