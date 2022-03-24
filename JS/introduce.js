window.onload = function (){
    var message1 = location.search;
    var message = message1.substring(1);
    if(message == ''){
        $('.content_introduce_person').children('ul').children('li').children('.name').text('');
        $('.content_introduce_person').children('ul').children('li').children('.phone').text('');
    }
    else{
    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i); //获取本地存储的Key
        if(localStorage.getItem(key).includes(message) == true){
            var obj = JSON.parse(localStorage.getItem(key))
            $('.content_introduce_person').children('ul').children('li').children('.name').text(obj.name);
            $('.content_introduce_person').children('ul').children('li').children('.phone').text(obj.tel);
        }
    }
    }



    $('.btn').click(function(){
        var telphone = /^[1][3,4,5,7,8,9][0-9]{9}$/;
       if($('.inputshouhuoname').val() == ''){
           alert('收货人的填写不能为空');
       }
       else if($('.inputtextarea').val() == ''){
        alert('详细地址的填写不能为空');
        }
        else if($('.inputshouhuotel').val() == ''){
            alert('收货人电话不能为空')
        }
        else if(!telphone.test($('.inputshouhuotel').val())){
            alert('手机格式不对,请重新填写')
        }
        else{
            for (var i = 0; i < localStorage.length; i++) {
                var key = localStorage.key(i); //获取本地存储的Key
                var temp = JSON.parse(localStorage.getItem(key));
                if(temp.tel == message){
                    var shouhuoname1 = $('.inputshouhuoname').val();
                    var shouhuoadress1 = $('.inputtextarea').val();
                    var shouhuotel1 = $('.inputshouhuotel').val();
                    var mainMessage = {
                        shouhuoname:shouhuoname1,
                        shouhuoadress:shouhuoadress1,
                        shouhuotel:shouhuotel1
                    }
                    var important = key;
                    break;
                }
            }
            for(var j = 0 ; j < localStorage.length;j++){
                if(localStorage.key(j) == 'shouhuo'){
                    localStorage.removeItem('shouhuo');
                    localStorage.setItem('shouhuo',JSON.stringify(mainMessage));
                    break;
                }
                else{
                    localStorage.setItem('shouhuo',JSON.stringify(mainMessage));
                    break;
                }
            }
            var obj1 = JSON.parse(localStorage.getItem('shouhuo'))
            $('.content_introduce_person').children('ul').children('li').children('.shouhuoname').text(obj1.shouhuoname);
            $('.content_introduce_person').children('ul').children('li').children('.shouhuotel').text(obj1.shouhuotel);
            $('.content_introduce_person').children('ul').children('li').children('.shouhuoadress').text(obj1.shouhuoadress);
        }
    })
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