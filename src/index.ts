import {
	Game,
	ModManager } from './sdk' // Impors the ModManager and Game classes from the sdk path
import attackSomeEntity from './sub'; // Imports the attackSomeEntity subfolder script

class ClassBasedMod { // Defines the class name

	ref: JsMod;
	
	// Definations 
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
		log("my mod is: ", this.ref.getName()); // Prints the returned Mod Name
	}

	onEnable() {
		log("on onEnable");

		let lp = Game.getLocalPlayer(); // Gets the players position from the LocalPlayer
		print("Player position: ", lp.position.x, lp.position.y, lp.position.z); // Prints the returned X, Y, Z pos that the player is currently at
	}

	onDisable() {
		log("on onDisable");
	}

	onTickWorld(lp: LocalPlayer) {
		if (lp.onGround) { // If the Player is on the ground then
			lp.jumpFromGround(); // Execute the jumpFromGround() func
		} else // Otherwise we
			attackSomeEntity(); // Execute this.
	}
}

function InlineMod(mod: JsMod) {
	mod.setName("InlineMod"); // Sets the Mod Name

	mod.on("init", () => { // On initiation 
		log("on init"); // Print this
		log("my mod is: ", mod.getName()); // Print the returned Mod Name
	});

	mod.on("enable", () => { 
		log("on onEnable");

		let lp = Game.getLocalPlayer(); // Gets the players position from the LocalPlayer
		print("Player position: ", lp.position.x, lp.position.y, lp.position.z); // Prints the returned X, Y, Z pos that the player is currently at
	});

	mod.on("disable", () => {
		log("on onDisable");
	});

	mod.on("tickWorld", (lp: LocalPlayer) => {
		if (lp.onGround) { // If the Player is on the ground then
			lp.jumpFromGround(); // Execute the jumpFromGround() func
		} else // Otherwise we
			attackSomeEntity(); // Execute this.
	});
}

// Registration 
ModManager.registerMod(ClassBasedMod);
ModManager.registerMod(InlineMod);
