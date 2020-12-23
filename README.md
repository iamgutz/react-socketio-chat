# ReChat
Responsive Chat Webapp built with React, Socket.io and NodeJS

## Key Features
* Real-time messaging between multiple users.
* Messages are presented as Speech Bubbles, with different colors. 
* User bubbles are aligned the right, other users bubbles are aligned to the left.
* Chat bubbles display the name of the user, the message and the time when the message was sent.
* User can send links (URL's) that can be opened in a new window when clicking.
* User can send an image link and it will be rendered in the Chat bubble.
* Settings customization supported and preserved in Browser's localStorage for different users.



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