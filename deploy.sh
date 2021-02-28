#!/usr/bin/env sh

set -e 

npm run docs:build

git pull
git add -A
git commit -m 'attempting to deploy to vercel'
git push -u origin main