ItemEvents.tooltip((event) => {
  event.addAdvanced("kubejs:medikit_portable", (item, advanced, text) => {
    if (item.nbt != null){
  text.add(1,Text.red((item.nbt.medikits + 0)).append(Text.red(item.nbt.medikits ==1 ? ' use left' : ' uses left' )))}
  });
  //event.add("kubejs:debug_stage", "§l§aRemove all stages");
  event.add("kubejs:debug_death", "§l§bRemove all spectator players");


  event.addAdvanced("minecraft:diamond_pickaxe", (item, advanced, text) => {
    if (item.nbt != null){
  text.add(1,Text.red((item.nbt.mined + 0)).append(Text.red(item.nbt.mined ==1 ? ' block left' : ' blocks left')))}
  });

});
