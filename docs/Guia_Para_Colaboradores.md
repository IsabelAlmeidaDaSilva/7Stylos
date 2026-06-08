
----------------------------------------

🤝 Guia para Colaboradores
📌 Requisitos

Antes de começar, instale:

Git
Node.js
MySQL
Visual Studio Code

----------------------------------------

📥 Clonando o Projeto:

git clone https://github.com/USUARIO/7Stylos.git

----------------------------------------

📂 Estrutura
-frontend/ → Interface do usuário
-backend/ → Servidor e banco de dados
-docs/ → Documentação

----------------------------------------

🗄️ Banco de Dados
-O banco é controlado via Prisma
-NÃO criar tabelas manualmente
-Alterações devem ser feitas no schema.prisma
Sempre rodar:

npx prisma migrate dev

----------------------------------------

🌱 Boas Práticas
-Não subir código quebrado
-Usar commits claros e objetivos
-Não mexer no banco manualmente
Sempre atualizar antes de codar:

git pull

----------------------------------------

🧠 Comunicação
-Alinhar mudanças grandes com o time
-Usar Issues ou mensagens para organização

----------------------------------------

📁 Organização da pasta docs:

docs/
├─ backend.txt
├─ frontend.txt
├─ projeto_resumo.md
├─ escopo_funcionalidades.md
├─ diagramas_fluxo.md
└─ guia_colaboradores.md

----------------------------------------

