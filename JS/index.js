window.onload = function(){
var  leftbtn = document.querySelector('.focus_btnleft');
var rightbtn = document.querySelector('.focus_btnright');
var focus = document.querySelector('.focus');
var ul = focus.querySelector('ul');
var ol = focus.querySelector('ol');
/**
 *  创建li
 *  */ 
for(let i = 0 ; i < ul.children.length;i++){
    var li = document.createElement('li');
    li.setAttribute('index',i);
    ol.appendChild(li);
    li.addEventListener('click',function(){
        for(let i = 0 ; i < ol.children.length;i++){
            ol.children[i].className = '';
        }
        this.className = 'current';
        var index = this.getAttribute('index');
        sum = index;
        j = index;
        let focusWidth = focus.offsetWidth;
        animate(ul,-index*focusWidth)
    })
}
ol.children[0].className = 'current';



/**
 * 移动到轮播图上显示左右按钮
 */

focus.addEventListener('mouseenter',function(){
    leftbtn.style.display = 'block';
    rightbtn.style.display = 'block';
    clearInterval(timer1);
    var timer = null;
})
focus.addEventListener('mouseleave',function(){
    leftbtn.style.display = 'none';
    rightbtn.style.display = 'none';
    clearInterval(timer1);
    timer1 = setInterval(function(){
        rightbtn.click();
    },2000)
})
var timer1 = setInterval(function(){
    rightbtn.click();
},2000)
var sum = 0;
var j = 0;
/**
 * 点击左边实现
 */
 leftbtn.addEventListener('click',function(){
    let focusWidth = focus.offsetWidth;
    if(sum == 0){
        ul.style.left = -(ul.children.length - 1) * focusWidth + 'px';
        sum = ul.children.length-1;
    }
    sum--;
    animate(ul,-sum*focusWidth)
    j--;
    if(j < 0){
        j = ol.children.length-1;
    }
    for(let i = 0 ; i < ol.children.length;i++){
        ol.children[i].className = '';
    }
    ol.children[j].className = 'current';

 })
/**
 * 点击右边实现挑战
 */
var cloneFirstPic = ul.children[0].cloneNode(true);
ul.appendChild(cloneFirstPic);
 rightbtn.addEventListener('click',function(){
        let focusWidth = focus.offsetWidth;
        if(sum == ul.children.length-1){
            ul.style.left = 0;
            sum = 0;
        }
        sum++;
        animate(ul,-sum*focusWidth)
        j++;
        if(j == ol.children.length){
            j = 0;
        }
        for(let i = 0 ; i < ol.children.length;i++){
            ol.children[i].className = '';
        }
        ol.children[j].className = 'current';

    }
 )

/** 
 * 动画效果
*/
function animate(obj,target,callback){
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
            var step = (target - obj.offsetLeft) / 10;
            step = step > 0? Math.ceil(step) : Math.floor(step);
            if(obj.offsetLeft == target){
                clearInterval(obj.timer);
                if(callback){
                    callback();
                }
            }   
        obj.style.left = obj.offsetLeft +  step + 'px';
    },15)
}
/**
 * 左滚动动画
 */
 var timer2 = setInterval(function(){
    if(img.offsetLeft <= (-img.offsetWidth + (li1.offsetWidth * 7))){
        img.style.left = 0;
    }
    img.style.left = img.offsetLeft + -2 + 'px';
},15)
var catogoryImg = document.querySelector('.catogoryImg1');
var img = document.querySelector('.img1');
var li1 = img.querySelector('li');
catogoryImg.addEventListener('mouseleave',function(){
    clearInterval(timer2);
    timer2 = setInterval(function(){
        if(img.offsetLeft <= (-img.offsetWidth + (li1.offsetWidth * 7))){
            img.style.left = 0;
        }
        img.style.left = img.offsetLeft + -2 + 'px';
    },15)

})
catogoryImg.addEventListener('mouseenter',function(){
    clearInterval(timer2);
    timer2 = null;
})
/**
 * 秒杀
 * 
 */
setInterval(mioasha,1000);
var countdown = document.querySelector('.countdown');
var hour = countdown.querySelector('.hour');
var minute = countdown.querySelector('.min');
var second = countdown.querySelector('.second');
var  inputTime = +new Date('2021-12-23 14:00:00');
setInterval(mioasha,1000);
function mioasha(){
    var  nowTime = +new Date();
    var  intervalTime = (inputTime - nowTime) / 1000;
    var  h =  parseInt(intervalTime / 60 / 60 % 24);
    h = h < 10? '0' + h : h; 
    hour.innerHTML = h;
    var  m = parseInt(intervalTime / 60 % 60);
    m = m < 10? '0' + m : m; 
    minute.innerHTML = m;
    var s = parseInt(intervalTime % 60);
    s = s < 10? '0' + s : s; 
    second.innerHTML = s;
    if(intervalTime <= 0){
        hour.innerHTML = '00';
        minute.innerHTML = '00';
        second.innerHTML = '00';
        clearInterval(mioasha);
    }
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

var closeImage = document.getElementById('closeImage')
var close = document.getElementById('close')
close.onclick =function(){
    closeImage.style.display = 'none';
    close.style.display = 'none';
}