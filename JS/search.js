var cargo = window.location.search;
cargo = cargo.substring(1,cargo.length);
// console.log(cargo);
// console.log(typeof(cargo));

var searchResult = document.getElementById('searchResult');
$(function(){
    for(var i=0 ; i<localStorage.length; i++){
        var key = localStorage.key(i);
        var keydata = localStorage.getItem(key);
        var keyinfo = JSON.parse(keydata);
        var cargo = window.location.search.substring(1,window.location.search.length);
        // console.log(typeof(cargo));
        // console.log(keyinfo.tel);
        // // console.log(keyinfo.id ==cargo);
        var str1 = new RegExp(keyinfo.id,'i');
        if(cargo.match(str1)&&typeof(keyinfo.cargo)!='undefined'){
            var li =$("<li class='brick-item' style='margin-left: 40px'></li>");
                var img = $("<div class='figure-img'><img style='height:160px; width: 160px;' src='"+keyinfo.imges+" '</div>");
                li.append(img);
                var cargo = $("<h3 class='title'>"+keyinfo.cargo+"</h3>");
                var price = $("<p class='price'> <span class='num'>"+"￥"+keyinfo.price+"</span> </p>");
                var address = $("<p class='desc'>"+"发货地："+keyinfo.address+"</p>");
                var shopcar = $('<a href="#" class="gouwu">加入购物车</a>')
                li.append(cargo);
                li.append(address);
                li.append(price);   
                li.append(shopcar);
        }
        $("#searchResult").append(li);
    }
    })


    //搜索框
var searchBorder = document.getElementById('searchBorder');
var searchResult = document.getElementById('searchResult');
var ids = "";
var info = window.location.search;
info = info.substring(1,info.length);
function search(){
    // console.log(typeof(searchBorder.value));
    var str = new RegExp(searchBorder.value, 'i');
    for(var i=0 ; i<localStorage.length; i++){
        var key = localStorage.key(i);
        var keydata = localStorage.getItem(key);
        var keyinfo = JSON.parse(keydata);
        if(typeof(keyinfo.cargo)=="string"){
            var isHas = keyinfo.cargo.match(str);
            if(isHas){
                // arr.push(keyinfo.id);
                ids = ids+keyinfo.id;
                console.log(ids);
                window.location.href ="search.html?"+info+ids
            }
        }
    }
}