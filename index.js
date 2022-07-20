// Code your solutions in this file

const gifts = ["teddy bear", "drone", "doll"];
function wrapGift(gift) {
  console.log(`Wrapped ${gift} and added a bow!`);
}
function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
      console.log(`Wrapped ${gifts[i]} and added a bow!`);
      debugger;
    }
    return gifts;
  }
  wrapGifts(gifts);

 const names = ["Charlie", "Samip", "Ali"];
const events = 'birthday';
console.log(names.length)


function writeCards(namesNew,eventNew) {  
    let newArr = [];
    for (let i =0; i < namesNew.length; i++) {
        newArr.push(`Thank you, ${namesNew[i]}, for the wonderful, ${eventNew} gift!`);
    }
   // return newArr;
    console.log(newArr)
}
//console.log(writeCards(names,events))
writeCards(names,events)

const num=10
function countDown(num){
    while(num >= 0) {
        console.log(num);
        num--;
    }
   // return num;
}
countDown(num);