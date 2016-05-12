#!/bin/bash

jekyll build
rsync -av --delete --no-perms -I -O _site/ populate02:/var/www/gobierto.es/
