// let senha = "JJ1907"
// let senhaDigitada = prompt("Digite a sua senha: ");
// let limiteDeTenativas = 3;

// while(limiteDeTenativas >0){
//     limiteDeTenativas = limiteDeTenativas -1;
//     if(senhaDigitada.toLowerCase().trim() === senha.toLowerCase().trim()){
//         alert("Acesso permitido");
//         break;
//     }'
//     else{
//         if (limiteDeTenativas === 0) {
//             alert("Numero de tentativas esgotado, acesso negado");
//             break;
//         }
//         alert("Senha incorreta, tentativas restantes: ".concat(limiteDeTenativas));
//         senhaDigitada = prompt(" Digite novamente: ")
        
//     }
// }

//Desafio 02

// let produtos = ["Arroz","Feijão","Leite","Pão","Café"];
// produtos.forEach((produto, indice)=>{
//     console.log(indice + 1, "-", produto);
// });

//Desafio 03

// let jogos = ["brawl stars","Delirio culinario","Roblox","tomb of the mask","kahoot!"];
// let jogosPesquisa = prompt("Digite o jogo que deseja procurar: ");

//  if (jogos.includes(jogosPesquisa)) {
//     alert("Produto procurado " + jogosPesquisa + "O jogo está na lista!");
// } else {
//     alert("Produto procurado " + jogosPesquisa + " Jogo não encontrado!");
// }

//Desafio 04

// let livros = ["Como eu era antes de voce","Para todos os garotos que ja amei","elementos","moana","clarisse lispector"]

// let posicao = livros.indexOf("clarisse lispector")
// if(posicao === -1) {
//     console.log("Livro não encontrado")
// }else{
//     console.log("Livro encontrado na posição "+ posicao + ".")
// }

//Desafio 05

// let tarefas = ["Estudar HTML","Estudar CSS","Praticar JavaScript","Estudar Laravel","Revisar conteúdo"]; 
// console.log("lista de tarefas antes das alterações: ")
// console.log(tarefas)
// tarefas.splice(3,1)

// tarefas.splice(3, 1, "Revisar sobre Laravel")

// console.log("Lista apos um item ser removido e outro ser substituido")
// console.log(tarefas)

//Desafio 06

// let nomes = [
// "Ana Julia","Carlos","Pedro","Beatriz","Lucas","Mariana"];
// nomes.sort();
// console.log(nomes);

//Desafio 07

// let notas = [7, 8, 9, 6, 10];
// let indice = 0;
// while (indice < notas.length) {
//     if (notas[indice] < 0 || notas[indice] > 10) {
//         console.log("Nota inválida encontrada: " + notas[indice]);
//     }
//     indice++;
// }
// console.log("A lista contém a nota 10? " + notas.includes(10));
// let posicaoNota = notas.indexOf(8);
// console.log("Posição da nota 8: " + posicaoNota);
// let posicaoNotaIncorreta = notas.indexOf(6);
// if (posicaoNotaIncorreta !== -1) {
//     notas.splice(posicaoNotaIncorreta, 1);
// }
// console.log("Notas após remover a nota incorreta:");
// notas.forEach(function(nota) {
//     console.log(nota);
// });
// notas.sort(function(a, b) {
//     return a - b;
// });
// console.log("Notas em ordem crescente:");
// console.log(notas);

//Desafio 08

// let participantes = ["Amanda","Carlos","Maria","Paulo","Lucilene"];
// participantes.join(", ")
// console.log(participantes.join(", "))

//Desafio 09

// let notas = [8, 7, 9, 4, 6, 10];

// notas.some(function(nota){
//     return nota < 5;
// })

// if(notas.some(function(nota){return nota < 5 })){
//     console.log("Existe pelo menos um aluno que precisa de recuperação.")
// }else{
//     console.log("Não existe alunos que precisam de recuperação.")
// }

//Desafio 10

// let notas = [8, 7, 3, 5, 6, 10];
// let validas = notas.every(function(Nota){
//     return nota => 0 && nota <= 10;
// })
// if(validas){
//     console.log("Todas as notas são validas")
// }else{
//     console.log("Existem notas fora do intervalo permitido")
// }
