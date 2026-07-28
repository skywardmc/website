---
layout: "../../layouts/WikiPage.astro"
title: "Post-install"
description: "Post install instructions for Additive."
style: "additive"
---

Out of the box, Additive should be good enough for most people. However, this page contains a few things you can do after installing Additive to possibly get better performance, etc.

## Performance mods to take a look at

There are some performance mods that Additive does not come with, which you may want to take a look at after installation. These mods are not included because they are either experimental, cause many issues regarding compatibility, break/modify Vanilla features, or other reasons.

### Rendering optimizations

These mods only run client-side, in singleplayer and multiplayer.

- **[AsyncParticles](https://modrinth.com/mod/asyncparticles)**: Various particle optimizations. AsyncParticles may be a little faster than the included Particle Core. However, it has known compatibility issues and can cause problems.
- **[Gnetum](https://modrinth.com/mod/gnetum)**: Distribute HUD updates over multiple frames to improve performance. Not included as, in the case of an undiscovered incompatibility issue, the mod can cause intense flickering which is bad for those with photosensitivity.
- **[Nvidium](https://modrinth.com/mod/nvidium)**: Replacement rendering backend for Sodium that uses Nvidia-only OpenGL extensions to increase FPS by a significant amount. It is currently considered a beta, so it's not included out of the box.

### Logic optimizations

These mods only run in singleplayer or server-side.

- **[Alternate Current](https://modrinth.com/mod/alternate-current)**: Reduces the lag caused by redstone dust, optimizing the power calculations and reducing the number of shape and block updates emitted. Not included as it does not guarantee vanilla parity.
- **[C2ME OpenCL Acceleration Module](https://modrinth.com/mod/c2me-ocl)**: Experimental C2ME addon that provides hardware accelerated world generation through OpenCL. May have significant issues with worldgen mods.
- **[Immersive Optimization](https://modrinth.com/mod/immersive-optimization)**: Entity tick scheduler that aims to improve logic performance. Not included as it could cause issues with Vanilla parity. Generally can provide significant benefits in large content modpacks.
- **[Jasione](https://modrinth.com/mod/jasione)**: Reduces memory allocation/GC pressure. Not included out of the box as it is a small micro-optimization that will likely not noticeably benefit in most cases, but this may help in large content modpacks.
- **[Moonrise](https://modrinth.com/mod/moonrise-opt)**: An official port of several Paper patches to Fabric. Supersedes several mods such as C2ME, ScalableLux, and Noisium. Not included out of the box as it is [incompatible with a wide variety of mods](https://github.com/Tuinity/Moonrise/issues).
- **[Potatoptimize](https://modrinth.com/plugin/potatoptimize)**: Optimization mod that pools some patches from Paper and the author's own optimizations. Not included as it does not guarantee vanilla parity.
- **[Sepals](https://modrinth.com/mod/sepals)**: An experimental optimization mod for improving logic performance. Not included as it is too experimental and does not guarantee vanilla parity.
- **[TT20](https://modrinth.com/mod/tt20)**: Recalculates the amount of ticks that something takes based on the TPS, to improve the experience when the server is lagging. Not included as it has a couple issues regarding [breaking Vanilla features](https://github.com/snackbag/tt20/issues).

## JVM arguments and memory allocation

Please see <https://exa.y2k.diy/garden/jvm-args> for information on JVM arguments, what Java distribution you should use for Minecraft, and how much memory you should allocate to the game.

This modpack can run with memory allocations as low as 512MB, and possibly even lower thanks to Adrenaline's memory optimizations, but it's not recommended to go below 1GB. 2-4GB is fine for most lightly modded instances such as Adrenaline and Additive.

## Important game settings to keep note of

By default, Additive does **not** change any of Minecraft's quality/graphics settings, except for simulation distance. You can hover over any setting in-game not listed here to see a description of what it does and it's impact, but these are some important settings to take note of:

- General
  - **Render Distance**: Affects how far you can see in the distance. If you are playing on multiplayer, servers have a limit. This has a high impact on render performance.
  - **Simulation Distance**: Distance at which entities, blocks, fluids, etc are ticked. Setting this below 8 may affect mob spawning behavior. This has a high impact on logic performance.
  - **Graphics API** (mc26.2+): Prefer either OpenGL or Vulkan. Vulkan support is currently in beta, and may cause problems. Vulkan typically offers better performance on many devices.
- Quality
  - **Improved Transparency/Fabulous graphics**: This has a very high impact on render performance. Generally not recommended unless you really want it.
  - **Entity Distance**: How far you can see entities in the distance. This has a high impact on render performance.
- Extras
  - **Reduce Resolution on MacOS**: _Heavily recommended_ if you are on a Mac with a retina display. Will improve performance significantly at little visual cost.
