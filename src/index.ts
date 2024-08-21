// Curso de Typescript - 1h e 22min:

// - É uma linguagem desenvolvida com base no Javascript.

// - Adiciona novas funcionalidades e tipagem estática ao Javascript.

// - Todo código Typescript é convertido para o seu equivalente em Javascript pelo Typescript Compiler.


// Vantagens x Desvantagens:

// Vantagens:
/*  - Recursos avançados do Javascript.
    - Prenvenção de erros de tipagem.
    - Mais fácil de identificar bugs.
    - Código mais legível.
    - Extremamente Popular.
*/


// Desvantagens:
/*  - Escreve mais código
    - Há uma curva de aprendizado.
    - Requer uma compilação para o Javascript
*/


// COMEÇANDO A PRATICAR:


let age:number = 22;
const firstName:string = 'Gabriel';
const isValid:boolean = true;
let idk:any = 4;
idk = 'Olá';
idk = false;
console.log(age);

// Array
const ids:number[] = [1 , 2, 3, 4, 5];


// Tupla
const person:[number, string] = [3, 'Oi'];

// lista de Tuplas
const people:[number, string][] = [
    [1,'Gabriel'],
    [2, 'Jorge'],
    [3, 'Maria']
];


console.log(person);
console.log(people);

// Intersections
const productId: string | number = '4' //Pode ser string ou number nesse caso.

// Enum - Atribui um valor a outro valor, ajuda aumentar a legibilidade do código.
enum Direction{
    Up = 1,
    Down = 2
}

const directrion = Direction.Up

console.log(directrion);

// Type Assertions - Muda um tipo atribuindo ele a uma variável

const productName:any = 'Boné';

let itemId = productId as string;
// Outra forma de fazer a mesma coisa:
let itemId2 = <string> productName;














