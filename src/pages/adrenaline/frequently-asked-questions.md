---
layout: "../../layouts/WikiPage.astro"
title: "Frequently asked questions"
description: "Frequently asked questions about Adrenaline."
style: "adrenaline"
---

## Will this cause data corruption?

Adrenaline is very unlikely to cause corruption to world data. However, I would always heavily recommend keeping backups of important worlds regardless of whether you're playing with mods.

If you want to be extra safe, you can remove C2ME at a cost of chunk generation speed. But I still recommend keeping backups.

## How can I provide feedback?

If you want to talk about the pack or have any questions, please use [Discord](https://discord.gg/36Tv44cYte) or [Matrix](https://matrix.to/#/#skywardmc:skywardmc.org)! However, if you want a feature to be added or sending in a bug report, use the [GitHub issue tracker](https://github.com/intergrav/Adrenaline/issues) instead.

## Aren't Config Manager and Crash Assistant QoL mods?

_Technically_, yes. However, both barely affect the game during runtime. They only do things before the game is run, or after closing if you experience a crash.

Config Manager simply allows us to set custom defaults for config files, which prevents your configs from being overwritten with our defaults every time you update the modpack. It also lets you easily overwrite or reset your configurations with the modpack defaults in it's own config menu.

Crash Assistant helps you analyze crash logs, and also makes it easier for users to access our server for support. It also contains features such as detecting and warning you if Minecraft is using an iGPU while a dGPU is available. It's tremendously increased the amount of support posts we receive, often improving the modpack for everyone, so that's why we have it built-in.

### What about Mod Menu?

Yes, Mod Menu is a QoL mod. However, it's a mod that 90% of people will install after installing Adrenaline anyway, and it's also the only way to access Config Manager's overwrite/reset features. It can also be very nice for configuring certain mods without having to restart the game. In really any modded instance I would consider it a pretty terrible UX to not have a way to see or configure mods.

In Adrenaline, it's been intentionally configured to be out of your way. The button type is set to "Icon", so it doesn't shift around any menus, and the update check is off.

## What's the difference from Fabulously Optimized?

Both are great options, but we differ in philosophies:

- Adrenaline is more focused on user-customization and having a lighter experience out of the box. Adrenaline does not include any extra features other than optimizations. We also change much less settings - the only vanilla setting we change is the simulation distance.
- Adrenaline also actively supports more versions at once, including popular modding versions, which can make it more suitable as a base to use for modpacks.
- Adrenaline can be installed on servers, and has server-specific optimizations regarding networking and chunk performance improvements.

_For a closer out-of-box experience to Fabulously Optimized, with extra features such as OptiFine substitutes, see [Additive](/additive) which is a modpack built on Adrenaline._

## Can I base a modpack off of this?

Yes, _you can_! Feel free to use this in any way you want! You don't **have** to give credit - after all it's just a Minecraft modpack, but I spend lots of time maintaining this and it's much appreciated. Also, I would prefer you not to include this project's name (for example, something like "Adrenaline Plus") or a similar icon (like changing colors of the current icon) in the fork as it could confuse users and can make it seem like I endorse it.

**If you're building a modpack off Adrenaline and publishing it, please be sure to change the Crash Assistant's config to match your project, such as the Discord links and strings.**

If you do make a fork, feel free to let me know and I can add it to the [Credits](/adrenaline/credits) page :)
