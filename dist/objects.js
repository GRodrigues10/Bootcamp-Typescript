"use strict";
const p1 = {
    firstName: 'Gabriel',
    age: 22,
    order: [{
            productId: '1',
            price: 20
        }],
    register() {
        return 'oi';
    }
};
const _log = (message) => {
};
console.log(p1);
console.log(_log(p1.lastName));
const author1 = {
    age: 2,
    books: ['Star Wars'],
    firstName: 'Gabriel',
    order: []
};
console.log(author1);
const emailUser = {
    nome: 'Gabriel',
    email: 'gabriel@gmail.com'
};
const newAuthor = {
    email: 'Gabriel@gmail.com',
    nome: 'Gabrel',
    books: ['Gabriel, o mamaú']
};
const grade = 1;
console.log(newAuthor);
