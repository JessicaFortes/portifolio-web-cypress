# Portfolio Web Cypress

Projeto de automacao E2E com Cypress para validacao do site `https://automationexercise.com`.

## Stack
- Node.js 20+
- Cypress 13
- JavaScript

## Arquitetura
A estrutura foi organizada em camadas para favorecer manutencao, reuso e clareza:

```text
cypress/
  config/
    base.js
    development.js
    homologacao.js
  e2e/
    access/
      register.cy.js
  fixtures/
    users.json
  support/
    commands.js
    e2e.js
    components/
      header-menu/
        header-menu.selectors.js
        header-menu.actions.js
        header-menu.assertions.js
    factories/
      user.factory.js
    flows/
      account.flow.js
      checkout.flow.js
    pages/
      access/
      register/
      account-created/
      account-deleted/
      products/
      cart/
      checkout/
      contact/
```

## Principios aplicados
- Separacao de responsabilidades por camada (`component`, `page`, `flow`).
- Separacao intra-pagina por responsabilidade (`selectors`, `actions`, `assertions`).
- Reuso de regras de negocio em `flows`.
- Isolamento entre testes com criacao de usuario dinamico.
- Configuracao centralizada em `config/base.js`.
- Execucao por tag via `@cypress/grep`.

## Scripts
- `npm run test:open`: abre o Cypress com config de desenvolvimento.
- `npm run test:run`: executa E2E com config de homologacao.
- `npm run test:dev:chrome`: executa E2E em Chrome com config de desenvolvimento.
- `npm run test:smokeTest`: executa somente cenarios com tag `@smokeTest`.

## Instalacao
```bash
npm install
```

## Execucao
```bash
npm run test:run
```
