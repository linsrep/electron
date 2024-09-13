# Sistema Feito em ElectronJS para testes

Aqui irei testar funcionalidades do Electron para posteriormente aplicar em um sistema comercial

## Bora lá! O que terá?

- Inicialmente, irei seguir a documentação do ELECTRON para desenvolver e entender como tudo funciona ali. Vou anotar aqui tudo que for feito.

## 🚀 Como usar?

- Verificar a versão do NodeJS e do NPM

```sh
node -v 
npm -v
```

- Crie uma pasta para seu projeto. Ex: `<meu-sistema-electron>`
- Acesse a pasta `<meu-sistema-electron>`
- Digite o comando pra iniciar

```sh
npm init
```

- Depois, instale o pacote Electron como uma dependência de desenvolvimento

```sh
npm install --save-dev electron
```

- Finalmente, você deve ser capaz de executar o Electron. No campo `scripts` da sua configuração `package.json`, adicione o comando start:

```sh
{
  "scripts": {
    "start": "electron ."
  }
}
```

- Inicie a aplicação:

```sh
npm start
```

- Isso iniciará o electron. Agora você precisa ter o restante do código que pode ser encontrado [AQUI](https://www.electronjs.org/pt/docs/latest/tutorial/quick-start)

## 🔑 Licença

Desenvolvido por [Diogo Oliveira Lins](https://goatech.com.br)