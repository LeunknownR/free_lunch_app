FROM node:alpine

WORKDIR /usr/app

COPY package*.json .

COPY entrypoint.sh /entrypoint.sh

RUN chmod +x /entrypoint.sh

RUN npm i

COPY . .

ENTRYPOINT ["/entrypoint.sh"]

CMD chmod +x ../share/docker/install.sh && ../share/docker/install.sh