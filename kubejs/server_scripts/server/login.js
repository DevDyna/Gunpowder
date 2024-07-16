

PlayerEvents.loggedIn((event) => {
  const { server, player } = event;
  const { username, inventory } = player;
  server.runCommandSilent(
    "/attribute " + username + " minecraft:generic.max_health base set 40"
  );
  server.runCommandSilent(
    "/effect give "+username+" minecraft:instant_health 10 100 true"
  );
    server.runCommandSilent(
      "/scoreboard players set " + username + " kills 0"
    );

  inventory.add(Item.of('minecraft:trapped_chest', "{display:{Lore:['{\"text\":\"Right Click to open\",\"color\":\"green\",\"italic\":false}'],Name:'{\"text\":\"Loot Crate\",\"color\":\"gold\",\"bold\":true,\"italic\":false}'}}"))
});
