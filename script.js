
setInterval(() => {
    let d = new Date();

    let hrtime = d.getHours();
    let mintime = d.getMinutes();
    let sectime = d.getSeconds();

    hrotation = 30*hrtime +mintime/2;
    mrotation = 6*mintime;
    srotation = 6*sectime;

    hr.style.transform = `rotate(${hrotation}deg)`;
    min.style.transform = `rotate(${mrotation}deg)`;
    sec.style.transform = `rotate(${srotation}deg)`;

}, 1000);