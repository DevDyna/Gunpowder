BlockEvents.rightClicked((event) => {
  const { player } = event;
  const item = player.mainHandItem
  const offset = event.block.offset(event.facing);
  if (item == "minecraft:diamond_pickaxe" && !event.player.isCreative()) {
    if (item.nbt == null || item.nbt.mined == NaN) {
      item.nbt = { Unbreakable: 1, mined: 0 };
    }
    if (item.nbt.mined > 0) {  
      if (offset == "minecraft:air" && !player.cooldowns.isOnCooldown(item)) {
        item.nbt.mined = item.nbt.mined - 1;
        offset.set("minecraft:cobblestone");
        player.addItemCooldown(item, 2);
        player.statusMessage = "§a§l<BLOCKS UPDATED TO "+item.nbt.mined+" >";
      }
    } else {
      player.statusMessage = "§c§l<NO BLOCKS AVAILABLE>";
    }
  }
});

BlockEvents.broken((event) => {
    const {player,block} = event
    let pick = player.inventory.getItem(
        player.inventory.find("minecraft:diamond_pickaxe")
      );
  if (block.id != "kubejs:lucky_block" &&!event.player.isCreative()) {
    if (pick.nbt == null || pick.nbt.mined == NaN) {
      pick.nbt = { Unbreakable: 1, mined: 0 };
    } else {
      pick.nbt.mined = pick.nbt.mined + 1;
      player.statusMessage = "§a§l<BLOCKS UPDATED TO "+pick.nbt.mined+" >";
    }
  }
});
