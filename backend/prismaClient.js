import { PrismaClient } from "@prisma/client"; 
// Importa a classe PrismaClient.
// O PrismaClient é o responsável por conversar com o banco de dados
// usando JavaScript (ele traduz JS → SQL automaticamente).

const globalForPrisma = globalThis;
// globalThis é um objeto global do Node.js.
// Vamos usá-lo para armazenar uma única instância do Prisma
// e evitar múltiplas conexões com o banco em ambiente de desenvolvimento.

// Cria (ou reutiliza) a instância do PrismaClient.
// - Se já existir uma instância salva no globalThis, reutilizamos ela
// - Caso contrário, criamos uma nova
const prisma =
  globalForPrisma.prisma ??
  new PrismaClient();

// Em ambiente de desenvolvimento (NODE_ENV !== "production"),
// salvamos a instância do Prisma no objeto global.
// Isso evita que o Node crie várias conexões com o banco
// toda vez que o servidor reiniciar (hot reload).
if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

// Exporta a instância do Prisma.
// Assim, o Express (rotas, services, controllers, etc.)
// pode importar este arquivo e usar o Prisma
// para acessar o banco de dados de forma segura e centralizada.
export default prisma;

/*
Resumo:
Este arquivo inicializa o PrismaClient e exporta uma única instância,
permitindo que o Express utilize o Prisma nas rotas para acessar
e manipular o banco de dados sem criar múltiplas conexões.
*/