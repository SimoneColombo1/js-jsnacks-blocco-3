let arrayA= [8, 7, 4,3, 1, 0, 4];
let arrayB= [3,4,5,1,3,1,3,5,1,41,4,1313,3];
if(arrayA.length < arrayB.length){

    while (arrayA.length < arrayB.length){
  
    arrayA.push(Number.parseInt(Math.random()*10));
}}
else{
    while (arrayB.length < arrayA.length){
  
        arrayA.push(Number.parseInt(Math.random()*10));
}


}

console.log(arrayA, arrayB);