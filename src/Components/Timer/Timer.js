import "./Timer.css";

const Timer = () => {

    //to change the date from number into string
    function toStr(n) {
        if (n < 10)
            return "0" + n;
        else
            return "" + n;
    }

    //to match the numbers of the time with the pictures that needed to be display
    async function run() {
        let oDate = new Date()
        let sTime = toStr(oDate.getHours()) + toStr(oDate.getMinutes());
        let oImg = document.getElementsByTagName("img");
        for (let i = 0; i < sTime.length; i++) {
            oImg[i].src = require("./num/" + sTime[i] + ".png");
        }

    }

    //refresh the function every 10 sec
    setInterval(run, 10000);

    let initDate = new Date();
    let initTime = toStr(initDate.getHours()) + toStr(initDate.getMinutes());
    return (
        <div className="timer">
            <img src={require(`./num/${initTime[0]}.png`)} alt="" />
            <img src={require(`./num/${initTime[1]}.png`)} alt="" />
            :
            <img src={require(`./num/${initTime[2]}.png`)} alt="" />
            <img src={require(`./num/${initTime[3]}.png`)} alt="" />
        </div>
    );
}

export default Timer;