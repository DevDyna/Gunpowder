StartupEvents.registry("item", (event) => {
  event
    .create("medikit_portable")
    .texture("kubejs:item/bag")
    .displayName("§aPortable Medikit");

  event
    .create("hp_point")
    .displayName("§cHeart Points")
    .glow(true)
    .texture("kubejs:item/heal");

    //BUGGED
  //event.create("debug_stage").texture("minecraft:item/stick");
  
  event.create("debug_death").texture("minecraft:item/stick");

});

StartupEvents.registry("block", (event) => {
  event
    .create("healer").unbreakable()
    .textureAll("kubejs:block/healer")
    .steppedOn((back) => {
      if (back.entity.isPlayer() && rnd75()) {
        back.level.runCommandSilent(
          "/effect give " +
            back.entity.uuid.toString() +
            " minecraft:instant_health 1 0 true"
        );
      }
    });

  event
    .create("lucky_block")
    .textureAll("minecraft:block/structure_block")
    .hardness(0)
    .noDrops()
    .soundType("decorated_pot_cracked");

});

BlockEvents.modification((event) => {
  event.modify('/.*/', block => {
    block.requiresTool = false
    block.destroySpeed = Block.getBlock(block.id).defaultDestroyTime()/32;
  });
});
