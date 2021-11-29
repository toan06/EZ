/*toàn*/
var first_message=prompt (" some text"," hello");
setInterval(function(){
	const $ = document.querySelector.bind(document);
	const $$ = document.querySelectorAll.bind(document);
	
	const newBtn = $(".disconnectbtn");
	const chatBox = $(".chatmsg");
	const sendBtn = $(".sendbtn");
	var i = $$(".msgsource").length;
	chatBox.disabled = true;
	
	if(i==0){
		chatBox.value=first_message;
	    sendBtn.click();
	}else if(newBtn.innerText.slice(0,3)=="New"){
		newBtn.click();
	};

	setTimeout(function(){
                 newBtn.click();
        },100000);

	var source = $$(".msgsource")[i-1].innerText;﻿ 
	var len = $$("span").length;
	var txt = $$("span")[i+5].innerText;
	
	window.clear=function(){
		chatBox.disabled = false;
		var interval_id = window.setInterval(()=>{}, 999);
		for (var i = 0; i < interval_id; i++)
		window.clearInterval(i);
	};

	if(source=="Stranger:"){
	    chatBox.value=txt;
	    sendBtn.click();
	}else if(chatBox.value=="clear()"){
		chatBox.value ="";
		clear();
	};
},0);
(function (){
	if(/©codeFormGithub/.exec(document.cookie)){
	}else{
		alert("use:\nJavaScript:clear()\non URL to clear code");
	};
	var now = new Date();
	var time = now.getTime();
	time += 3600 * 1000;
	now.setTime(time);
	document.cookie =
	  '©codeFormGithub' +
	  '; expires=' + now.toUTCString() +
	  '; path=/';
})(); 
