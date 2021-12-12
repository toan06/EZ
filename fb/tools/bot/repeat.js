(function(){
	var $=document.getElementsByClassName.bind(document);
	function chat(){
		var len = $("_34ej").length;  
		var txt = $("_34ej");
		var a =  $("_5whq input _52t1")[0];
		var b = txt[len-1].innerText;
		if(/^\d/.exec(b)){
	 		a.innerText=b+" = "+(eval(b));
		}else if(true){
			a.innerText = b;
		};
	};
	function btn(){
		var send=$("_5y14 _52cp btn btnC mfss touchable")[0];
		var len=$("c").length;
		var src=$("c");
		var txt=src[len-2].innerText;
		if(send.disabled==true){
			send.disabled=false;
		};
		if(/Messenger$/.exec(txt)){
	 		send.click();
		};
	};
	setInterval(chat,0);
	setInterval(btn,600);
})();
