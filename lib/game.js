if (typeof Asteroids === "undefined") {
  window.Asteroids = {};
}

Asteroids.Game = function(width, height) {
  this.width = width;
  this.height = height;
  this.asteroids = this.addAsteroids();
}

Asteroids.Game.NUM_ASTEROIDS = 5;

Asteroids.Game.prototype.addAsteroids = function () {
  var new_asteroids = [];
  for (var i = 0; i < Asteroids.Game.NUM_ASTEROIDS; i++) {
    var temp_asteroid = {
      pos: this.randomPosition(),
      game: this
    };
    new_asteroids.push(new Asteroid(temp_asteroid));
  }

  return new_asteroids;
};

Asteroids.Game.prototype.randomPosition = function () {
  console.log(this.width)
  var pos = [];
  pos[0] = Math.random() * this.width;
  pos[1] = Math.random() * this.height;
  return pos;
};

Asteroids.Game.prototype.draw = function (ctx) {
  ctx.clearRect(0,0, this.width, this.height);
  this.asteroids.forEach(function(el) {
    el.draw(ctx);
  });
}

Asteroids.Game.prototype.moveObjects = function () {
  console.log(this.asteroids)
  this.asteroids.forEach(function(el) {
    el.move();
  });
}

Asteroids.Game.prototype.wrap = function (pos) {
  var asteroidRadius = 30;
  var startX = pos[0];
  var startY = pos[1];


  var x = (pos[0] % (this.width + asteroidRadius));
  var y = (pos[1] % (this.height + asteroidRadius));


  if (x !== startX) {
    x -= asteroidRadius;
  }

  if (y !== startY) {
    y -= asteroidRadius;
  }

  if (x < (-1 * asteroidRadius)) {
    x = this.width + ((2 * asteroidRadius) + x);
  }

  if (y < (-1 * asteroidRadius)) {
    y = this.height + ((2 * asteroidRadius) + y);
  }

  return [x,y];
}
