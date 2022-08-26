### Conceptual Exercise

Answer the following questions below:

- What is a JWT?

JWTs are an open standard and are implemented across technology stacks, making it simple to share tokens across different services. JWTs can store any arbitrary “payload” of info, which are “signed” using a secret key, so they can be validated later (similar to Flask’s session).


- What is the signature portion of the JWT?  What does it do?


A signature is something that is stored in the JWT and signed with secret key.


- If a JWT is intercepted, can the attacker see what's inside the payload?


yes because JWTS are typically not encrpyed.


- How can you implement authentication with a JWT?  Describe how it works at a high level.


jwt.verify(token, SECRET_KEY);   // {username: "jane"}


- Compare and contrast unit, integration and end-to-end tests.

Integration testing begins at the very beginning of the development process. Bugs are caught sooner in the cycle rather than later. 

End-to-end testing, also known as E2E testing, is a methodology used for ensuring that applications behave as expected and that the flow of data is maintained for all kinds of user tasks and processes. 

- What is a mock? What are some things you would mock?

Mocking is primarily used in unit testing. An object under test may have dependencies on other (complex) objects
To isolate the behavior, you replace other objects by mocks that simulate their behavior
This is useful if the real objects are impractical to incorporate into the unit test.

- What is continuous integration?

Continuous Integration is the practice of merging in small code changes frequently, rather than merging in a large change at the end of a development cycle.

- What is an environment variable and what are they used for?

NodeJs Environment Variables
env object that can be accessed in any script file within the app. The environment variables allow you to store API keys and other configuration secrets independently from your main codebase and separate from your git repository so they never get checked in anywher

- What is TDD? What are some benefits and drawbacks?

Test Driven Development is a software development methodology whereby you write and run a set of tests before you write code.

Because you are writing small tests at a time, it forces your code to be more modular (otherwise they’d be hard to test against). TDD helps you learn, understand, and internalise the key principles of good modular design

Initially, it slows down development; for rapidly iterative startup environments the implementation code may not be ready for some time due to spending time writing tests first. (But in the long run, it actually speeds up development)

- What is the value of using JSONSchema for validation?

There are three main reasons for using a schema validation system:

So user data can fail fast, before bad data gets to your db.
To reduce amount of code for processing and validating data.
To get a validation system that is easy to setup and maintain.

- What are some ways to decide which code to test?

Used JSONschema on anything that gets stored into the database

- What does `RETURNING` do in SQL? When would you use it?

`RETURNING` returns what was inputted into the database. It acts like a confirmation.

- What are some differences between Web Sockets and HTTP?

in HTTP, you have to constantly request updates, with websockets, updates are sent immediately when they are available

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?

  I prefer flask because to me, it is more straightforward. Express is more flexible but it requires more coding to do the same thing in flask.
