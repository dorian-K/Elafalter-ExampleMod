import { Game } from '../sdk'

function attackSomeEntity() {
	let lp = Game.getLocalPlayer();
	if (!lp)
		return;
	let allActors = Game.getAllActors();
	for (let i = 0; i < allActors.length; i++) {
		let act = allActors[i];
		if (act.entityRuntimeId == lp.entityRuntimeId) continue;

		lp.gameMode.attack(act);
		break;
	}
}

export default attackSomeEntity;