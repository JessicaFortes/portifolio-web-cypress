# Projeto de Automação de Testes Web com Cypress

> Este projeto foi criado com o objetivo de demonstrar meu conhecimento e habilidades em automação de testes web utilizando o framework Cypress. Aqui, você encontrará testes automatizados para diferentes cenários de uma aplicação web, incluindo testes de funcionalidade, usabilidade e integração.  

### Sobre a aplicação:
 > Os testes fará a validação do site https://automationexercise.com/. 

### Principais Tecnologias Utilizadas:

- Cypress (13.8)
- JavaScript
- Node.js (20.x)


## 💻 Conhecimentos Demonstrados:
  
# GIT
- Regras de proteção da branch defautl;
- Regras de pull request;
- Git Flow;
- Arquivos do git ignore;
- Integração com ferramentas de CI/CD;

# Arquitetura
- Configuração de execução por ambiente;
- Utilização do Page Object;
- Definir o browser da execução de teste;

# Testes
- Criação de casos de teste;
- Configuração de execução por Tag (tipo de teste, funcionalidade ou escopo);
- Relatórios;


## 🚀 Instalando portfolio_web_cypress

Para instalar o portfolio_web_cypress, siga estas etapas:

> 1. Instale o Node.js (18.x ou superior)
   

Windows: https://nodejs.org/en/download

Linux: 
 ```
    apt-get install libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth xvfb
 ```
    pacman -S gtk2 gtk3 alsa-lib xorg-server-xvfb libxss nss libnotify
 ```
    yum install -y xorg-x11-server-Xvfb gtk2-devel gtk3-devel libnotify-devel GConf2 nss libXScrnSaver alsa-lib
 ```

> 2. Instale as dependências do projeto


 ```
 npm install
 ```

## 📝 Executando Testes 

Para executar toda a bateria de teste, siga estas etapas:

```
npm run test:run
```

Para executar apenas o smoke Test, siga estas etapas:

```
npm run test:smokTest
```
