# Base

FROM node:18-alpine as base

WORKDIR /usr/app
COPY package*.json .
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh
RUN npm i

COPY . .
ENTRYPOINT ["/entrypoint.sh"]
CMD chmod +x ../share/docker/run.sh && ../share/docker/run.sh

# Development

FROM base as development

ENV APP_ENV="development"

# Production

FROM base as production-app

ENV APP_ENV="production"
RUN npm run prod

FROM nginx:1.25.4-alpine3.18 as production

COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY ./nginx.conf /etc/nginx/conf.d/default.template
COPY --from=production-app /usr/app/dist /usr/share/nginx/html
# Para reemplazar las variables de entorno referenciadas en el nginx.conf
CMD sh -c "envsubst \"`env | awk -F = '{printf \" \\\\$%s\", $1}'`\" < /etc/nginx/conf.d/default.template > /etc/nginx/conf.d/default.conf && echo 'Listen on port ${PORT}' && nginx -g 'daemon off;'"