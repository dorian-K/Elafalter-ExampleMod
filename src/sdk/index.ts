///<reference path="./index.d.ts"/>

const loader = __elaDynLoad;

if (!loader)
	throw new Error(
		"Elafalter Loader not found, are you running in the correct environment?"
	);

export const Game: Game_TYPE = loader("Game");
export const ModManager: ModManager_TYPE = loader("ModManager");