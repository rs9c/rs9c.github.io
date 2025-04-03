var pid, x; // 此脚本注释懒得写了。。
function autoDate() {
    var d = new Date();
    var yy = d.getFullYear() % 100;
    var mm = d.getMonth() + 1;
    var dd = d.getDate();
    document.getElementById("date").innerHTML = `日期: 20
    <input size="2" id="yy" type="text" maxlength="2" value="${yy}"></input>年
    <input size="2" id="mm" type="text" maxlength="2" value="${mm < 10 ? "0" + String(mm) : mm}"></input>月
    <input size="2" id="dd" type="text" maxlength="2" value="${dd < 10 ? "0" + String(dd) : dd}"></input>日`;
}
function autoTime() {
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    document.getElementById("time").innerHTML = `时间: 
    <input size="2" id="h" type="text" maxlength="2" value="${h < 10 ? "0" + String(h) : h}"></input>时
    <input size="2" id="m" type="text" maxlength="2" value="${m < 10 ? "0" + String(m) : m}"></input>分`;
}
function autoRand() {
    var randnum = Math.round(Math.random() * 100);
    randnum == 0 || randnum == 100 ? (randnum = Math.round(Math.random() * 100)) : randnum;
    document.getElementById("rand").innerHTML = `随机码: 
    <input size="2" id="ra" type="text" maxlength="2" value="${randnum < 10 ? "0" + String(randnum) : randnum}"></input>
    范围:01~99；两个字符`;
}
function creat() {
    document.getElementById("button2").innerHTML = `<input type="button" value="生成RSPID" onclick="creat()" style="font-size: 1.4em;font-weight: 550;margin-right: 0.5em;">
    <input type="button" value="复制RSPID" onclick="copy()" style="font-size: 1.4em;font-weight: 400;">`; // 重置
    pid = document.getElementById("tp").value + document.getElementById("pp").value + trans(0) + trans(1) + trans(2) + trans(3) + trans(4) + document.getElementById("dh").value + String(Number(document.getElementById("dd").value) + 10) + String(Number(document.getElementById("mm").value) + 10) + String(Number(document.getElementById("yy").value) + 10) + String(Number(document.getElementById("h").value) + 10) + String(Number(document.getElementById("m").value) + 10) + document.getElementById("ra").value;
    x = (((Number(pid[0]) * 7 + Number(pid[1]) * 9 + Number(pid[2]) + Number(pid[3]) * 5 + Number(pid[4]) * 8 + Number(pid[5]) * 4 + Number(pid[6]) * 2 + Number(pid[7]) + Number(pid[8]) * 6 + Number(pid[9]) * 3 + Number(pid[10]) * 7 + Number(pid[11]) * 9 + Number(pid[12]) * 10 + Number(pid[13]) * 5 + Number(pid[14]) * 8 + Number(pid[15]) * 4 + Number(pid[16]) * 2) % 11) + ((Number(pid[17]) * 7 + Number(pid[18]) * 9 + Number(pid[19]) * 10 + Number(pid[20]) * 5 + Number(pid[21]) * 8 + Number(pid[22]) * 4 + Number(pid[23]) * 2 + Number(pid[24]) + Number(pid[25]) * 6 + Number(pid[26]) * 3 + Number(pid[27]) * 7) % 11) + (Number(pid[26] + pid[27]) % 7)) % 10;
    document.getElementById("output").innerHTML = `${pid + String(x)}`;
}
function copy() {
    navigator.clipboard.writeText(pid + String(x)); // 草率的复制脚本。。
    document.getElementById("button2").innerHTML = `<input type="button" value="生成RSPID" onclick="creat()" style="font-size: 1.4em;font-weight: 550;margin-right: 0.5em;">
    <input type="button" value="复制成功✅" onclick="copy()" style="font-size: 1.4em;font-weight: 200;">`;
}
function trans(xhNo) {
    switch (document.getElementById("xh").value[xhNo]) {
        case "A":
            return "11";
        case "B":
            return "12";
        case "C":
            return "13";
        case "D":
            return "14";
        case "E":
            return "15";
        case "F":
            return "16";
        case "G":
            return "17";
        case "H":
            return "18";
        case "I":
            return "19";
        case "J":
            return "20";
        case "K":
            return "21";
        case "L":
            return "22";
        case "M":
            return "23";
        case "N":
            return "24";
        case "O":
            return "25";
        case "P":
            return "26";
        case "Q":
            return "27";
        case "R":
            return "28";
        case "S":
            return "29";
        case "T":
            return "30";
        case "U":
            return "31";
        case "V":
            return "32";
        case "W":
            return "33";
        case "X":
            return "34";
        case "Y":
            return "35";
        case "Z":
            return "36";
        case "0":
            return "40";
        case "1":
            return "41";
        case "2":
            return "42";
        case "3":
            return "43";
        case "4":
            return "44";
        case "5":
            return "45";
        case "6":
            return "46";
        case "7":
            return "47";
        case "8":
            return "48";
        case "9":
            return "49";
        default:
            return "50";
    }
}
