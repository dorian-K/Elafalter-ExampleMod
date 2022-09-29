import {
	Game,
	ModManager } from './sdk' // Impors the ModManager and Game classes from the sdk path
import attackSomeEntity from './sub'; // Imports the attackSomeEntity subfolder script

class ClassBasedMod { // Defines the class name

	ref: JsMod;
	
	constructor(mod: JsMod) {
		mod.setName("ClassBasedMod");

		mod.on("init", this.onInit);
		mod.on("enable", this.onEnable);
		mod.on("disable", this.onDisable);
		mod.on("tickWorld", this.onTickWorld);

		this.ref = mod;
	}

	// called when the mods is enabled for the first time
	onInit() { 
		log("on init");
		log("my mod is: ", this.ref.getName()); // Prints the Mod's Name
	}

	// called when the mod is enabled
	onEnable() {
		log("on onEnable");

		let lp = Game.getLocalPlayer(); // Gets the players position from the LocalPlayer
		print("Player position: ", lp.position.x, lp.position.y, lp.position.z); // Prints the returned X, Y, Z pos that the player is currently at
	}

	// called when the mod is disabled
	onDisable() {
		log("on onDisable");
	}

	// called on every tick (20 times per second)
	onTickWorld(lp: LocalPlayer) {
		if (lp.onGround) { // If the Player is on the ground then
			lp.jumpFromGround(); // Execute the jumpFromGround() func
		} else // Otherwise we
			attackSomeEntity(); // Attack some entity
	}
}

function InlineMod(mod: JsMod) {
	// Functionally the same code as above, but expressed differently
	mod.setName("InlineMod");

	mod.on("init", () => { 
		log("on init"); 
		log("my mod is: ", mod.getName()); 
	});

	mod.on("enable", () => { 
		log("on onEnable");

		let lp = Game.getLocalPlayer(); 
		print("Player position: ", lp.position.x, lp.position.y, lp.position.z);
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

// Registration 
ModManager.registerMod(ClassBasedMod);
ModManager.registerMod(InlineMod);
