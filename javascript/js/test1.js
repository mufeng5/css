/*
 * Created by Administrator on 2017/7/19.
 */
var open;
function windowopen(){
    var que=confirm("ȷ��Ҫ���´�����");
    if(que==true){
        var prr=prompt("�������ַ","https://www.baidu.com/");
        if(prr!=null)
        open=window.open(prr,"_blank","width=400px,height=500px,left=0px,top=100px");
        else{
            alert("��������ַ");
        }
    }
}
function windowclose(){
    open.close();
}