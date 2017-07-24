/*
 * Created by Administrator on 2017/7/19.
 */
var open;
function windowopen(){
    var que=confirm("确认要打开新窗口吗");
    if(que==true){
        var prr=prompt("请输入地址","https://www.baidu.com/");
        if(prr!=null)
        open=window.open(prr,"_blank","width=400px,height=500px,left=0px,top=100px");
        else{
            alert("请输入网址");
        }
    }
}
function windowclose(){
    open.close();
}