interface MathFunc {
    (x:number, y:number): number;
}

const sum:MathFunc = (x:number, y:number):number => {
    return x + y;
}

const sub: MathFunc = (x:number,y:number)=>{
    return x - y;
}


console.log(sum(3,4));

const log = (message:string):void =>{
    console.log(message);
}

log('Hello There!');




