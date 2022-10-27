from node:lts

COPY package.json .

RUN npm i --silent

COPY . .

CMD ["node", "index.js"]