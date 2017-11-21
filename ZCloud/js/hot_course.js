(function($){
    var bvd = function(dom) {
    	var that=this;
    	$.ready(function(){
    		//获取视频元素
    	 that.video= document.querySelector(dom || 'video');
			//获取视频父元素
			that.vRoom=that.video.parentNode;
		//元素初始化
			that.initEm();
		//事件初始化
		that.initEvent();
		 //记录信息
		 that.initInfo();
     //当前播放模式 false 为 mini播放
      that.isMax = false;

    	})
    }
    var pro = bvd.prototype;
    //记录信息

	pro.initInfo = function() {
		var that = this;
		//在onload状态下，offsetHeight才会获取到正确的值

		window.onload = function(){
			that.miniInfo = {//mini状态时的样式
				zIndex: 1,
				width: that.video.offsetWidth + 'px',
				height: that.video.offsetHeight + 'px',
				position: that.vRoom.style.position,
				transform: 'translate(0,0) rotate(0deg)'
			}
			var info = [
					document.documentElement.clientWidth || document.body.clientWidth,
					document.documentElement.clientHeight || document.body.clientHeigth
				],
				w = info[0],
				h = info[1],
				cha = Math.abs(h - w) / 2;
				
			that.maxInfo = {//max状态时的样式

				zIndex:99,
				width: h + 'px',
				height: w + 'px',
				position: 'fixed',
				transform: 'translate(-' + cha + 'px,' + cha + 'px) rotate(90deg)'
			}
			
		}
	}

    /*元素初始化*/
    pro.initEm = function(){
	//先添加播放按钮
	this.vimg=document.createElement("img");
	/*将图片转为base64的格式*/
	this.vimg.src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFMAAABTCAYAAADjsjsAAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDNzhBNkVGNTcxMDkxMUU3OEU3MDk1M0Y1MzRFNzgyNiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDNzhBNkVGNjcxMDkxMUU3OEU3MDk1M0Y1MzRFNzgyNiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkM3OEE2RUYzNzEwOTExRTc4RTcwOTUzRjUzNEU3ODI2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkM3OEE2RUY0NzEwOTExRTc4RTcwOTUzRjUzNEU3ODI2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+DOGsBwAABs1JREFUeNrsnWlsVFUY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';
    /*img后面增加的类class*/
   	this.vimg.className='vplay';
    this.vRoom.appendChild(this.vimg);
    //添加控制条
    this.vC=document.createElement("div");
    this.vC.classList.add('controls');
    this.vC.innerHTML = '<div><div class="progressBar"><div class="timeBar"></div></div></div><div><span class="current">00:00</span>/<span class="duration">00:00</span></div><div><span class="fill">全屏</span></div>';
	 this.vRoom.appendChild(this.vC);
    }

   	pro.initEvent=function(){
   		var that=this;
   		/*给播放按钮图片添加事件*/
   		this.vimg.addEventListener("tap",function(){
   			that.video.play();
   		})
   		  //获取到元数据
        this.video.addEventListener('loadedmetadata',function(){
            that.vC.querySelector('.duration').innerHTML = stom(this.duration);
        });
   		 //视频点击暂停或播放事件
    this.video.addEventListener('tap',function(){
        if(this.paused || this.ended) {
            //暂停时点击就播放
            if(this.ended) {//如果播放完毕，就重头开始播放
                this.currentTime = 0;
            }
            this.play();
        } else {
            //播放时点击就暂停
            this.pause();
            
        }

    })
  
    //视频播放事件
    this.video.addEventListener('play',function(){
           that.vimg.style.display = 'none';
         that.vC.classList.add('play');
         that.vCt = setTimeout(function(){
        that.vC.style.visibility = 'hidden';
    },3400)
    })
  this.video.addEventListener('timeupdate', function() {
   var currentPos = this.currentTime;//获取当前播放的位置
  // 更新进度条
   var percentage = 100 * currentPos / that.vDuration; 
    //设置宽度
   that.vC.querySelector('.timeBar').style.width = percentage + '%';
	 //更新当前播放时间
   that.vC.querySelector('.current').innerHTML = stom(currentPos);

  	})

   //暂停or停止 进度条
   	this.video.addEventListener('pause',function(){
    that.vimg.style.display = 'block';
    that.vC.classList.remove('vhidden');
    that.vC.style.visibility = 'visible'; 
    that.vCt && clearTimeout(that.vCt);
});

	//视频手势右滑动事件
	this.video.addEventListener('swiperight',function(e){
    this.currentTime += 5;
});
//视频手势左滑动事件
	this.video.addEventListener('swipeleft',function(e){
    this.currentTime -= 5;
});

	this.vC.querySelector('.fill').addEventListener('tap', function() {
			//that.nativeMax();
			that.switch();
			
		
	});
		this.vC.querySelector('.fill').click(function() {

				$(".mui-action-back mui-icon mui-icon-left-nav mui-pull-left").attr("margin-top:-56%");});

}






   //全屏 mini 两种模式切换

	pro.switch = function() {
		var vR = this.vRoom;
		//获取需要转换的样式信息

		var info = this.isMax ? this.miniInfo : this.maxInfo;
		for(var i in info) {
			vR.style[i] = info[i];
/*			document.getElementById("mui-pull-left").style.marginTop='-80%'
*/		}
		this.isMax = !this.isMax;	
	}
   	
   	//使用原生支持的方式播放

	pro.nativeMax = function() {
		if(!window.plus) {
			//非html5+环境
			return;
		}
		if($.os.ios) {
			console.log('ios')
			this.video.removeAttribute('webkit-playsinline');
		} else if($.os.android) {
			console.log('android');
            var url = this.video.querySelector('source').src;
			var Intent = plus.android.importClass("android.content.Intent");
			var Uri = plus.android.importClass("android.net.Uri");
			var main = plus.android.runtimeMainActivity();
			var intent = new Intent(Intent.ACTION_VIEW);
			var uri = Uri.parse(url);
			intent.setDataAndType(uri, "video/*");
			main.startActivity(intent);
		}
	}
	
   	
   	
   	
   		 function stom(t) {
        var m = Math.floor(t / 60);
        m < 10 && (m = '0' + m);
        return m + ":" + (t % 60 / 100).toFixed(2).slice(-2);
    }

 

    var nv = null;
    $.bvd = function(dom) {
        return nv || (nv = new bvd(dom));
    }
}(mui))