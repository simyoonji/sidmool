//menu
$(".navi li").mouseover(function(){
    $(".submenu").stop().slideDown();
    $("p.bg").stop().slideDown();
});
$(".navi li").mouseout(function(){
    $(".submenu").stop().slideUp();
    $("p.bg").stop().slideUp();
});
//modal
$(".hover-box").click(function(){
    $("#modal").stop().show();
});
$("#modal .btn").click(function(){
    $("#modal").stop().hide();
});
//ft-modal
$(".ft-btn").click(function(){
    $("#ft-modal").stop().show();
});
$(".ft-modal-btn").click(function(){
    $("#ft-modal").stop().hide();
});

//imgslide1

var imgs = 4;
var now = 0;
setInterval(function(){
    $(".imgslide li").eq(now-1).fadeOut();
    $(".imgslide li").eq(now).fadeIn();
    now = now == imgs?0: now += 1;
},4000);

//imgslide1

var imgs = 2;
var now = 0;
setInterval(function(){
    $("#imgslide2 .slide2 li").eq(now-1).fadeOut();
    $("#imgslide2 .slide2 li").eq(now).fadeIn();
    now = now == imgs?0: now += 1;
},3000);









