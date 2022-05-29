function OpenMenu() {
    if(document.getElementById("slidedownbar").className.includes("h-[0px]")){
        document.getElementById("slidedownbar").className = "z-50 w-full h-[420px] absolute flex flex-col bg-header-bg mt-[2px] justify-center mt-.5 overflow-hidden duration-300 border-b-2 border-red-600"
    }else{
        document.getElementById("slidedownbar").className = "z-50 w-full h-[0px] absolute flex flex-col justify-center mt-1 overflow-hidden duration-300 bg-header-bg"
    }
}

function ResetUI() {
    document.getElementById("slidedownbar").className = "z-50 w-full h-[0px] absolute flex flex-col justify-center mt-1 overflow-hidden duration-300 bg-header-bg"
}

window.addEventListener("resize", ResetUI);


fetch('http://n1.artiom.host:1069/data').then(response => response.json()).then(data => {
    document.getElementById("ahservers").textContent = data.servers
    document.getElementById("ahclients").textContent = data.clients
    document.getElementById("dscusers").textContent = data.members
});

