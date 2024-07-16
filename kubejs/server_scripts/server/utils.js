//BUGGED
// ItemEvents.rightClicked("kubejs:debug_stage", (event) => {
//   const { player, hand, server } = event;
//   if (hand == "MAIN_HAND") {
//     server.runCommandSilent("/kubejs stages remove @a init");
//     player.statusMessage = "REMOVED ALL STAGES";
//   }
// });

ItemEvents.rightClicked("kubejs:debug_death", (event) => {
  const { player, hand, server } = event;
  if (hand == "MAIN_HAND") {
    server.runCommandSilent("/scoreboard players set @a death 0");
    server.runCommandSilent("/gamemode survival @a");
    player.statusMessage = "REMOVED ALL SPECTATOR PLAYERS";
  }
});