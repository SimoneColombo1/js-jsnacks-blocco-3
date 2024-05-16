const ParolaA= prompt('inserire una parola');
const ParolaB= prompt(`inserire un' altra parola`);


if(uguaglianza(ParolaA,ParolaB)==true){
    console.log(ParolaA,ParolaB);
}
else if(ParolaA.length > ParolaB.length){
    console.log(ParolaA)

}
else{
    console.log(ParolaB);
}







function uguaglianza(SecondaParola,PrimaParola){
if(SecondaParola.length===PrimaParola.length){
    return true;
}
else{
    return false;
}

}


