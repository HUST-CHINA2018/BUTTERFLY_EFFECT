// JavaScript Document
$(document).ready(function(){		
  var obtn=document.getElementById('video');
  var ovideo=document.getElementById('video-btn');
  var oatn=document.getElementById('video-area');
  var oshut=document.getElementById('video-shut');
  var oshadow=document.getElementById('shadow');
  obtn.onclick=function () {
    ovideo.style.display='block';
    oshadow.style.display='block';
    oatn.innerHTML='<iframe src="https://www.youtube.com/embed/qm15e49A770" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
  }
  oshut.onclick= function () {
    ovideo.style.display='none';
    oshadow.style.display='none';
    oatn.innerHTML="";
  }
 });
 $(document).ready(function(){
			$("#top").click(function(){
if($("#hidden_design").offset().left < 600){
$("#hidden_design").animate({left:"+=150%"});
		                                       }
else if($("#hidden_experiment").offset().left < 600){
$("#hidden_experiment").animate({left:"+=150%"});
          }
else if($("#hidden_simulation").offset().left < 600){
$("#hidden_simulation").animate({left:"+=150%"});
          }		      
else if($("#hidden_project").offset().left < 600){
$("#hidden_project").animate({left:"+=150%"});
}
		  
           });
		});
$(document).ready(function(){
			$("#project_menu").click(function(){
if($("#hidden_project").offset().left > 600 && $("#hidden_design").offset().left < 600){
$("#hidden_project").animate({left:"-=150%"});
$("#hidden_design").animate({left:"+=150%"});
		                                       }
else if($("#hidden_project").offset().left > 600 && $("#hidden_experiment").offset().left < 600){
$("#hidden_project").animate({left:"-=150%"});
$("#hidden_experiment").animate({left:"+=150%"});
          }
else if($("#hidden_project").offset().left > 600 && $("#hidden_simulation").offset().left < 600){
$("#hidden_project").animate({left:"-=150%"});
$("#hidden_simulation").animate({left:"+=150%"});
          }		      
else if($("#hidden_project").offset().left > 600){
$("#hidden_project").animate({left:"-=150%"});
}
else if($("#hidden_project").offset().left < 600){
$("#hidden_project").animate({left:"+=150%"});
}
		  
           });
		});

$(document).ready(function(){
			$("#design_menu").click(function(){
if($("#hidden_design").offset().left > 600 && $("#hidden_project").offset().left < 600){
$("#hidden_design").animate({left:"-=150%"});
$("#hidden_project").animate({left:"+=150%"});
		                                       }
else if($("#hidden_design").offset().left > 600 && $("#hidden_experiment").offset().left < 600){
$("#hidden_design").animate({left:"-=150%"});
$("#hidden_experiment").animate({left:"+=150%"});
          }
else if($("#hidden_design").offset().left > 600 && $("#hidden_simulation").offset().left < 600){
$("#hidden_design").animate({left:"-=150%"});
$("#hidden_simulation").animate({left:"+=150%"});
          }
		  
else if($("#hidden_design").offset().left > 600){
$("#hidden_design").animate({left:"-=150%"});
}
else if($("#hidden_design").offset().left < 600){
$("#hidden_design").animate({left:"+=150%"});
}
		  
           });
		});	

