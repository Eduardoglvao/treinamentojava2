//  exercicio para ver se vc e maior de idade ou menor

// let idade = parseInt(prompt('digite sua idade'));
// if ( idade >= 18 && idade < 30){
//     console.log('voce tem idade e pode entra')

// }else if ( idade >=30){
//     console.log( 'voce e velho')
// }else{
//     console.log('voce nao atende os requisitos')
// }

//  exercicio para ver se vc ta de recuperação, aprovado ou reprovado
// let nota = parseInt(prompt('digite sua nota'));
// if ( nota >= 7)
//     console.log('aprovado')

// else if ( nota >=5){
//     console.log(' recuperção')
// }else{
//     console.log('reprovado')
// }

//  exercicio para dar desconto e calcular.
// let preço = parseInt(prompt('coloque seu valor'));
// let valorfinal10 = preço - 10*preço/100;
// let valorfinal5 = preço - 5*preço/50;

// if( preço >= 100){
//     alert('você recebe um desconto de 10%')
// } else if(preço >= 50 )
// alert('você ganhou um desconto dee 5%')
// else{
//     alert('o preço é baixo demais para receber desconto')
// }

//  para calcular  IMC
//  peso = parseInt(prompt('coloque seu peso'))

// let altura = parseFloat(prompt('Digite sua altura'));

// let imc = peso / (altura ** 2);

// if (imc <18.5 ) {
//     alert('magreza.');
// } else if (imc >= 18.5 && imc <=24.9) {
//     alert(' normal.');
// } else if (imc <= 25,0 && img <=29,9) {
//     alert('sobrepeso.');
// } else if (imc <= 30,0 && imc <=39,9) {
//     alert(' obesidade.');

// function converterCelsiusParaFahrenheit(temperaturaCelsius) {
//  let temperaturaFahrenheit = (temperaturaCelsius * 9/5) + 32;
//  return temperaturaFahrenheit;
//  }  let temperaturaCelsius = parseFloat(prompt("Digite a temperatura em graus Celsius:")); 
// if (!isNaN(temperaturaCelsius)) {
// let temperaturaFahrenheit = converterCelsiusParaFahrenheit(temperaturaCelsius);
//  alert("A temperatura em Fahrenheit é: " + temperaturaFahrenheit.toFixed(2));
// }

// let dia = prompt("Digite um número de 1 a 7 par saber o nome do dia da semana");

// let nomeDia;

// switch (dia) {
//   case "1":
//     nomeDia = "domingo";
//     break;
//   case "2":
//     nomeDia = "segunda-feira";
//     break;
//   case "3":

//   case "4":
//     nomeDia = "quarta-feira";
//     break;
//   case "5":
//     nomeDia = "quinta-feira";
//     break;
//   case "6":
//     nomeDia = "sexta-feira";
//     break;
//   default:
//    nomeDia = "Dia inválido";
// }

// alert(nomeDia);

// for (let i = 0; i < 10; i++) {
//     if (i === 5){
//         break; // interrompe o loop quando i for igual a 5
// }
// console.log(i);
// }
// let dayofweek = 3;

// switch ( dayofweek) {
//  case 1:
// console.log('segunda-feira');
//  break;

//  case 2:
//  console.log('Terça-feira');
//  break;

// case 3:
//  console.log('Quarta-feira');
//  break;
//  default:
//  console.log('Dia inválido'); // será execcutado quando dayofweef não for 1, 2 ou 3
// }

// let preço = parseFloat(prompt('Coloque seu valor'));
// let valorfinal10 = preço - 10*preço/100;
// let valorfinal5 = preço - 5*preço/50;

// if (preço >= 100) {
//     alert('Voce ganhou um desconto de 10%. O preço final é: R$' + valorfinal10);
// } else if (preço >=50 ) {
//     alert('Voce recebeu um desconto de 5%. O preço final é R$' + valorfinal5);
// }
// let dificuldade = prompt('Insira a dificuldade do seu jogo', 'Digite a dificuldade de 1 a 5');
// let pontos = parseFloat(prompt('Quantos pontos você fez?'));
// switch(dificuldade){
// case '1':
// coeficiente = 1;
// pontos = pontos*coeficiente;
// break;
// case '2':
// coeficiente = 2;
// pontos = pontos*coeficiente;
// break;
// case '3':
// coeficiente = 3;
// pontos = pontos*coeficiente;
// break;
// default:
// conta1= 'Não colocou o que foi pedido';
// }
// alert('Parabens você conseguiu ' + pontos + ' pontos')

