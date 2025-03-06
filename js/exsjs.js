// Exercício 1 
let nI = parseInt(Math.random()*1001);
console.log(`O número sorteado é: ${nI}`);
nI++
console.log(`Seu Sucessor é: ${nI}`);
nI-=2
console.log(`Seu Antecessor é: ${nI}`);
nI = (nI + 1) * 2
console.log(`Seu Dobro é: ${nI}`);
nI = nI / 4
console.log(`Sua Metade é: ${nI}`);

console.log(`==============================`);


// Exercício 2
let n1 = parseInt(Math.random()*11);
let n2 = parseInt(Math.random()*11);
let n3 = parseInt(Math.random()*11);
let n4 = parseInt(Math.random()*11);
console.log(`As notas são: ${n1},${n2},${n3},${n4}`);
let media = (n1+n2+n3+n4) / 4;
console.log(`A média é: ${media}`); 

console.log(`==============================`);

// Exercício 3

let grau = parseInt(Math.random()*101);
console.log(`O grau é: ${grau}°C`);
let F = 9/5*grau+32;
console.log(`O grau é: ${F} F`);

console.log(`==============================`);

// Exercício 4

let salario = 1500;
console.log(`Seu salário padrão é: ${salario}`);
let calca = parseInt(Math.random()*201);
console.log(`A loja vendeu ${calca} calças, o salário aumentado será de: ${calca*35 + salario}`);

console.log(`==============================`);

// exercicio 5

let ba = parseInt(Math.random()*101);
let al = parseInt(Math.random()*101);
console.log(`Sua base é: ${ba}, Sua altura é: ${al}`);
let area = (ba * al) / 2;
console.log(`A área é: ${area}`);

console.log(`==============================`);

// exercicio 6

// BOA SORTE DIGAS!!!!!!!!!!!!!!!!

console.log(`==============================`);

// exercicio 7

let peso = parseInt(Math.random()*201);
console.log(`O peso é: ${peso}, Após engordar 20% do peso, o seu peso será ${peso+ (peso*0.2)}, Após emagrecer 20% do peso, o seu peso será ${peso - (peso*0.2)}`);

console.log(`==============================`);

// exercicio 8

let a = parseInt(Math.random()*11);
let b = parseInt(Math.random()*11);
let c = parseInt(Math.random()*11);
let x = parseInt(Math.random()*11);
console.log(`A = ${a}, B= ${b}, C= ${c}, X= ${x}, Cálculo = ${a*(x*x)+ b*x + c}`);


console.log(`==============================`);

// exercicio 9

let num = parseInt(Math.random()*101);
console.log(num);
if (num % 2 === 1) { 
console.log(`O número é ímpar e seu cubo é: ${num*num*num}`);
} else {
    console.log(`O número é par e seu quadrado é: ${num*num}`);
}

console.log(`==============================`);

// exercicio 10

let sort = parseInt(Math.random()*101);
let sort2 = parseInt(Math.random()*101);
console.log(`Os números são: ${sort} e ${sort2}`);

if (sort + sort2 <= 100) {
    console.log(`${(sort + sort2) * 3}`);
    
} else {
    console.log(`${(sort + sort2)* 5}`);
    }