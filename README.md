# Boilerplate para uma aplicação javascript

Este documento contém as configurações necessárias para iniciar um projeto
javascript com typescript.

Nele estão contida as configurações das principais libs utilizadas para padronização de código:

- editorconfig
- eslisnt
- tsconfig
- debug vscode

## Configurando o editor vscode

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
