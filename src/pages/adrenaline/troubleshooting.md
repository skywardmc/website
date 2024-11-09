---
layout: "../../layouts/Layout.astro"
title: "Adrenaline/Troubleshooting"
description: "Troubleshooting information for Adrenaline."
style: "adrenaline"
---

Experiencing issues with other added mods? Here are a few things I advise you to do before submitting an issue to the repository:

## Disable Nvidium

While Nvidium should be generally stable at this point, in some (very rare) cases you may possibly experience an issue. If you are experiencing issues, try disabling Nvidium and see if it fixes it. If it does, open a report at the [Nvidium issue tracker](https://github.com/MCRcortex/nvidium/issues). Some mods may not be compatible with Nvidium.

## Mods breaking

In [ModernFix](https://modrinth.com/mod/modernfix), the [Dynamic Resources](https://github.com/embeddedt/ModernFix/wiki/Dynamic-Resources-FAQ) patch is enabled by default that can reduce load times and improve memory usage, however it can possibly break some content mods. If you experience this issue, simply remove the `mixin.perf.dynamic_resources` override in the `modernfix-mixins.properties` config file.

The `mixin.perf.dynamic_entity_renderers` mixin is also enabled by default which can cause issues with mod compatibility. Try disabling that as well.

## Experiencing GUI issues

If you are experiencing issues with GUI, try disabling ImmediatelyFast. ImmediatelyFast optimizes various parts of the immediate mode rendering code, which includes UI.

## Experiencing low FPS

If you are experiencing lower FPS than expected, try following [Adrenaline/Post-install](/adrenaline/post-install) and see if any of that helps. If it doesn't, join my [Discord](https://discord.gg/36Tv44cYte) and open a thread there.

## Having other issues

Join my [Discord server](https://discord.gg/36Tv44cYte) and I (or community members) can try to help with your issue as long as I'm not busy.
