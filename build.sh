#!/bin/bash
rm -rf ./dist
for filename in `find ./src -name "*.html" -type f`; do
  echo $filename
  parcel build --public-url "https://etburke.github.io/react-trello-powerup/dist" --no-minify $filename
done
