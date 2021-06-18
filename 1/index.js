const vaibhav = function(){
    const A = new Date("jun 10, 2021 00:00:00").getTime();
   const now = new Date().getTime();
    const gap = A - now;
    
    const s = 1000;
    const m = s * 60;
    const h = m * 60;
    const d = h * 24;
    
    const textDay = Math.floor(gap / d);
    const textHour = Math.floor((gap % d) / h);
    const textMinute = Math.floor((gap % h) / m);
    const textSecond = Math.floor ((gap % m) / s);
    
    document.querySelector(".day").innerHTML = textDay;
    document.querySelector(".hrs").innerHTML = textHour;
    document.querySelector(".min").innerHTML = textMinute;
    document.querySelector(".sec").innerHTML = textSecond;
};

setInterval(vaibhav, 1000);















