var alunos = 20;

for(var contador = 0 ; contador < alunos ; contador ++ ){
    // ++ significasomar mais 1
 if(contador == 0){
     console.log("O numero é zero (0)");
    }
else if(contador %  2 == 0 ){
    console.log("Numero" + contador +" é PAR");
    //+ par soma o atributo dentro da variavel
    //% peg o resto d somatoria
}else{
    console.log("Numero" + contador + " é IMPAR");
}
}
