function count(){
    t1=parseInt(document.getElementById("txt1").value);
    t2=parseInt(document.getElementById("txt2").value);
    s1=document.getElementById("select").value;
    var t3;
    switch (s1){
        case "+" :
            t3=t1 + t2;
            break;
        case "-" :
            t3=t1 - t2;
            break;
        case "*" :
            t3=t1 * t2;
            break;
        case "/" :
            t3=t1 / t2;
            break;
    }
    document.getElementById("fruit").value=t3;
}