$(document).ready(function(){
			$("#experiment_menu").click(function(){
if($("#hidden_experiment").offset().left > 600 && $("#hidden_project").offset().left < 600){
$("#hidden_experiment").animate({left:"-=150%"});
$("#hidden_project").animate({left:"+=150%"});
		                                       }
else if($("#hidden_experiment").offset().left > 600 && $("#hidden_design").offset().left < 600){
$("#hidden_design").animate({left:"+=150%"});
$("#hidden_experiment").animate({left:"-=150%"});
          }
else if($("#hidden_experiment").offset().left > 600 && $("#hidden_simulation").offset().left < 600){
$("#hidden_simulation").animate({left:"+=150%"});
$("#hidden_experiment").animate({left:"-=150%"});
          }		  
else if($("#hidden_experiment").offset().left > 600){
$("#hidden_experiment").animate({left:"-=150%"});
}
else if($("#hidden_experiment").offset().left < 600){
$("#hidden_experiment").animate({left:"+=150%"});
}
		  
           });
		});	
							
	$(document).ready(function(){
			$("#simulation_menu").click(function(){
if($("#hidden_simulation").offset().left > 600 && $("#hidden_project").offset().left < 600){
$("#hidden_simulation").animate({left:"-=150%"});
$("#hidden_project").animate({left:"+=150%"});
		                                       }
else if($("#hidden_simulation").offset().left > 600 && $("#hidden_design").offset().left < 600){
$("#hidden_design").animate({left:"+=150%"});
$("#hidden_simulation").animate({left:"-=150%"});
          }
else if($("#hidden_simulation").offset().left > 600 && $("#hidden_experiment").offset().left < 600){
$("#hidden_simulation").animate({left:"-=150%"});
$("#hidden_experiment").animate({left:"+=150%"});
          }		  
else if($("#hidden_simulation").offset().left > 600){
$("#hidden_simulation").animate({left:"-=150%"});
}
else if($("#hidden_simulation").offset().left < 600){
$("#hidden_simulation").animate({left:"+=150%"});
}
		  
           });
		});	

		
$(document).ready(function(){
	$(".p1").click(function(){
		$("#hidden_project").animate({left:"+=150%"});
	});
});
$(document).ready(function(){
	$(".p2").click(function(){
		$("#hidden_project").animate({left:"+=150%"});
	});
});
$(document).ready(function(){
	$(".p3").click(function(){
		$("#hidden_project").animate({left:"+=150%"});
	});
});
$(document).ready(function(){
	$(".p4").click(function(){
		$("#hidden_project").animate({left:"+=150%"});
	});
});
$(document).ready(function(){
	$(".d1").click(function(){
		$("#hidden_design").animate({left:"+=150%"});
	});
});
$(document).ready(function(){
	$(".d2").click(function(){
		$("#hidden_design").animate({left:"+=150%"});
	});
});
$(document).ready(function(){
	$(".d3").click(function(){
		$("#hidden_design").animate({left:"+=150%"});
	});
});
$(document).ready(function(){
	$(".d4").click(function(){
		$("#hidden_design").animate({left:"+=150%"});
	});
});
$(document).ready(function(){
	$(".d5").click(function(){
		$("#hidden_design").animate({left:"+=150%"});
	});
});
$(document).ready(function(){
	$(".d6").click(function(){
		$("#hidden_design").animate({left:"+=150%"});
	});
});
$(document).ready(function(){
	$(".e1").click(function(){
		$("#hidden_experiment").animate({left:"+=150%"});
	});
});
$(document).ready(function(){
	$(".e2").click(function(){
		$("#hidden_experiment").animate({left:"+=150%"});
	});
});
$(document).ready(function(){
	$(".e3").click(function(){
		$("#hidden_experiment").animate({left:"+=150%"});
	});
});