// exercico 1
// let numero = parseInt(prompt(' Digite um numero: '));
// if (numero % 2 === 0) {
// alert(' O número é par' ); } 
// else {
// alert(' O Número é impar ')
// }



// exercico 2
// let idade = prompt('Digite sua idade:')
// if (idade >= 1 && idade <= 12) {
//     alert('Você faz parte do grupo de crianças.');
// } else if (idade >= 13 && idade <= 17) {
//     alert('Você faz parte do grupo de Adolescentes.');
// } else if (idade >= 18 && idade <= 59) {
//     alert('Você faz parte do grupo de adultos.')
// } else if (idade >= 60) {
//     alert(' você faz parte do grupo de idosos.')
// } else {
//     alert('Digite uma idade!')
// }

// exercicio 3
// 
//  exercicio 4
/* const operacao = prompt("Escolha a operação desejada: (soma, subtração, multiplicação, divisão)");

const numero1 = parseFloat(prompt("Digite o primeiro (1) número da sua escolha:"));
const numero2 = parseFloat(prompt("Digite o segundo (2) número da sua escolha:"));

let resultado;

switch (operacao) {
  case "soma":
    resultado = numero1 + numero2;
     case "Soma":
    resultado = numero1 + numero2;
    break;
  case "subtração":
    resultado = numero1 - numero2;
    case "Subtração":
    resultado = numero1 - numero2;
    case "Subtracao":
    resultado = numero1 - numero2;
    case "subtracao":
    resultado = numero1 - numero2;
    break;
  case "multiplicação":
    resultado = numero1 * numero2;
    case "multiplicação":
    resultado = numero1 * numero2;
    case "Multiplicacao":
    resultado = numero1 * numero2;
     case "multiplicacao":
    resultado = numero1 * numero2;
    break;
  case "divisão":
    resultado = numero1 / numero2;
     case "Divisão":
    resultado = numero1 / numero2;
      case "Divisao":
    resultado = numero1 / numero2;
     case "divisao":
    resultado = numero1 / numero2;
    break;
  default:
    alert("Essa operação é inválida. Tente novamente!");
    break;
}

if (resultado !== undefined) {
  alert(`Resultado da operação ${operacao}: ${resultado}`);
} */  

//exercicio5

/* const numero = parseInt(prompt("Digite um número para a tabela de multiplicação:"));
const limite = parseInt(prompt("Digite o limite da tabela de multiplicação:"));


if (isNaN(numero) || isNaN(limite)) {
  alert("Por favor, insira valores os numéricos da sua escolha.");
} else {
  alert(`Tabela de Multiplicação do ${numero} até o limite ${limite}:\n\n${gerarTabelaMultiplicacao(numero, limite)}`);
}

function gerarTabelaMultiplicacao(numero, limite) {
  let tabela = "";
  for (let i = 1; i <= limite; i++) {
    tabela += `${numero} x ${i} = ${numero * i}\n`;
  }
  return tabela;
} */

//exercicio 6

/* const numero = parseInt(prompt("Digite um número:"));

let primo = true;

if (numero <= 1) {
  primo = false;
} else {
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      primo = false;
      break;
    }
  }
}
if (primo) {
  alert(`${numero} é um número primo.`);
} else {
  alert(`${numero} não se classifica como um número primo.`);
} */

//exercicio 7

/* const numero = parseInt(prompt("Digite um número:"));

if (isNaN(numero)) {
  alert("Por favor, insira um número de sua escolha.");
} else {
  for (let i = numero; i >= 0; i--) {
    alert(i);
  }
} */

//exercicio 8

// const nota = parseFloat(prompt("Digite a sua nota de acordo com sua avaliação:"));
// let classificacao;
// if (isNaN(nota)) {
//  classificacao = "Nota inválida";
// } else if (nota >= 9) {
//  classificacao = "A :)";
// } else if (nota >= 8){
//  classificacao = "B :)";
// } else if (nota >= 7 )
//  classificacao = "C :/";
// else if (nota >= 6) {
//  classificacao = "D :(";
// } else if (nota >= 5) {
//  classificacao = "E :(";
// } else {
//  classificacao = "F :(";
// }

// exercicio 9

// let num = prompt('digite um numero')
// for (let i = 0; i < num; i++) {
//     if (i === num) {
//         break;
//     }
//      console.log ('estrelas'+ i);
// }
