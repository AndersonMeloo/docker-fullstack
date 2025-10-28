    FROM node:22

    WORKDIR /app

    # Copiar apenas package.json e package-lock.json para Instalar as Dependências
    COPY package*.json ./

    # Instalar dependências
    RUN npm install

    COPY . .

    EXPOSE 3000

    CMD ["npm", "run", "dev"]

    # docker compose build --no-cache