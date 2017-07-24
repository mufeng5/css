function dik(obj){
    var li_arr = document.getElementsByTagName('li');
    var div_arr = document.getElementsByName('con');
    var len = li_arr.length;
    for(var i = 0;i < len;i++) {
        if(li_arr[i] == obj) {
            li_arr[i].setAttribute('class','active');
            div_arr[i].setAttribute('class','active');
        } else {
            li_arr[i].setAttribute('class','');
            div_arr[i].setAttribute('class','');
        }
    }
}