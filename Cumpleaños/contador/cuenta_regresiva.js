const d = document;
export default function countdown(id, limitDate){
    const  $countdown = d.getElementById(id),
    countdownDate = new Date(limitDate).getTime();

    let countdownTempo = setInterval(()=>{
        let now = new Date().getTime(),
        limitTime = countdownDate - now,
        days = Math.floor(limitTime/(1000 * 60 * 60 * 24)),
        hours = ("0" + Math.floor(limitTime % (1000 * 60 * 60 * 24)/(1000 * 60 * 60))).slice(-2),
        minutes = ("0" + Math.floor(limitTime % (1000 * 60 * 60)/(1000 * 60))).slice(-2),
        seconds = ("0" + Math.floor(limitTime % (1000 * 60)/(1000))).slice(-2);



        $countdown.innerHTML = `<h3>⏰<span>Faltan:</span> ${days} <span>días</span> ${hours} <span>horas</span> ${minutes} <span>minutos</span> ${seconds} <span>segundos</span></h3>`;


        console.log(countdownDate, now, limitTime);

        if(limitTime < 0){
        clearInterval(countdownTempo);
        $countdown.innerHTML = `<a class="vamos" href="./principal/principal.html">¡Clickeame! 😏</a>`;
        d.querySelector(".textojeje").textContent = "Feliz Cumpleaños doctora guapalentina. 😘"
        alert('Yeeeeei, feliz cumpleaños!!!🎉')
        }
    },1000);
}