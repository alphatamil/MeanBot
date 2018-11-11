# HpSuppliesBot

> Author: Surendhar

> ![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)

### Tech

Uses a number of open source projects to work properly:

- [node.js] - evented I/O for the backend
- [Express] - fast node.js network app framework

### Local Development

requires [Node.js](https://nodejs.org/) v4+ to run.

Install the dependencies and devDependencies and start the server.

```sh
$ cd hp-supplies-bot
$ yarn
$ yarn start
```

### Docker

By default, the Docker will expose port 8081, so change this within the Dockerfile if necessary. When ready, simply use the Dockerfile to build the image.

```sh
cd hp-supplies-bot
docker build -t hp-supplies-bot .
```

This will create the image and pull in the necessary dependencies.

Once done, run the Docker image and map the port to whatever you wish on your host. In this example, we simply map port 8081 of the host to port 8081 of the Docker (or whatever port was exposed in the Dockerfile):

```sh
docker run -p 8081:8081 hp-supplies-bot
```

Verify the deployment by navigating to your server address in your preferred browser.

```sh
localhost:8081
```

### Todos

- Integrate goggle vision
- Configure weebhook

## License

ISC
