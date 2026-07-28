---
layout: "../../layouts/WikiPage.astro"
title: "Troubleshooting"
description: "Troubleshooting information for Adrenaline."
style: "adrenaline"
---

## Mod incompatibilities

We generally try to not include mods, or features of mods, that cause many incompatibilities. However, in some cases we do if they are worth it for the average player:

- [ModernFix](https://modrinth.com/mod/modernfix)'s `mixin.perf.dynamic_resources` feature significantly improves memory usage, but is commonly incompatible with content mods. The result is typically broken textures or crashes. You can disable this in `modernfix-mixins.properties`
  - [See ModernFix's issue tracker](https://github.com/embeddedt/ModernFix/issues)
- [C2ME](https://modrinth.com/mod/c2me-fabric) significantly improves chunk performance, but has known incompatibilities
  - [TeamTwilight/twilightforest#2318](https://github.com/TeamTwilight/twilightforest/pull/2318)
  - [See C2ME's issue tracker](https://github.com/RelativityMC/C2ME-fabric/issues)
- Entity Culling may possibly have some compatibility issues with certain mods
  - [See Entity Culling's issue tracker](https://github.com/tr7zw/EntityCulling/issues)

## Having other issues

You can ask for help in our support channels on [Discord](/discord) or [Matrix](/matrix). Please keep in mind that support is completely volunteer-based and you may not get a response immediately or at all.
