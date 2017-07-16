window.onload=function(){
    var box=document.getElementById("contain");
    var img=document.getElementsByTagName("img");
    var imgwidth=img[0].offsetWidth;
    var exposewidth=200;

    //�����������,��̬����
    var boxwidth=imgwidth+(img.length-1)*exposewidth;
    box.style.width=boxwidth+"px";


    //���ó�ʼλ��
    function setImgsPos(){
        for(var i= 1,len=img.length;i<len;i++){
            img[i].style.left=imgwidth+exposewidth*(i-1)+"px";
        }
    }
    setImgsPos();
    var translate=imgwidth-exposewidth;

    for(var i= 0,len=img.length;i<len;i++){
        (
            function (i) {
                img[i].onmouseover=function(){
                    setImgsPos();
                    for(var j=1;j<=i;j++){
                        img[j].style.left=parseInt(img[j].style.left,10)-translate+"px";
                    }
                };
            }
        )(i);
    }
};