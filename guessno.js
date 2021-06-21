const button=document.getElementById('submit-bt');
const message=document.getElementById('message');
let randomno=Math.floor(Math.random() * 100);
let timeleft=6;
button.addEventListener('click',function(e)
{

console.log(randomno);
    console.log(randomno);
    const inputvalue=document.getElementById('inputno').value;
     timeleft--;
 

  if(isNaN(inputvalue) || inputvalue > 100 || inputvalue <1)
  {
   
     message.innerHTML='<h2 style="color:orange;">Please Enter correct Number Between 1 to 100 </h2>';
     timeleft++;
 
  }


    else if(inputvalue == randomno)
    {
        message.innerHTML='<h2 style="color:green;">Congulation!! Your Guess was Correct</h2>';
        button.disabled = true;
        
    }
    else if(inputvalue<randomno)
    {
       
        message.innerHTML=`<h2 style="color:red;">Too low<br> <br> You have ${timeleft} Remining</h2>`;

    }

   
    else if(inputvalue>randomno){

        
        message.innerHTML=  `<h2 style="color:red;">Too High<br> <br> You have Remaining ${timeleft} Count </h2>`;

    }

if(timeleft == 0)
    {
        if(inputvalue == randomno){
            message.innerHTML='<h2 style="color:green;">Congulation!! Your Guess was Correct</h2>';
            button.disabled = true;
        }
        else{
            message.innerHTML= `<h2 style="color:red;">Game Over!! Correct no is ${randomno} </h2>`;
            button.disabled = true;
        }
       
    }
    e.preventDefault();

});
