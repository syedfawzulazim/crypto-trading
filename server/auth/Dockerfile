FROM node:alpine

WORKDIR /app
COPY package.json yarn.lock tsconfig.json ./
RUN yarn install --only=prod
COPY . .

CMD ["yarn", "start"]