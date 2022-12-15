// f = farheit => (farheit-32) * 5/9  ;
//c = celsius => celsius * 9/5 + 32  ;

const Button = document.getElementById("Btn");
const input = document.getElementById("Input")
let viewfinder = document.getElementById("viewfinder")
let DataInput;
let total;

input.addEventListener('change', (e) => {
    DataInput = e.target.value

})
Button.addEventListener("click",conversion)



function conversion(){

   let celsiusExist = DataInput.toUpperCase().includes('C')
   let farhrenheitExist = DataInput.toUpperCase().includes('F')

   if(!celsiusExist && !farhrenheitExist){
    throw alert('Verifique o grau')
   }

   let degree = Number(DataInput.toUpperCase().replace("F", ""))
   let formula =  (farheit) =>{total = (farheit-32) * 5/9};
   let degreeSign = farhrenheitExist ? "ºC" : "ºF"

    if(celsiusExist){
    degree = Number(DataInput.toUpperCase().replace("C", ""))
    formula =  (celsius) =>{total= celsius * 9/5 + 32 };
   }
  
   
   formula(degree)
   viewfinder.innerHTML= total.toFixed(0) + degreeSign
    checked()
  
}
function checked(){
     if(total >= 50){
    return document.body.style.backgroundColor="brown"
    
   }
   else if(total >= 20 && total<= 49){
   return document.body.style.backgroundColor="white"
   
   }
   else if(total < 19){
   return document.body.style.backgroundColor="blue";
}
}

try{
    conversion
}
catch(e){
    console.log(e.message)
}