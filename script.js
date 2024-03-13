let string=' '
let buttons=document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
    if(e.target.innerHTML==='='){
        string=eval(string)
        document.querySelector('input').value=string;
    }
    else if(e.target.innerHTML==='C'){
        string=''
        document.querySelector('input').value=string;
    }
    else if(e.target.innerHTML==='%'){
      let whole_number=document.querySelector('input').value
      let percentage=prompt('Enter Percentage of the given Number')
      string=((percentage/100)*whole_number).toString();
      document.querySelector('input').value=string;
    }
    else if(e.target.innerHTML==='^'){
        let base=document.querySelector('input').value;
        let exponent=prompt('Enter the Power')
        string=Math.pow(base,exponent).toString();
        document.querySelector('input').value=string;   
    }
    else if(e.target.innerHTML==='√'){
        let number=document.querySelector('input').value
        string=Math.sqrt(number).toString()
        document.querySelector('input').value=string;
    }
    else{
    console.log(e.target)
    string=string+e.target.innerHTML;
    document.querySelector('input').value=string;
    }
    })
})