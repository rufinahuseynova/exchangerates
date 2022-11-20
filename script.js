const input = document.querySelector('input') 
const deyer = document.querySelector('.deyer') 
const a = document.querySelectorAll('.buying-azn ul li') 
const b = document.querySelectorAll('.selling-azn ul li') 
const p= document.querySelector('.calc p')
const sag = document.querySelector('.sag')
let c = 'RUB'; 
let v = 'USD'; 
function Valyuta(){
    fetch(`https://api.exchangerate.host/latest?base=RUB&symbols=USD`)
.then(response=>response.json()) 
.then(data=>(  
    p.innerHTML = `1 RUB = ${(Object.values(data.rates)[0])} USD`,  
    sag.innerHTML = `1 USD = ${1/(Object.values(data.rates)[0])} RUB`  )) }
input.addEventListener("keyup",function(){ 
fetch(`https://api.exchangerate.host/latest?base=RUB&symbols=USD`)
.then(response=>response.json()) 
.then(data=>(  
    deyer.innerHTML=input.value*(Object.values(data.rates)[0]) )) })
for(let i =0;i<a.length;i++){ 
    a[i].addEventListener("click",function(){ 
        c=(a[i].textContent) 
        fetch(`https://api.exchangerate.host/latest?base=${c}&symbols=${v}`) 
        .then(response=>response.json()) 
        .then(data=>( 
            deyer.innerHTML=input.value*(Object.values(data.rates)[0]),
            p.innerHTML =`1${c} = ${Object.values(data.rates)[0]} ${v}`,
            sag.innerHTML =`1${v} = ${1/Object.values(data.rates)[0]} ${c}`))   }) } 
for(let i =0;i<b.length;i++){ 
b[i].addEventListener("click",function(){ 
    v =(b[i].textContent)
    fetch(`https://api.exchangerate.host/latest?base=${c}&symbols=${v}`) 
        .then(response=>response.json()) 
        .then(data=>( 
            deyer.innerHTML=input.value*(Object.values(data.rates)[0]),
            p.innerHTML =`1${c} = ${Object.values(data.rates)[0]} ${v}`,
            sag.innerHTML =`1${v} = ${1/Object.values(data.rates)[0]} ${c}`))  }) }
Valyuta()
for(let i = 0; i < a.length; i++) {
    a[i].onclick = function(){
        var el = a[0];
        while(el)
        { if(el.tagName === "LI"){
               el.classList.remove("valyuta"); }
            el = el.nextSibling; }
      this.classList.add("valyuta");  } }
for(var i = 0; i < b.length; i++) {
    b[i].onclick = function(){
        var el = b[0];
        while(el)
        {  if(el.tagName === "LI"){
                el.classList.remove("valyuta"); }
            el = el.nextSibling; }
        this.classList.add("valyuta");  } }


