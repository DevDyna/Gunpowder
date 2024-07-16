ServerEvents.tick((event) => {
  const { server } = event;
  server.runCommandSilent(
    "/effect give @a minecraft:saturation infinite 0 true"
  );
  server.runCommandSilent(
    "/effect give @a minecraft:resistance infinite 2 true"
  );
  server.runCommandSilent("/gamemode spectator @a[scores={death=1..}]");
  server.runCommandSilent('/scoreboard players set @a[scores={death=1..}] death 0')

});
