var popup_get_text = prompt("   text ","any text");
var popup_get_time = prompt("   time 1 = 1s, 0.5 = 0,5s... ","0.5");
function spam_Omegle(){
	const $ = document.querySelector.bind(document);
	const newBtn = $(".disconnectbtn");
	const chatBox = $(".chatmsg");
	const sendBtn = $(".sendbtn");
	newBtn.click();
	chatBox.value = popup_get_text;
	sendBtn.click();
};
setInterval(spam_Omegle,popup_get_time*1000); 
