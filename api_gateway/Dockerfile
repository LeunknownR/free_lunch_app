# Base

FROM node:18-alpine as base

WORKDIR /usr/app
COPY package*.json ./
RUN npm i
COPY . .

# Development

FROM base as development

CMD chmod +x ../share/docker/install.sh && ../share/docker/install.sh

# Production

FROM base as production

ENV NODE_ENV="production"

CMD npm run prod