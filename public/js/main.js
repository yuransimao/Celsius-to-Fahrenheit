let Button = document.getElementById("Btn");
let input = document.getElementById("Input")
let viewfinder = document.getElementById("viewfinder")
let DateInput;

input.addEventListener('change', (e)=> {
    DateInput = e.target.value

})
Button.addEventListener("click",conversion)



function conversion(){
   const celsiusExist = DateInput.toUpperCase().includes('C')
   const farhrenheit = DateInput.toUpperCase().includes('F')

   if(!celsiusExist && !farhrenheit){
    throw new Error('Verifique o grau')
   }
    console.log( DateInput)
    
}


try{
    conversion 
}
catch(e){
    alert(e.message)
}