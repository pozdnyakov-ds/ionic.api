FROM node:18.17.1

WORKDIR /app

COPY package.json ./
RUN yarn install
COPY . ./

RUN apt -y update
RUN apt install -y mc

CMD yarn start