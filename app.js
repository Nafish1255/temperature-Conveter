const celsiusField=document.querySelector("#celsius");
const degree=document.querySelector("#degree");
const convertButton=document.querySelector("#convert-button");
const tempType=document.querySelector("#temp-type");
window.addEventListener("load",() =>{
    degree.value="";
    celsiusField.innerHTML="";

})

convertButton.addEventListener("click",(e) =>{
    e.preventDefault();
    convertToCelsius();

    
})
function convertToCelsius(){
    let inputeValue=degree.value;
    if(tempType.value==="fahrenheit"){
        const fahrenheitToCelsius=(inputeValue-32)*(5/9);
        celsiusField.innerHTML=`${fahrenheitToCelsius.toFixed(3)} &deg;
        c` ;

    }
    else if(tempType.value==="kelvin"){
        const kelvinToCelsius=inputeValue-273.15;
        celsiusField.innerHTML=`${kelvinToCelsius.toFixed(3)} &deg;
        c` ;


    }

} 