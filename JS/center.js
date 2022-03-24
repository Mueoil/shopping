var info = window.location.search;
info = info.substring(1,info.length);
function center(){
    window.location.href="../HTML/introduce.html?"+info;
}

function gouwuche(){
    window.location.href="../HTML/shopcar.html?"+info;
}

function order(){
    window.location.href="../HTML/order.html?"+info;
}
function shopplist(){
    window.location.href="../HTML/shoppinglist.html?"+info;
}

function index(){
    window.location.href="../HTML/index.html?"+info;
}

function good(){
    window.location.href="../HTML/good.html?"+info;
}