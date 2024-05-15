const Frutta= ['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'  ];

Frutta.push('pesca');


let ricerca= false; 

for (let i=0; i < Frutta.length; i++){
    if (Frutta[i]=== 'cocomero'){
        ricerca= true;
    }
}

if(ricerca=true){

    console.log('Trovato! Devo solo preparare il cocktail.');
}
else {
    console.log('Oh no, devo uscire a comprare il cocomero!');
}