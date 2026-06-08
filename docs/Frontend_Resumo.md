
------------------------------------------------------------

FRONTEND – EXPLICAÇÃO DO ZERO

1. O que é o Frontend?

O frontend é a parte do sistema que o usuário vê e interage.

Ele é responsável por:

-Exibir telas (páginas)
-Botões, formulários, menus
-Capturar ações do usuário (cliques, digitação)
-Enviar dados para o backend
-Mostrar respostas vindas do backend

Exemplo:

O usuário preenche um formulário de cadastro → o frontend envia os dados → o backend responde → o frontend mostra uma mensagem.

------------------------------------------------------------

2. O Navegador (Browser)

O frontend roda dentro do navegador (Chrome, Edge, Firefox).

O navegador:

-Interpreta HTML
-Aplica estilos CSS
-Executa JavaScript

Sem navegador, o frontend não existe.

------------------------------------------------------------

3. HTML
O que é HTML?

HTML é a linguagem de estrutura da página.

Ele define:

-Textos
-Imagens
-Inputs
-Botões
-Divisões da tela

Exemplo:

<h1>Bem-vindo</h1>
<input type="text" />
<button>Enviar</button>

HTML não tem lógica, só estrutura.

------------------------------------------------------------

4. CSS
O que é CSS?

CSS é responsável pela aparência visual do site.

Ele controla:

-Cores
-Tamanhos
-Espaçamentos
-Layout
-Responsividade

Exemplo:

button {
  background: black;
  color: white;
}

CSS não tem lógica, só estilo.

------------------------------------------------------------

5. JavaScript (Frontend)
O que é JavaScript no frontend?

No frontend, o JavaScript é responsável pela interatividade.

Ele:

-Detecta cliques
-Lê formulários
-Atualiza a tela sem recarregar
-Faz requisições para o backend

Exemplo:

button.addEventListener("click", () => {
  alert("Clicou!");
});

JavaScript é a ponte entre o usuário e o backend.

------------------------------------------------------------

6. Problema do JavaScript puro

Usar apenas HTML + CSS + JS puro funciona, mas:

-Código fica grande
-Difícil de manter
-Muito código repetido
-Interface complexa vira bagunça

Para resolver isso, usamos frameworks.

------------------------------------------------------------

7. React
O que é o React?

O React é uma biblioteca JavaScript para criar interfaces.

Ele resolve:

-Organização do código
-Reutilização de componentes
-Atualização automática da tela
-Melhor performance

React NÃO substitui o JavaScript

React:

É feito com JavaScript
Usa JavaScript por baixo
Facilita escrever JS para interfaces

------------------------------------------------------------

8. Componentes
O que são componentes?

Componentes são pedaços reutilizáveis da interface.

Exemplo:

-Botão
-Header
-Card de produto
-Formulário

Em vez de repetir código:

function Button() {
  return <button>Comprar</button>;
}

Componentes deixam o projeto organizado.

------------------------------------------------------------

9. JSX
O que é JSX?

JSX é uma sintaxe do React que mistura:

-HTML
-JavaScript

Exemplo:

function App() {
  return <h1>Olá</h1>;
}

Por trás, isso vira JavaScript normal.

------------------------------------------------------------

10. Estado (State)
O que é estado?

Estado é um valor que muda com o tempo.

Exemplo:

-Usuário logado
-Carrinho de compras
-Lista de produtos

const [count, setCount] = useState(0);

Quando o estado muda:

-O React atualiza a tela automaticamente

------------------------------------------------------------

11. Requisições para o Backend

O frontend não acessa o banco diretamente.

Ele:

-Faz requisição HTTP
-Para o backend (Express)
-Recebe resposta

Exemplo:

fetch("http://localhost:3000/products")
  .then(res => res.json())
  .then(data => console.log(data));

------------------------------------------------------------

12. SPA (Single Page Application)

Aplicações React são SPA.

Isso significa:

-A página não recarrega
-Só partes da tela mudam
-Experiência mais rápida

------------------------------------------------------------

13. Node.js no Frontend
Por que Node aparece no frontend?

O React usa Node apenas para desenvolvimento.

Node é usado para:

-Rodar o servidor de desenvolvimento
-Instalar pacotes
-Buildar o projeto

👉 No navegador final, Node não existe.

------------------------------------------------------------

14. Vite / Create React App

Ferramentas como Vite:

-Criam o projeto React
-Configuram tudo automaticamente
-Evitam configuração manual

Elas:

-Usam Node
-Geram a estrutura inicial
-Facilitam o começo

------------------------------------------------------------

15. Estrutura Geral do Frontend

Exemplo comum:

src/
 ├─ components/
 ├─ pages/
 ├─ services/
 ├─ App.jsx
 └─ main.jsx

-components → partes reutilizáveis
-pages → telas
-services → comunicação com backend

------------------------------------------------------------

16. Fluxo Frontend → Backend
-Usuário interage
-React captura ação
-JavaScript envia requisição
-Backend responde
-React atualiza a tela

------------------------------------------------------------

17. O que esse Frontend usa (Resumo)
-HTML → estrutura
-CSS → visual
-JavaScript → lógica e interatividade
-React → organização da interface
-Node.js → ambiente de desenvolvimento
-Fetch/Axios → comunicação com backend

------------------------------------------------------------

18. Frontend x Backend (Resumo Final)

| Frontend      | Backend   |
| ------------- | --------- |
| Interface     | Regras    |
| Usuário       | Servidor  |
| React         | Express   |
| Browser       | Node      |
| Não acessa BD | Acessa BD |
