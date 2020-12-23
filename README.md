# Rechat

![logo](https://raw.githubusercontent.com/iamgutz/rechat/main/src/assets/svg/rechat-logo.svg)

Rechat is a Responsive Chat Webapp built with React, [Socket.io](https://socket.io/) and NodeJS

## Key Features
* Real-time messaging between multiple users.
* Messages are presented as Speech Bubbles, with animation and different colors. 
* Users can send links (URL's) that can be opened in a new window when clicking.
* Users can send an pictures as links that will be previewed in the Chat bubble.
* Chat Settings customization supported and preserved in Browser's localStorage for different users.



## How to Use
To clone and run this application, you'll need [Git](https://git-scm.com), [Node.js](https://nodejs.org/en/download/) and [Yarn](https://classic.yarnpkg.com/en/docs/install) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/iamgutz/rechat.git

# Go into the repository
$ cd rechat

# Install dependencies
$ yarn install
```

### To run the app in development mode:
```bash
# Run the NodeJS server at http://localhost:9001
$ yarn server

# Then run the Webapp at http://localhost:9000
$ yarn start
```
Now open your browser and navigate to http://localhost:9000

### To run the app in production simulation mode:
```bash
# Build the app and serve it with the NodeJS server at http://localhost:9001
$ yarn build:serve
```
Now open your browser and navigate to http://localhost:9001

## Project Features Required
### Chat page
- [x] It is expected you build a small Socket.io using NodeJS.
##### The chat page should contain:
- [x] Chat message box to list messages.
  - [x] The user’s messages should be on the right and the other user’s messages should be on the left.
  - [x] Each message should display the time it was sent.
- [x] Input field where I can type and send messages.
- [x] Users can send pictures via URL. When sent, this URL is rendered on the message box as an image.
- [x] Next to the input field it is expected a button to send the message.
### Settings Overlay
- [x] Clicking on the “Settings” button on the top right corner of the page, the app should open a settings overlay/modal.
##### This overlay should contain:
- [x] All the settings should be consumed and saved on the LocalStorage.
- [ ] Change username input field. **(Pending)**
- [x] Change clock display radio inputs.
- [x] Send messages with Ctrl/Cmd + ENTER toggle.
- [x] Have a text/link to reset all the settings back to its defaults.