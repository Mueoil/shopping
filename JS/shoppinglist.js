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