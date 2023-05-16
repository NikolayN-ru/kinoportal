FROM node:latest

WORKDIR /app/movie

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "start:dev"]