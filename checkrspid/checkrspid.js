var xh = new Array;     // 型号的字母部分（数组）0A,1T,2E,3S,4T

// 验证RSPID的函数
function verify(){
    var pid = document.getElementById("pid").value;     // 获取pid（input里）-string
    // pid = "51231130152930002619332046012";      // 示例RSPID 调试用

    if (pid == "215"){
        window.open("createrspid.html");
    }//后门-生成PID系统 （反正都开源了¯\_(ツ)_/¯）

    // 校验RSPID (～～灵魂所在～～)
    var x = (((Number(pid[22])+Number(pid[23])+Number(pid[24])+Number(pid[25]))%7+Number(pid[16]+pid[17])+Number(pid[4])+Number(pid[5])+Number(pid[6])+Number(pid[7])+Number(pid[8])+Number(pid[9])+Number(pid[10])+Number(pid[11])+Number(pid[12])+Number(pid[13])+Number(pid[14])+Number(pid[15]))*Number(pid[26]+pid[27])+Number(pid[2])+Number(pid[3]))%10;
    if (x == Number(pid[28])){
        document.getElementById("zt").innerHTML=`<a style="color: #00bb00">验证成功✅</a><a><br>${pid}</a>`;
    }else{
        document.getElementById("zt").innerHTML=`<a style="color: #ee0000">验证失败❌</a>`;
        document.getElementById("lx").innerHTML=`<a>N/A</a>`;
        document.getElementById("pp").innerHTML=`<a>N/A</a>`;
        document.getElementById("xh").innerHTML=`<a>N/A</a>`;
        document.getElementById("sj").innerHTML=`<a>N/A</a>`;
        return;
    }
    // document.getElementById("zt").innerHTML=`<a>${x}</a>`;

    // 检测类型
    if (pid[0]+pid[1] == "51"){
        document.getElementById("lx").innerHTML=`<a>Product</a>`;
    }else if (pid[0]+pid[1] == "57"){
        document.getElementById("lx").innerHTML=`<a>Ticket</a>`;
    }// else if (pid[0]+pid[1] == "00"){
    //     document.getElementById("lx").innerHTML=`<a>N/A</a>`;       // 未来可能会有更多的“类型”……
    // }

    // 检测品牌
    if (pid[2]+pid[3] == "90"){
        document.getElementById("pp").innerHTML=`<a>RISINGSUN</a>`;
    }else if (pid[2]+pid[3] == "23"){
        document.getElementById("pp").innerHTML=`<a>BoringClub</a>`;
    }// else if (pid[2]+pid[3] == "00"){
    //     document.getElementById("pp").innerHTML=`<a>N/A</a>`;       // 未来可能会有更多的“品牌”……
    // }

    // 显示型号
    for (var i = 0; i <= 4; i ++){
        trans(pid[4+(2*i)]+pid[5+(2*i)],i);
    }
    document.getElementById("xh").innerHTML=`<a>${xh[0]+xh[1]+xh[2]+xh[3]+xh[4]+"-"+pid[14]+pid[15]}</a>`;

    //显示生产日期和时间
    document.getElementById("sj").innerHTML=`<a>${"20"+String(Number(pid[20]+pid[21])-10)+"年"+String(Number(pid[18]+pid[19])-10)+"月"+String(Number(pid[16]+pid[17])-10)+"日"+((Number(pid[22]+pid[23])-10)<10?'0'+String(Number(pid[22]+pid[23])-10):String(Number(pid[22]+pid[23])-10))+":"+((Number(pid[24]+pid[25])-10)<10?'0'+String(Number(pid[24]+pid[25])-10):String(Number(pid[24]+pid[25])-10))}</a>`;
}

// 用于将型号中的数字转为对应字母或数字
function trans(tranIn,arrayNo){
    switch(tranIn){
        case '11':xh[arrayNo]='A';
        break;
        case '12':xh[arrayNo]='B';
        break;
        case '13':xh[arrayNo]='C';
        break;
        case '14':xh[arrayNo]='D';
        break;
        case '15':xh[arrayNo]='E';
        break;
        case '16':xh[arrayNo]='F';
        break;
        case '17':xh[arrayNo]='G';
        break;
        case '18':xh[arrayNo]='H';
        break;
        case '19':xh[arrayNo]='I';
        break;
        case '20':xh[arrayNo]='J';
        break;
        case '21':xh[arrayNo]='K';
        break;
        case '22':xh[arrayNo]='L';
        break;
        case '23':xh[arrayNo]='M';
        break;
        case '24':xh[arrayNo]='N';
        break;
        case '25':xh[arrayNo]='O';
        break;
        case '26':xh[arrayNo]='P';
        break;
        case '27':xh[arrayNo]='Q';
        break;
        case '28':xh[arrayNo]='R';
        break;
        case '29':xh[arrayNo]='S';
        break;
        case '30':xh[arrayNo]='T';
        break;
        case '31':xh[arrayNo]='U';
        break;
        case '32':xh[arrayNo]='V';
        break;
        case '33':xh[arrayNo]='W';
        break;
        case '34':xh[arrayNo]='X';
        break;
        case '35':xh[arrayNo]='Y';
        break;
        case '36':xh[arrayNo]='Z';
        break;
        case '40':xh[arrayNo]='0';
        break;
        case '41':xh[arrayNo]='1';
        break;
        case '42':xh[arrayNo]='2';
        break;
        case '43':xh[arrayNo]='3';
        break;
        case '44':xh[arrayNo]='4';
        break;
        case '45':xh[arrayNo]='5';
        break;
        case '46':xh[arrayNo]='6';
        break;
        case '47':xh[arrayNo]='7';
        break;
        case '48':xh[arrayNo]='8';
        break;
        case '49':xh[arrayNo]='9';
        break;
        case '50':xh[arrayNo]='';
        break;
        default:xh[arrayNo]=undefined;
    }
}