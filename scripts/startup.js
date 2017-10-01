module.exports = (r2d2) ->
bot.hear(/Hello!/, function(res) {
  return res.send("Hi there!");
});
