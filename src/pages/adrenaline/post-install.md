---
layout: "../../layouts/WikiPage.astro"
title: "Post-install"
description: "Post install instructions for Adrenaline."
style: "adrenaline"
---

Out of the box, Adrenaline should be good enough for most people. However, this page contains a few things you can do after installing Adrenaline to possibly get better performance, etc.

## Performance mods to take a look at

There are some performance mods that Adrenaline does not come with, which you may want to take a look at after installation. These mods are not included because they are either experimental, cause compatibility issues, break/modify Vanilla features, or other reasons.

### Rendering optimizations

These mods only operate client-side.

- **[Gnetum](https://modrinth.com/mod/gnetum)**: Distribute HUD updates over multiple frames to improve performance. Not included as, in the case of an undiscovered incompatibility issue, the mod can cause intense flickering which is bad for those with photosensitivity.
- **[Nvidium](https://modrinth.com/mod/nvidium)**: Replacement rendering backend for Sodium that uses Nvidia-only OpenGL extensions to increase FPS by a significant amount. It is currently considered a beta, so it's not included out of the box.
- **[AsyncParticles](https://modrinth.com/mod/asyncparticles)**: Various particle optimizations. AsyncParticles may be a little faster than the included Particle Core. However, it has known compatibility issues and can cause problems.

### Logic optimizations

These mods only operate server-side or in singleplayer.

- **[Alternate Current](https://modrinth.com/mod/alternate-current)**: Reduces the lag caused by redstone dust, optimizing the power calculations and reducing the number of shape and block updates emitted. Not included as it does not guarantee vanilla parity.
- **[C2ME OpenCL Acceleration Module](https://modrinth.com/mod/c2me-ocl)**: Experimental C2ME addon that provides hardware accelerated world generation through OpenCL. May have significant issues with worldgen mods.
- **[Immersive Optimization](https://modrinth.com/mod/immersive-optimization)**: Entity tick scheduler that aims to improve logic performance. Not included as it could cause issues with Vanilla parity. Generally can provide significant benefits in large content modpacks.
- **[Jasione](https://modrinth.com/mod/jasione)**: Reduces memory allocation/GC pressure. Not included out of the box as it is a small micro-optimization that will likely not noticeably benefit in most cases, but this may help in large content modpacks.
- **[Moonrise](https://modrinth.com/mod/moonrise-opt)**: An official port of several Paper patches to Fabric. Supersedes several mods such as C2ME, ScalableLux, and Noisium. Not included out of the box as it is [incompatible with a wide variety of mods](https://github.com/Tuinity/Moonrise/issues).
- **[Potatoptimize](https://modrinth.com/plugin/potatoptimize)**: Optimization mod that pools some patches from Paper and the author's own optimizations. Not included as it does not guarantee vanilla parity.
- **[Sepals](https://modrinth.com/mod/sepals)**: An experimental optimization mod for improving logic performance. Not included as it is too experimental and does not guarantee vanilla parity.
- **[TT20](https://modrinth.com/mod/tt20)**: Recalculates the amount of ticks that something takes based on the TPS, to improve the experience when the server is lagging. Not included as it has a couple issues regarding [breaking Vanilla features](https://github.com/snackbag/tt20/issues).

### Other optimizations

These do not improve actual gameplay performance, rather, they speed up other parts of the game. These are considered out of scope for Adrenaline, as Adrenaline's main goal is to only focus on rendering/logic performance and memory usage. If you have opinions on expanding Adrenaline's scope to include these mods, [let us know here](https://github.com/skywardmc/adrenaline/issues/73#issuecomment-4052787021). These _are_ included out of the box in Additive.

- **[Fast IP Ping](https://modrinth.com/mod/fast-ip-ping)**: Improves server info lookup time for literal IP server addresses.
- **[FastQuit](https://modrinth.com/mod/fastquit)**: Allows you to instantly quit the world and let it save in the background.
- **[Language Reload](https://modrinth.com/mod/language-reload)**: Reduces language load times and also adds fallbacks.
- **[quick pack](https://modrinth.com/mod/quick-pack)**: Significantly improves loading speeds for large resourcepacks.

## JVM arguments and memory allocation

Please see <https://exa.y2k.diy/garden/jvm-args> for information on JVM arguments, what Java distribution you should use for Minecraft, and how much memory you should allocate to the game.

This modpack can run with memory allocations as low as 512MB, and possibly even lower thanks to Adrenaline's memory optimizations, but it's not recommended to go below 1GB. 2-4GB is fine for most lightly modded instances such as Adrenaline and Additive.

## Important game settings to keep note of

By default, Adrenaline does **not** change any of Minecraft's quality/graphics settings, except for simulation distance. You can hover over any setting in-game not listed here to see a description of what it does and it's impact, but these are some important settings to take note of:

- General
  - **Render Distance**: Affects how far you can see in the distance. If you are playing on multiplayer, servers have a limit. This has a high impact on render performance.
  - **Simulation Distance**: Distance at which entities, blocks, fluids, etc are ticked. Setting this below 8 may affect mob spawning behavior. This has a high impact on logic performance (singleplayer only).
- Quality
  - **Improved Transparency/Fabulous graphics**: This has a very high impact on render performance. Generally not recommended unless you really want it.
  - **Entity Distance**: How far you can see entities in the distance. This has a high impact on render performance.
- Extras (requires [Sodium Extra](https://modrinth.com/mod/sodium-extra))
  - **Reduce Resolution on MacOS**: _Heavily recommended_ if you are on a Mac with a retina display. Will improve performance significantly at little visual cost.

## Other mods you may want

Adrenaline is shipped very bare-bones and is designed to be flexible so that the user can customize their instance however they want to. Here are some commonly installed mods:

- **[Sodium Extra](https://modrinth.com/mod/sodium-extra)**: Adds an optional FPS counter and more granular performance settings
- **[Iris Shaders](https://modrinth.com/mod/iris)**: Adds shader support
- **[Controlify](https://modrinth.com/mod/controlify)**: Adds controller support
- **[Vivecraft](https://modrinth.com/mod/vivecraft)**: Adds VR support (fun!)
