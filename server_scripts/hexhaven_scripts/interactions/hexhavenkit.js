// Listen to player login event
PlayerEvents.loggedIn((event) => {
	// Check if player doesn't have "starting_items" stage yet
	if (!event.player.stages.has("hexhaven_items")) {
		// Add the stage
		event.player.stages.add("hexhaven_items");
		// Give some items to player
		event.player.give(Item.of("comforts:sleeping_bag_white"));
	}
});
