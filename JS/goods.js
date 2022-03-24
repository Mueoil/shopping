window.onload = function(){
    var small = document.querySelector('.small_area');
    var big = document.querySelector('.big_area');
    var bigImg = document.querySelector('.big_img');
    var mask = document.querySelector('.mask');
    small.addEventListener('mouseover',function(){
        mask.style.display = 'block';
        big.style.display = 'block';
    })
    small.addEventListener('mouseout',function(){
        mask.style.display = 'none';
        big.style.display = 'none';
    })
    small.addEventListener('mousemove',function(e){
        var x = (e.pageX - this.offsetLeft) - mask.offsetWidth / 2;
        var y = (e.pageY - this.offsetTop) - mask.offsetWidth / 2;
        var MaxsmallWidthSize = this.offsetWidth - mask.offsetWidth;
        var MaxsmallHeighthSize = this.offsetHeight - mask.offsetHeight;
        if(x <= 0){
            mask.style.left =  0 + 'px';
        }else if(x >=MaxsmallWidthSize)
        {
            mask.style.left = MaxsmallWidthSize + 'px';
        }
        else{
            mask.style.left = x + 'px';
        }
        if(y <= 0){
            mask.style.top = 0 + 'px';
        }
        else if(y >= MaxsmallHeighthSize){
            mask.style.top = MaxsmallHeighthSize + 'px';
        }
        else{
        mask.style.top = y  + 'px';
        }

        var MaxbigWidthSize = bigImg.offsetWidth-big.offsetWidth;
        var MaxbigHeighthSize = bigImg.offsetHeight-big.offsetHeight;
        var bigX = x * MaxbigWidthSize /MaxsmallWidthSize;
        var bigY = y * MaxbigHeighthSize/MaxsmallHeighthSize;
        bigImg.style.left = -bigX + 'px';
        bigImg.style.top = -bigY + 'px';


    })


    var select = document.querySelector('#bt');
    var firstcontent = document.querySelector('#d1');
    var secondcontent = document.querySelector('#d2');
    select.children[0].addEventListener('click',function(){
        firstcontent.style.display = 'block';
        secondcontent.style.display = 'none';
        select.children[0].className = 'se'
        select.children[1].className = ''
    })
    select.children[1].addEventListener('click',function(){
        firstcontent.style.display = 'none';
        secondcontent.style.display = 'block';
        select.children[0].className = ''
        select.children[1].className = 'se'
    })
}