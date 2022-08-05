
let string="";
const buttons=document.querySelectorAll('.button');
//syntax for making array
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(event)=>{
        // console.log(event);
        if(event.target.innerHTML=='=')
        {
            string=eval(string);
            document.querySelector('.input').value=string;
        }
        else if(event.target.innerHTML=='C'){
            string="";
            document.querySelector('.input').value=string;
        }
        else if(event.target.innerHTML=='%')
        {
            let n=+document.querySelector('.input').value;
            n=n/100;
            //use of unary operator to convert astring into integer
            document.querySelector('.input').value=n;
        }
        else{
            string+=event.target.innerHTML;
            document.querySelector('.input').value=string;
        }
    })
})