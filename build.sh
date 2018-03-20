#!/bin/bash
parcel build --no-minify ./src/client.js
for filename in `find ./src -name "*.html" -type f`; do
  echo $filename
  parcel build --no-minify $filename
done
