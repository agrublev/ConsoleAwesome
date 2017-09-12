$(function(){
	var callMe = function(args) {
		console.warn("CALLED",args);
	};
	var newC = new caInit({middlemanCallback:callMe, overrideConsole:true});
	newC.l("ds123",{sadsad:"sadasd"},['23',12332,"123123"],123,true,null,undefined);

	// ca.l("TEST");
	// console.log("asdasd'");
	// ca.override();
	// console.log("asdasd'");
	// console.log = ca.l();
	// console.log("is it");
	// ca.s();
	// ca.l("!!ADSADSDSAD");
});
