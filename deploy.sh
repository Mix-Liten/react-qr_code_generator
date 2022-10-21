#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

timestamp=$(date +"%Y-%m-%d_%T")
message='deploy_'
message+=${timestamp}

git init
git checkout -B main
git add -A
git commit -m $message

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:mix-liten/react-qr_code_generator.git main:gh-pages
