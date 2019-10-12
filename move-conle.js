function Drag(id) {
    var wthis=this;
    this.disX=0;
    this.disY=0;

    this.oDiv=document.getElementById(id);
    this.oDiv.onmousedown=function (ev) {
        wthis.mousedown(ev);
        return false;//去掉里面双选的情况
    }
}
Drag.prototype.mousedown=function(ev)
{
    var wthis=this;
    var oEvent = ev || event;

    this.disX = oEvent.clientX - this.oDiv.offsetLeft;
    this.disY = oEvent.clientY - this.oDiv.offsetTop;
    document.onmousemove=function (ev1) {
        wthis.mousemove(ev1);
    }
    document.onmouseup=function () {
        wthis.mouseup();
    }
}

Drag.prototype.mousemove=function(ev)
{//因为你的移动是发生在整个页面中的，用嵌套在odiv的onmousedown中
    var oEvent=ev||event;
    this.oDiv.style.left=oEvent.clientX-this.disX+'px';
    this.oDiv.style.top=oEvent.clientY-this.disY+'px';

}
Drag.prototype.mouseup=function ()


{
    document.onmousemove=null;
    document.onmouseup=null;
};//因为也是在down的执行开始之后才存在这个up所以放在欧尼mousedown里面
