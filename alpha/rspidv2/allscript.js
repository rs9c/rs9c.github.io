// 需要用的变量往这里丢
var pid = "";
var x;      //校验码
// window.location.search ——获取url?后
var getPid = window.location.search.substring(window.location.search.lastIndexOf("=")+1,window.location.search.length);
// 检验getPid是否为空
if (getPid == ""){
    console.debug("getPid is empty");
}else{
    pid = getPid;
    verify();
}
// document.getElementById("pid").value = pid;

// 验证rspid
async function verify(){
    // 更改url中的pid
    /* const urlParams = new URLSearchParams(window.location.search);
    const pid = urlParams.get("pid");
    urlParams.set('pid', '8888');
    const newUrl = new URL(window.location);
    newUrl.search = urlParams.toString();
    history.pushState({}, '', newUrl); */
    console.debug("run verify");
    document.getElementById("zt").innerHTML=`<a style="color: #000000">验证中 请稍等...</a>`
    if(getPid == ""){pid = document.getElementById("pid").value;}
    if (pid == "215") {
        window.open("createrspid.html");
        document.getElementById("pid").value = "";
        return;
    }// 熟悉的后门～进入生成pid界面
    console.info("Pid is \'"+pid+"\'");
}

// 生成rspid
async function create(){

}

// 异步-将传入的数字（字符串）转为字符（字符串）【详见table.json】
// async function ... await nta(inputString)
async function nta(inputString){
    const response = await fetch("table.json");
    const table = await response.json();
    for (var i = 0; i < table.length; ++i) {
        if (inputString == table[i].n) {
            console.info("nta:Found "+inputString+" at "+String(i)+",It is\'"+table[i].a+"\'");
            return table[i].a;
        }
    }
    console.warn("nta:NotFound \'"+inputString+"\'");
    return "∅";
}
async function atn(inputString){
    const response = await fetch("table.json");
    const table = await response.json();
    for (var i = 0; i < table.length; ++i) {
        if (inputString == table[i].a) {
            console.info("atn:Found\'"+inputString+"\'at "+String(i)+",It is "+table[i].n);
            return table[i].n;
        }
    }
    console.warn("atn:NotFound \'"+inputString+"\'");
}

// 测试
async function testn(tpid){
    if(tpid==null){tpid = "31105553325503104110656342650289728072749701645832581635425716757177727676956468426826454267267923984564696793";}
    var tout = "";
    for (var i = 0;i < tpid.length;i+=2){
        console.debug(tpid[i]+tpid[i+1]);
        tout += await nta(tpid[i]+tpid[i+1]);
        console.debug(tout);
    }
}
async function testa(txh){
    if(txh==null){txh = "a test? A TEST!(2024)/RisingSun517266-RISINGSUN9C_GROUP";}
    var tout = "";
    for (var i = 0;i < txh.length;i+=1){
        console.debug(txh[i]);
        tout += await atn(txh[i]);
        console.debug(tout);
    }
}

// 以下内容直接抄旧版
// 粘贴按钮
function paste() {
    navigator.clipboard.readText().then((text) => {
        document.getElementById("pid").value = text;
    }); 
}
// 复制按钮
function copy() {
    navigator.clipboard.writeText(pid + String(x));     //历史遗留 看看以后能不能改
    document.getElementById("button2").innerHTML = `<input type="button" value="生成RSPID" onclick="creat()" style="font-size: 1.4em;font-weight: 550;margin-right: 0.5em;">
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