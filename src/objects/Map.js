class Map {

	constructor(game){
		this.game = game
        this.map = this.game.add.tilemap('level')

        this.map.addTilesetImage('tiles', 'tiles')

        //this.blockedLayer = this.map.createLayer('objectLayer')
        this.blockedLayer = this.map.createLayer('blockedLayer')
        //this.foregroundLayer = this.map.createLayer('foregroundLayer')

        this.map.setCollisionBetween(1, 10000, true, 'blockedLayer')

        // make the world boundaries fit the ones in the tiled map
        this.blockedLayer.resizeWorld()

/*
        var result = this.findObjectsByType('exit', this.map, 'objectLayer')
        this.exit = this.game.add.sprite(result[0].x, result[0].y, 'tiles')
        this.exit.frame = 8
        this.game.physics.arcade.enable(this.exit)
        this.exit.body.setSize(1, 1, 3, 5)
        this.winnar = false

        var result = this.findObjectsByType('playerStart', this.map, 'objectLayer')
        this.playerStartX =  result[0].x
        this.playerStartY =  result[0].y
        this.player = this.game.add.sprite(result[0].x, result[0].y, 'chars')
        this.player.frame = 1;

*/
	}

	update() {
	}

}


export default Map