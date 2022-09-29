import {
	Game,
	ModManager
} from './sdk'
import attackSomeEntity from './sub';

class ClassBasedMod {

	ref: JsMod;

	constructor(mod: JsMod) {
		mod.setName("ClassBasedMod");

		mod.on("init", this.onInit);
		mod.on("enable", this.onEnable);
		mod.on("disable", this.onDisable);
		mod.on("tickWorld", this.onTickWorld);

		this.ref = mod;
	}

	onInit() {
		log("on init");
		log("my mod is: ", this.ref.getName());
	}

	onEnable() {
		log("on onEnable");

		let lp = Game.getLocalPlayer();
		print("Player position: ", lp.position.x);
	}

	onDisable() {
		log("on onDisable");
	}

	onTickWorld(lp: LocalPlayer) {
		if (lp.onGround) {
			lp.jumpFromGround();
		} else
			attackSomeEntity();
	}
}

function InlineMod(mod: JsMod) {
	mod.setName("InlineMod");

	mod.on("init", () => {
		log("on init");
		log("my mod is: ", mod.getName());
	});

	mod.on("enable", () => {
		log("on onEnable");

		let lp = Game.getLocalPlayer();
		print("Player position: ", lp.position.x);
	});

	mod.on("disable", () => {
		log("on onDisable");
	});

	mod.on("tickWorld", (lp: LocalPlayer) => {
		if (lp.onGround) {
			lp.jumpFromGround();
		} else
			attackSomeEntity();
	});
}

ModManager.registerMod(ClassBasedMod);
ModManager.registerMod(InlineMod);