FROM node:20-bullseye
WORKDIR /app

RUN apt-get update && apt-get install -y openssl libssl1.1
COPY package*.json ./
COPY prisma ./prisma/
RUN npm install
COPY . .

RUN npx prisma generate

EXPOSE 8000
CMD ["npm", "run", "dev"]