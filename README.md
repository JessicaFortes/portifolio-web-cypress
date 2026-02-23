# Portfolio Web Cypress

Projeto de automação E2E com Cypress para validação do site `https://automationexercise.com`.

## Stack

- Node.js 20+
- Cypress 15
- JavaScript
- `@cypress/grep`
- `cypress-mochawesome-reporter`

## Arquitetura

```text
cypress/
  config/
    base.js
    development.js
    homologacao.js
  e2e/
    00-setup/
      auth-setup.cy.js
    access/
      auth.cy.js
      register.cy.js
    cart/
      cart.cy.js
    checkout/
      checkout.cy.js
    contact/
      contact.cy.js
    products/
      products.cy.js
  fixtures/
    users.json
    payment.json
    contact.json
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

## Princípios aplicados

- Separação por camadas (`components`, `pages`, `flows`).
- Separação por responsabilidade (`selectors`, `actions`, `assertions`).
- Reuso de fluxo de negócio.
- Massa dinâmica para autenticação.
- Configuração centralizada por ambiente.
- Execução por tags com `@cypress/grep`.

## Scripts

- `npm run test:open`: execução interativa (dev).
- `npm run test:run`: suíte completa (homologação, com setup global de massa).
- `npm run test:dev:chrome`: execução em Chrome no ambiente dev.
- `npm run test:smokeTest`: smoke tests por tag.
- `npm run test:setup:auth`: executa apenas setup de autenticação.
- `npm run test:auth`: executa apenas specs de autenticação.
- `npm run test:auth:with-setup`: setup + autenticação no mesmo run.

## Relatório

- Reporter: `cypress-mochawesome-reporter`
- Saída local: `cypress/reports/mochawesome`
- Formatos: HTML e JSON
- CI: relatórios publicados como artifacts no GitHub Actions.

## CI/CD

Workflow em `.github/workflows/github-actions.yml` com:

- `Smoke Tests` em PR/push/manual.
- `Full Regression` em push para `main`.
- Upload de screenshots/videos/downloads em caso de falha.
- Upload de relatórios em todas as execuções.

## Instalação

```bash
npm install
```

## Execução

```bash
npm run test:run
```