$(document).ready(function(){

            var box = $(".menu");
            var boxTop = box.offset().top; 

            $(document).scroll(function(){

                var winScrollTop = $(window).scrollTop(); 
       
                if(winScrollTop > boxTop){
                    box.addClass("fixed");
                }else{
                    box.removeClass("fixed");
                }

            });
        });
	
	var timer = null;
	clearInterval(timer);
	timer = setInterval(function() {
		$(".display").css("opacity", "0");
	}, 5100)
  
	timer = setInterval(function() {
		$(".hidden").css("opacity", "1");
	}, 5300)
 
 $(document).ready(function(){
      $("#top").click(function() {
                $("html, body").animate({
                    scrollTop: $($(this).attr("href")).offset().top + 0 + "px"
                }, {
                    duration: 500,
                    easing: "swing"
                });
                return false;
            });
      $(".p1").click(function() {
                $("html, body").animate({
                    scrollTop: $($(this).attr("href")).offset().top - 50 + "px"
                }, {
                    duration: 500,
                    easing: "swing"
                });
                return false;
            });	
	    $(".p2").click(function() {
                $("html, body").animate({
                    scrollTop: $($(this).attr("href")).offset().top - 50 + "px"
                }, {
                    duration: 500,
                    easing: "swing"
                });
                return false;
            });
	       $(".p3").click(function() {
                $("html, body").animate({
                    scrollTop: $($(this).attr("href")).offset().top - 50 + "px"
                }, {
                    duration: 500,
                    easing: "swing"
                });
                return false;
            });
			  $(".p4").click(function() {
                $("html, body").animate({
                    scrollTop: $($(this).attr("href")).offset().top - 50 + "px"
                }, {
                    duration: 500,
                    easing: "swing"
                });
                return false;
            });
			      $(".d1").click(function() {
                $("html, body").animate({
                    scrollTop: $($(this).attr("href")).offset().top - 50 + "px"
                }, {
                    duration: 500,
                    easing: "swing"
                });
                return false;
            });	
	    $(".d2").click(function() {
                $("html, body").animate({
                    scrollTop: $($(this).attr("href")).offset().top - 50 + "px"
                }, {
                    duration: 500,
                    easing: "swing"
                });
                return false;
            });
						      $(".d3").click(function() {
                $("html, body").animate({
                    scrollTop: $($(this).attr("href")).offset().top - 50 + "px"
                }, {
                    duration: 500,
                    easing: "swing"
                });
                return false;
            });	
	    $(".d4").click(function() {
                $("html, body").animate({
                    scrollTop: $($(this).attr("href")).offset().top - 50 + "px"
                }, {
                    duration: 500,
                    easing: "swing"
                });
                return false;
            });
			   $(".d5").click(function() {
                $("html, body").animate({
                    scrollTop: $($(this).attr("href")).offset().top - 50 + "px"
                }, {
                    duration: 500,
                    easing: "swing"
                });
                return false;
            });
	       $(".e1").click(function() {
                $("html, body").animate({
                    scrollTop: $($(this).attr("href")).offset().top - 50 + "px"
                }, {
                    duration: 500,
                    easing: "swing"
                });
                return false;
            });
			  $(".e2").click(function() {
                $("html, body").animate({
                    scrollTop: $($(this).attr("href")).offset().top - 50 + "px"
                }, {
                    duration: 500,
                    easing: "swing"
                });
                return false;
            });
						  $(".e3").click(function() {
                $("html, body").animate({
                    scrollTop: $($(this).attr("href")).offset().top - 50 + "px"
                }, {
                    duration: 500,
                    easing: "swing"
                });
                return false;
            });
			
});

 
$(function(){
    $(".pimg").click(function(){
        var _this = $(this);//将当前的pimg元素作为_this传入函数
        imgShow("#outerdiv", "#innerdiv", "#bigimg", _this);
    });
});
 
