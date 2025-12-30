# Minimal API – Fórmula 1 🏎️

Este projeto consiste em uma **API mínima** desenvolvida para fins didáticos, onde é possível buscar dados de **times** e **corredores da Fórmula 1**.

A API foi construída utilizando **NodeJS**, **TypeScript** e **Fastify**, sem o uso de frameworks adicionais, com o objetivo de reforçar conceitos básicos de backend e organização de código.

---

## 🚀 Tecnologias utilizadas

- NodeJS
- TypeScript
- Fastify

---

## 📌 Funcionalidades

- Listar todos os times da Fórmula 1
- Buscar um time pelo `id`
- Listar todos os corredores
- Buscar um corredor pelo `id`

Os dados são armazenados em **vetores estáticos**, facilitando o entendimento da lógica e permitindo alterações rápidas para fins de estudo.

---

## 🔗 Endpoints disponíveis

### 📍 Times

- **GET** `/teams`  
  Retorna todos os times.

- **GET** `/teams/:id`  
  Retorna um time específico pelo ID.

---

### 🏁 Corredores

- **GET** `/drivers`  
  Retorna todos os corredores.

- **GET** `/drivers/:id`  
  Retorna um corredor específico pelo ID.

---

## ▶️ Como executar o projeto

### 1️⃣ Clone o repositório

```bash
git clone https://github.com/LuizFelixDev/Minimal-API.git
