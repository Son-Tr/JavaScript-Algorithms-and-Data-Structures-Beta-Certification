const input = document.getElementById("user-input");
const check = document.getElementById("check-btn");
const clear = document.getElementById("clear-btn");
const result = document.getElementById("results-div");

const checkNumber = (value) => {
   if (!value) {
      alert("Please provide a phone number")
      return;
   }
   
   const regex = /^(1\s?)?(\d{3}|\(\d{3}\))[\-\s]?\d{3}[\-\s]?\d{4}$/;
   const pTag = document.createElement("p")
   pTag.className= regex.test(value)? "results-true":"results-false";
   
   pTag.textContent = regex.test(value)? `Valid US number: ${value}`:`Invalid US number: ${value}`
   result.appendChild(pTag)
}



check.addEventListener("click", () => {
   checkNumber(input.value)

})
input.addEventListener("keydown", (e) => {
   if (e.key == "Enter") {
      checkNumber(input.value)
   }
})


clear.addEventListener("click", () => {
   
   return result.innerHTML = ""

})