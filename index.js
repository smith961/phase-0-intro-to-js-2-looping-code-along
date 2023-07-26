// Code your solutions in this file
const name = ["Guadalupe", "Ollie", "Aki"];
const event = "surprise";

function writeCards(name , event){
    let message = [];
for (let i=0; i < name.length; i++) {
message.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
}
return message;
}
function countDown(){
    let i=0;
    while (i < 10){
        console.log (i)
        i++;
    }
    console.log(i);
}


