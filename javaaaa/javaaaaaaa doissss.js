// let numero1, numero2, numero3, numero4;

// numero1 = prompt( ' Coloque sua nota aqui: ' , ' Digite sua nota nesta caixa ' );

// numero2 = prompt( ' Coloque sua nota aqui: ' , ' Digite sua nota nesta caixa ' );

// numero3 = prompt( ' Coloque sua nota aqui: ' , ' Digite sua nota nesta caixa ' );

// numero4 = prompt( ' Coloque sua nota aqui: ' , ' Digite sua nota nesta caixa ' );

// // let notatotal1 = persefloat(prompt('digite sua primeira nota':));
// // let notatotal2 = persefloat(prompt('digite sua segunda nota':));
// // let notatotal3 = persefloat(prompt('digite sua terceira nota':));
// // let notatotal4 = persefloat(prompt('digite sua quarta nota':));

// let soma= (notatotal1 + notatotal2 + notatotal3 + notatotal4) /4;


// alert('A media é: ' + media );



// let numero1,numero2
//  numero1 = prompt('digite sua altura: ' , ' (digite sua nota nesta caixa ' );
//  numero2 = prompt('digite seu peso: ' , ' (digite sua nota nesta caixa ' );

//  let peso = +numero1;
//  let altura = +numero2;
// let media = (peso / (altura*altura));

// alert(' o seu IMC:' + media); 
// alert( imc.tofixed(20))

// 
// let numero1 =prompt("coloque sua senha:");
// let numero2 =prompt("repita usa senha:");
// if (numero1 == numero2) {
//     alert(' sua senha e igual a anterior');
// } else {
//     alert(' sua senha esta errada');
// }

// let numero1 = 7 ;
// let numero2 = 20 ;
// let numero3 = 10 ;

// let estaentre = numero1 > numero2 && numero1 < numero3;

// alert( " o numero está entre");
// let numero1 = parseFloat(prompt('Digite um numero' , 'Aqui'));

// let media = ((numero1 * 1.8) + 32);

// alert( 'A temperatura media agora é de ' + media+'°F');
// let numero1 = parseFloat(prompt('Insira a distancia em km' , 'Aqui'));
// let numero2 = prompt('Converter para qual medida ( m ou cm)' , 'escreva aqui');
// let metro = (numero1 * 1000);
// let centimetro = (numero1 * 100000)

// if(numero2 == 'm' && 'metros'){ 
// alert('A distancia em metros é de' + metro)
// } else { (numero2 == 'cm' && 'centimetros')

// alert( 'A distancia em centimetros é de ' + centimetro);}

// let peso = parseFloat( prompt('digite seu peso '));
// let altura = parseFloat( prompt('digite sua altura '));

// let imc = peso /  (altura ** 2);

// if(imc < 18.5) {
//     alert('você está abaixo do peso');
// } else if (imc >= 18.5 && imc < 25) {
//     alert (' seu peso está normal ');
// }  else if (imc >= 25 && imc < 30) {
//     alert ( ' você está com sobrepeso.');
// } else {
//     alert (' você esta obeso');
// }
// let altura = parseFloat( prompt( ' digite sua altura'));
// let idade =  parseFloat( prompt( ' digite sua idade'));

// if ( idade >= 12 && altura >=1.20){
//     alert ('não pode entra');
// } elise if ( altura < 120 && idade < 12){
//     alert (' não pode entra');
// }


//  else{
//     ('não pode entra');


// let idadeusuario = 35;

// let maioridade = 18;

// if (idadeusuario >= maioridade) {

//     let possuiCNH = true;
    
//     if ( possuiCNH) {
//          alert(' você é maior de idade e possui carteira de habilidade.');

//     } else {
//         alert('você é maior de idade mas não possui carteira de habilitação.');
        
//     }
// } else {
//     alert(' você é menor de idade e não pode dirigir');
// }

//  for ( lett i = 0; 1 < 100; 1++) {
//     console.log(1);
//  }

// let i = 0
// while(i < 10 )  {
//     console.log(i);
//     i++;
// }



// function gerarnumeroaleatorio()  {
//     return Math.floor(math.random() * 100) +1;
// }

// function jogadivinhacao() {
//     const numeroaleatorio = gerarnumeroaleatorio();
//     let tentativasrestantes = 5;

//     alert(' Vamos jogar o jogo da adivinhação!');
//     alert(' tente adivinhar um numero entre 1 e 100, você tem 5 tentativas')

// for ( let i = 1; 1 <= 5; i++) {
//    const palpite = parseInt(prompt( 'tentativa $(i). Digite seu palpite'));
   
// if (isNaN(palpite)) {
//         alert (' Digite um numero');
//         continue;
//     }

// if ( palpite === numeroaleatorio) {
//  alert( ' Parabens! Você acertou o numero em $ {i} tentativas.');
//  return;
// } else if ( palpite < numeroaleatorio) {
//     alert( ' tente um numero maior');
// } else {
//     alert( 'tente um numero menor');
// }

// tentativasrestantes--;

// alert('tentativas restantes:${ tentativasrestantes}');

// if ( tentativasrestantes === 0) {
//     alert('sua tentativas acabaram.o numero era $ {numeroaleatorio}.');
//     return;
// }

let idade = parseFloat(prompt('digite sua idade'));
let idade1 = 18
if (idade >= idade1)
 console.log(voce tem idade e pode entrar);