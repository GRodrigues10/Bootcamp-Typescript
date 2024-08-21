// Type

type Order = {
    productId:string,
    price:number
}

type Persons = {
    firstName:string,
    lastName?:string,// Isso é opcional
    age:number,
    order:Order[],
    register?():string
}

const p1:Persons = {
    firstName:'Gabriel',
    // lastName: 'Rodrigues',
    age: 22,
    order: [{
        productId:'1',
        price: 20
    }],
    register(){
        return 'oi'
    }
}


// Propriedades opcionais, lastname não é string de fato, ela é string ou undefined.
const _log = (message?:string)=>{

}



console.log(p1);
console.log(_log(p1.lastName!))//O ponto de interrogação fala que ela existe, ela nesse caso fica undefined.

// Unions

type Author = {
    books: string[]
}

const author1: Author & Persons = {
    age:2,
    books:['Star Wars'],
    firstName:'Gabriel',
    order:[]
};

console.log(author1);

// Interfaces

interface UserInterface{
    readonly nome:string, //Só pode ser lido
    email:string
}

const emailUser:UserInterface = {
    nome:'Gabriel',
    email: 'gabriel@gmail.com'
};

interface AuthorInterface{
    books:string[]
}

const newAuthor: UserInterface & AuthorInterface = {
   email:'Gabriel@gmail.com',
   nome:'Gabrel',// consegui mudar aqui porque funciona quando o objeto é criado.
   books:['Gabriel, o mamaú']
}


//  Não funciona com interface esse código abaixo:
type Grade = number | string;

const grade: Grade = 1;



console.log(newAuthor)



