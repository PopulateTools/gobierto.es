#!/bin/bash

rm -rf _site/
JEKYLL_ENV=production bundle exec jekyll build
rsync -av --delete --no-perms -I -O _site/ gobierto01:/var/www/gobierto.es/
rm -rf _site/
