
module.exports = function(r2d2) {
	r2d2.hear(/alive?!/, function(res) {
 		 return res.send(":+1:");
	});   
 }
