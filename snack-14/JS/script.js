let UtenteT= Number.parseInt(prompt('inserisci il timer'));

let timer= setInterval(  function(){
    UtenteT--;
    console.log(UtenteT)
    if(UtenteT <= 0){
        clearInterval(timer);
        alert('tempo scaduto')
    }
},1000)







