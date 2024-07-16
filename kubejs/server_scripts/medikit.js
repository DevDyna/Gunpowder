ItemEvents.pickedUp("kubejs:hp_point", (event) => {
  const { player, item } = event;
  const { inventory } = player;
  let place = inventory.find("kubejs:medikit_portable");
  let itemfound;
  itemfound = inventory.getItem(place);
  if (itemfound.nbt == null) {
    itemfound.nbt = { medikits: 0 };
  } else {
    itemfound.nbt = { medikits: itemfound.nbt.medikits + item.count };
    inventory.extractItem(inventory.find("kubejs:hp_point"), item.count, false);
    player.statusMessage =
      "§a<Medikits increase to " + itemfound.nbt.medikits + ">";
  }
  return false;
});

EntityEvents.hurt((event) => {
  const { entity } = event;
  const onhand = entity.inventory.getItem(
    entity.inventory.find("kubejs:medikit_portable")
  );
  if (event.entity.isPlayer()) {
    if (onhand.nbt == null) {
      onhand.nbt = { medikits: 0 };
    } else {
      if (onhand.nbt.medikits <= 0) {
        entity.statusMessage = "§c§l<Medikits out of stock!>";
        onhand.nbt = { medikits: 0 };
      } else {
        if (entity.maxHealth-1 >= entity.health) {
          if (onhand.nbt.medikits > 1) {
            onhand.nbt = { medikits: onhand.nbt.medikits - 1 };
          } else {
            onhand.nbt = { medikits: 0 };
          }
          entity.statusMessage =
            "§b§l<Medikits updated to " + onhand.nbt.medikits + ">";
          entity.heal(2);
        }
      }
    }
  }
});

ItemEvents.rightClicked("kubejs:hp_point",event => {
  const { player, item } = event;
  const { inventory } = player;
  let place = inventory.find("kubejs:medikit_portable");
  let itemfound;
  itemfound = inventory.getItem(place);
  if (itemfound.nbt == null) {
    itemfound.nbt = { medikits: 0 };
  } else {
    player.swing()
    if(player.isCrouching()){
      itemfound.nbt = { medikits: itemfound.nbt.medikits + item.count };
    item.count = 0
    }else{
      itemfound.nbt = { medikits: itemfound.nbt.medikits + 1 };
    item.count--
    }
    
    player.statusMessage =
      "§a<Medikits increase to " + itemfound.nbt.medikits + ">";
      
  }
})
