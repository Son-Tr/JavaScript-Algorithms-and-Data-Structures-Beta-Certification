const number = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("output");

const arrNumber = [
  [1000, "M"],
  [900, "CM"],
  [500, "D"],
  [400, "CD"],
  [100, "C"],
  [90, "XC"],
  [50, "L"],
  [40, "XL"],
  [10, "X"],
  [9, "IX"],
  [5, "V"],
  [4, "IV"],
  [1, "I"],
];

 /* ------------------- check number and convert into roman ------------------ */
const checkAndConvert = (num) => {

  if (!num || !/^-?[0-9]\d*(\.\d+)?$/.test(num)){
    result.classList.add("result-wrong");
   return result.innerHTML = "Please enter a valid number"
  }else if (num < 1) {
    result.classList.add("result-wrong");
   
     return result.innerHTML = "Please enter a number greater than or equal to 1"
  } else if (num > 3999) {
    result.classList.add("result-wrong");
    
    return result.innerHTML = "Please enter a number less than or equal to 3999"
  } else { 
    result.classList.remove("result-wrong");
   return result.innerHTML=convertRoman(num);
  }
}

/* ---------------- convert number into roman number function --------------- */
const convertRoman= (num)=>{
  let roman= '';
  if ( num===0){
    return "";
  }
  for (let i= 0; i<arrNumber.length;i++ ){
    if(num>=arrNumber[i][0]){
      return roman = arrNumber[i][1]+convertRoman(num-arrNumber[i][0])
    }
  }
}

 /* -------------------------------- click btn ------------------------------- */
convertBtn.addEventListener("click", () => {
  checkAndConvert(number.value);
  number.value="";
})

/* ----------------------------- // press enter ----------------------------- */
number.addEventListener("keydown", (e) => {
  if(e.key =="Enter"){
  checkAndConvert(number.value);
  number.value="";
  }
})


