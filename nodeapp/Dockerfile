FROM node:21-alpine

WORKDIR /app

COPY nodeapp/package*.json ./
RUN npm install

COPY nodeapp/ ./

EXPOSE 3001

CMD ["node", "server.js"]