
module.exports = function(r2d2) {
	r2d2.hear(/alive?/, function(res) {
 		return res.send(":+1:");
	});   


	r2d2.respond(/food/, function(res){
		res.reply("what do you want?");
		r2d2.hear(/chipotle/, function(res){
			res.reply("Burrito?");
			r2d2.hear(/yes/, function(res){
				r2d2.reply("Ordered!");
				return;
			});
			return;
		});
		return;

	});
 }
