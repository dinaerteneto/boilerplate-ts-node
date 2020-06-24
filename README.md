# Boilerplate para uma aplicação javascript

Este documento contém as configurações necessárias para iniciar um projeto
javascript com typescript.

Nele estão contida as configurações das principais libs utilizadas para padronização de código:

- editorconfig
- eslisnt
- tsconfig
- debug vscode

## Nesta feature

Incluir o docker para uma aplicação contendo nodejs e postgres.
Para utilização em conjunto com o postgres foi incluído o typeorm.

Antes de rodar o docker não se esqueça de renomear o .env-example para .env

Rode aplicação utilizando:

```
docker volume create --name=boilerplatedb
docker-compose build
docker-compose up -d
```

Aqui iniciei a divisão de responsabilidades em módulos.
O módulo fica responsável por controlar qual a lib da camada de orm e rotas por exemplo.
Também foi adicionado containers para facilitar doa importação dos repositórios dentro do serviço.
O container também facilita a troca do repositorio caso seja necessário trocar o orm utilizado dentro do repositório por exemplo.

### Extenções necessárias

Estas são as extenções necessárias:
Estes links são para o vscode, mas caso você use outro editor, provavelmente elas também estarão disponível à ele.

- Eslint (<a href="https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint">Eslint</a>)
- Prettier - Code formatter (<a href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode">Prettier</a>)

### Configurando o editor vscode

Adicionando as linhas abaixo no settingsj.json do vscode, seu código
será automáticamente formatado utilizando o prettier, quando vc salvar o documento

```
  "editor.formatOnSave": true
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
    }
  },
  "[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
    }
  },

  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
    }
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
    }
  }
```
