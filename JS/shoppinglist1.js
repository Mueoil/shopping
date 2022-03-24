window.onload = function(){
    var gouwu = document.querySelectorAll('.gouwu');
    var buyGoods = document.querySelector('buyGoods');
    function getData(){
        var data = localStorage.getItem('shop');
        if(data!=null){
            return JSON.parse(data);
        }
        else{
            return [];
        }
    }
    function saveData(data){
        localStorage.setItem('shop',JSON.stringify(data));
    }
    for(var i = 0 ; i < gouwu.length ; i++){
        gouwu[i].addEventListener('click',function(){
            var li = this.parentNode;
            var ShopImgSrc =  li.children[0].children[0].src
            var shopName = li.children[1].innerText;  
            var shopPirce = li.children[3].children[0].innerText;
            var ShopItemObj=
                {src:ShopImgSrc,
                name:shopName,
                price:shopPirce
            }
            var local = getData();
            local.push(ShopItemObj);
            saveData(local);        
    })
}

}

var brick_list_ul = document.getElementById('brick_list_ul');
$(function(){
    for(var i=0 ; i<localStorage.length; i++){
        var key = localStorage.key(i);
        var keydata = localStorage.getItem(key);
        var keyinfo = JSON.parse(keydata);
        if((typeof(keyinfo.id)=='string')){
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
            $("#brick_list_ul").append(li);
    }
    

})




var brick_list_ul2 = document.getElementById('brick_list_ul2');
$(function(){
for(var i=0 ; i<localStorage.length; i++){
    var key = localStorage.key(i);
    var keydata = localStorage.getItem(key);
    var keyinfo = JSON.parse(keydata);
    // console.log(parseInt(keyinfo.price));
    if(parseInt(keyinfo.price)>=0&&parseInt(keyinfo.price)<=100){
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
    $("#brick_list_ul2").append(li);
}
})


var brick_list_ul3 = document.getElementById('brick_list_ul3');
$(function(){
for(var i=0 ; i<localStorage.length; i++){
    var key = localStorage.key(i);
    var keydata = localStorage.getItem(key);
    var keyinfo = JSON.parse(keydata);
    // console.log(parseInt(keyinfo.price));
    if(parseInt(keyinfo.price)>=101&&parseInt(keyinfo.price)<=499){
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
    $("#brick_list_ul3").append(li);
}
})


var brick_list_ul4 = document.getElementById('brick_list_ul4');
$(function(){
for(var i=0 ; i<localStorage.length; i++){
    var key = localStorage.key(i);
    var keydata = localStorage.getItem(key);
    var keyinfo = JSON.parse(keydata);
    // console.log(parseInt(keyinfo.price));
    if(parseInt(keyinfo.price)>=500&&parseInt(keyinfo.price)<=999){
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
    $("#brick_list_ul4").append(li);
}
})

var brick_list_ul5 = document.getElementById('brick_list_ul5');
$(function(){
for(var i=0 ; i<localStorage.length; i++){
    var key = localStorage.key(i);
    var keydata = localStorage.getItem(key);
    var keyinfo = JSON.parse(keydata);
    // console.log(parseInt(keyinfo.price));
    if(parseInt(keyinfo.price)>=1000&&parseInt(keyinfo.price)<=1999){
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
    $("#brick_list_ul5").append(li);
}
})

var brick_list_ul6 = document.getElementById('brick_list_ul6');
$(function(){
for(var i=0 ; i<localStorage.length; i++){
    var key = localStorage.key(i);
    var keydata = localStorage.getItem(key);
    var keyinfo = JSON.parse(keydata);
    // console.log(parseInt(keyinfo.price));
    if(parseInt(keyinfo.price)>=2000&&parseInt(keyinfo.price)<=2999){
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
    $("#brick_list_ul6").append(li);
}
})


var brick_list_ul7 = document.getElementById('brick_list_ul7');
$(function(){
for(var i=0 ; i<localStorage.length; i++){
    var key = localStorage.key(i);
    var keydata = localStorage.getItem(key);
    var keyinfo = JSON.parse(keydata);
    // console.log(parseInt(keyinfo.price));
    if(parseInt(keyinfo.price)>=3000&&parseInt(keyinfo.price)<=4999){
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
    $("#brick_list_ul7").append(li);
}
})


var brick_list_ul8 = document.getElementById('brick_list_ul8');
$(function(){
for(var i=0 ; i<localStorage.length; i++){
    var key = localStorage.key(i);
    var keydata = localStorage.getItem(key);
    var keyinfo = JSON.parse(keydata);
    // console.log(parseInt(keyinfo.price));
    if(parseInt(keyinfo.price)>5000){
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
    $("#brick_list_ul8").append(li);
}
})

var tab = document.querySelector('.tab_list');
var lis = document.querySelector('.tab_list').querySelectorAll('li');
var items = document.querySelector('.tab_con').querySelectorAll('.item');
for(var i=0 ; i<lis.length ;i++){
    lis[i].setAttribute('index',i);
    lis[i].onclick = function(){
        for(var j = 0; j<lis.length ;j++){
            lis[j].className='';
            items[j].style.display = 'none';
        }
        this.className = 'current'; 
        var index = this.getAttribute('index');
        items[index].style.display = 'block';
          
}
}





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