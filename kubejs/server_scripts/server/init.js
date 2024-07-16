ServerEvents.loaded((event) => {
  const { server } = event;

  // regen off
  server.runCommandSilent("/gamerule naturalRegeneration false");

  //health points
  server.runCommandSilent("/scoreboard objectives add hp health");
  server.runCommandSilent("/scoreboard objectives setdisplay list hp");
  server.runCommandSilent("/scoreboard objectives setdisplay belowName hp");

  //total kills
  server.runCommandSilent("/scoreboard objectives add kills playerKillCount");
  server.runCommandSilent("/scoreboard objectives setdisplay sidebar kills");

  //deaths
  server.runCommandSilent("/scoreboard objectives add death deathCount");
  
  //mobspawn
  server.runCommandSilent('/gamerule doMobSpawning false')
  server.scheduleInTicks(60,()=>{
    server.runCommandSilent('/kill @e[type=!player]')
  })
  
});
