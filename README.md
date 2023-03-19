<h1 align="center">Boas-vindas ao repositório do Tryunfo!</h1>

<h2 align="center">
  <a href="https://h3zord.github.io/tryunfo" target="_blank">
    Aplicação
  </a>
</h2>
<br/>

## Objetivo

<strong>Tryunfo</strong> foi desenvolvido com o objetivo de criar um baralho personalizado, no qual é possível adicionar e remover cartas, quantificar atributos, escolher a raridade, definir se a carta é ou não um super trunfo e filtrá-las.

<h2 align="center">Demonstração</h2>
<br/>

<div align="center">

https://user-images.githubusercontent.com/102384026/226148442-0125d701-0a2c-4928-be18-e201dad7834f.mp4

</div>

<br/>
<br/>

## O que foi desenvolvido?

<strong>Tryunfo</strong> é um projeto que permite criar baralhos de cartas personalizados. Foi desenvolvido usando React e CSS para estilização. O versionamento de código foi realizado com Git.

A tela principal da aplicação exige que o usuário preencha alguns campos, incluindo um nome e uma descrição para a carta, bem como valores para três atributos distintos. É importante notar que o valor total dos três atributos não pode exceder 210 pontos e nenhum atributo individual pode ultrapassar 90 pontos.
O usuário também pode adicionar uma URL de uma imagem e escolher a raridade da carta, que pode ser normal, rara ou épica. O baralho só pode conter uma carta super trunfo. Depois de criar as cartas, é possível filtrá-las por nome, raridade ou se são super trunfos ou não.

## Linguagens e ferramentas:
- HTML
- CSS
- Javascript
- React

## Instalação e execução

### 1 - Clone o repositório:
```
git clone git@github.com:h3zord/tryunfo.git
```

### 2 - Entre no repositório:
```
cd tryunfo
```

### 3 - Instale as dependências:
Caso utilize o npm
```
npm install
```
Caso utilize o yarn
```
yarn install
```

### 4 - Inicie o projeto:
Caso utilize o npm
```
npm start
```
Caso utilize o yarn
```
yarn start
```
<strong>O React irá executar a aplicação na porta padrão 3000.</strong>
<br/>
➜ http://localhost:3000/