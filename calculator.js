
//   const
//   buttons = document.getElementsByTagName("button"),
//   screen = document.getElementById('screen');


// Array.from(buttons).forEach(button =>
//   button.addEventListener("click", showNumber));

// function showNumber(event) {
//   const button = event.target;
//   if(screen.innerHTML==0){
//     screen.innerHTML=button.value;
//   }
//    else if (button.value != 5 ) { screen.innerHTML += button.value; }
//   else  {screen.innerHTML +=5 ;}
// }

//   const add=document.getElementById('add'),
//         multiply=document.getElementById('mulltiply'),
//         subtract=document.getElementById('subtract'),
//         divide=document.getElementById('divide'),
//         clear=document.getElementById('clear');
//         function doMath(){
//           if(button.value=='='){
//             screen.innerHTML=Number.parseFloat(button.value);
//           }
//         }
        

        
        
        class calculator {
          

          constructor(buttons, screen){
            this.buttons= document.getElementsByTagName("button");
            this.screen = document.getElementById('screen');
          }
          showNumber(button){
            
            if(this.screen.innerHTML==0){
                   this.screen.innerHTML=button.value;
                }
                 else if (button.value != 5 ) { this.screen.innerHTML += button.value; }
                else  {this.screen.innerHTML +=5 ;}
              }
          doSomething() {
            Array.from(this.buttons).forEach(button =>
              button.addEventListener("click",() =>{
                this.showNumber(button);
            }));
          }
          

        }
        
        const newCalculator = new calculator()
        newCalculator.doSomething();
  