# PUCRS Project - Frontend do Gerenciador de Séries

## Visão geral
Aplicação React (Vite) para gerenciar séries assistidas: navegue entre as páginas Home/About/Register/List, adicione séries com controle de datas, e edite/exclua entradas em memória. Dados iniciais (ex.: Stranger Things, Breaking Bad) são carregados em tempo de execução como exemplos.

Stack: React 19, React Router, React DatePicker, Vite, ESLint, Cypress.

## Principais funcionalidades
- Rotas (`/`, `/about`, `/register`, `/series-list`) com uma barra fixa no topo.
- Formulário com validações e `DatePicker` para título, temporadas, datas, diretor, produtor e gênero.
- Tela de listagem com formatação de datas e ações de editar/excluir.
- Ao salvar uma série, o usuário é redirecionado automaticamente para a lista.

## Pré-requisitos
- Node.js 18+ e npm (verifique com `node -v` e `npm -v`).

## Como executar localmente
1. Clone o repositório e entre na pasta do frontend:
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
4. Abra a URL mostrada pelo Vite (normalmente http://localhost:5173).

## Scripts úteis
- `npm run dev` - inicia o servidor de desenvolvimento com HMR.
- `npm run build` - gera o build de produção.
- `npm run preview` - serve o bundle gerado localmente.
- `npm run lint` - executa o ESLint.
- `npm run cy:open` - abre o Cypress (o projeto já pode configurar flags para mitigar crashes no Windows).
- `npm run cy:run` - executa o Cypress em modo headless.

## Testes Cypress (E2E)
Os testes end-to-end cobrem listagem, criação, edição, exclusão e navegação. Inicie o servidor de desenvolvimento antes de executá-los:

```bash
npm run dev
npm run cy:open   # ou npm run cy:run
```

### Sobre o erro "bad IPC 114" (encerramento do renderer)
- Em Windows, o Chromium às vezes encerra o processo renderer com uma mensagem de IPC ruim (reason 114). Isso pode ser causado por configurações de sistema, proteção de integridade de código ou interações com drivers/antivírus.
- Os scripts do projeto podem já aplicar flags para mitigar esse problema (ex.: desabilitar GPU ou desabilitar funcionalidades de integridade). Use os scripts do `package.json` antes de executar `npx cypress open` manualmente.
- Se o problema persistir, tente:
  - Executar em modo headless: `npm run cy:run`.
  - Atualizar o Chrome/Chromium e o Cypress para versões compatíveis.
  - Testar com o navegador Electron: `npx cypress run --browser electron`.
  - Verificar e, temporariamente, desativar antivírus/Proteção de Exploits do Windows para depuração.

## Capturas de tela
As imagens estão em `series/docs/images`.

- Home: ![Home](/series/docs/images/home.png)
- About: ![About](/series/docs/images/about.png)
- Formulário de registro: ![Formulário](/series/docs/images/forms.png)
- Lista de séries: ![Lista](/series/docs/images/list.png)

## Estrutura básica
```
series/
|- public/
|- src/
|  |- components/
|  |  |- navBar/
|  |  |- seriesForm/
|  |  |- seriesList/
|  |- pages/
|     |- home.jsx
|     |- about.jsx
|     |- register.jsx
|     |- seriesList.jsx
|- package.json
|- vite.config.js
```

````
