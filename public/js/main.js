// f = farheit => (farheit-32) * 5/9  ;
//c = celsius => celsius * 9/5 + 32  ;

let Button = document.getElementById("Btn");
let input = document.getElementById("Input")
let viewfinder = document.getElementById("viewfinder")
let DateInput;

input.addEventListener('change', (e)=> {
    DateInput = e.target.value

})
Button.addEventListener("click",conversion)



function conversion(){
   let celsiusExist = DateInput.toUpperCase().includes('C')
   let farhrenheit = DateInput.toUpperCase().includes('F')

   if(!celsiusExist && !farhrenheit){
    throw new Error('Verifique o grau')
   }

   let degreeu = Number(DateInput.toUpperCase().replace("F", ""))
   let formula =  farheit => (farheit-32) * 5/9  ;
   let degreuSign = "C"

   if(celsiusExist){
     degreeu = Number(DateInput.toUpperCase().replace("C", ""))
    formula =  celsius => celsius * 9/5 + 32  ;;
    degreuSign = "F"
   }
   return  viewfinder.innerHTML= formula(degreeu) + degreuSign
    console.log( DateInput)
    
}


try{
    conversion 
}
catch(e){
    alert(e.message)
}