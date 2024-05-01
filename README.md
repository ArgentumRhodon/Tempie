The purpose of this Application is to be a simple chat app with users and public-facing chat rooms

I'm using react for my front-end logic

I have Components ChatAdder, ChatArea, ChatList, LogoutButton, and MessageItem

I'm storing Users, Chats, and Messages in MongoDB

The styling and the choice of react-electron-boilerplate turned out really nice

Unfortunately, I chose a lot of stuff that needed extra time to learn/implement/debug, which means room for a lot of last-minute issues. Namely, I ended up not having a lot of time for the finer requirements of the project while trying to get everything else for the base reqs working. Event then, Cross-Site security ended up ruining any chance of deployment I had for this project. On a local server and dev env, everything works, although buggy. With a deployed server, sessions aren't saving because COOKIES! So I don't have ads/premium plan or changing passwords. Also, while moving some things to components, minor features of the app broke that I don't have time to fix. Should have done that sooner. This project has been a major learning experience.

I learned a lot about how web-tech-based desktop applications like Discord are developed and how much of a pain Electron is, although in a fun and challenging way for the most part. I also relearned a fair bit about react.

If I were to continue, I'd expand the app to my original plan of private user-to-user chats. I ran out of time to do as much as I'd have liked.

To go above and beyond, I worked in Electron, used the React-Electron-Boilerplate for an improved dev environment, Typescript, tailwind, DaisyUI, and used Socket.io. Although this area only goes to +10, I would highly appreciate consideration of more. I also acknowledge that determining what technologies to work with and overheads to deal with in order to effectively meet deadlines and requirements is an important skill, one which I lacked this time around. So I understand completely if an exception cannot be made.

I "borrowed"/started with the React Electron boilerplate project for this app: https://electron-react-boilerplate.js.org/, which makes up the founding framework of my Electron envrionment.
