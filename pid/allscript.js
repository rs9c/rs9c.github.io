var firstOpen = true;
var pid = "";
var theLastPid = "";
var x; //校验码
let characters = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"; // 多进制字符集

// window.location.search ——获取url?后
var getPid = window.location.search.substring(window.location.search.lastIndexOf("=") + 1, window.location.search.length);
// 检验getPid是否为空
if (getPid == "") {
    console.debug("getPid为空");
} else {
    // 多进制问题：多进制字符在浏览器地址栏中会被编码成URI编码，需进行转换。
    try {
        pid = decodeURIComponent(getPid.replace(/\+/g, " "));
    } catch (e) {
        pid = getPid;
    }
    console.debug("getPid为：" + pid);
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
    console.debug("运行verify()");
    var err = false; // 若有错误则为true
    var lengthOfXH, detLX, detPP, detDateY, detDateM, detDateD, detTimeH, detTimeM;
    var detXH = "";
    x = 0;
    document.getElementById("zt").innerHTML = `<a style="color: #000000">验证中 请稍等...</a>`;
    if (getPid != "" && firstOpen == true) {
        document.getElementById("pid").value = pid;
        firstOpen = false;
    } else {
        pid = dg("pid");
    }
    if (pid == "215") {
        window.open("createrspid.html");
        document.getElementById("pid").value = "";
        return;
    } // 熟悉的后门～进入生成pid界面

    // 判断是否pid为多进制；若是，则进行转换
    if (pid.match(/[a-zA-Z]/)) {
        pid = tsToDec(pid);
        document.getElementById("pid").value = pid;
    }

    console.info("传入的Pid为'" + pid + "'");
    lengthOfXH = pid.length - 17;
    if (lengthOfXH < 0 || lengthOfXH % 2 != 0) {
        console.error("pid长度错误");
        err = true;
    }
    var xlist = [7, 9, 1, 5, 8, 4, 2, 6, 3, 0];
    for (var i = 0; i < pid.length - 1; ++i) {
        x += Number(pid[i]) * xlist[i % 10];
    }
    x = x % 10;
    if (Number(pid[pid.length - 1]) != x) {
        console.error("pid校验码错误");
        err = true;
    }
    const response = await fetch("type.json");
    const type = await response.json();
    for (var i = 0; i < type.tp.length; ++i) {
        if (pid[0] + pid[1] == type.tp[i].n) {
            console.info("检测到类型：" + type.tp[i].a);
            detLX = type.tp[i].a;
        }
    }
    for (var i = 0; i < type.pp.length; ++i) {
        if (pid[12] + pid[13] == type.pp[i].n) {
            console.info("检测到品牌：" + type.pp[i].a);
            detPP = type.pp[i].a;
        }
    }
    if (detLX == undefined) {
        console.error("类型错误");
        err = true;
    }
    if (detPP == undefined) {
        console.error("品牌错误");
        err = true;
    }
    for (var i = 0; i < lengthOfXH / 2; ++i) {
        detXH += await nta(pid[14 + i] + pid[14 + lengthOfXH / 2 + i]);
    }
    console.info("检测到型号：\n" + detXH);
    if (detXH.includes("⨂")) {
        console.error("型号中包含错误");
        err = true;
    }
    detDateY = Number("20" + pid[2] + pid[3]);
    detDateM = Number(pid[4] + pid[5]) - 1; // js中月份从0开始
    detDateD = Number(pid[6] + pid[7]);
    detTimeH = Number(pid[8] + pid[9]);
    detTimeM = Number(pid[10] + pid[11]);
    var toDate = new Date(detDateY, detDateM, detDateD, detTimeH, detTimeM); // 将获取到的日期转为Date()，并判断转换前后是否一致。不一致则时间不合法
    if (toDate.getFullYear() === detDateY && toDate.getMonth() === detDateM && toDate.getDate() === detDateD && toDate.getHours() === detTimeH && toDate.getMinutes() === detTimeM) {
        console.info("获取到时间：" + String(detDateY) + "/" + String(detDateM + 1) + "/" + String(detDateD) + "-" + String(detTimeH < 10 ? "0" + String(detTimeH) : detTimeH) + ":" + String(detTimeM < 10 ? "0" + String(detTimeM) : detTimeM));
    } else {
        console.error("时间不合法");
        err = true;
    }
    if (err == false) {
        document.getElementById("zt").innerHTML = `<a style="color: #00bb00">已验证✓</a>`;
        document.getElementById("lx").innerHTML = detLX;
        document.getElementById("pp").innerHTML = detPP;
        document.getElementById("xh").innerHTML = detXH;
        document.getElementById("sj").innerHTML = String(detDateY) + "/" + String(detDateM + 1) + "/" + String(detDateD) + "-" + String(detTimeH < 10 ? "0" + String(detTimeH) : detTimeH) + ":" + String(detTimeM < 10 ? "0" + String(detTimeM) : detTimeM);
    } else {
        document.getElementById("zt").innerHTML = `<a style="color: #ee0000">未验证✕</a>`;
        if (document.getElementById("ignoreError").checked == false) {
            // 如果未勾选“检测到错误时强制输出结果”
            document.getElementById("lx").innerHTML = "N/A";
            document.getElementById("pp").innerHTML = "N/A";
            document.getElementById("xh").innerHTML = "N/A";
            document.getElementById("sj").innerHTML = "N/A";
        } else {
            // 如果勾选“检测到错误时强制输出结果”
            document.getElementById("lx").innerHTML = detLX;
            document.getElementById("pp").innerHTML = detPP;
            document.getElementById("xh").innerHTML = detXH;
            document.getElementById("sj").innerHTML = String(detDateY) + "/" + String(detDateM + 1) + "/" + String(detDateD) + "-" + String(detTimeH < 10 ? "0" + String(detTimeH) : detTimeH) + ":" + String(detTimeM < 10 ? "0" + String(detTimeM) : detTimeM);
        }
    }
}

