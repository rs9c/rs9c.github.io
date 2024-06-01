var pid = window.location.search;
pid = pid.substring(pid.lastIndexOf("=")+1,pid.length);
document.getElementById("pid").value = pid;
verify();

function verify(){
    const urlParams = new URLSearchParams(window.location.search);
    const pid = urlParams.get("pid");
    urlParams.set('pid', '8888');

    const newUrl = new URL(window.location);
    newUrl.search = urlParams.toString();
    history.pushState({}, '', newUrl);

}

// 异步-将传入的数字（字符串）转为字符（字符串）【详见table.json】
// async function ... await nta(inputString)
async function nta(inputString){
    const response = await fetch("table.json");
    const table = await response.json();
    for (var i = 0; i < table.length; ++i) {
        if (inputString == table[i].n) {
            return table[i].a;
        }
    }
}
async function atn(inputString){
    const response = await fetch("table.json");
    const table = await response.json();
    for (var i = 0; i < table.length; ++i) {
        if (inputString == table[i].a) {
            return table[i].n;
        }
    }
}

// 测试
async function test(){
    var tpid = "311055533255031041106563426502897280727497016458325816354257167571777276769564684268264542672679234564696793";
    var tout = "";
    for (var i = 0;i < tpid.length;i+=2){
        console.info(tpid[i]+tpid[i+1]);
        tout += await nta(tpid[i]+tpid[i+1]);
        console.info(tout);
    }
}
async function test2(){
    var txh = "a test? A TEST!(2024)/RisingSun517266-RISINGSUN9CGROUP";
    var tout = "";
    for (var i = 0;i < txh.length;i+=1){
        console.info(txh[i]);
        tout += await atn(txh[i]);
        console.info(tout);
    }
}