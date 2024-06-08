// 需要用的变量往这里丢
var pid = "";
var x; //校验码
// window.location.search ——获取url?后
var getPid = window.location.search.substring(window.location.search.lastIndexOf("=") + 1, window.location.search.length);
// 检验getPid是否为空
if (getPid == "") {
    console.debug("getPid is empty");
} else {
    pid = getPid;
    verify();
}

// document.getElementById("id").value
function dg(id) {
    return document.getElementById(id).value;
}

// 验证rspid
async function verify() {
    // 更改url中的pid
    /* const urlParams = new URLSearchParams(window.location.search);
    const pid = urlParams.get("pid");
    urlParams.set('pid', '8888');
    const newUrl = new URL(window.location);
    newUrl.search = urlParams.toString();
    history.pushState({}, '', newUrl); */
    console.debug("running verify");
    x = 0;
    document.getElementById("zt").innerHTML = `<a style="color: #000000">验证中 请稍等...</a>`;
    if (getPid == "") {
        pid = dg("pid");
    } else {
        dg("pid") = pid;
    }
    if (pid == "215") {
        window.open("createrspid.html");
        dg("pid") = "";
        return;
    } // 熟悉的后门～进入生成pid界面
    console.info("Pid is '" + pid + "'");
}

// 生成rspid
async function create() {
    console.debug("running create");
    document.getElementById("button2").innerHTML = `<input type="button" value="生成RSPID" onclick="create()" style="font-size: 1.4em;font-weight: 550;margin-right: 0.5em;">
    <input type="button" value="复制RSPID" onclick="copy()" style="font-size: 1.4em;font-weight: 400;">`; // 重置
    var xhn = 0;
    x = 0;
    // 12 34 56 -> 135 246
    for (var i = 0; i < dg("xh").length; ++i) {
        var j = await atn(dg("xh")[i]);
        xhn += parseInt(j / 10) * (10 ** (dg("xh").length * 2 - 1 - i)) + parseInt(j % 10) * (10 ** (dg("xh").length - 1 - i));
        console.debug("xhn:" + xhn);
    }       //xhn会炸，要改!!!
    pid = dg("tp") + dg("yy") + dg("mm") + dg("dd") + dg("h") + dg("m") + dg("pp") + String(xhn) + dg("ra");
    var xlist = [7, 9, 1, 5, 8, 4, 2, 6, 3, 0];
    for (var i = 0; i < pid.length; ++i) {
        x += Number(pid[i]) * xlist[i % 10];
        console.debug("x:" + String(x));
    }
    x = x % 10;
    console.debug("The last X:" + String(x));
    console.info("pid:" + pid + String(x));
    document.getElementById("output").innerHTML = `${pid + String(x)}`;
}

// 异步-将传入的数字（字符串）转为字符（字符串）【详见table.json】
async function nta(inputString) {
    const response = await fetch("table.json");
    const table = await response.json();
    for (var i = 0; i < table.length; ++i) {
        if (inputString == table[i].n) {
            console.info("nta:Found " + inputString + " at " + String(i) + ",It is '" + table[i].a + "'");
            return table[i].a;
        }
    }
    console.warn("nta:NotFound '" + inputString + "'");
    return "⨂";
}
// 异步-将传入的字符（字符串）转为数字（字符串）【详见table.json】
async function atn(inputString) {
    const response = await fetch("table.json");
    const table = await response.json();
    for (var i = 0; i < table.length; ++i) {
        if (inputString == table[i].a) {
            console.info("atn:Found'" + inputString + "'at " + String(i) + ",It is " + table[i].n);
            return table[i].n;
        }
    }
    console.warn("atn:NotFound '" + inputString + "'");
}

// 测试
async function testn(txhn) {
    if (txhn == null) {
        txhn = "31105553325560104110656342653089728072749720645832581635425716757177727676956468426826454267267923984564696793";
    }
    var tout = "";
    for (var i = 0; i < txhn.length; i += 2) {
        console.debug(txhn[i] + txhn[i + 1]);
        tout += await nta(txhn[i] + txhn[i + 1]);
        console.debug(tout);
    }
}
async function testa(txh) {
    if (txh == null) {
        txh = "a test? A TEST!(2024)/RisingSun517266-RISINGSUN9C_GROUP";
    }
    var tout = "";
    for (var i = 0; i < txh.length; i += 1) {
        console.debug(txh[i]);
        tout += await atn(txh[i]);
        console.debug(tout);
    }
}

// 以下内容直接抄旧版
// 粘贴按钮
function paste() {
    navigator.clipboard.readText().then((text) => {
        dg("pid") = text;
    });
}
// 复制按钮
function copy() {
    navigator.clipboard.writeText(pid + String(x)); //历史遗留问题，此处pid不是真的pid。能用就行，，，
    document.getElementById("button2").innerHTML = `<input type="button" value="生成RSPID" onclick="create()" style="font-size: 1.4em;font-weight: 550;margin-right: 0.5em;">
    <input type="button" value="复制成功✅" onclick="copy()" style="font-size: 1.4em;font-weight: 200;">`;
}
// 填充日期
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
// 填充时间
function autoTime() {
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    document.getElementById("time").innerHTML = `时间: 
    <input size="2" id="h" type="text" maxlength="2" value="${h < 10 ? "0" + String(h) : h}"></input>时
    <input size="2" id="m" type="text" maxlength="2" value="${m < 10 ? "0" + String(m) : m}"></input>分`;
}
// 填充随机码
function autoRand() {
    var randnum = Math.round(Math.random() * 100);
    randnum == 0 || randnum == 100 ? (randnum = Math.round(Math.random() * 100)) : randnum;
    document.getElementById("rand").innerHTML = `随机码: 
    <input size="2" id="ra" type="text" maxlength="2" value="${randnum < 10 ? "0" + String(randnum) : randnum}"></input>
    范围:01~99；两个字符`;
}
