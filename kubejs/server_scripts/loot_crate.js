ItemEvents.rightClicked((event) => {
    const { server, player, item } = event;
    const { username, inventory } = player;
    let inv = [
      Item.of("grapplemod:longfallboots", "{Unbreakable:1b}"),
      Item.of(
        "tacz:modern_kinetic_gun",
        '{GunCurrentAmmoCount:17,GunFireMode:"SEMI",GunId:"tacz:glock_17",HasBulletInBarrel:1b}'
      ),
      // Item.of('tacz:ammo_box', '{AllTypeCreative:1b,AmmoCount:2147483636}'),
      Item.of("kubejs:medikit_portable", "{medikits:40.0d}"),
      Item.of('minecraft:diamond_pickaxe', "{Damage:0,Unbreakable:1b,display:{Name:'{\"text\":\"Matrix Pickaxe\",\"color\":\"aqua\",\"bold\":true,\"italic\":false}'},mined:16}"),
      Item.of("vc_gliders:paraglider_netherite", "{Unbreakable:1b}"),
      chest(4, "Common", "949494", "[0]", false),
      legs(4, "Common", "949494", "[0]", false),
    ];
    if (item.id == "minecraft:trapped_chest") {
      inv.forEach((e) => {
        inventory.add(e);
      });
  
      inventory.extractItem(inventory.find("minecraft:trapped_chest"), 1, false);
    }
  });

  BlockEvents.placed((event) => {
    if(event.block == 'minecraft:trapped_chest')
        event.cancel()
  })