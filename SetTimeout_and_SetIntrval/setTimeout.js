// setTimeout
function greet(){
    console.log('Hello world')
    console.log('Delay Ends')
}

console.log('Delay starts')
setTimeout(greet,2000)


// Set Interval

function printMessage() {
    console.log('Interval tick');
  }
  
  const intervalId = setInterval(printMessage, 1000); 

  setTimeout(()=>{
      clearInterval(intervalId);
  },5000)