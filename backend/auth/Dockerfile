FROM node:latest

WORKDIR /app/auth

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "start:dev"]