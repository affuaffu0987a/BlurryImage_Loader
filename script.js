const blurImage = document.querySelector(".images")
const seconds = document.querySelector(".sec")

let milisec = 1
setInterval(()=>{
    if(milisec <= 100){
        let removeblur = 100-milisec;
        seconds.textContent=milisec+"%";
        blurImage.style.filter = `blur(${removeblur + "px"})`
        milisec +=1
    }
    },50)

setTimeout(()=>{
    seconds.style.display = "none"
},7000)
