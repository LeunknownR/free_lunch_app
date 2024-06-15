FROM node:18-alpine

WORKDIR /usr/app

COPY package*.json ./

RUN npm i

COPY . .

EXPOSE ${PORT}

CMD ../share/docker/install.sh