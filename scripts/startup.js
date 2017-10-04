
module.exports = function(r2d2) {
	var menu = false;
	var restraunt = false;
	var food = false;
	var restraunts = ['Qdoba Mexican Grill', 'Krispy Kreme',"McDonald's", 'Sonic Drive-In', 'Checkers','Taco Bell',"Dunkin' Donuts",'Taco Cabana','Red Rooster','Bojangles'];
	r2d2.hear(/alive?/, function(res) {
 		return res.send(":+1:");
	});   

	r2d2.hear(/@r2d2 please welcome (.*) and (.*)/, function(res)
	{
		return res.send('Welcome ' + res.match[1] +' and '+ res.match[2]+ '. Have a glorious day');
	});

	// r2d2.hear(/uh oh/, function(res){
	// 	return res.send('uh oh');
	// });
	r2d2.hear(/I want food/, function(res){
		res.reply("what do you want?"+
				"\n -Chipotle"+
				"\n -McDonalds"+
				"\n -Tropical Smoothie");
		menu = true;
	});
	r2d2.hear(/Chipotle/, function(res){
		if(menu){
			restraunt = 'Chipotle';
			res.reply("What do you want from Chipotle?"+
				"\n\tBurrito"+
				"\n\tBowl");
		}
	});
	// r2d2.hear(/yes/, function(res){
	// 	if (restraunt)
	// 	{
	// 		res.reply("Ordered!");
	// 	}
	// });
	r2d2.hear(/Bowl/, function(res){
	if(restraunt == 'Chipotle'){
		return res.reply('Ordered!');			
	}
	});
	r2d2.hear(/close/, function(res){
		menu = false;
		restraunt = false;
		food = false;
		res.reply('exited');
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
