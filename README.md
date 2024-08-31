# Dark Souls Memory Cards (TCG)
A fun fan project Inspired by Dark Souls , infused with the challenge of a memory-based brain teaser. The **goal** is to **avoid clicking the same card twice** and make it to the end. See if you can beat the game at an insane level! 

Link: https://ds-memory-game-47ij.vercel.app/ 🧩

<img width="982" alt="screenshot" src="https://imgur.com/a/LAhTK5j">

## Disclaimers ⚠️
This is a fan-made project based on the game Dark Souls. This project features materials protected by the Fair Use guidelines of Section 107 of the Copyright Act. All rights reserved to the copyright owners. <br>
The game premise is created based on this [React course](https://www.theodinproject.com/lessons/node-path-react-new-memory-card) from The Odin Project. Much appreciation for this great source.

## Features 🎯
- Loading screen (API fetching)
- Level Difficulty Selector
- 3D Card styling 
- Sound Option & Playlist

## Build With 🚀
- React (using Vite)
- TypeScript
- HTML/SCSS

## Challenges 😖
Creator's note: this project was a deep dive into React, exploring hooks, contexts, and API integration for a complete game experience.

Somewhere along the project, a key lesson learned involved managing large file uploads. After grappling with GitHub's LFS and upload issues with large videos and images, I ultimately had to re-optimize the way my file is set up, trim, and rework larger uploads. While this is a cautionary tale of painstaking hours spent trying to make the game flow better I learned a lot about handling uploads and optimization for game flow.

Another key takeaway is understanding rerendering, mounting and unmounting, and the different hooks within child contexts and levels. For example, there was some issue with each card state never being set properly since the card component is constantly remounted when clicked on. These problems helped me better understand the rerendering processes and use effects and contexts for the future.

## Libraries 📚
```
   npm install uuidv4 
   npm install use-sound
   npm install react-parallax-tilt
```
