#! /bin/sh

NODE_MODULES_DIR="node_modules"

if [ "$APP_ENV" = "production" ]; then
  npm i
  npm audit fix
  npm run prod
else
  if [ ! -d "$NODE_MODULES_DIR" ] || [ -z "$(ls -A $NODE_MODULES_DIR)" ]; then
    npm i
    npm audit fix
  fi
  npm run dev
fi