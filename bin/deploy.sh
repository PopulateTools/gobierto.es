#!/bin/bash

rm -rf _site/
JEKYLL_ENV=production jekyll build
rsync -av --delete --no-perms -I -O _site/ populate02:/var/www/gobierto.es/
rm -rf _site/
