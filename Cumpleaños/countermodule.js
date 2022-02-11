import countdown from "./contador/cuenta_regresiva.js"

const d = document;
d.addEventListener("DOMContentLoaded", e=>{
    countdown(
        "counterxd",
        "Feb 27,2022 10:30:00",
        );
});