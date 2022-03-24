window.onload = function(){
    load();
    function getData(){
        var data = localStorage.getItem('shop');
        if(data!=null){
            return JSON.parse(data);
        }
        else{
            return [];
        }
    }

    function getData1(){
        var data = localStorage.getItem('order');
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
    function saveData1(data){
        localStorage.setItem('order',JSON.stringify(data));
    }
    function load(){
    var data = getData();
    $('.buyGoods').empty();
    $.each(data,function(i,n){
        $('.buyGoods').append(
            '<tr class="item" id='+  i + '><td class="center"><input type="checkbox" class="check" name="id[]" value="45" />'+
            '</td><td class="introduceImg"><a href="goods.html" target="_blank"><img src='+ n.src+'></a></td>'+
            '<td class="introduce"><a href="goods.html" target="_blank">'+ n.name +'</a></td>'+
            '<td class="center"><span class="item-price">' + n.price +'</span></td>'+
            '<td class="numopt">'+
                '<input class="setNum" type="button" value="-" />'+
                '<input class="item-num" type="text" value="1" />'+
                '<input class="setNum" type="button" value="+" /></td>'+
            '<td class="center"><div class="p-action"><a class="del" href="../HTML/shopcar.html">删除</a></td></tr>');
    }
    )};


    $(".setNum").click(function() {
        if ($(this).val() === '-') {
            if ($(this).next().val() !== '1') {
                var num = $(this).next().val() - 1;
                $(this).next().val(num);
            }
            fun();
        } else if ($(this).val() === '+') {
            if ($(this).prev().val() !== '100') {
                var num = parseInt($(this).prev().val()) + parseInt(1);
                $(this).prev().val(num);
            }
            fun();
        }
    });

    $(function() {
        $(":checkbox").prop("checked", true);
        $(":checkbox").attr("checked", true);
        fun()
    });

    $('.checkAll').click(function(){
        $('.check').prop('checked',true);
        fun()
    }
    );

    $('.check').click(function(){
        fun();
    });

    $('.remove-batch').click(function(){
        var data = getData();
        var index = $('.check:checked').parent().parent();
       for(var i = index.length-1 ; i>=0;i--){
        var j = index[i].getAttribute('id');
        data.splice(j,1);
        saveData(data);
       }
       load();
       fun();
    })

    $('tr').on('click','.del',function(){
        var data = getData();
        var index = $(this).parent().parent().parent().attr('id');
        data.splice(index,1);
        saveData(data);
        load();
        fun()
    })

    function fun(){
        var count = 0;
        var money = 0;
        $('.check').each(function(i,n){
            if($(this).prop('checked') == true){
                var coun = parseInt($(this).parent().siblings('.numopt').children('.item-num').val());
                count= count + coun;
                money += parseInt($(this).parent().siblings('.center').children('.item-price').text().substr(1)) * coun;
            }
        })
        $('#num').text(count);
        $('#monery').text(money);
    }


    $('.order-btn').click(function(){
        localStorage.removeItem('order')
        $('.check').prop('checked');
        $('.check').each(function(i,n){
            if($(this).prop('checked') == true){
                var date = new Date();
                var words = 0;
                var word = ['A','a','B','b','C','c','D','d','E','e','F','f','G','g','H','h','I','i','J','j','K','k','L','l','M','m','N','n','O','o','P','p','Q','q','R','r','S','s','T','t','U','u','V','v','W','w','X','x','Y','y','Z','z','1','2','3','4','5','0','6','7','8','9'];
                for(var j = 0 ; j < 5 ; j++){
                    var i = Math.floor((Math.random() * 42) + 1);
                    words= word[i] + words;
                }
                var hour = date.getHours();
                hour = hour < 10? '0'+ hour:hour;
                minute = date.getMinutes() 
                minute = minute < 10? '0'+ minute:minute;
                Seconds = date.getSeconds();
                Seconds = Seconds < 10? '0'+ Seconds:Seconds;
                var timer = date.getFullYear() + '-' + (parseInt(date.getMonth())+1) + '-'+ date.getDate() + ' ' + hour + ':' + minute + ':' + Seconds;
                var name1 = $(this).parent().parent().children('.introduce').text()
                var danjia1 = parseInt($(this).parent().parent().children('.center').eq(1).text().substr(1));
                var number1 = parseInt($(this).parent().parent().children('.numopt').children('.item-num').val());
                var total1 = danjia1 * number1;
                if(localStorage.getItem('shouhuo')!=null){
                    var shouhuo = JSON.parse(localStorage.getItem('shouhuo'));
                    shouhuoname1 = shouhuo.shouhuoname;
                    shouhuoadress1 = shouhuo.shouhuoadress;
                    shouhuotel1 = shouhuo.shouhuotel;
                }else{
                    shouhuoname1 = '无';
                    shouhuoadress1 = '无';
                    shouhuotel1 = '无';
                }
                var OrderItemObj=
                {
                    id:words,
                    time:timer,
                    name:name1,
                    danjia:danjia1,
                    number:number1,
                    total:total1,
                    shouhuoname:shouhuoname1,
                    shouhuoadress:shouhuoadress1,
                    shouhuotel:shouhuotel1
                }
                orderlocal = getData1();
                orderlocal.push(OrderItemObj);
                saveData1(orderlocal);
            }
        })
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