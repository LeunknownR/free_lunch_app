#! /bin/sh

NODE_MODULES_DIR="node_modules"
PACKAGE_JSON="package.json"

if [ ! -d "$NODE_MODULES_DIR" ] || [ -z "$(ls -A $NODE_MODULES_DIR)" ] || [ ! -f "$PACKAGE_JSON" ]; then
  npm install
  npm audit fix
fi

npm start