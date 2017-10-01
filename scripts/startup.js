module.exports = (r2d2) ->
r2d2.hear(/Hello!/, function(res) {
  return res.send("Hi there!");
});
