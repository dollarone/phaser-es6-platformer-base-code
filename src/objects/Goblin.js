class Goblin {

	constructor(game, walls, x, y){
		this.game = game;
		this.sprite = this.game.add.sprite(x, y, 'bucket');
		this.sprite.anchor.setTo(0.5, 0.5);
		this.sprite.scale.setTo(0.3);
	}
	update() {
	}

}


export default Goblin;