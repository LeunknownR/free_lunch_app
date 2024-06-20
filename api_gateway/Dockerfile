# Base

FROM node:18-alpine as base

WORKDIR /usr/app
COPY package*.json ./
RUN npm i
COPY . .
CMD chmod +x ../share/docker/run.sh && ../share/docker/run.sh

# Development

FROM base as development

ENV APP_ENV="development"

# Production

FROM base as production

ENV APP_ENV="production"