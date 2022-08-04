/*
    @Utilizados -> Nessa aplicação está sendo utilizado node.js
    @input    node --version
    @output   v18.6.0
*/

/* O que são variáveis? */

// Locais aos quais vamos armazenar nossos valores;
var pi = 3.14; // note que o computador não entende o 3,14 para determinar um valor com vírgula se utiliza o '.' -> 3.14;

// Mas o que é o var? É fácil assim que se armazena uma variável então?! 😮
// Sim, mas temos outras maneiras de armazenar variáveis e cada uma tem sua peculiaridade...

/* @var */
/* 
    var é um modo para armazenar variáveis globais, que são utilizados em qualquer lugar do código e podem ser alteradas a qualquer momento
    (por conta disso é pouco utilizada no mercado, com medo de sofrer alteração em caso de aplicações bem maiores.)
*/

var curso = "ADS";
console.log(universidade);
/* 
    console é algo que pode ser utilizado para manipular o console, nosso terminal, 
    no caso o console.log é uma função dessa manipulação que nos permite observar o, nesse caso, valor universidade.
*/
// output -> ADS
// mas calma... você não tinha dito que ela é mutável? como que ela pode mudar então?
universidade = "CC"

