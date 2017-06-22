  
    mui.init({
			pullRefresh: {
				container: ".mui-content",
				down: {
					contentdown: "下拉可以刷新",
					contentover: "释放立即刷新",
					contentrefresh: "正在刷新...",
					callback: pulldownRefresh
				}
			}
			
//			pullRefresh: {
//				container: ".mui-content", //待刷新区域标识，querySelector能定位的css选择器均可，比如：id、.class等
//				up: {
//					height: 50, //可选.默认50.触发上拉加载拖动距离
//					//					auto: true, //可选,默认false.自动上拉加载一次
//					contentdown: "上拉可以加载",
//					contentover: "释放立即加载",
//					contentrefresh: "正在加载...",
//					callback: pullupRefresh //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
//				}
//			}
		});



		function pulldownRefresh() {
			setTimeout(function() {

				mui(".mui-content").pullRefresh().endPulldownToRefresh();
			}, 1500);
		}

//		function pullupRefresh() {
//			setTimeout(function() {
//				
//				mui(".mui-content").pullRefresh().endPullupToRefresh(false);
//
//			}, 1500);
//		}
