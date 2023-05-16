FROM node:latest

WORKDIR /app/actor-sistem

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "start:dev"]