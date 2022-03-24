function create(){
    let tel = document.getElementById("tel").value;
    let name = document.getElementById("name").value;
    let password = document.getElementById("pwd").value;
    let telphone = /^[1][3,4,5,7,8,9][0-9]{9}$/;
    if(tel==""||name==""||password==""){
        alert("请把信息完善");
    }
    if(localStorage.length==0){
    if(!telphone.test(tel)){
        alert("手机号格式不对");
    }
    else{
        let dataLength = localStorage.length;
        let data = {}
        data.tel = tel;
        data.name = name;
		data.password = password;
        data.id = dataLength;
        let info = JSON.stringify(data); 
        localStorage.setItem("key" + dataLength, info);	
		setTimeout(function() {
		window.location.href = "login.html"
		}, 2000)
        alert("存储成功,点击后跳转到登录页面");
    }
   }else{
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        console.log(key);
        let keydata = localStorage.getItem(key)
        let keyinfo = JSON.parse(keydata); 
        console.log(keyinfo);
        if (keyinfo.name == name) {
            alert("昵称已存在");
            break;
        } else if (keyinfo.tel == tel) { 
            alert("手机号已注册");
            break;
        }else if (!telphone.test(tel)) { 
            alert("手机号格式不对");
            break;
        } else {
            let dataLength = localStorage.length 
            // console.log(dataLength);
            let data = {};
            data.name = name; 
            data.tel = tel; 
            data.password = password; 
            data.id = dataLength ;
            let info = JSON.stringify(data); 
            localStorage.setItem("key" + dataLength, info);
            setTimeout(function() {
                window.location.href = "login.html";
            }, 2000)
            alert("存储成功,点击后跳转到登录页面")
            break;
        }
    }    
    }
};
