function welcome(){
    let welcome_text = ''
    if(document.referrer!==''){
        let referrer=document.referrer.split("/")[2];
        welcome_text="欢迎光临WuYang's blog，来自"+referrer.toUpperCase()+"的用户！";//获取用户来源域名
    }
    swal({
        title: " 欢迎！",
        text: welcome_text+'\n本次添加了看板娘和Github贡献日历',//欢迎文本，可自行修改
        imageUrl: "",//图片，自行修改位置
        timer: 3000,//弹出时间
        showConfirmButton: true
    });
}
$(document).ready(()=>{//若未引用JQuery，请引用
    welcome()
})
