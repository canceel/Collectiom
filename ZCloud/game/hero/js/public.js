var checkStickLong = {
	check:function(){
		var stickLong = this.getWidthNumber($(".stick").css('width'));
		var maxLong = this.getWidthNumber($(".wall").eq(1).css('left'))+this.getWidthNumber($(".wall").eq(1).css('width'))-screenWidth*0.2;
		var minLong = this.getWidthNumber($(".wall").eq(1).css('left'))-screenWidth*0.2;
//		alert(minLong);
		if (stickLong<maxLong&&stickLong>minLong) {
			var me=this;
			me.run();
			setTimeout(function(){
		        me.getPoint();
		        me.getNewWall();
			},1100);
		} else if(stickLong>maxLong){
			clearBind();
			this.getDown();
		} else {
			clearBind();
			this.getDown();
		}
	},
	run:function(){
		$(".stickMan img").attr({'src':'images/stick.gif'});
		var moveNumber = this.getWidthNumber($(".wall").eq(1).css('left'))+this.getWidthNumber($(".wall").eq(1).css('width'))-screenWidth*0.2;
		$(".stickMan").animate({left:'+='+moveNumber+'px'},1000);
		$("body").css('background-position-x', '-'+(point+1)*20+'px');
		setTimeout(function(){
			$(".stickMan img").attr({'src':'images/stick_stand.png'});
		},1000);
	},
	getDown:function(){
		$(".stickMan img").attr({'src':'images/stick.gif'});
		var me = this;
		$(".stickMan").animate({left:'+='+$(".stick").css('width')},1000);
		$("body").css('background-position-x', '-'+(point+1)*30+'px');
		setTimeout(function(){
			$('.stick').css('transform','rotate(90deg)');
		    $(".stickMan").animate({bottom:'-'+$(".stickMan").css('height')},300);
		},1000);
		setTimeout(function(){
			me.showResult();
		},1300);
	},
	getPoint:function(){
		point++;
		$(".point").html(point);
		var len=$(".shouji").css("left");
		var len1=$("#main").width();
		var kk=parseInt(len)-parseInt(len1)/6;
		
		$(".shouji").animate({"left":kk+"px"},1000);
		//parseInt(len)-4
		//$(")
	},
	getNewWall:function(){
		this.setNewWall();
		//$('.stick').css('transition','0');
		//$(".wall").animate({left:'-='+$(".new").eq(0).css('left')},500);
		//$(".stick").animate({left:'-='+$(".new").eq(0).css('left')},500);
		//$(".stick").css('transform','translateX(-'+$(".new").eq(0).css('left')+')');
		setTimeout(this.resetWall,150);
		
	},
	resetWall:function(){
		addBind();
		$('.wall').eq(0).remove();
		$('.new').eq(0).removeClass('new');
		$('.init').eq(0).removeClass('init');
	},
	getWidthNumber:function(ele){
   		if (ele) {
   			var WidthNumber = ele.substr(0,ele.length-2);
   			WidthNumber = Number(WidthNumber);
   			return WidthNumber;
   		}
    },
    setNewWall:function(){
    	//新墙设置
    	var newWallSpacing =Math.random()*55+5+20;
   		var newWallWidth = Math.random()*Math.min(90-newWallSpacing,15)+5;
        var tpl = '<div class="wall new init" style="width:'+newWallWidth+'%;left:100%"></div>';
		$("#main").append(tpl);
		
		//移动设置
		var moveNumber = this.getWidthNumber($(".wall").eq(1).css('left'))+this.getWidthNumber($(".wall").eq(1).css('width'))-screenWidth*0.2;
		$(".wall").eq(0).animate({left:'-='+moveNumber+'px'},500);
		$(".wall").eq(1).animate({left:'-='+moveNumber+'px'},500);
		$(".wall").eq(2).animate({left:newWallSpacing+'%'},500);
		$('.stick').css('transition','0');
//		$('.stick').css('width','0');
		$(".stick").animate({left:'-='+moveNumber+'px'},500);
		$(".stickMan").animate({left:'-='+moveNumber+'px'},500);
		
		
    },
    showResult: function() {
//  	var pernr = JSON.parse(plus.storage.getItem("person"));
//  	if(point>0){
//  		var parameter={
//				"pernr":pernr.pernr,
//				"token" : token,
//				"timeInMillis" : getTimestamp()
//			}
//			var signature = getSignature(parameter);
//			var signature_md5 = md5(md5(signature));
//			mui.post(enterGameAddress,{
//				method:"addIntegral",
//				pernr:pernr.pernr,
//				token:token,
//				timeInMillis:getTimestamp(),
//				signature:signature_md5
//			},function(data){
//				
//			},"json");
//  	}
    	$(".point,.tips").css('display','none');
    	$(".newPoint").html(point);
    	$(".gameOver,.menu").css('display','block');
    	this.setBestPoint();
    },
    
    setBestPoint: function() {
    	var bestPoint = window.sessionStorage.getItem('stickManPoint');
        if(!bestPoint){
        	bestPoint = point;
        	window.sessionStorage.setItem('stickManPoint',point);
        } else if(bestPoint<point){
        	bestPoint = point;
        	window.sessionStorage.setItem('stickManPoint',point);
        }
        $(".bestPoint").html(bestPoint);
    }
};