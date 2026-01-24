# Projeto App Flow

Este projeto faz parte da trilha **Formação Node.js Fundamental** da DIO e tem como objetivo a construção de uma **API simples em Node.js puro**, sem frameworks, simulando o consumo e a exposição de dados de episódios do podcast *Flow*.

O foco do projeto é compreender conceitos fundamentais de backend, como criação de servidor HTTP, rotas, controllers e retorno de dados em formato JSON.

---

## 🚀 Funcionalidades implementadas até o momento

* Criação de um servidor HTTP utilizando o módulo nativo `http` do Node.js
* Definição de rota `GET` para listagem de episódios
* Retorno de dados estruturados em **JSON**
* Simulação de dados de episódios do podcast Flow
* Organização inicial do projeto em camadas (ex: controllers)

---

## 📌 Endpoint disponível

### `GET /episodes`

Retorna uma lista de episódios do podcast.

#### Exemplo de resposta:

```json
[
  {
    "podcastName": "flow",
    "episode": "CBUM - Flow #319",
    "videoId": "pQSuQmUfS30",
    "cover": "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg",
    "link": "https://www.youtube.com/watch?v=pQSuQmUfS30",
    "categories": ["saúde", "esporte", "bodybuilder"]
  },
  {
    "podcastName": "flow",
    "episode": "RUBENS BARRICHELLO - Flow #339",
    "videoId": "4KDGTdiOV4I",
    "cover": "https://i.ytimg.com/vi/4KDGTdiOV4I/maxresdefault.jpg",
    "link": "https://www.youtube.com/watch?v=4KDGTdiOV4I",
    "categories": ["esporte", "corrida"]
  }
]
```

---

## 🗂️ Estrutura do projeto

```text
projeto-app-flow/
├── src/
│   ├── controllers/
│   │   └── getListEpisodes.ts
│   ├── routes/
│   │   └── routes.ts
│   ├── app.ts
│   └── server.ts
├── package.json
├── tsconfig.json
└── README.md
```

> A estrutura pode evoluir conforme novas funcionalidades forem adicionadas.

---

## 🛠️ Tecnologias utilizadas

* Node.js
* TypeScript
* HTTP nativo (`http`)

---

## ▶️ Como executar o projeto

1. Clone o repositório:

```bash
git clone https://github.com/lucasBalmantcoder/dio-courses.git
```

2. Acesse o diretório do projeto:

```bash
cd formação-nodejs-fundamental/projeto-app-flow
```

3. Instale as dependências:

```bash
npm install
```

4. Inicie o servidor:

```bash
npm run start
```

5. Acesse no navegador ou via ferramenta como Insomnia/Postman:

```text
http://localhost:3000/episodes
```

---

## 📚 Objetivo educacional

Este projeto tem caráter **didático**, servindo como base para:

* Entendimento do funcionamento do Node.js sem frameworks
* Construção manual de rotas
* Manipulação de respostas HTTP
* Estruturação inicial de uma API REST

---

## 🔮 Próximos passos (planejado)

* Separação de dados em arquivos ou banco de dados
* Filtro de episódios por categoria
* Integração real com a YouTube Data API
* Padronização de respostas HTTP
* Tratamento de erros

---

## 🧑‍💻 Autor

Lucas Patrik Lopes dos Santos
Projeto desenvolvido durante os estudos na plataforma **DIO (Digital Innovation One)**.
