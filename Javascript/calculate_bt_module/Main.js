import { add } from "./Math.js";

document.getElementById('calculate').addEventListener('click',
    ()=>{
        const result = add(5,5);
        alert(`The result is ${result}`);
    }
)