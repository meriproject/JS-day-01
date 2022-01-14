const button=document.querySelector('button');
const input=document.querySelector('input');

let howManyClicks=0;

button.addEventListener('click' ,function()

{
    howManyClicks+=1;
    button.innerText=howManyClicks;
    button.style.backgroundColor=input.value;
    
}
);
console.log(button);