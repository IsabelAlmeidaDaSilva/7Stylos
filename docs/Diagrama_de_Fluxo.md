
----------------------------------------

🔄 Diagramas de Fluxo
🔁 Fluxo Geral do Sistema

Usuário
↓
Frontend (React)
↓
API Backend (Express)
↓
Prisma ORM
↓
Banco de Dados (MySQL)
↑
Resposta (JSON)
↑
Frontend atualiza a tela

----------------------------------------

🔐 Fluxo de Login
-Usuário preenche formulário
-Frontend envia dados
-Backend valida usuário
-Banco confirma dados
-Backend responde com sucesso ou erro
-Frontend exibe a mensagem

🛒 Fluxo de Compra
-Usuário adiciona produto ao carrinho
-Frontend atualiza o estado
-Usuário finaliza o pedido
-Frontend envia o pedido ao backend
-Backend salva o pedido no banco
-Backend retorna confirmação
-Frontend exibe sucesso

----------------------------------------
