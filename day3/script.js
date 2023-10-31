const h1Element = document.getElementById("h1-elem");
const h1Value=h1Element.innerText;



const containerElement= document.getElementById("container");
const newElement= document.createElement("p");
newElement.innerText='creating new paragraph';

console.log(newElement);
containerElement.append(newElement);
containerElement.style.backgroundColor='green';
containerElement.style.color='white';








console.log(h1Element);
console.log(h1Value);
h1Element.innerText='Updated h1 text';



const paragraphElement=document.getElementById("para-1")
paragraphElement.innerText='update p1 again'

paragraphElement.remove();// removing paragraph


console.log(paragraphElement);








//const pElement=document.getElementById("p-elem");
//const pValue = pElement.innerText;
//console.log(pValue);
//pElement.innerText='Updated p text';
//console.log(pElement);


//const divElement = document.getElementsByClassName("div-elem");
//console.log(divElement);
