FROM node:22

WORKDIR /app

#Variavel de Ambiente
ENV NEXT_PUBLIC_API_URL=http://localhost:3000

# Copiar apenas package.json e package-lock.json para Instalar as Dependências
COPY package*.json ./

# Instalar dependências
RUN npm install

COPY . .

RUN npm run build

# EXPOSE 3000

# CMD ["npm", "run", "dev"]
CMD ["npm", "start"]

# docker compose build --no-cache - Faz todo processo sem reaproveitar nenhum cash