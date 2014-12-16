if (typeof Asteroids === "undefined") {
  window.Asteroids = {};
}

var Ship = Asteroids.Ship = function (obj) {
  obj.radius = Ship.RADIUS;
  obj.color = Ship.COLOR;
  obj.vel = [0,0];
  Asteroids.movingObject.call(this, obj);
}

Asteroids.Util.inherits(Ship, Asteroids.movingObject);
Ship.RADIUS = 10;
Ship.COLOR = "green";

Ship.prototype.relocate = function () {
  this.pos = this.game.randomPosition();
  this.vel = [0,0];
}


Ship.prototype.power = function (impulse) {
  this.vel[0] += impulse[0];
  this.vel[1] += impulse[1];
}

Asteroids.Ship.prototype.fireBullet = function () {
  new_bullet = new Asteroids.Bullet({
    pos: this.pos,
    vel: [this.vel[0]*1.1, this.vel[1]*1.1],
    game: this.game
  });

  this.game.add(new_bullet)
}
