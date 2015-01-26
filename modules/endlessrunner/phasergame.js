define([
    "Phaser"
], function (Phaser) {

    var PhaserGame = function (w, h) {
        return new Phaser.Game(w, h, Phaser.EXACT_FIT);
    };

    return PhaserGame;

});
