# Train Sim

Simulate purchasing train tickets.

## Structure

This project contains four services, each with an associated Dockerfile.

### trainsim-db

This is PostgreSQL database. The database contents are stored in the `data/` directory. Every script in the `scripts/` directory will be run on startup if the database doesn't exist yet. During development, the easiest way to make a change to delete `data/` and modify `scripts/000-init.sql`.

### trainsim-otp

This is an [OpenTripPlanner](https://www.opentripplanner.org/) server with SEPTA data.

### trainsim-api

This is a Java web server. It uses trainsim-db and trainsim-otp to answer requests from the frontend. It is where most of the use cases will be implemented.

### trainsim-client

This is a JavaScript frontend. This runs in the browser and is how the user interacts with your application. When built, a bundle of `.js` and `.html` (among others) are put in the `dist/` directory. Then when run, an [nginx](https://www.nginx.com/) web server is used to serve this `dist/` directory to the browser. The `nginx.conf` also specifies how to forward requests to trainsim-api. This allows trainsim-client to talk to trainsim-api.

## Development

The following tools are required to build and run this project: Docker, Docker Compose, Maven, Java 11.

### Building

First build the client.

```
cd trainsim-client
npm install
npm run build # or npm run watch (which will watch for updates and automatically rebuild)
```

Now in a new shell, start the application with `docker-compose up`. Visit `localhost:8000` in your browser. If you make any changes to the frontend, simply save the file and run `npm run build`. If you make any changes to the (Java) backend, simply restart the service with `docker-compose restart trainsim-api`.

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