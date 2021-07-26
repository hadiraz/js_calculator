const calcKeypad = document.querySelector(".calc-keypad");
const calcDisp = document.querySelector(".calc-display");
const calcResultDisp = document.querySelector(".calc-result-display");
const calcOperatingDisp = document.querySelector(".calc-operating-display");
const result = document.querySelector(".result");
const show = document.querySelectorAll(".show");
const clearAll = document.querySelector(".clear-all");
const allBtns = document.querySelectorAll(".circle-btn");
const clear = document.querySelector(".clear");
let keyboard = "";

//-------
// ** this method just show the elements that have the "show" class in index.html file
function showDisplay(event){
    const inputedVal = event.target.innerText;
    result.classList.remove("active");
    if(calcOperatingDisp.innerText == "0"){
        return calcOperatingDisp.innerText = inputedVal;
    }
    return calcOperatingDisp.innerText += inputedVal;
}
show.forEach(function(item , index){
    item.addEventListener("click" , showDisplay);
});
//---------
// ** this method calculte the entered values and operator
result.addEventListener("click", calcResult);
function calcResult(event){
    const calcResult = eval(calcOperatingDisp.innerText);
    const resultBtnClasses = result.classList;
    result.classList.add("active");
    return calcResultDisp.innerText = calcResult ;
}
//--------
// ** this method is used to applying somethings on all buttons
allBtns.forEach(function(item,index){
    // item.addEventListener("click" , function(){
    //     const allClasses = item.classList;
    //     allClasses.remove("back-color-orange");
    //     allClasses.add("back-color-orange");
    //     alert("hi");
        
    // });
});
//---------
// ** this method used to clearing all the calc's display 
clearAll.addEventListener("click" , clearAllDisplay);
function clearAllDisplay(event){
    calcOperatingDisp.innerText = "";
    calcResultDisp.innerText = "0";
}
//---------
// ** this method is for clear the last character in the calc's display
clear.addEventListener("click" , clearLastChar);
function clearLastChar(event){
    const allChars = calcOperatingDisp.innerText;
    if(allChars.length == 1){
        return calcOperatingDisp.innerText = 0;
    }
    const charCut = allChars.substring(0 , (allChars.length)-1);
    return calcOperatingDisp.innerText = charCut;
}
//--------
document.addEventListener("keydown", getKeydown);
function getKeydown(event){
    keyboard = event.key;
    if(keyboard == "Backspace"){
            clearLastChar("");
        }
    if(keyboard == "Enter"){
            calcResult("");
        }
    show.forEach(function(item , index){
        if(keyboard == item.innerText){
            const inputedVal = item.innerText;
            if(calcOperatingDisp.innerText == "0"){
                return calcOperatingDisp.innerText = inputedVal;
            }
            return calcOperatingDisp.innerText += inputedVal;
        }
    });
}