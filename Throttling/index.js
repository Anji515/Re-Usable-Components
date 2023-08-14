const btn=document.getElementById('btn');

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

