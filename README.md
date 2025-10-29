# 🌐 Fullstack Project — Node + Next.js + Docker

Projeto **Fullstack** com **Node.js (Express)** no backend e **Next.js** no frontend, executando via **Docker Compose**.  
O backend fornece uma rota de teste, e o frontend permite consultar o backend.

---

## 🚀 Tecnologias utilizadas

### 🖥️ Front-end
- Next.js  
- TypeScript  
- Tailwind CSS  

### ⚙️ Back-end
- Node.js  
- Express  
- TypeScript  
- CORS  

### 🐳 Containerização
- Docker  
- Docker Compose  

---

## 🧩 Funcionalidades

✅ Backend com rota de teste `/test`  
✅ Frontend consumindo o backend via botão de consulta  
✅ Comunicação entre frontend e backend usando **Docker Compose**  
✅ Permite desenvolvimento com **hot-reload** usando volumes  

---

## 📦 Como clonar o projeto

```bash
# Clonar o repositório
git clone https://github.com/SEU-USUARIO/fullstack-project.git

# Acessar a pasta do projeto
cd fullstack-project
```

🧠 Backend

```bash
# Acessar o backend
cd backend

# Dependências principais
npm install express
npm install cors

# Dependências de desenvolvimento
npm install --save-dev @types/express @types/cors ts-node typescript
```

⚙️ Rodando com Docker
```bash
# Buildar e iniciar os containers
docker compose up --build
```
