cp -r ./public ./dist
rm ./dist/public/index.html
cp -r ./dist/public/. ./dist
rm -r ./dist/public
