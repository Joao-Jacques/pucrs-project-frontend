# PUCRS Project – Series Manager Frontend

## Visão geral
Aplicação React criada com Vite para gerenciar séries assistidas. O usuário pode navegar pelas páginas Home, Sobre, Cadastro e Lista, registrar novas séries usando um formulário com controle de datas e visualizar, editar ou excluir os itens cadastrados. Um conjunto inicial de séries (Stranger Things e Breaking Bad) é carregado apenas como exemplo em tempo de execução.

Principais tecnologias: React 19, React Router, React DatePicker, Vite e ESLint.

## Recursos principais
- Navegação por rotas (`/`, `/about`, `/register`, `/series-list`) com barra fixa.
- Formulário com validações e DatePicker para registrar séries (título, temporadas, datas, diretor, produtor e gênero).
- Listagem com formatação de datas e ações de edição/exclusão em memória.
- Fluxo de cadastro → redirecionamento automático para a lista após salvar.

## Pré-requisitos
- Node.js 18+ e npm instalados (`node -v` e `npm -v` para conferir).

## Como executar localmente
1. Clone o repositório e acesse a pasta do frontend:
   ```bash
   git clone <repo-url>
   cd pucrs-project-frontend/series
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
4. Abra o navegador no endereço indicado pelo Vite (geralmente `http://localhost:5173`) para usar o app.

## Scripts úteis
- `npm run dev` – servidor de desenvolvimento com recarregamento automático.
- `npm run build` – gera a build otimizada para produção.
- `npm run preview` – serve a build gerada para validação local.
- `npm run lint` – roda o ESLint com as regras do projeto.
- `npm run cy:open` – abre a interface do Cypress para executar os fluxos de ponta a ponta.
- `npm run cy:run` – roda a suíte do Cypress em modo headless (útil para CI/CD).

## Testes com Cypress
Os testes end-to-end validam os fluxos principais (listagem, cadastro, edição, remoção e navegação). Eles usam interceptações da API para simular respostas do backend, garantindo resultados reproduzíveis. Antes de rodá-los, mantenha as dependências instaladas e o servidor de desenvolvimento em execução:

```bash
npm run dev
npm run cy:open # ou npm run cy:run
```

## Capturas de tela

As imagens abaixo mostram telas principais da aplicação; elas ficam em `series/docs/images`.

- **Home:**

   ![Home](/series/docs/images/home.png)

- **Sobre:**

   ![About](/series/docs/images/about.png)

- **Formulário de cadastro:**

   ![Formulário](/series/docs/images/forms.png)

- **Lista de séries:**

   ![Lista](/series/docs/images/list.png)

## Estrutura básica
```
series/
├── public/
├── src/
│   ├── components/
│   │   ├── navBar/
│   │   ├── seriesForm/
│   │   └── seriesList/
│   └── pages/
│       ├── home.jsx
│       ├── about.jsx
│       ├── register.jsx
│       └── seriesList.jsx
├── package.json
└── vite.config.js
```
