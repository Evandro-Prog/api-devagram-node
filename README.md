# 📸 Devagram API - Clone do Instagram

Este projeto é uma **API inspirada no Instagram**, desenvolvida como parte do curso **[Devaria](https://devaria.com.br/)**. O objetivo é praticar e consolidar os conhecimentos em **JavaScript/Node.js** criando uma aplicação com funcionalidades reais de uma rede social.

## 🚀 Funcionalidades Implementadas

- ✅ Cadastro de usuário  
- ✅ Login com autenticação JWT  
- ✅ Edição de perfil do usuário  
- ✅ Publicação de fotos (upload com Multer + CosmicJS)  
- ✅ Curtir e descurtir postagens  
- ✅ Seguir e deixar de seguir outros usuários  

## 🛠️ Tecnologias Utilizadas

### Backend
- **Node.js**  
- **Mongoose** (MongoDB ODM)  
- **jsonwebtoken** (Autenticação)  
- **md5** (Hash de senha)  
- **Multer** (Upload de imagens)  
- **CosmicJS** (Armazenamento de imagens)- 
- **Next.js**  
- **next-connect** (Middleware para Next.js)

### Tipagem e Qualidade de Código
- **TypeScript**  
- **ESLint** (Linting com `eslint-config-next`)  
- Tipagens com `@types/*` para bibliotecas utilizadas

### Dependências


Dependencias:

  "@cosmicjs/sdk": "^1.5.2",
  "cosmicjs": "^5.0.2",
  "jsonwebtoken": "^9.0.2",
  "md5": "^2.3.0",
  "mongoose": "^8.15.0",
  "multer": "^2.0.0",
  "next-connect": "^0.12.1",
  "nextjs": "^0.0.3",
  "react": "^19.1.0",
  "react-dom": "^19.1.0",
  "types": "^0.1.1"

Dependencias de Desenvolvimento:

  "@eslint/eslintrc": "^3",
  "@types/jsonwebtoken": "^9.0.9",
  "@types/md5": "^2.3.5",
  "@types/multer": "^1.4.12",
  "@types/node": "^20",
  "@types/react": "^19",
  "@types/react-dom": "^19",
  "eslint": "^9",
  "eslint-config-next": "15.3.2",
  "next": "^15.3.2",
  "typescript": "^5"



## 🧩 Instalação e Execução

1. **Clone o repositório**
   git clone https://github.com/seu-usuario/devagram-api.git
   cd devagram-api
   

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Crie um arquivo `.env` com as variáveis necessárias**
   
   DB_CONNECTION_STRING= # string de conexão com MongoDB
   <b >
   JWT_SECRET= # chave secreta para JWT
   <b >
   COSMIC_BUCKET_SLUG=
   <b >
   COSMIC_READ_KEY=
   <b >
   COSMIC_WRITE_KEY=
   

5. **Execute a aplicação**
  
   npm run dev   




## 💡 Sobre o Projeto

Este projeto foi desenvolvido com fins educativos, com foco no aprendizado das principais tecnologias utilizadas em aplicações modernas com Node.js, React e Next.js.

**Curso Devaria:** [https://devaria.com.br](https://devaria.com.br)

## 📬 Contato

Em caso de dúvidas, sugestões ou feedbacks, fique à vontade para abrir uma issue ou entrar em contato.

---

🛠️ **Feito com dedicação e foco nos estudos!**
