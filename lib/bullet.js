if (typeof Asteroids === "undefined") {
  window.Asteroids = {};
}

var Bullet = Asteroids.Bullet = function (obj) {
  obj.radius = Bullet.RADIUS;
  obj.color = Bullet.COLOR;
  Asteroids.movingObject.call(this, obj);
}

Bullet.RADIUS = 2;
Bullet.COLOR = "black";

Asteroids.Util.inherits(Bullet, Asteroids.movingObject);

Asteroids.Bullet.prototype.collideWith = function (otherObject) {
  if (otherObject instanceof Asteroids.Asteroid) {
    this.game.remove(otherObject);
    this.game.remove(this);
  }
}
