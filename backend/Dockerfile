FROM node:22

WORKDIR /app

# COPY . .
# RUN npm install

# CMD ["npm", "run", "dev"]

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

CMD ["node", "dist/server.js"]