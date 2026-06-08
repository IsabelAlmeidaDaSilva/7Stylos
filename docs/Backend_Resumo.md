
------------------------------------------------------------

BACKEND – EXPLICAÇÃO DO ZERO:

1. O que é o Backend?

O backend é a parte do sistema que não aparece para o usuário.
Ele é responsável por:

-Receber pedidos do frontend (site/app)
-Processar regras de negócio
-Conversar com o banco de dados
-Garantir segurança e organização dos dados
-Devolver respostas para o frontend

Exemplo:

O usuário clica em “Cadastrar”, o backend recebe os dados, valida, salva no banco e retorna uma resposta.

------------------------------------------------------------

2. O que é um Servidor?

Um servidor é um programa que:

-Fica rodando
-Escuta requisições (requests)
-Responde quando alguém acessa uma rota (URL)

Exemplo:

O navegador acessa: http://localhost:3000/users
O servidor recebe esse pedido
Processa
Retorna dados (JSON)

No nosso projeto, o backend é o servidor.

------------------------------------------------------------

3. Node.js
O que é o Node.js?

O Node.js é um ambiente que permite rodar JavaScript fora do navegador, no computador ou no servidor.

Antes do Node:

JavaScript só rodava no browser

Com Node:

-JavaScript roda no backend
-Pode criar servidores
-Pode acessar banco de dados
-Pode manipular arquivos
-Por que usamos Node.js?
-Usamos JavaScript no frontend e no backend
-Grande ecossistema (npm)
-Muito usado no mercado
-Ótimo para APIs e servidores web

👉 Node.js NÃO é uma linguagem, ele executa JavaScript.

------------------------------------------------------------

4. Express.js
O que é o Express?

O Express é um framework (conjunto de códigos, ferramentas e diretrizes pré-desenvolvidas que serve como uma base ou "esqueleto" para a criação de sistemas) para Node.js que facilita criar servidores e APIs.

Ele:

-Cria o servidor HTTP
-Gerencia rotas
-Recebe requisições (GET, POST, PUT, DELETE)
-Envia respostas

Sem Express:

Criar servidor seria muito mais complexo

Com Express:

Código simples e organizado

Exemplo de rota:

app.get("/users", (req, res) => {
  res.json({ message: "Lista de usuários" });
});

Por que usamos Express?
-Simples
-Leve
-Muito usado
-Ideal para APIs REST

------------------------------------------------------------

5. API REST
O que é uma API?

Uma API é uma forma de um sistema conversar com outro.

No nosso caso:

-Frontend conversa com o backend
-Backend responde com dados

O que é REST?

REST é um padrão de organização de APIs.

Ele usa:

-URLs (rotas)
-Métodos HTTP

| Método | Função          |
| ------ | --------------- |
| GET    | Buscar dados    |
| POST   | Criar dados     |
| PUT    | Atualizar dados |
| DELETE | Remover dados   |

Exemplo:

-GET /users → lista usuários
-POST /users → cria usuário

------------------------------------------------------------

6. Banco de Dados (MySQL)
O que é o banco de dados?

O banco de dados é onde:

-Dados ficam armazenados
-Informações persistem mesmo após desligar o servidor

Exemplos de dados:

-Usuários
-Produtos
-Pedidos
-Pagamentos
-Por que MySQL?
-Relacional
-Muito usado
-Confiável
-Fácil integração com Node

------------------------------------------------------------

7. Prisma ORM
O que é ORM?

ORM (Object Relational Mapping) é uma ferramenta que permite:

-Manipular banco de dados usando código
-Sem escrever SQL manualmente

Em vez de:
SELECT * FROM users;

Usamos:
prisma.user.findMany();

---

O que é o Prisma?

O Prisma é o ORM usado no projeto.

Ele:
-Conecta o backend ao banco
-Cria tabelas via código
-Mantém o banco sincronizado
-Evita conflitos em equipe

Vantagens do Prisma:
-Tipagem
-Organização
-Migrações controladas
-Menos erros

------------------------------------------------------------

8. Migrações (Migrations)
O que são migrações?

Migrações são:

-Histórico de alterações no banco
-Criadas a partir do código
-Versionadas no Git

Exemplo:

-Criar tabela de usuários
-Adicionar campo novo
-Alterar estrutura

Todos da equipe:

-Usam o mesmo schema
-Rodam as migrações
-Banco fica igual para todos

------------------------------------------------------------

9. Fluxo Geral do Backend
-Frontend envia requisição
-Express recebe
-Backend valida dados
-Prisma conversa com o banco
-Banco responde
-Prisma retorna dados
-Express envia resposta ao frontend

------------------------------------------------------------

10. O que esse Backend usa (Resumo)
-Node.js → executa JavaScript no backend
-Express.js → cria o servidor e as rotas
-Prisma ORM → conecta o código ao banco
-MySQL → armazena os dados
-Git/GitHub → controle de versão e trabalho em equipe