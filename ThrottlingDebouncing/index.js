const btn=document.getElementById('btn');
const txt=document.getElementById('text');

function troattling(func,delay){
    let id=false
    return function(){
        if(!id){
           func();
           id=true;
           setTimeout(()=>{
            id=false;
           },delay)
        }
    }
}

function debouncing(func,delay){
    let id
    return function(){
       clearTimeout(id)
       id=setTimeout(()=>{
         func();
        },delay)
    }
}

function generateRandom(){
    let num= Math.floor(Math.random() * (50 - 1 + 1))
    txt.innerText=num
}

// btn.addEventListener('click',troattling(generateRandom,3000))
btn.addEventListener('click',debouncing(generateRandom,3000))