import Map from 'objects/Map'
import Particle from 'objects/Particle'
import Player from 'objects/Player'

class Main extends Phaser.State {

	create() {

		this.game.physics.startSystem(Phaser.Physics.ARCADE)

		this.game.stage.backgroundColor = '#98FB98'

		this.step = -1

		this.statusLabel = this.add.text(this.game.world.width/2 - 360, 10, '')
		this.timeLabel = this.add.text(700, 10, '')
		this.speed = 0

        this.gameover = false

        this.rKey = this.game.input.keyboard.addKey(Phaser.Keyboard.R)
    	this.rKey.onDown.add(this.restart, this)
    	this.map = new Map(this.game)

    	this.player = new Player(this.game, 200, 200)
    	this.cursors = this.game.input.keyboard.createCursorKeys()

	}

	restart() {
		this.game.state.restart()
	}

	endgame() {
		this.gameover = true
	}
	killparticle(part, wall) {
		part.kill()
	}
	update() {
		this.step += 1

		this.hitPlatform = this.game.physics.arcade.collide(this.player.sprite, this.map.blockedLayer)
//		this.game.physics.arcade.collide(this.particles, this.bucket.walls, this.killparticle, null, this);
		if (this.gameover) {
			return
		}

		this.player.update(this.cursors, this.hitPlatform)
		
//		this.timeUsed.setTime(this.game.time.totalElapsedSeconds());
		this.timeLabel.text = "Time spent: " + (this.game.time.events.duration/ 1000).toFixed(1) + "s"


		this.statusLabel.text = this.step
	}

	
	render() {
		this.game.debug.text(this.game.time.fps, 2, 14, "#00ff00")
		this.game.debug.body(this.player.sprite)
	}
}

export default Main