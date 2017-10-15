
module.exports = function(r2d2) {
	var menu = false;
	var restraunt = false;
	var food = false;
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
				"\n\t - Burrito"+
				"\n\t - Bowl");
			menu = false;
		}
	});

	r2d2.hear(/Bowl/, function(res){
	if(restraunt == 'Chipotle'){
		menu = false;
		restraunt = false;
		food = false;
		return res.reply('Ordered!');	
	}
	});

	r2d2.hear(/Burrito/, function(res){
	if(restraunt == 'Chipotle'){
		menu = false;
		restraunt = false;
		food = false;
		return res.reply('Ordered!');	
	}
	});

	r2d2.hear(/close/, function(res){
		menu = false;
		restraunt = false;
		food = false;
		res.reply('exited');
	});

 }
