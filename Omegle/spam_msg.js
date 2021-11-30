/*toàn*/
setTimeout(function (){
msg();
	function msg (){
		var txt1 = prompt(" "+"MESSAGE 1: ","SpamBot1");
		var txt2  = prompt(" "+"MESSAGE 2: ","SpamBot2");
		var txt3  = prompt(" "+"MESSAGE 3: ","SpamBot3");
		var txt4  = prompt(" "+"MESSAGE 4: ","SpamBot4");
		var txt5  = prompt(" "+"MESSAGE 5: ","SpamBot5");
		var txt6  = prompt(" "+"MESSAGE 6: ","SpamBot6");
		var tDelay = prompt(" "+"TIME DELAY: 1 sec = 1000, 2 sec = 2000,.…","1600");
		var t1 = prompt(" "+"time 1 < TIME DELAY: ","200");
		var t2  = prompt(" "+"time 2 < TIME DELAY: ","400");
		var t3  = prompt(" "+"time 3 < TIME DELAY: ","600");
		var t4  = prompt(" "+"time 4 < TIME DELAY: ","800");
		var t5  = prompt(" "+"time 5 < TIME DELAY: ","1000");
		var t6  = prompt(" "+"time 6 < TIME DELAY: ","1200");
		
		function spam(){
		const $ = document.querySelector.bind(document);
		const NewBtn = $(".disconnectbtn");
		const ChatBox = $(".chatmsg");
		const SendBtn = $(".sendbtn");
		
		setTimeout(function(){
			ChatBox.value = txt1;
			SendBtn.click();
		},t1);
		setTimeout(function(){
				ChatBox.value = txt2;
				SendBtn.click();
			},t2);
		setTimeout(function(){
				ChatBox.value = txt3;
				SendBtn.click();
			},t3);
		setTimeout(function(){
				ChatBox.value = txt4;
				SendBtn.click();
			},t4);
		setTimeout(function(){
				ChatBox.value = txt5;
				SendBtn.click();
			},t5);
		setTimeout(function(){
				ChatBox.value = txt6;
				SendBtn.click();
			},t6);
		setTimeout(function(){
			NewBtn.click();
		  },tDelay);
		
			NewBtn.click();
			SendBtn.click();
			window.clear=function(){
				var interval_id = window.setInterval(()=>{}, 999);
				for (var i = 0; i < interval_id; i++)
				window.clearInterval(i);
			};
		};
			window.Bot=setInterval(spam,tDelay); 
	};  
},1000);
var Re=setInterval(function(){
var ReC=grecaptcha.getResponse().length;
if(ReC==0) clearInterval(Re);
clearInterval(Bot);
alert('opps this page have Recaptcha');
alert('code has been delete');},0);

