$(function() {
	//放弃按钮点击事件
	$('#giveUpBtn').click(function() {
		layer.confirm('你确定放弃支付吗？', {
			btn: ['确定', '取消'], //按钮
		}, function() {
			window.location.href = "index.html";
		});
	})
	//积分抵扣点击事件
	$('#openIcon').click(function() {
		if($(this).parent().height() > 75) {
			$(this).css({
				'transform': 'rotate(0deg)'
			});
			$(this).parent().animate({
				height: "75px",
			}, "slow");
		} else {
			$(this).css({
				'transform': 'rotate(180deg)'
			});
			$(this).parent().animate({
				height: "181px",
			}, "slow");
		}
	})
	//加减时长按钮点击事件
	var numCount = 0; //抵扣时长初始化数字
	$('#reduceBtn').click(function() {
		if(numCount > 0) {
			$('#timeNum').html(--numCount);
			$('.integralNum').html(numCount * 10); //统计计算所需花费积分
		} else {
			numCount = 0;
			$('#timeNum').html(numCount);
			$('.integralNum').html(numCount * 10); //统计计算所需花费积分
		}
	})
	$('#plusBtn').click(function() {
		$('#timeNum').html(++numCount);
		$('.integralNum').html(numCount * 10); //统计计算所需花费积分
	})
	//结算按钮点击事件
	$('#goPayBtn').click(function() {
		$('.payConfirmBox').fadeIn();
	})
	//支付确认按钮点击事件
	$('.cancleBtn').click(function() {
		$('.payConfirmBox').fadeOut();
	})
	$('.payBtn').click(function(){
		layer.msg('支付成功！');
	})
})