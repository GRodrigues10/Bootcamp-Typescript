interface IPessoa{
    id:number;
    // name:string; - Não pode usar protected na interface.
    // age:number; - Não pode usar private na interface.
    sayMyName():string;
      

}

class Pessoa implements IPessoa{
    readonly id:number;
    protected name:string;
    private age:number;

    constructor(id:number, name:string, age:number){
        this.id = id;
        this.name = name;
        this.age = age;
    }

    sayMyName():string{
        return this.name;
    }
}

// Mesma coisa que a de cima
class PersonRefact{
    

    constructor(readonly id:number, protected name:string, private age:number){
      
    }

    sayMyName():string{
        return this.name;
    }
}


class Employ extends Pessoa{
    constructor(id:number, name:string, age:number){
        super(id, name, age)
    }

    whoAmI(){
        // return this.age//É privado, não pode!
        return this.name;// Protected pode!
    }
}

const _p1 = new Pessoa(1, 'Gabriel', 22);

console.log(_p1.sayMyName())