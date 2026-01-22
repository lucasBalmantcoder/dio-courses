# Projeto QR Code

Projeto desenvolvido durante a formação **Node.js Fundamentals** da DIO.  
Esse sistema funciona como um **gerador de QR Codes no terminal**, onde o usuário escolhe uma opção e o programa gera um QR Code de acordo com a entrada via prompt.:contentReference[oaicite:1]{index=1}

---

## 📌 Tecnologias

Este projeto foi construído com as seguintes tecnologias:

- **JavaScript / Node.js**  
- 📦 **prompt** – para interação no terminal  
- 🎨 **chalk** – para colorir textos no terminal  
- 📟 **qrcode-terminal** – geração de QR Codes no terminal

---

## 🧠 O que faz este projeto

Este projeto permite gerar QR Codes diretamente no terminal, sem interface gráfica, por meio de textos inseridos pelo usuário.  
Pode ser utilizado para criar QR Codes de links, textos ou outras informações que precisam ser rapidamente transformadas em código 
legível por scanners ou celulares.:contentReference[oaicite:2]{index=2}

---

## 📁 Estrutura do Projeto

```text
projeto-qrcode/
├─ src/
│  ├─ prompts/
│  │   ├─ prompt-main.js
│  │   └─ prompt-qrcode.js
│  ├─ services/
│  │   └─ qr-code/
│  │       ├─ create.js
│  │       └─ handle.js
│  ├─ index.js
├─ package.json
└─ README.md
