  var ws = null,
				wo = null;
			var scan = null,
				domready = false;
			// H5 plus事件处理
			function plusReady() {
				if(ws || !window.plus || !domready) {
					return;
				}
				// 获取窗口对象
				ws = plus.webview.currentWebview();
				wo = ws.opener();
				// 开始扫描
				ws.addEventListener('show', function() {
					scan = new plus.barcode.Barcode('bcid');
					scan.onmarked = onmarked;
					scan.start({
//						conserve: true,
//						filename: "_doc/barcode/"
					});
				});
				// 显示页面并关闭等待框
				ws.show("pop-in");
//				wo.evalJS("closeWaiting()");
			}
			
			if(window.plus) {
				plusReady();
			} else {
				document.addEventListener("plusready", plusReady, false);
			}
			
			// 监听DOMContentLoaded事件
			document.addEventListener("DOMContentLoaded", function() {
				domready = true;
				plusReady();
			}, false);
			
			// 二维码扫描成功
			function onmarked(type, result, file) {
				switch(type) {
					case plus.barcode.QR:
						type = "QR";
						break;
					case plus.barcode.EAN13:
						type = "EAN13";
						break;
					case plus.barcode.EAN8:
						type = "EAN8";
						break;
					default:
						type = "其它" + type;
						break;
				}
				result = result.replace(/\n/g, '');
//				wo.evalJS("scaned('" + type + "','" + result + "','" + file + "');");
				
				mui.getJSON("data/getBookDetailByIsbnForAdd.json",function(data){
					if(data.flag==1)
					{
//						mui.fire(addBook,'getBarCode',{barCode:result});
						var ww=null;
						if(!plus.webview.getWebviewById("addBook.html")){
							ww=plus.webview.create("addBook.html","addBook.html",{},{bookDetail:data.data[0]});
							ww.show();
						}else{
							ww=plus.webview.getWebviewById("addBook.html");
							ww.show("slide-in-right",100,{},{bookDetail:data.data[0]});
						}
						plus.webview.close('addBookScan.html');
					}
					else
					{
						mui.alert("书库中未查询到该书信息，请手动输入图书内容。","系统提示","确定",function(){
							var ww=null;
							if(!plus.webview.getWebviewById("addBookInput.html")){
								ww=plus.webview.create("addBookInput.html","addBookInput.html");
								ww.show();	
							}else{
								ww=plus.webview.getWebviewById("addBook.html");
								ww.show("slide-in-right",100);
//								if(mui.os.ios)
//									ww.evalJS("mui.scrollTo(0,0,100)");
//								else
//									ww.evalJS('mui.scrollTo(0,100)');
							}
							plus.webview.close('addBookScan.html');
						});
					}
					
				})
				
//				var addBook = plus.webview.getWebviewById("addBook.html");
			}
			
			// 从相册中选择二维码图片 
			function scanPicture() {
				plus.gallery.pick(function(path) {
					plus.barcode.scan(path, onmarked, function(error) {
						plus.nativeUI.alert("无法识别此图片");
					});
				}, function(err) {
					plus.nativeUI.alert("Failed: " + err.message);
				});
			}

			function back() {
				ws.close();
			}
