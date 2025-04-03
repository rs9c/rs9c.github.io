var xh = new Array(); // 型号的字母部分（数组）0A,1T,2E,3S,4T.
var isNA = 0; // 检测错误 大于0则错误

// 验证RSPID的函数
function verify() {
    isNA = 0; // 重置错误
    var pid = document.getElementById("pid").value; // 获取pid（input里）-string
    if (pid == "215") {
        window.open("createrspid.html");
        document.getElementById("pid").value = "";
        return;
    } //后门-生成PID系统 （反正都开源了¯\_(ツ)_/¯）

    // 校验RSPID (～～灵魂所在～～)¸
    var x = (((Number(pid[0]) * 7 + Number(pid[1]) * 9 + Number(pid[2]) + Number(pid[3]) * 5 + Number(pid[4]) * 8 + Number(pid[5]) * 4 + Number(pid[6]) * 2 + Number(pid[7]) + Number(pid[8]) * 6 + Number(pid[9]) * 3 + Number(pid[10]) * 7 + Number(pid[11]) * 9 + Number(pid[12]) * 10 + Number(pid[13]) * 5 + Number(pid[14]) * 8 + Number(pid[15]) * 4 + Number(pid[16]) * 2) % 11) + ((Number(pid[17]) * 7 + Number(pid[18]) * 9 + Number(pid[19]) * 10 + Number(pid[20]) * 5 + Number(pid[21]) * 8 + Number(pid[22]) * 4 + Number(pid[23]) * 2 + Number(pid[24]) + Number(pid[25]) * 6 + Number(pid[26]) * 3 + Number(pid[27]) * 7) % 11) + (Number(pid[26] + pid[27]) % 7)) % 10;
    if (x == Number(pid[28])) {
        document.getElementById("zt").innerHTML = `<a style="color: #00bb00">验证成功✅</a><a><br>${pid}</a>`;
    } else {
        isNA++;
    } // 标记为错误 以下同理

    // 检测类型
    if (pid[0] + pid[1] == "51") {
        document.getElementById("lx").innerHTML = `<a>Product</a>`;
    } else if (pid[0] + pid[1] == "57") {
        document.getElementById("lx").innerHTML = `<a>Ticket</a>`;
    } else if (pid[0] + pid[1] == "29") {
        document.getElementById("lx").innerHTML = `<a>Bill</a>`;
    } // else if (pid[0]+pid[1] == "00"){
    //     document.getElementById("lx").innerHTML=`<a>N/A</a>`;       // 未来可能会有更多的“类型”……
    // }
    else {
        isNA++;
    }

    // 检测品牌
    if (pid[2] + pid[3] == "90") {
        document.getElementById("pp").innerHTML = `<a>RISINGSUN</a>`;
    } else if (pid[2] + pid[3] == "23") {
        document.getElementById("pp").innerHTML = `<a>BoringClub</a>`;
    } // else if (pid[2]+pid[3] == "00"){
    //     document.getElementById("pp").innerHTML=`<a>N/A</a>`;       // 未来可能会有更多的“品牌”……
    // }
    else {
        isNA++;
    }

    // 显示型号
    for (var i = 0; i <= 4; i++) {
        trans(pid[4 + 2 * i] + pid[5 + 2 * i], i);
    }
    document.getElementById("xh").innerHTML = `<a>${xh[0] + xh[1] + xh[2] + xh[3] + xh[4] + "-" + pid[14] + pid[15]}</a>`;

    // 显示生产日期和时间
    document.getElementById("sj").innerHTML = `<a>${"20" + String(Number(pid[20] + pid[21]) - 10) + "年" + String(Number(pid[18] + pid[19]) - 10) + "月" + String(Number(pid[16] + pid[17]) - 10) + "日" + (Number(pid[22] + pid[23]) - 10 < 10 ? "0" + String(Number(pid[22] + pid[23]) - 10) : String(Number(pid[22] + pid[23]) - 10)) + ":" + (Number(pid[24] + pid[25]) - 10 < 10 ? "0" + String(Number(pid[24] + pid[25]) - 10) : String(Number(pid[24] + pid[25]) - 10))}</a>`;
    if (Number(pid[20] + pid[21]) - 10 < 23 || (Number(pid[20] + pid[21]) - 10 == 23 && Number(pid[18] + pid[19]) - 10 < 9) || (Number(pid[20] + pid[21]) - 10 == 23 && Number(pid[18] + pid[19]) - 10 == 9 && Number(pid[16] + pid[17]) - 10 < 16)) {
        isNA++;
    } // 检测日期是否超出2023/9/16
    else if (Number(pid[18] + pid[19]) - 10 < 1 || Number(pid[18] + pid[19]) - 10 > 12) {
        isNA++;
    } //月份是否合法
    else if (Number(pid[22] + pid[23]) - 10 > 23 || Number(pid[24] + pid[25]) - 10 > 59) {
        isNA++;
    } // 时间是否合法
    else if (Number(pid[16] + pid[17]) - 10 > 31) {
        isNA++;
    } // 日是否超出31 （什么小月大月二月闰月懒得弄了（摆

    // 检测到错误
    if (isNA > 0) {
        document.getElementById("zt").innerHTML = `<a style="color: #ee0000">验证失败❌</a>`;
        document.getElementById("lx").innerHTML = `<a>N/A</a>`;
        document.getElementById("pp").innerHTML = `<a>N/A</a>`;
        document.getElementById("xh").innerHTML = `<a>N/A</a>`;
        document.getElementById("sj").innerHTML = `<a>N/A</a>`;
    }
}

