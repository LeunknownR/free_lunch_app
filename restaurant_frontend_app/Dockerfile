FROM node:alpine

WORKDIR /app

COPY package*.json .
COPY entrypoint.sh /entrypoint.sh

RUN chmod +x /entrypoint.sh

RUN npm i

COPY . .

RUN npm run build
ENTRYPOINT ["/entrypoint.sh"]

EXPOSE 3000

CMD npm run dev