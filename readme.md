# Todo Application Backend

This is the backend for a Todo Application built using Node.js, Express, and MongoDB. It provides a RESTful API for managing todo items, including creating, reading, updating, and deleting tasks. The backend ensures efficient handling of data and smooth integration with the frontend, allowing users to manage their tasks effectively.

---

## Requirements

For development, you will only need Node.js and a node global package, Yarn, installed in your environement.

### Node

- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
  Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v18.19.0

    $ npm --version
    10.2.3

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

###

### Yarn installation

After installing node, this project will need yarn too, so just run the following command.

      $ npm install -g yarn

---

## Install

    $ git clone https://github.com/AtharvKhamkar/ToDo_Task_Backend.git
    $ cd ToDo_Task_Backend
    $ npm install

## Configure app

### Required environment variable

- MONGODB_URI
- PORT
- CORS_ORIGIN

for sample you can use environment variables declared in sampleEnv.txt file. You just need to create new .env file and paste environment variables from sampleEnv.txt file.

## Running the project

    $ npm run dev

## Project live url

- Project - https://to-do-task-frontend.vercel.app/
