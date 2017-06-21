$(function(){
	var num = 6;//需要输入的车牌数
	
	//切换键盘
	$('.changeContentBtn').click(function(){
		if($(this).html()=='ABC'){
			$('#textBox').show();
			$('#provienceBox').hide();
		}else{
			$('#textBox').hide();
			$('#provienceBox').show();
		}
	})
	//新能源点击事件
	$('.xinnengyuan').click(function(){
		num = 7;
		$(this).removeClass('xinnengyuan');
	})
	//获取当前车牌数字索引
	function getIndex(){
		var index = 0;
		$('.carLicenseMain ul li').each(function(){
			var reg = new RegExp('active');
			if(reg.test($(this).attr('class'))){
				index = $(this).index();
			}
		})
		return index;
	}
	//自定义键盘处理函数
	function keyboard(num,self){
		var index = getIndex();
		if(index<=num){
			if(index == num){
				$('.carLicenseMain ul li.active').html($(self).html());
			}else{
				$('.carLicenseMain ul li.active').html($(self).html()).removeClass('active').next().addClass('active');
			}
			$('#textBox').show();
			$('#provienceBox').hide();
		}
	}
	//省份键盘点击事件
	$('#provienceBox ul li:not(.other)').click(function(){
		var self = this;
		keyboard(num,self);
	})
	//文本键盘点击事件
	$('#textBox ul li:not(.other)').click(function(){
		var self = this;
		keyboard(num,self);
	})
	//回退按钮点击事件
	$('.deleteBtn').click(function(){
		var index = getIndex();
		if(index == num){
			if($('.carLicenseMain ul li.active').html() != ''){
				$('.carLicenseMain ul li.active').html('');
			}else{
				if(index == 7){
					$('.carLicenseMain ul li:last-of-type').addClass('xinnengyuan');
					num = 6;
				}
				$('.carLicenseMain ul li.active').removeClass('active').prev().addClass('active').html('');
			}
			
		}else if(index < num && index > 1){
			$('.carLicenseMain ul li.active').removeClass('active').prev().addClass('active').html('');
		}else if(index == 1){
			$('.carLicenseMain ul li.active').removeClass('active').prev().addClass('active').html('省');
		}
	})
	
	//提交按钮点击事件
	$('#submitBtn').click(function(){
//		window.location.href = "payment.html";
		layer.alert('您不是会员，请注册后再支付！', {
					icon: 6,
					yes: function() {
						window.location.href = "regist.html"
					}
				});
	})
})
