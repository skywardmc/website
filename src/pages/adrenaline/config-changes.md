---
layout: "../../layouts/WikiPage.astro"
title: "Config changes"
description: "All of the changes that Adrenaline makes to mods and Vanilla configs."
style: "adrenaline"
---

Most mods are fine out of the box and don't typically need tweaking. They're already tuned well. However, some mods offer optimizations that are disabled by default for mod compatibility, which we enable. Here's a full summary of what we change out of the box.

**If you are making a modpack, you may want to disable the ModernFix mixins to prevent possible issues with certain content mods.**

## All versions

- Minecraft
  - `simulationDistance` from `12` to `8`
- Dynamic FPS
  - `states.*.volume_multipliers` to `1.0`
  - `states.unfocused.frame_rate_target` from `1` to `10`
  - `states.invisible.run_garbage_collector` to `true`
- FerriteCore
  - `useSmallThreadingDetector` to `true`
- Mod Menu
  - `mods_button_style` from `"classic"` to `"icon"`
  - `game_menu_button_style` from `"replace"` to `"icon"`
  - `update_checker` to `false`
  - `count_libraries` to `false`
  - `count_children` to `false`
- ModernFix
  - `mixin.perf.dynamic_entity_renderers` to `true`
  - `mixin.perf.dynamic_resources` to `true`
  - `mixin.perf.faster_item_rendering` to `true`
- Very Many Players _(server)_
  - `show_async_loading_messages` to `false`

## 1.20.1 specific

- Cull Less Leaves
  - `randomRejection` from `0.2` to `0.0`
