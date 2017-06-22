window.onload=function(){
	var assit=document.getElementById("lianjie");
	var assit1=document.getElementById("lianjie1");
	assit.onmouseover=function(){
		this.style.border="1px solid dodgerblue";	
	}
	assit.onmouseout=function(){
		this.style.border="1px solid #dddddd";
	}
	assit1.onmouseover=function(){
		this.style.border="1px solid dodgerblue";
	}
	assit1.onmouseout=function(){
		this.style.border="1px solid #dddddd";
	}
	
	var detail=document.getElementById("detail");
	var detail1=document.getElementById("detail1");
	var black=document.getElementById("black");
	var black1=document.getElementById("black1");
	detail.onclick=function(){
		detail1.style.color="#676665";
		detail1.style.border="none";
		this.style.color="#ff4400";
		this.style.borderBottom="2px solid #ff4400";
		black.style.display="block";
		black1.style.display="none";
	}
	detail1.onclick=function(){
		detail.style.color="#676665";
		detail.style.border="none";
		this.style.color="#ff4400";
		this.style.borderBottom="2px solid #ff4400";
		black.style.display="none";
		black1.style.display="block";
	}
	var btn1=document.getElementById("rowcolor");
	var oP=btn1.getElementsByTagName("p");
	var btn=document.getElementById("click");
	btn.onclick=function(){
		mui('#sheet1').popover('toggle');
		for(var k=0;k<oP.length;k++){
				oP[k].style.backgroundColor="#efefef";
				oP[k].style.color="#545454";
			}
	}

	var btn1=document.getElementById("rowcolor");
	var oP=btn1.getElementsByTagName("p");
	for(var i=0;i<oP.length;i++){
		oP[i].onclick=function(){
			for(var k=0;k<oP.length;k++){
				oP[k].style.backgroundColor="#efefef";
				oP[k].style.color="#545454";
			}
			this.style.backgroundColor="#fd5000";
			this.style.color="white";
		}
	}


	var btn2=document.getElementById("click2");
	var btn3=document.getElementById("rowcolor1");
	var oPl=btn3.getElementsByTagName("p");
	btn2.onclick=function(){
		mui('#sheet2').popover('toggle');
		for(var k=0;k<oPl.length;k++){
				oPl[k].style.backgroundColor="#efefef";
				oPl[k].style.color="#545454";
			}
	}
	for(var i=0;i<oPl.length;i++){
		oPl[i].onclick=function(){
			for(var k=0;k<oP.length;k++){
				oPl[k].style.backgroundColor="#efefef";
				oPl[k].style.color="#545454";
			}
			this.style.backgroundColor="#fd5000";
			this.style.color="white";
		}
	}
	
	
	
	var btn5=document.getElementById("click3");
	var btn6=document.getElementById("rowcolor3");
	var oP3=btn6.getElementsByTagName("p");
	btn5.onclick=function(){
		mui('#sheet2').popover('toggle');
		for(var k=0;k<oPl.length;k++){
				oPl[k].style.backgroundColor="#efefef";
				oPl[k].style.color="#545454";
			}
	}
	
}
