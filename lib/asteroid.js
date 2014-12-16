if (typeof Asteroids === "undefined") {
  window.Asteroids = {};
}

var Asteroid = Asteroids.Asteroid = function (obj) {
  obj.color = Asteroids.Asteroid.COLOR;
  obj.radius = Asteroids.Asteroid.RADIUS;
  obj.vel = Asteroids.Util.randomVec(3);
  Asteroids.movingObject.call(this, obj);
};

Asteroids.Asteroid.COLOR = "purple";
Asteroids.Asteroid.RADIUS = 30;

Asteroids.Util.inherits(Asteroids.Asteroid, Asteroids.movingObject);

Asteroids.Asteroid.prototype.collideWith = function (otherObject) {
  if (otherObject instanceof Asteroids.Ship) {
    otherObject.relocate();
  }
}
