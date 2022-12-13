// f = farheit => (farheit-32) * 5/9  ;
//c = celsius => celsius * 9/5 + 32  ;

let Button = document.getElementById("Btn");
let input = document.getElementById("Input")
let viewfinder = document.getElementById("viewfinder")
let DataInput;

input.addEventListener('change', (e) => {
    DataInput = e.target.value

})
Button.addEventListener("click",conversion)



function conversion(){

   let celsiusExist = DataInput.toUpperCase().includes('C')
   let farhrenheitExist = DataInput.toUpperCase().includes('F')

   if(!celsiusExist && !farhrenheitExist){
    throw new Error('Verifique o grau')
   }

   let degree = Number(DataInput.toUpperCase().replace("F", ""))
   let formula =  farheit => (farheit-32) * 5/9  ;
   let degreeSign = farhrenheitExist ? "ºC" : "ºF"

   if(celsiusExist){
    
    degree = Number(DataInput.toUpperCase().replace("C", ""))
    formula =  celsius => celsius * 9/5 + 32 ;
   }
   
   return  viewfinder.innerHTML= formula(degree) + degreeSign
    
}


try{
    conversion
}
catch(e){
    alert(e.message)
}