// 生成rspid
async function create() {
    console.debug("运行create()");
    // const qrContainer1 = document.getElementById("qr1");
    const qrContainer2 = document.getElementById("qr2");
    // qrContainer1.innerHTML = "";
    qrContainer2.innerHTML = ""; // 清空二维码
    document.getElementById("button2").innerHTML = `<input type="button" value="生成" onclick="create()"
                style="font-size: 1.4em; font-weight: 550;margin-right: 0.5em;" />
            <input type="button" value="复制Dec" onclick="copy()" style="font-size: 1.4em; font-weight: 400" />
            <input type="button" value="复制Ts" onclick="copy36()" style="font-size: 1.4em; font-weight: 400" />
        `; // 重置
    var xhn = "";
    x = 0;
    // 12 34 56 -> 135 246
    for (var i = 0; i < dg("xh").length * 2; ++i) {
        xhn += "0"; // 000000
    }
    xhn = xhn.split(""); // ['0','0',...]
    for (var i = 0; i < dg("xh").length; ++i) {
        var j = await atn(dg("xh")[i]);
        xhn[i] = j[0];
        xhn[i + dg("xh").length] = j[1];
        console.debug("逐步生成xhn:" + xhn);
    } // ['1','3','5',...]
    pid = dg("tpl") + dg("yy") + dg("mm") + dg("dd") + dg("h") + dg("m") + dg("ppl");
    for (var i = 0; i < dg("xh").length * 2; ++i) {
        pid += xhn[i];
    }
    pid += dg("ra");
    var xlist = [7, 9, 1, 5, 8, 4, 2, 6, 3, 0];
    for (var i = 0; i < pid.length; ++i) {
        x += Number(pid[i]) * xlist[i % 10];
        console.debug("逐步计算校验码x:" + String(x));
    }
    x = x % 10;
    console.info("最终校验码X:" + String(x));
    theLastPid = pid + String(x);
    console.info("最终pid:" + theLastPid);
    document.getElementById("output").innerHTML = `${theLastPid}`;
    document.getElementById("output36").innerHTML = `${decToTs(theLastPid)}`;
    // const qr1 = new QRCode(qrContainer1, {
    //     text: `https://rs9c.github.io/pid/?pid=${theLastPid}`, // 要生成二维码的内容
    //     width: 120, // 二维码的宽度
    //     height: 120, // 二维码的高度
    //     colorDark: "#000000", // 深色部分的颜色
    //     colorLight: "#ffffff", // 浅色部分的颜色
    //     correctLevel: QRCode.CorrectLevel.L, // 纠错等级
    // });
    const qr2 = new QRCode(qrContainer2, {
        text: `https://rs9c.github.io/pid/?pid=${decToTs(theLastPid)}`, // 要生成二维码的内容
        width: 120, // 二维码的宽度
        height: 120, // 二维码的高度
        colorDark: "#000000", // 深色部分的颜色
        colorLight: "#ffffff", // 浅色部分的颜色
        correctLevel: QRCode.CorrectLevel.L, // 纠错等级
    });
}

