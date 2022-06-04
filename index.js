// Code your solutions in this file
//const gifts = ["teddy bear", "drone","doll"];

const names = ["Guadalupe", "Ollie", "Aki"];
const event ="surprise";


function writeCards(name,event){
    const messages =[]
    for (let index = 0; index < names.length; index++) {
       // const element = names[index];
        messages.push("Thank you, " +names[index]+ ", for the wonderful " +event+ " gift!")
    }
    return messages;
}
console.log(writeCards(names,"surprise"));

function countDown() {
    const myNumber = 10;
    for (let i = myNumber; i >= 0; i--) {
        //const element = array[index];
        //ind.push(num);
        console.log(i);
        
    }
    //console.log(index);
}
countDown(10);
//console.log(ind);
   
  