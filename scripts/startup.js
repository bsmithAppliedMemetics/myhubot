
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
	var places = ['Chipotle', 'McDonalds', 'Tropical Smoothie', '5 Guys'];

	r2d2.hear(/I want food/, function(res){

		res.reply("what do you want?");
		for(var i = 0; i < places.length; i++){
			res.reply(places[i] + "\n\t")
		};
		menu = true;
	});
	r2d2.respond("Hello", function(res){
		res.respond('World');
	});
	r2d2.hear(/places[1]/, function(res){
		res.reply("Eww Gross");
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
