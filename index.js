const hrElement = document.getElementById('hr');
const mntElement = document.getElementById('mnt');
const scndElement = document.getElementById('scnd');
const ampmElement = document.getElementById('ampmbx');
function updateClock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm ='am';
    if (h>12) {
        h=h-12;
        ampm='pm';
        
    }
    
    hrElement.innerText=h;
    mntElement.innerText=m;
    scndElement.innerText=s;
    ampmElement.innerText=ampm;
    setTimeout(() => {
        updateClock() 
    }, 1000);
};

updateClock();