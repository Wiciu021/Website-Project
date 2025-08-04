FROM node:20

WORKDIR /app

COPY ./package*.json ./
RUN npm install

COPY . .

RUN npm run build

# Serwujemy przez nginx, http-server albo serve
RUN npm install -g serve
CMD ["serve", "-s", "dist", "-l", "5173"]