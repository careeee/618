

		$(function(){
			// 初始化
			$(".image li").eq(0).show();
			$(".number li").eq(0).addClass("active")

		//手动控制图片淡入淡出
			// 选项卡
			$(".number li").mouseover(function(){
				$(this).addClass("active").siblings("li").removeClass("active");
				// 获取当前元素的索引值
				var index=$(this).index();
				i = index ;
				$(".image li").eq(index).fadeIn().siblings().fadeOut();
			})


        //通过时间间隔函数，控制图片的显示
        	var i = 0;
        	var t = setInterval(move,2000);

        	//动效运行的核心函数 向右的(可多次调用)
        	function move(){
        		i++ ;
        		if(i==8)
        		{
        			i=0;
        		}
        		$(".number li").eq(i).addClass("active").siblings().removeClass("active");
        		$(".image li").eq(i).fadeIn().siblings().fadeOut();
        	}

        	//动效运行的核心函数 向左的(可多次调用)
        	function moveL(){
        		i-- ;
        		if(i==-1)
        		{
        			i=7;
        		}
        		$(".number li").eq(i).addClass("active").siblings().removeClass("active");
        		$(".image li").eq(i).fadeIn().siblings().fadeOut();
        	}


        //鼠标移入broadcast元素的时候，停掉正在运行的动画
            $(".broadcast").hover(function(){
            	clearInterval(t);

            },function(){
            	t = setInterval(move,2000);

            })

	        // 点击右边箭头执行的动效
	        $(".broadcast .right").click(function(){
	        	move();

	        }) 
	        //左边箭头动效
	         $(".broadcast .left").click(function(){
	        	move();

	        })   

		})