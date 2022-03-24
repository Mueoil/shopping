var admin = document.getElementById('admin');
var login = document.getElementById('login');
var info = window.location.search; //获取参数
// console.log(login.innerHTML);
// console.log(admin.innerHTML);
info = info.substring(1,12);
admin.innerHTML = info;
 if(info!=""){
    // console.log(1);
    login.innerHTML = "退出登录";
}


