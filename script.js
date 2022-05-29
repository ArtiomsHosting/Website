function OpenMenu() {
    if (document.getElementById("slidedownbar").className.includes("h-[0px]")) {
        document.getElementById("slidedownbar").className = "z-50 w-full h-[420px] absolute flex flex-col bg-header-bg mt-[2px] justify-center mt-.5 overflow-hidden duration-300 border-b-2 border-red-600"
    } else {
        document.getElementById("slidedownbar").className = "z-50 w-full h-[0px] absolute flex flex-col justify-center mt-1 overflow-hidden duration-300 bg-header-bg"
    }
}

function ResetUI() {
    document.getElementById("slidedownbar").className = "z-50 w-full h-[0px] absolute flex flex-col justify-center mt-1 overflow-hidden duration-300 bg-header-bg"
}

window.addEventListener("resize", ResetUI);

fetch('http://n1.artiom.host:1069/data').then(response => response.json()).then(data => {
    function animateValue(element, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            element.innerHTML = Math.floor(progress * (end - start) + start);
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }

    const el = document.getElementById("dscusers");
    const el2 = document.getElementById("ahclients");
    const el3 = document.getElementById("ahservers");

    animateValue(el, 0, data.members, 2000);
    animateValue(el2, 0, data.clients, 2000);
    animateValue(el3, 0, data.servers, 2000);
}).catch(err => {
    const el = document.getElementById("dscusers");
    const el2 = document.getElementById("ahclients");
    const el3 = document.getElementById("ahservers");

    el.innerHTML = "NaN";
    el2.innerHTML = "NaN";
    el3.innerHTML = "NaN";
});

function openahdocs() {
    open('https://artiom.host/docs')
}