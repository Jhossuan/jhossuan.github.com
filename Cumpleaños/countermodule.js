import countdown from "./contador/cuenta_regresiva.js"

const d = document;
d.addEventListener("DOMContentLoaded", e=>{
    countdown(
        "counterxd",
        "Feb 10,2022 20:20:30",
        );
});