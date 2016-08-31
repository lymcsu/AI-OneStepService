$(".tabs-menu li").on("click",function(){
	$(this).siblings().removeClass("active");
	$(this).addClass("active");
	var index = $(this).index();
	$(".tabs-box").removeClass("active").eq(index).addClass("active");
})
$(".side-bar a").on("click",function(){
	$(this).siblings().removeClass("active");
	$(this).addClass("active");
	$(this).parent().siblings(".main-content").find(".content-detail").hide();
	$(this).parent().siblings(".main-content").find(".content-items").show();
})
$(".content-items li").on("click",function(){
	$(this).parent().hide().siblings(".content-detail").show();
})
$(".icon-iconfontcha").on("click",function(){
	$(this).parents(".content-detail").hide().siblings(".content-items").show();
})