function imgShow(outerdiv, innerdiv, bigimg, _this){
    var src = _this.attr("src");//获取当前点击的pimg元素中的src属性
    $(bigimg).attr("src", src);//设置#bigimg元素的src属性
    /*获取当前点击图片的真实大小，并显示弹出层及大图*/
    $("<img/>").attr("src", src).load(function(){
        var windowW = $(window).width();//获取当前窗口宽度
        var windowH = $(window).height();//获取当前窗口高度
        var realWidth = this.width;//获取图片真实宽度
        var realHeight = this.height;//获取图片真实高度
        var imgWidth, imgHeight;
        var scale = 4;//缩放尺寸，当图片真实宽度和高度大于窗口宽度和高度时进行缩放
        if(realHeight>windowH*scale) {//判断图片高度
            imgHeight = windowH*scale;//如大于窗口高度，图片高度进行缩放
            imgWidth = imgHeight/realHeight*realWidth;//等比例缩放宽度
            if(imgWidth>windowW*scale) {//如宽度扔大于窗口宽度
                imgWidth = windowW*scale;//再对宽度进行缩放
            }
        } else if(realWidth>windowW*scale) {//如图片高度合适，判断图片宽度
            imgWidth = windowW*scale;//如大于窗口宽度，图片宽度进行缩放
            imgHeight = imgWidth/realWidth*realHeight;//等比例缩放高度   
        } else {//如果图片真实高度和宽度都符合要求，高宽不变
            imgWidth = realWidth;
            imgHeight = realHeight;
        }
        //以最终的宽度对图片缩放
		$(bigimg).css("width",imgWidth);
		$(imgbox).css("width",imgWidth);
        var w = (windowW-imgWidth)/2;//计算图片与窗口左边距
        var h = (windowH-imgHeight)/2;//计算图片与窗口上边距
        $(innerdiv).css({"top":100, "left":w});//设置#innerdiv的top和left属性
		$(imgbox).css({"top":h, "left":w});
        $(outerdiv).fadeIn("fast");//淡入显示#outerdiv及.pimg
    });
 
    $(outerdiv).click(function(){//再次点击淡出消失弹出层
        $(this).fadeOut("fast");
    });
 
}
$(document).ready(function(){
  $(".ref_img").click(function(){
    $(".ref_box").css("opacity","0");
    });
});
$(document).ready(function(){
  $(".reftextd1").click(function(){
    $("#ref_box1").css("opacity","1");
    });
});
$(document).ready(function(){
  $(".reftexte1").click(function(){
    $("#ref_boxe1").css("opacity","1");
    });
});
$(document).ready(function(){
  $(".reftexte2").click(function(){
    $("#ref_boxe2").css("opacity","1");
    });
});
$(document).ready(function(){
  $(".reftexte3").click(function(){
    $("#ref_boxe3").css("opacity","1");
    });
});
$(document).ready(function(){
  $(".reftexte4").click(function(){
    $("#ref_boxe4").css("opacity","1");
    });
});
$(document).ready(function(){
  $(".reftexte5").click(function(){
    $("#ref_boxe5").css("opacity","1");
    });
});

$(document).ready(function(){
  $(".reftextm1").click(function(){
    $("#ref_boxm1").css("opacity","1");
    });
});
$(document).ready(function(){
  $(".reftextm2").click(function(){
    $("#ref_boxm2").css("opacity","1");
    });
});
$(document).ready(function(){
  $(".reftextm3").click(function(){
    $("#ref_boxm3").css("opacity","1");
    });
});
$(document).ready(function(){
  $(".reftextm4").click(function(){
    $("#ref_boxm4").css("opacity","1");
    });
});
$(document).ready(function(){
  $(".reftextm5").click(function(){
    $("#ref_boxm5").css("opacity","1");
    });
});
$(document).ready(function(){
  $(".reftextm6").click(function(){
    $("#ref_boxm6").css("opacity","1");
    });
});
$(document).ready(function(){
  $(".reftextp6").click(function(){
    $("#ref_boxp6").css("opacity","1");
    });
});
$(document).ready(function(){
  $(".reftextp5").click(function(){
    $("#ref_boxp5").css("opacity","1");
    });
});
$(document).ready(function(){
  $(".reftextp4").click(function(){
    $("#ref_boxp4").css("opacity","1");
    });
});
$(document).ready(function(){
  $(".reftextp3").click(function(){
    $("#ref_boxp3").css("opacity","1");
    });
});
$(document).ready(function(){
  $(".reftextp2").click(function(){
    $("#ref_boxp2").css("opacity","1");
    });
});
$(document).ready(function(){
  $(".reftextp1").click(function(){
    $("#ref_boxp1").css("opacity","1");
    });
});
$(document).ready(function(){
  $(".reftextd2").click(function(){
    $("#ref_boxd2").css("opacity","1");
    });
});
$(document).ready(function(){
  $(".reftextd1").click(function(){
    $("#ref_boxd1").css("opacity","1");
    });
});


















