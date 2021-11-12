//Dependencies
const Chrome_Launcher = require("chrome-launcher")

//Main
Show_RR()
async function Show_RR(){
    Chrome_Launcher.launch({
        startingUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    }).then(chrome=>{
        Loop()
        return
    })
}
