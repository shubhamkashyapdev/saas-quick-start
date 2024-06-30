FROM node:18-alpine 

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .

RUN npx prisma generate

EXPOSE 3000
CMD ["yarn", "dev"]