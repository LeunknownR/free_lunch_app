#! /bin/sh

NODE_MODULES_DIR="node_modules"

if [ ! -d "$NODE_MODULES_DIR" ] || [ -z "$(ls -A $NODE_MODULES_DIR)" ]; then
  npm install
  npm audit fix
fi

npm run dev