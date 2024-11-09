---
layout: "../../layouts/Layout.astro"
title: "Adrenaline/Post-install"
description: "Post install instructions for Adrenaline."
style: "adrenaline"
---

This page contains a few things you can do after installing Adrenaline to get better performance, better stability, etc. Some mods are already configured well enough to get improvements, so this guide will not include information about those. Depending on your system, you may or may not see an improvement, however on low-end systems you should notice an improvement. Some parts of this page were inspired by the Simply Optimized wiki.

## Improve performance

There are some ways to improve your performance past installation. Some of them are experimental and should only be used if you really want to.

### Extra mods to consider

#### [Concurrent Chunk Management Engine](https://modrinth.com/mod/c2me-fabric)

C2ME is a mod designed to improve chunk performance using multi-threading. While on some systems this can increase chunk generation speeds and possibly improve framerates, the mod itself is an alpha and can be unstable at times - possibly, in rare cases, causing world corruption. If you don't care about the mod being experimental, you can install it manually after installing this modpack. Keep in mind that C2ME can possibly increase resource usage.

#### [Exordium](https://modrinth.com/mod/exordium)

Exordium aims to render the GUI and screens at a lower framerate to speed up world rendering. This is not included in Adrenaline due to possible mod conflicts and because it can make performance worse on GPU-bottlenecked setups. If you're CPU-bottlenecked and don't have any mod conflicts, consider checking this mod out.

#### [Sodium Extra](https://modrinth.com/mod/sodium-extra)

This is an add-on to Sodium that adds some extra configuration settings for Sodium. It does not improve performance by itself, but it allows you to control various graphical effects such as particles and animations, which could improve performance at the cost of visuals. This is already included in Additive.

#### [Methane](https://modrinth.com/mod/methane)

Methane completely removes the lighting engine from the client. This results in a major performance boost, however it does make the game look way worse as it removes the lighting engine :p If you don't care about visuals and just need the best performance, consider checking this out.

### Setting your allocated memory

Before setting your memory used by Minecraft, you should first check your system's memory.

<details>

<summary>How to check on Windows, Linux, and Mac</summary>

**If you're on a Windows system**, open up Task Manager, go to the performance tab, and under "memory" you should see the amount you have installed on your system.

![~32 GB installed (Windows screenshot)](https://user-images.githubusercontent.com/42325132/215305534-e4636441-ecb5-4f1f-9135-3ada4050fe06.png)

**If you're on a Linux system**, you can see how much memory you have installed by running `free -g -h -t`. You'll see it in column "Total" and row "Mem".

![~32 GB installed (Linux screenshot)](https://github.com/skywardmc/adrenaline/assets/42325132/7ef74258-db24-42e3-9bb6-224af03cbbf2)

**If you're on a Mac**, click the Apple menu and click "About This Mac". You'll see your installed RAM next to "Memory".

![8 GB installed (MacOS screenshot](https://github.com/skywardmc/adrenaline/assets/42325132/eb8b9d1e-8db9-4c69-9b99-cead56b3aa76)

</details>

Allocating more memory to Minecraft may increase performance greatly, but setting it too high can cause issues as well. If you have a low amount of memory installed, please make sure to keep enough memory for your system. As a general recommendation, **2-4 GB (2048-4096 MB)** is usually all you should use for unchanged Adrenaline, Additive, or Vanilla. Playing with many mods? I'd suggest **3-6 GB (3074-6144 MB)**, however you may set this lower if needed. Do what works for you. _Never set your allocated memory to the same amount as your installed memory._

If you are severely limited on memory, Adrenaline can run surprisingly well even with a minimum of 768 MB because of ModernFix and FerriteCore. Probably can be playable at even lower allocations, however I do not test with very low RAM so your mileage may vary.

In Prism Launcher, you can set your memory by going to `Settings > Java > Maximum memory allocation`. You may set the minimum memory too, however I haven't noticed any improvement over using the default.

### Change your Minecraft settings

By default, Adrenaline does **not** change any of Minecraft's quality/graphics settings, except for simulation distance which will be explained later.

#### General

Start by changing your render distance. The higher this number, the further you can see. If you are playing on multiplayer, servers usually have a cap for render distance. On low-end systems, this should be set to 4-8 chunks. Mid-range systems will usually work well with 8-16 chunks, and high-end systems should be fine with 12-24 chunks.

After this, you can change your simulation distance. This is the distance in chunks that entities, blocks, fluids, etc are ticked, meaning that things like farms outside of this distance may not work properly. Unless you have areas with big farms and such, the default 5 should work well. If not, use 8-12. _This only affects singleplayer - you won't notice anything while playing on servers as they have their own setting for simulation distance._

I recommend keeping V-Sync turned off unless you notice screen tearing, which in that case, turn it on or use Adaptive V-Sync. To use Adaptive V-Sync, you will need to install the [Sodium Extra](https://modrinth.com/project/sodium-extra) mod. If you are using Additive, this mod is already included. Adaptive V-Sync typically has less input latency than normal V-Sync.

#### Quality

Set graphics quality to "fast" on low-end systems and "fancy" on mid-range to high-end systems. This will affect if leaves are transparent or not, weather particles, and other things. **Do not use Fabulous unless you absolutely need it's benefits, as it can have a noticeably negative impact on performance.**

Set particles to "minimal"/"decreased" on low-end systems, and "all" on other systems. For greater control over particles, install Sodium Extra.

### MacOS half resolution

If you're on a Mac with a Retina display, it is heavily recommended to install Sodium Extra and enable the "half resolution" option under the "Extra" tab. You will have to restart the game after enabling this. Retina displays have very high native resolutions, so running Minecraft at half resolution won't affect quality noticeably while resulting in a large boost in performance and battery life. If you're using Additive, Sodium Extra is already installed.

_With Complementary Shaders on an M2 Macbook Air, I went from ~40 FPS to ~160 FPS after enabling this!_

## Improve your experience

### Sodium add-ons

First, you can get [Sodium Extra](https://modrinth.com/mod/sodium-extra). This mod lets you configure extra graphics options and also add an FPS counter in the corner of your screen. Next, get [Reese's Sodium Options](https://modrinth.com/mod/reeses-sodium-options). This mod improves the experience and looks of the Sodium menu. If you are using Additive, both of these are already included by default.

### Shader support

To get support for shaderpacks, install the [Iris Shaders](https://modrinth.com/mod/iris) mod and then go to the Video Settings menu. If you are using Additive, this is already included by default.

### Immersive VR support

If you want to play immersively on VR, the [Vivecraft](https://modrinth.com/mod/vivecraft) mod exists for that. View [vivecraft.org](https://www.vivecraft.org) for more information on how the mod works and how to use it.
