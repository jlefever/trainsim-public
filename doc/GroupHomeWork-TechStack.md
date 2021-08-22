Our first project has a client-server architecture. Our client will be written in [TypeScript](https://www.typescriptlang.org/) and [React](https://reactjs.org/). TypeScript is a language which gives JS a type system comparable to Java or C#. React is a library which helps us create a responsive view layer. Both are industry standards today. If you are new to these tools, don&#39;t worry. We will do our best to give you a healthy start.

The server is written in Java 11 and uses a [PostgreSQL](https://www.postgresql.org/) database for persistence. We use a collection of lightweight Java libraries to help us write the server. Each of these is a library (not a framework!) that does exactly one thing.

- [Javalin](https://javalin.io/) - provides a fluent interface around Java servlets so we can easily create HTTP endpoints.
- [sql2o](https://www.sql2o.org/) - provides a fluent interface around JDBC so we can easily execute queries against our database.
- [Google Guice](https://github.com/google/guice/wiki/Motivation) - provides automatic dependency injection.

The benefit of using a few lightweight libraries over a framework such as Spring is we maintain more control over our architecture. Frameworks such as Spring are usually quite opinionated. (However, Spring is a perfect choice for many circumstances, just not this one.)

Finally, we use Docker and Docker Compose to wire the client, server, and database together at runtime. Later when we work with microservices, we will use these same tools but split our server into smaller services and use Docker Compose to connect them all together.

All the tools mentioned here have ample documentation and getting started material available on their official webpages. We will also be providing an initial template with all the most tedious setup and integration done for you. However, I would still urge you to glance over some of the provided documentation and get a feel for what each tool does.

If your team is already very familiar with some other tooling and would like to make some substitutions, please speak with us first. Just keep in mind that we would no longer be able to give you any technical support if you use alternative tools.
