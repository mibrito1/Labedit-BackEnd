# Labedit-BackEnd

É um projeto de estudo do curso da Labenu, onde foi criado uma rede social com o objetivo de promover a conexão e interação entre pessoas. Quem se cadastrar no aplicativo poderá alem de criar publicações tambem interagir nelas, fazendo comentarios e deixando seus likes ou dislikes.
Foi utilizado Jestjs para realizar os testes nos Endpoints da Api.

[Documentação da API](https://documenter.getpostman.com/view/27685153/2s9YRE2Bcd)

## OBJETIVO DA API
> API criada para projeto de estudo durante o curso da Labenu.

##  **EndPoints**

A API oferece os seguintes endpoints:

1. **Signup**: Permite a criaçao de um novo usuario.

2. **Login**: Permite a autenticação de um usuario.

3. **CreatePost**: Permite a criação de um post.

4. **GetPosts**: Permite a vizualização dos posts.

5. **EditPosts**: Permite Editar os posts.

6. **DeletePosts**: Permite remover um post.

7. **Likes e Dislikes**: Permite a interaçao de like e dislike em um post.

8. **CreateComment**: Permite a criação de um comentario que será pertencente a um post.

9. **GetComments**: Permite a vizualização dos comentarios.

10. **like e Dislekes comments**: Permite a interação de like e dislike nos comentarios.

## **Tecnologias Utilizadas:**

- [NodeJS](https://nodejs.org/en)
- [Typescript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/)
- [SQLite 3](https://www.sqlite.org/)
- [Knex](https://knexjs.org/)
- [UUID](https://www.npmjs.com/package/uuid)
- [BcryptJS](https://www.npmjs.com/package/bcryptjs)
- [JWT](https://jwt.io/)
- [ZOD](https://zod.dev/)
- [Jest](https://jestjs.io)

## **Instruções para utilizar a API**

```js
-- Clone o repositório do projeto com o comando: git clone https://github.com/mibrito1/Labedit-BackEnd.git

-- Entre na pasta criada pelo comando a cima.

-- Instale as dependencias.

-- Crie o arquivo de variáveis .env

-- Configure o arquivo .env com base no .env.exemplo.

-- Atualize as variáveis que estão no .env em seus arquivos.

    PORT -- /src/index.ts  (Essa variavel será a porta utilizada para abrir o servidor local para funcionamento da API)

    DB_FILE_PATH -- /src/database/baseDatabase.ts   (Essa variavel será o path para o seu arquivo Database criado anteriormente)

    JWT_KEY -- /src/services/tokenManager.ts    (Essa variavel será a sua senha segura, utilizada no momento de criação da criação do token)

    JWT_EXPIRES_IN -- /src/services/tokenManager.ts    (Essa variavel será o tempo até a expiração do token criado)

    BCRYPT_COST -- /src/services/HashManager.ts    (Essa variavel será a quantidade de ROUNDS utilizada no momento da encriptação do password do usuário)

-- Execute a API com o comando: npm run dev

-- Observe em seu terminal o endereço indicado.
```

[link para o FrontEnd](https://github.com/mibrito1/Labedit-FrontEnd)




