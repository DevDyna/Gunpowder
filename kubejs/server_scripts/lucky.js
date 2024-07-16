//priority -1
let loot_table = [armor(12, "Legendary", "FF00FF", "[4]", true)];

let multiple = [
  xp(),
  repeat(armor(6, "Uncommon", "00FF00", "[1]", true), 6),
  repeat(armor(8, "Rare", "FFFF00", "[2]", true), 4),
  repeat(armor(10, "Elite", "00FFFF", "[3]", true), 2),
  repeat(jetpack, 2),
  repeat(enderstaff, 2),
  repeat(grapple_dual, 3),
  repeat(grapple_mono, 4),
  repeat(kit_m95, 2),
  repeat(kit_gaus, 2),
  repeat(kit_rpg, 2),
  repeat(kit_m200, 3),
  repeat(kit_nitro_505, 3),
  repeat(kit_aa12, 4),
  repeat(kit_db_long, 4),
  repeat(kit_nailgun, 5),
  repeat(kit_akm, 6),
  repeat(kit_m4a1, 7),
  repeat(kit_machinegun, 7),
  repeat(kit_vector45, 7),
  repeat(kit_scar, 8),
  repeat(kit_deagle_golden, 9),
  repeat(kit_glock_17, 9),
];

multiple.forEach((element) => {
  Array.prototype.push.apply(loot_table, element);
});

console.log("##################-DEBUG-###################");
console.log("LEGHT OF LOOT TABLE: " + loot_table.length);
//console.log(loot_table)
//console.log(multiple)
console.log(
  "1/" +
    loot_table.length +
    " -> " +
    Math.floor(1000 / loot_table.length) / 1000 +
    "% of chance *aprox"
);
console.log("############################################");

BlockEvents.broken((event) => {
  //let pitch = rnd(1, 9) / 10;
  const { x, y, z } = event.block;
  let choise = loot_table[rnd(0, loot_table.length - 1)];
  if (!event.player.isCreative()) {
    if (event.block.id == "kubejs:lucky_block") {
      if (Array.isArray(choise)) {
        choise.forEach((item) => {
          event.block.popItem(item);
        });
      } else {
        event.block.popItem(choise);
      }

      //event.server.runCommandSilent('/playsound minecraft:entity.player.levelup block '+event.player.name.toString+' '+x+' '+y+' '+z+' 0.3 '+pitch)
      event.server.runCommandSilent(
        "/particle minecraft:totem_of_undying " +
          x +
          " " +
          y +
          " " +
          z +
          " 1 1 1 0.1 16"
      );
    }
  }
});
