



  let num =0;
  // const intervalId = setInterval(mytimer, 1000)


let intervalId;
function start(){
intervalId=setInterval(mytimer, 1000);

}


  function mytimer(){
    
      var a =++num;
    display()
    
  }


  
const display =()=>{
  document.getElementById('num').innerText =num;
}


function stop(){
  
  
  clearInterval(intervalId);
  
};
