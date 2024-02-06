FROM node:latest

COPY ["package.json", "package-lock.json", "/usr/src/"]

WORKDIR /usr/src/

RUN npm ci

COPY [".", "/usr/src"]

CMD ["npm", "start"]