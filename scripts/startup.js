
module.exports = function(r2d2) {
	var restraunts = ['Qdoba Mexican Grill', 'Krispy Kreme',"McDonald's", 'Sonic Drive-In', 'Checkers','Taco Bell',"Dunkin' Donuts",'Taco Cabana','Red Rooster','Bojangles'];
	r2d2.hear(/alive?/, function(res) {
 		return res.send(":+1:");
	});   

	r2d2.hear(/@r2d2 please welcome (.*) and (.*)/, function(res)
	{
		return res.send('Welcome ' + res.match[1] +' and '+ res.match[2]+ '. Have a glorious day');
	});

	// r2d2.respond(/food/, function(res){
	// 	res.reply("what do you want?");
	// 	r2d2.hear(/chipotle/, function(res){
	// 		res.reply("Burrito?");
	// 		r2d2.hear(/yes/, function(res){
	// 			r2d2.reply("Ordered!");
	// 			return;
	// 		});
	// 		return;
	// 	});
	// 	return;

	// });
 }
