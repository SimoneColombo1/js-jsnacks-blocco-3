//& array persone

let persone= [ 
    {nome:"gino",
        cognome: "ginetto",
        eta:"15"
    },
    {nome:"carola",
    cognome: "rolandi",
    eta:"45"
}, 
{nome:"ivan",
cognome: "ilterribile",
eta:"12"
},
{nome:"sauro",
cognome: "ermonnezza",
eta:"55"
},
{nome:"rita",
cognome: "hiffilger",
eta:"22"
},
{nome:"piero",
cognome: "peretti",
eta:"21"
},
{nome:"gino",
cognome: "strada",
eta:"18"
},
{nome:"alberta",
cognome: "cisente",
eta:"87"
},
{nome:"giorgio",
cognome: "giorgietti",
eta:"34"
},
{nome:"gina",
cognome: "labambina",
eta:"4"
},
];


let guida=[];
//< ciclo for per inserire gli elementi nell'array guida
for (let i=0; i<persone.length; i++){
if(persone[i].eta<18){
guida.push(persone[i],"non può guidare")

} 
else{
    guida.push(persone[i],"può guidare")
}

    
}
console.log(guida);
