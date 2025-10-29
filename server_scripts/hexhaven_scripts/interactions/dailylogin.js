PlayerEvents.loggedIn((e) => {
	let currentDate = new Date().toJSON().slice(0, 10);
	console.info(
		`${e.player.name} last logged in on ${e.player.persistentData.lastLogin} and it is currently ${currentDate}.`
	);
	if (
		currentDate != e.player.persistentData.lastLogin ||
		!e.player.persistentData.lastLogin
	) {
		e.player.give("5x kubejs:lunarcoin");
		console.info(`Gave ${e.player.name} their allowance`);
		e.player.persistentData.lastLogin = currentDate;
	}
});
