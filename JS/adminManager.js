

//侧边栏
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



//用户管理
var admintel = document.getElementById('admintel');
var adminrole = document.getElementById('adminrole');
var adminlogin = document.getElementById('adminlogin');
var username = document.getElementById("username");
var table_tr = document.getElementById('table_tr');
var table_tr_1 = document.getElementById('table_tr_1');
var info = window.location.search;
var info1 = window.location.search;
info = info.substring(1,12);
info1 = info1.substring(13,info1.length);
if(info!=""){
    admintel.innerHTML = "telphone："+info;
    adminrole.innerHTML = "role：管理员";
    adminlogin.innerHTML = "退出";
}
$(function(){
for(var i=0; i<localStorage.length; i++){
    var key = localStorage.key(i);
    var keydata = localStorage.getItem(key);
    var keyinfo = JSON.parse(keydata);
    // console.log(typeof(keyinfo.id));
    if((typeof(keyinfo.id)=='number')){
    
    // console.log(keyinfo.name);
    // console.log(keyinfo.tel);
    // console.log(keyinfo.id);
    var tr =$("<tr></tr>");
    $("#table_tr").append(tr);
    var td1 = $("<td>"+keyinfo.id+"</td>");
    var td2 = $("<td>"+keyinfo.tel+"</td>");
    var td3 = $("<td>"+keyinfo.name+"</td>");
    var td5 = $("<td onclick=del("+JSON.stringify(keyinfo.tel)+","+JSON.stringify(keyinfo.name)+","+JSON.stringify(key)+") style='cursor: pointer;'>删除</td>");
    if(keyinfo.tel ==info){
        var td4 = $("<td>管理员</td>");
    }else{
        var td4 = $("<td>用户</td>");
    }
    tr.append(td1);
    tr.append(td2);
    tr.append(td3);
    tr.append(td4);
    tr.append(td5);
    }
}
})
function del(keyinfoTel,keyinfoName,key){

    if(keyinfoTel==info&&keyinfoName==info1){
        alert("管理员的信息不能在此删除哦！")
    }else{
        localStorage.removeItem(key);
        history.go(0);
    }
  
}
function isclear() {
	localStorage.clear()
    history.go(0);
};




//添加商品

var img = document.getElementById('img');
var image = "";
function selectImage(file){
    if(!file.files || !file.files[0]){
        return;
    }
    var reader = new FileReader();
    reader.onload = function(evt){
        img.src = evt.target.result;
        img.style.height = '50px';
        img.style.weight = '50px';
        img.style.marginLeft = "750px";
        img.style.position = 'absolute';
        img.style.marginTop = "-5px";
        image = evt.target.result;
        // let shop = {};
        // let datalength = "shop"+localStorage.length;
        // shop.img = img.src;
        // let imginfo = JSON.stringify(shop);
        // localStorage.setItem('key'+datalength, imginfo);
        
        // console.log(img.src);


    }
    reader.readAsDataURL(file.files[0])
}
function add(){
let cargo = document.getElementById('cargo').value;
let price = document.getElementById('price').value;
let address = document.getElementById('address').value;
let count = document.getElementById('count').value;
let imges = img.src;
console.log(imges);
let datalength = "shop"+localStorage.length;
        if(cargo=="" || price =="" || address==""){
            alert("请完善信息");
        }else{  
            let shops={};
            shops.cargo = cargo;
            shops.price = price;
            shops.address = address;
            shops.count = count;
            shops.id = datalength;
            shops.imges = imges;    
            console.log(img);
            let info = JSON.stringify(shops);
            localStorage.setItem('key'+datalength, info);
            // console.log(JSON.parse(info));
            alert("添加成功");
            history.go(0);
        }
    }
    $("#resert").click(function(){
    	$("#cargo").val("");
        $("#address").val("");
        $("#price").val("");
        $("#count").val("");
    });

    //管理商品
    $(function(){
        for(var i=0; i<localStorage.length; i++){
            var key = localStorage.key(i);
            var keydata = localStorage.getItem(key);
            var keyinfo = JSON.parse(keydata);
            // console.log(key.substring(0,6));
            
            if((typeof(keyinfo.id)=='string')){
            var tr =$("<tr></tr>");
            $("#table_tr_1").append(tr);
                // console.log(typeof(keyinfo.img));
                var td1 = $("<td><img style='height:50px; width: 50px;' src='"+keyinfo.imges+" '</td>");
            tr.append(td1);
            var td2 = $("<td>"+keyinfo.id+"</td>");
            var td3 = $("<td>"+keyinfo.cargo+"</td>");
            var td4 = $("<td>"+keyinfo.price+"</td>");
            var td5 = $("<td>"+keyinfo.address+"</td>");
            var td6 = $("<td>"+keyinfo.count+"</td>");
            var td7 = $("<td onclick=del1("+JSON.stringify(key)+") style='cursor: pointer;'>删除</td>");
            // if(key.substring(0,6)=='keyimg'){
            //     console.log(typeof(keyinfo.img));
            //     var td7 = $("<td><img src='"+keyinfo.img+"'</td>");
            //     // tr.append(td7);
            // }
                
            // var td7 = $("<td><img src="+keyinfo.img+"</td>");
            // console.log(keyinfo.img);
            tr.append(td2);
            tr.append(td3);
            tr.append(td4);
            tr.append(td5);
            tr.append(td6);
            tr.append(td7);
            // tr.append(td7);
            }
            // if(key.substring(0,6)=='keyimg'){
            //     // console.log(typeof(keyinfo.img));
            //     var td1 = $("<td><img style='height:50px; width: 50px;' src='"+keyinfo.img+" '</td>");
            // tr.append(td1);
            // }
        }
        })
        function del1(key){
            // console.log(key);
            localStorage.removeItem(key);
            history.go(0);
 }


