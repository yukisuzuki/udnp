var rabbit =1;
var bunny  =1;
var month     =0;
var sum    =0;
var a=0;
while(month < 12){
	

	var b = rabbit;
	rabbit=rabbit+bunny;
	bunny=b;
	month = month + 1;
	console.log("month:"+month);
	console.log("pairs:"+b);
	console.log("before:"+rabbit);
	console.log(" ");
}

