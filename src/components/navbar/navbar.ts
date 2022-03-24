
const NavBar = () => `
  <nav id="navbar">
  <img id="logo" src="./../../../assets/4.svg">
  <ul id="menu">
    <li>ANIMAIS<li>
    <li>ARTIGOS<li>
    <li>LOJA<li>
    <li>SOBRE<li>
    <li>CONTATO<li>
  </ul>
  <div class="button-navbar">
    <p>ENTRAR</p>
  </div>
  <nav>
`

const styleSheet = () => `
  <link rel="stylesheet" href="./src/components/navbar/style.css">
`

let divBar = document.querySelector<HTMLDivElement>('body')!;
let head = document.querySelector<HTMLDivElement>('head')!;

divBar.insertAdjacentHTML('beforebegin', NavBar());
head.insertAdjacentHTML('afterbegin', styleSheet());


