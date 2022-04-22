FROM node:alpine

WORKDIR /app
COPY package.json yarn.lock tsconfig.json ./
RUN yarn install
COPY . .

CMD ["yarn", "start"]