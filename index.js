const val = document.getElementById('display');

const  DS_Add = (v) => {
val.value += v;
}

const exe = () => {
    val.value = eval(val.value);
}

const cls = () => {
    val.value = ""
}

const del = () => {
    val.value=val.value.substr(0,val.value.length-1);
}



// const calculator = document.querySelector(".calculator");
// const keys = document.querySelector(".calculator__keys");
// const display = document.querySelector(".calculator__display");

// keys.addEventListener("click", (e) => {
//   if (e.target.matches("button")) {
//     const key = e.target;
//     const action = key.dataset.action;
//     const keyContent = key.textContent;
//     const displayedNum = display.textContent;



    
// }
// }
// );



// if (key) {
//     if (displayedNum === '0'){
//         display.textContent = displayedNum + keyContent;
//         console.log(displayedNum);
//     }
// } else {
//       display.textContent = keyContent;
//   }

//   if (
//     action === "add" ||
//     action === "subtract" ||
//     action === "divide" ||
//     action === "multiply"
//   ) {
//     key.classList.add("is-depressed");
//   }

//   if (action === "clear") {
//     console.log("Clear Key");
//   }
//   if (action === "calculate") {
//     console.log("Equals Key");
//   }
//   if (action === "decimal") {
//     display.textContent = displayedNum + ".";
//   }
//   Array.from(key.parentNode.children)
//     .forEach(k => k.classList.remove('is-depressed'))
