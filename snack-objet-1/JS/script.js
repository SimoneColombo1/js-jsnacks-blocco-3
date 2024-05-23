//$array automobili

let automobili= [ 
{  marca:'opel',
    modello:'drinzi',
    alimentazione: 'gpl'
},

{  marca:'fiat',
    modello:'fiatella',
    alimentazione: 'benzina'
},
{  marca:'lamborghini',
    modello:'tamarro',
    alimentazione: 'metano'
},
{  marca:'ferrari',
    modello:'schianto-130',
    alimentazione: 'elettrico'
},
{  marca:'fiat',
    modello:'panda rosso',
    alimentazione: 'gpl'
},
{  marca:'pino',
    modello:'carro armato',
    alimentazione: 'metano'
},
{  marca:'opel',
    modello:'open',
    alimentazione: 'elettrico'
},
{  marca:'renault',
    modello:'rino',
    alimentazione: 'metano'
},
{  marca:'peugeot',
    modello:'pidgeon(pokemon molto sottovalutato)',
    alimentazione: 'benzina'
},
{  marca:'fiat',
    modello:'punto e basta',
    alimentazione: 'diesel'
},
{  marca:'jeep',
    modello:'chip',
    alimentazione: 'metano'
},
{  marca:'hyundai',
    modello:'manontornai',
    alimentazione: 'gpl'
}
]

//> ciclo for per dividere gli array
let benzina=[];
let diesel=[];
let resto=[];
for(let i=0; i< automobili.length; i++){
let singole= automobili[i];
if(singole.alimentazione=="benzina"){
benzina.push(singole);

}
else if(singole.alimentazione=="diesel"){
   diesel.push(singole);

}
else{
   resto.push(singole);
 
}

}
console.log(resto);
console.log(diesel);
console.log(benzina);