
module.exports = function(r2d2) {
	var menu = false;
	var restraunt = false;
	var food = false;

	r2d2.hear(/alive\?/, function(res) {
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
		setTimeout(function(){
			for(var i = 0; i < places.length; i++){
				res.reply("\t" + places[i] + "\n")
			};
		}, 100);

		menu = true;
	});

	r2d2.hear(/Class\?/, function(res){
		var day = undefined;
		switch (new Date().getDay()) {
		    case 0:
		        day = "Sunday";
		        break;
		    case 1:
		        day = "Monday";
		        break;
		    case 2:
		        day = "Tuesday";
		        break;
		    case 3:
		        res.reply("Yup, we have class today!");
		        break;
		    case 4:
		        day = "Thursday";
		        break;
		    case 5:
		        day = "Friday";
		        break;
		    case 6:
		        day = "Saturday";
		}

		if(day){
			res.reply("No, its " +day);
		}
		
	});

	r2d2.hear(/McDonalds/, function(res){
		if(menu){
			res.reply("Eww Gross");	
		}
	});
	
	r2d2.hear(/Tropical Smoothie/, function(res){
	if(menu){
		res.reply("Yum Smoothies!");	
	}
	});

	r2d2.hear(/5 Guys/, function(res){
		if(menu){
			res.reply("Yum Smoothies!");	
		}
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
