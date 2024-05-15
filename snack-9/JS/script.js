let lista=[];



while (lista.length < 6){
    const NumUtente= Number.parseInt(prompt('inserisci un numero'));
    if(NumUtente % 2 == 1){
        lista.push(NumUtente);
    }

}
console.log(lista);