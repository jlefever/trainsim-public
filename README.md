# Train Sim

A work-in-progress application to simulate purchasing train tickets. This project is used for an assignment of SE 577 at Drexel University.

Please do not hesistate to contact the TAs (especially Jason Lefever or Hongzhou Fang) with any questions.

## Getting Started

The following tools are required to build and run this project: Docker, Docker Compose, Maven, Java 8, and npm.

From the root of the project run:

```
mvn clean install
docker-compose up
```

You should then be able to visit https://localhost:8000/ in your browser. Ignore the certificate error and you will be greated with the homepage. (The certificate error happens because it is self-signed. It is not a concern because we are running locally.)

## Structure

This project contains four services, each with an associated Dockerfile. If you are new to Docker, check out this great [introduction](https://docs.docker.com/get-started/overview/).

### trainsim-db

This is a PostgreSQL database. The database contents are stored in the `data/` directory. Every script in the `scripts/` directory will be run on startup if the database doesn't exist yet. During development, the easiest way to make a change to delete `data/` and modify `scripts/000-init.sql`.

### trainsim-planner

This is an [OpenTripPlanner](https://www.opentripplanner.org/) server with SEPTA data. The `trainsim-planner/Dockerfile` does everything. You should not have to make any changes to this.

### trainsim-api

This is a Java web server. It uses trainsim-db and trainsim-planner to answer requests from the frontend. It is where most of the use cases will be implemented. We use a few small libraries to implement the server. Check `trainsim-api/pom.xml` for details.

### trainsim-client

This is the user interface of our application. It is written in [TypeScript](https://www.typescriptlang.org/) and uses [React](https://reactjs.org/) to render our views. We use [npm](https://www.npmjs.com/) to manage our dependencies and [webpack](https://webpack.js.org/) to build our project. Building the project (with `npm run build`) will result in a bundle of `.js` and `.html` being output to the `dist/` directory. We use [nginx](https://www.nginx.com/) to serve this `dist/` directory to the browser. The `nginx.conf` also configures nginx to forward any urls which start with `/api/` to trainsim-api. This allows the client to make requests to the api without using a different port.

If you are brand new to frontend development, here are some great resources for getting started:
- [A re-introduction to JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript) - A great refresher or introduction to JavaScript
- [TypeScript for JavaScript Programmers](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html) - TypeScript gives JavaScript a type system that should feel much more like Java
- [React Hello World](https://reactjs.org/docs/hello-world.html) - Highly recommend reading through as much as this as you can if you are new to React

There are also great resources out there on npm, webpack, and nginx but you should not have to modify the configurations of these tools. (But it never hurts to get more familiar with the tools you are using.) We understand much of this may be brand new for many students in this class. Please do not hesistate to contact the TAs if you are having troubles with any of the above.

## Development

You can start the project at any time with `docker-compose up`.

To apply changes you have made to the backend, you could stop all services (with Ctrl + C) and start docker-compose again, but it may be easier to open a new shell and restart just the `trainsim-api` service by running `docker-compose restart trainsim-api`.

If you make any changes to the frontend, simply run `npm run build` to apply your changes. As an alternative to `npm run build`, you can use `npm run watch` (in a different shell from `docker-compose up`.) This will cause webpack to rebuild the frontend every time a file is saved. This can make for a more fluid development experience.

### Debugging

These directions are for Visual Studio Code but other IDEs should be similar.

#### Debugging trainsim-api

Because the application code is running in a docker container, it is slightly more invovled to debug the application. Modify the `MAVEN_OTPS` environment variable inside the `docker-compose.yml` file. You should see:

```
-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=*:1044
```

Change the `suspend=n` to `suspend=y`. This tells the Java runtime to pause until a remote debugger is attached. At runtime, it will wait for a connection on port `1044`. In VS Code add the following to your [launch.json](https://code.visualstudio.com/docs/editor/debugging):

```
{
    "type": "java",
    "name": "Attach to 'trainsim-api'",
    "request": "attach",
    "hostName": "localhost",
    "port": "1044",
    "sourcePaths": [
        "trainsim-api/"
    ]
}
```

Now set any breakpoints you would like and start the application with `docker-compose up` and attach the debugger by going to the "Run and Debug" tab of VS Code and running the "Attach to 'trainsim-api'" task.

#### Debugging trainsim-client

In VS Code add the following to your [launch.json](https://code.visualstudio.com/docs/editor/debugging):

```
{
    "name": "Launch `trainsim-client` in Chrome",
    "request": "launch",
    "type": "pwa-chrome",
    "url": "http://localhost:8000",
    "webRoot": "${workspaceFolder}/trainsim-client/"
}
```

Now set any breakpoints you would like and start the application with `docker-compose up`. Launch chrome by going to the "Run and Debug" tab of VS Code and running the "Launch 'trainsim-client' in Chrome" task. You may have to press `Ctrl + Shift + F5` to restart if your breakpoints are not being hit.

### Inspect Database

If you would like to use pgAdmin to inspect the database manually, you can run:

```
docker run --network="trainsim_default" -p 8080:80 -e "PGADMIN_DEFAULT_EMAIL=me@example.org" -e "PGADMIN_DEFAULT_PASSWORD=password" dpage/pgadmin4
```

Then navigate to http://localhost:8080/ and login with user "me@example.org" and password "password". Then right click "Servers" and select "Create > Server...". Enter "trainsim-db" as the name and then in the "Connection" tab, enter "trainsim-db", "5432", "user", and "password" as the Host, Port, Username and Password respectively. (I have had issues with this in the past. Contact the TAs if you cannot get it working.)