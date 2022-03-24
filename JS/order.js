window.onload = function(){
    load();
    function getData(){
        var data = localStorage.getItem('order');
        if(data!=null){
            return JSON.parse(data);
        }
        else{
            return [];
        }
    }

    function saveData(data){
        localStorage.setItem('order',JSON.stringify(data));
    }

    function load(){
    var data = getData();
    $.each(data,function(i,n){
      $('#cart').append(
        '<table class="order" id = '+ i +'>' +
        '<tr class="tr-tit">' +
            '<th class="txt-left" colspan="2">' +
                '订单号<span class="dingdanhao">' + n.id +'</span>下单时间:<span class="dingdantime">' + n.time+'</span>' +
                '<a href="#">立即支付</a>&nbsp' +  
                '<a onclick="order()" data-id="7" class="cancel">取消订单</a>' +
            '</th>' +
            '<th width="100">总价:<span class="totalmoney">'+ n.total +'</span></th>'+
        '</tr>' +
        '<tr>' +
            '<td class="gname"><a href="#" target="_blank">'+ n.name +'</td>'+
            '<td class="txt-center">' + n.number +'件</td>'+
            '<td class="txt-center"><span>￥'+ n.danjia +'</span></td>'+
        '</tr>'+
        '<tr>' + 
            '<td colspan="3">'+
                '收件地址:<span class="adress">' + n.shouhuoadress +'</span>&nbsp;&nbsp;&nbsp;'+
                '收件人:<span class="adressname">'+ n.shouhuoname +'</span>&nbsp;&nbsp;&nbsp;'+
                '联系电话:<span class="tel">'+ n.shouhuotel +'</span>' +
            '</td>'+
        '</tr>'+
    '</table>'
      )  
    })
    }

    $('.cancel').click(function(){
       var data = getData();
       var index =  $(this).parent().parent().parent().parent().attr('id')
       data.splice(index,1);
       saveData(data);
       load();
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