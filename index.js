const logDiv = document.getElementById("log");
const stateDiv = document.getElementById("state");
const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");

startBtn.addEventListener("click",()=>{
document.addEventListener("keydown",handleDown)
document.addEventListener("keyup",handleUp)

})

stopBtn.addEventListener("click",()=> {
    document.removeEventListener("keydown",handleDown);
    document.removeEventListener("keyup",handleUp);
    logDiv.textContent = "";
    stopbtn.disabled = true;
    startbtn.disabled = false;
})

function handleDown(e){
    logDiv.textContent = `Key ${e.key} pressed down` ;
    stateDiv.textContent ="Key is down"
}
function handleUp(e){
    logDiv.textContent = `Key ${e.key} released` ;
    stateDiv.textContent ="Key is Up"
}