// 异步-将传入的数字（字符串）转为字符（字符串）【详见table.json】
async function nta(inputString) {
    const response = await fetch("table.json");
    const table = await response.json();
    for (var i = 0; i < table.length; ++i) {
        if (inputString == table[i].n) {
            console.debug("nta:Found " + inputString + " at " + String(i) + ",It is '" + table[i].a + "'");
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
            console.debug("atn:Found '" + inputString + "' at " + String(i) + ",It is " + table[i].n);
            return table[i].n;
        }
    }
    console.warn("atn:NotFound '" + inputString + "'");
}

// 粘贴按钮
function paste() {
    navigator.clipboard.readText().then((text) => {
        document.getElementById("pid").value = text;
    });
}
// 复制按钮
function copy() {
    navigator.clipboard.writeText(theLastPid);
    document.getElementById("button2").innerHTML = `<input type="button" value="生成" onclick="create()"
                style="font-size: 1.4em; font-weight: 550;margin-right: 0.5em;" />
            <input type="button" value="成功✓" onclick="copy()" style="font-size: 1.4em; font-weight: 400" />
            <input type="button" value="复制Ts" onclick="copy36()" style="font-size: 1.4em; font-weight: 400" />
        `;
}
function copy36() {
    navigator.clipboard.writeText(decToTs(theLastPid));
    document.getElementById("button2").innerHTML = `<input type="button" value="生成" onclick="create()"
                style="font-size: 1.4em; font-weight: 550;margin-right: 0.5em;" />
            <input type="button" value="复制Dec" onclick="copy()" style="font-size: 1.4em; font-weight: 400" />
            <input type="button" value="成功✓" onclick="copy36()" style="font-size: 1.4em; font-weight: 400" />
        `;
}

// 填充日期
function autoDate() {
    document.getElementById("button2").innerHTML = `<input type="button" value="生成" onclick="create()"
                style="font-size: 1.4em; font-weight: 550;margin-right: 0.5em;" />
            <input type="button" value="复制Dec" onclick="copy()" style="font-size: 1.4em; font-weight: 400" />
            <input type="button" value="复制Ts" onclick="copy36()" style="font-size: 1.4em; font-weight: 400" />
        `; // 重置
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
    document.getElementById("button2").innerHTML = `<input type="button" value="生成" onclick="create()"
                style="font-size: 1.4em; font-weight: 550;margin-right: 0.5em;" />
            <input type="button" value="复制Dec" onclick="copy()" style="font-size: 1.4em; font-weight: 400" />
            <input type="button" value="复制Ts" onclick="copy36()" style="font-size: 1.4em; font-weight: 400" />
        `; // 重置
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    document.getElementById("time").innerHTML = `时间: 
    <input size="2" id="h" type="text" maxlength="2" value="${h < 10 ? "0" + String(h) : h}"></input>时
    <input size="2" id="m" type="text" maxlength="2" value="${m < 10 ? "0" + String(m) : m}"></input>分`;
}
// 填充随机码
function autoRand() {
    document.getElementById("button2").innerHTML = `<input type="button" value="生成" onclick="create()"
                style="font-size: 1.4em; font-weight: 550;margin-right: 0.5em;" />
            <input type="button" value="复制Dec" onclick="copy()" style="font-size: 1.4em; font-weight: 400" />
            <input type="button" value="复制Ts" onclick="copy36()" style="font-size: 1.4em; font-weight: 400" />
        `; // 重置
    var randnum = Math.round(Math.random() * 100);
    randnum == 100 ? (randnum = Math.round(Math.random() * 100)) : randnum;
    document.getElementById("rand").innerHTML = `随机码: 
    <input size="2" id="ra" type="text" maxlength="2" value="${randnum < 10 ? "0" + String(randnum) : randnum}"></input>
    范围:01~99；两个字符`;
}

// 10进制转多进制
function decToTs(dec) {
    // console.debug("传入的十进制：" + dec);
    dec = BigInt(dec);
    // const characters = '';
    let result = "";
    while (dec > 0) {
        result = characters[dec % 62n] + result;
        dec = dec / 62n;
    }
    return result;
}
// 多进制转10进制
function tsToDec(ts) {
    // console.debug("传入的多进制：" + ts);
    // const characters = '';
    let result = 0n;
    for (let i = 0; i < ts.length; i++) {
        result = result * 62n + BigInt(characters.indexOf(ts[i]));
    }
    return String(result);
}
