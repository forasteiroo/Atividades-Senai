
var cadastrodepeças = ["ab" , "peça1" , "peças2", "peças3", "peças4", "peças5", "peças6", "peças7", "peças8", "peças9", "peças10", "peças11"];
console.log("quantidade de peças");

if(cadastrodepeças.length > 10){
console.log("Capacidade insuficiente");
}
else{
console.log("Capacidade Suficiente");
}

console.log("Quantidade de caracteres");

for ( contador = 0 ; contador < cadastrodepeças.length ; contador++){

var peçaatual = cadastrodepeças[contador];
//vai receber a informção do cadastrodpeças


if(peçaatual.length <3){
console.log(peçaatual + "Não validado, peças possui caracteres inferior a 3, NÃO VALIDADO");
}

else{
console.log(peçaatual +":Peças cadastrada");
// o : da espeço entre a palavra
}
}

console.log("pesopeça");

var pesopeçagrama = 50;

if(pesopeçagrama >= 100){
console.log("Peça aceita, dentro do requisitado");
}
else{
    console.log("Peso não aceito, valor insuficiente");

}