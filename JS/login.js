// var login = document.getElementById('login');
// login.innerText = '退出登录';
function enter(){
    let tel = document.getElementById("tel").value;
    let password = document.getElementById("pwd").value;
if (tel=="" && password==""){
    location.reload();
    alert("请输入账号和密码");
}
else if(tel==""){
    alert("请输入账号");  
}
else if(password==""){
    alert("请输入密码");
}else if(localStorage.length == 0)
    alert("您还未注册")
else{
    let teldata = [] ;// 存储本地所有已存储的手机号
    let passworddata = []; // 存储本地所有已存储的密码
    let namedata = [];
    let iddata = []; // 存储本地所有已存储的id
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let keydata = localStorage.getItem(key); // 拿到对应数据  只不过这时候是字符串
        let keyinfo = JSON.parse(keydata); // 将字符串转化为对象的形式
        teldata[i] = keyinfo.tel;
        passworddata[i] = keyinfo.password;
        namedata[i] = keyinfo.name;
        iddata[i] = keyinfo.id;
    }
    if(teldata.indexOf(tel) < 0){ 
        alert("此账号未注册");
    }else{
        let index = teldata.indexOf(tel); // 返回对应手机号的下标   我们通过下标去判断密码
        if(passworddata[index] != password){
            alert("密码错误");
        }else if(teldata[index]=="18888888888"&&passworddata[index] == password){
            alert("管理员身份登录成功");
            window.location.href = "adminManager.html?" + teldata[index]+"&"+namedata[index];
        }
        else{
            console.log(iddata[index]);
            setTimeout(function(){
                window.location.href = "index.html?" + teldata[index];
                
            },2000);
            alert("用户登录成功,即将跳转到首页");
            
        }
    }
    // alert("登陆成功");  
    // window.location.href='../index.html';
}
}