// 粘贴剪贴板
function paste() {
    navigator.clipboard.readText().then((text) => {
        document.getElementById("pid").value = text;
    }); // 太麻烦啦 // text是变量名
}
// 用于将型号中的数字转为对应字母或数字
function trans(tranIn, arrayNo) {
    switch (tranIn) {
        case "11":
            xh[arrayNo] = "A";
            break;
        case "12":
            xh[arrayNo] = "B";
            break;
        case "13":
            xh[arrayNo] = "C";
            break;
        case "14":
            xh[arrayNo] = "D";
            break;
        case "15":
            xh[arrayNo] = "E";
            break;
        case "16":
            xh[arrayNo] = "F";
            break;
        case "17":
            xh[arrayNo] = "G";
            break;
        case "18":
            xh[arrayNo] = "H";
            break;
        case "19":
            xh[arrayNo] = "I";
            break;
        case "20":
            xh[arrayNo] = "J";
            break;
        case "21":
            xh[arrayNo] = "K";
            break;
        case "22":
            xh[arrayNo] = "L";
            break;
        case "23":
            xh[arrayNo] = "M";
            break;
        case "24":
            xh[arrayNo] = "N";
            break;
        case "25":
            xh[arrayNo] = "O";
            break;
        case "26":
            xh[arrayNo] = "P";
            break;
        case "27":
            xh[arrayNo] = "Q";
            break;
        case "28":
            xh[arrayNo] = "R";
            break;
        case "29":
            xh[arrayNo] = "S";
            break;
        case "30":
            xh[arrayNo] = "T";
            break;
        case "31":
            xh[arrayNo] = "U";
            break;
        case "32":
            xh[arrayNo] = "V";
            break;
        case "33":
            xh[arrayNo] = "W";
            break;
        case "34":
            xh[arrayNo] = "X";
            break;
        case "35":
            xh[arrayNo] = "Y";
            break;
        case "36":
            xh[arrayNo] = "Z";
            break;
        case "40":
            xh[arrayNo] = "0";
            break;
        case "41":
            xh[arrayNo] = "1";
            break;
        case "42":
            xh[arrayNo] = "2";
            break;
        case "43":
            xh[arrayNo] = "3";
            break;
        case "44":
            xh[arrayNo] = "4";
            break;
        case "45":
            xh[arrayNo] = "5";
            break;
        case "46":
            xh[arrayNo] = "6";
            break;
        case "47":
            xh[arrayNo] = "7";
            break;
        case "48":
            xh[arrayNo] = "8";
            break;
        case "49":
            xh[arrayNo] = "9";
            break;
        case "50":
            xh[arrayNo] = "";
            break;
        default:
            isNA++;
    }
}
