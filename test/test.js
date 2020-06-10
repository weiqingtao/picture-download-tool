const download = require("../index")

const options  ={
    url:"https://pics7.baidu.com/feed/377adab44aed2e7387397e0fe9ee688d86d6fa33.png?token=88667e1eef153863ca89e6827d806ca3",
    // dist:process.cwd(),
    // fileName:"1.jpg"
}
download.downloadImage(options)