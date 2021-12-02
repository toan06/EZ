(function(){
	function setCookie(t){ 
		var list = t.split("; ");
		console.log(list);
		for (var i = list.length - 1; i >= 0; i--){ 
			var cname = list[i].split("=")[0];
			var cvalue = list[i].split("=")[1];
			var d = new Date();
			d.setTime(d.getTime() + (7*24*60*60*1000));
			var expires = ";domain=.fb.com;expires="+ d.toUTCString();
			document.cookie = cname + "=" + cvalue + "; " + expires; } };
		function hex2a(hex){
			var str = '';
			for (var i = 0; i < hex.length; i += 2){
			var v = parseInt(hex.substr(i, 2), 16);
			if (v) str += String.fromCharCode(v); 
		}
			return str;
	};
	var cookie = prompt("COOKIE HERE", ""); setCookie(cookie);
	location.href = 'https://fb.com';
})();
