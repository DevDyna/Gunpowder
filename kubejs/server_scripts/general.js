ServerEvents.blockLootTables((event) => {
  event.removeAll();
});

ServerEvents.recipes((event) => {
  event.remove({});
});
