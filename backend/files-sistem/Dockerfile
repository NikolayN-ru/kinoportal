FROM node:latest

WORKDIR /app/files-sistem

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "start:dev"]