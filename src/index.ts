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
		log("on tick world", lp.position.x);
	}
}

function InlineMod(mod: JsMod) {
	mod.setName("InlineMod");

	mod.on("init", () => {
		log("inline init");
	});

	mod.on("enable", () => {
		log("inline enable");
		attackSomeEntity();
	});

	mod.on("disable", () => {
		log("inline disable");
	});

	mod.on("tickWorld", (lp: LocalPlayer) => {
		if (lp.onGround) {
			lp.jumpFromGround();
		}
	});
}

ModManager.registerMod(ClassBasedMod);
ModManager.registerMod(InlineMod);