var cricket = function(playing) 
{
  var batsman = function (bat) 
  {
    return playing + bat;
  };
  return batsman;
};

var stadium = cricket(3);
var game = cricket(4);
console.log(stadium(2));
console.log(game(5)); 