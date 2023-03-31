let string=" ";
let total = 0;
let buttons= document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
         if(e.target.innerText == '='){
            string= eval(string);
            document.querySelector('#input').value=string;
         } 
         else if(e.target.innerText == 'C'){
            string= '';
             total = 0;
            document.querySelector('#input').value='';

            
         }
         else if(e.target.innerText == 'CE'){
            total= 0;
            string= '';
            document.querySelector('#input').value= string;

         }
         else if( e.target.innerText == '⬅️'){
            var ev = document.getElementById('input').value;
            document.getElementById('input').value= ev.slice(0,-1);
             
         }

         else{
            console.log(e.target);
            string=string + e.target.innerText;
            document.querySelector('#input').value=string;
         }
    })
})





