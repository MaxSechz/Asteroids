if (typeof Asteroids === "undefined") {
  window.Asteroids = {};
}

Asteroids.GameView = function(ctx, game) {
  this.game = game,
  this.ctx = ctx;
}


Asteroids.GameView.prototype.start = function() {
  var gameCycle = function() {
    this.game.moveObjects();
    this.game.draw(this.ctx);
  };

  window.setInterval(gameCycle.bind(this), 1);
}
