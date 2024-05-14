const tail= [];
const Nutente= Number.parseInt(prompt('inserisci un numero'));

for(let i=0; i < Nutente; i++){

   tail.push(Math.floor (Math.random() *101));
   
   
   
 

}


if(Nutente>5){
    let print= tail.slice(-5);


    console.log(print);


  }
  else{
    console.log('numero troppo piccolo inserirne uno più grande');
  }
  
 