!function(e,t){
	function n(){
		var t=o.getBoundingClientRect().width;
		t/l>750&&(t=750*l);
		var n=t/10;
		o.style.fontSize=n+"px",
		d.rem=e.rem=n
	}
	var i,
	r=e.document,
	o=r.documentElement,
	a=r.querySelector('meta[name="viewport"]'),
	s=r.querySelector('meta[name="flexible"]'),
	l=0,
	c=0,
	d=t.flexible||(t.flexible={});
	if(a){
		console.warn("将根据已有的meta标签来设置缩放比例");
		var u=a.getAttribute("content").match(/initial\-scale=([\d\.]+)/);
		u&&(c=parseFloat(u[1]),l=parseInt(1/c))
	}else if(s){
		var p=s.getAttribute("content");
		if(p){
			var A=p.match(/initial\-dpr=([\d\.]+)/),
			h=p.match(/maximum\-dpr=([\d\.]+)/);
			A&&(
				l=parseFloat(A[1]),
				c=parseFloat((1/l).toFixed(2))
				),
			h&&(l=parseFloat(h[1]),c=parseFloat((1/l).toFixed(2)))}}
			if(!l&&!c){
				var f=(e.navigator.appVersion.match(/android/gi),
					e.navigator.appVersion.match(/iphone/gi)),
					g=e.devicePixelRatio;l=f?g>=3&&(!l||l>=3)?3:g>=2&&(!l||l>=2)?2:1:1,
					c=1/l}
					if(o.setAttribute("data-dpr",l),!a)
						if(a=r.createElement("meta"),
						a.setAttribute("name","viewport"),
						a.setAttribute("content","initial-scale="+c+", maximum-scale="+c+", minimum-scale="+c+", user-scalable=no"),
						o.firstElementChild)o.firstElementChild.appendChild(a);
							else{var m=r.createElement("div");
								m.appendChild(a),r.write(m.innerHTML)
							}e.addEventListener("resize",function(){clearTimeout(i),i=setTimeout(n,300)},!1),e.addEventListener("pageshow",function(e){e.persisted&&(clearTimeout(i),i=setTimeout(n,300))},!1),"complete"===r.readyState?r.body.style.fontSize=12*l+"px":r.addEventListener("DOMContentLoaded",function(e){r.body.style.fontSize=12*l+"px"},!1),n(),d.dpr=e.dpr=l,d.refreshRem=n,d.rem2px=function(e){var t=parseFloat(e)*this.rem;return"string"==typeof e&&e.match(/rem$/)&&(t+="px"),t},d.px2rem=function(e){var t=parseFloat(e)/this.rem;return"string"==typeof e&&e.match(/px$/)&&(t+="rem"),t}}(window,window.lib||(window.lib={}));