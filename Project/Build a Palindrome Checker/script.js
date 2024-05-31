const input = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

// check Palindrome function
 const checkPalindrome = (inputValue)=>{
   if(inputValue === ""){
     alert("Please input a value");
      return
   }

    const toLowerCaseStr = inputValue.replace(/[^A-Za-z0-9]/gi, '').toLowerCase()
    if(toLowerCaseStr === [...toLowerCaseStr].reverse().join('')){
      result.innerHTML = `
      <strong>${inputValue}</strong> is a palindrome
      `
    }else{
      result.innerHTML = `
      <strong>${inputValue}</strong> is not a palindrome
      `
    }
    
 }

// Event click checkBtn
 checkBtn.addEventListener("click", ()=>{
   checkPalindrome(input.value);
    input.value = "";
 } )

// Event press Enter
 input.addEventListener("keydown", (e)=>{
   if(e.key ==="Enter"){
     checkPalindrome(input.value)
     input.value = "";
   }
 })