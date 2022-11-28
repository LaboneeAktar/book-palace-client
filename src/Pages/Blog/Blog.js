import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="dark:bg-gray-800  dark:text-gray-100">
        <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-slate-200 dark:bg-gray-900 my-10">
          <div className="flex items-center justify-between">
            <span className="text-sm dark:text-gray-400">
              November 09, 2022
            </span>
            <button className="px-2 py-1 font-bold rounded dark:bg-violet-400 bg-cyan-300 dark:text-gray-900">
              SQL vs NoSQL
            </button>
          </div>
          <div className="mt-3">
            <h2 className="text-2xl font-bold">
              Write Down the Differences Between SQL and NoSQL.{" "}
            </h2>
            <div className="mt-2 lg:flex lg:justify-between">
              <div>
                <h2>SQL:</h2>
                <p className="pl-10 pt-4">
                  1. Relational Database Management System (RDBMS).
                </p>
                <p className="pl-10">
                  2. These databases have fixed or static or predefined schema.
                </p>
                <p className="pl-10">
                  {" "}
                  3. These databases are not suited for hierarchical data
                  storage.
                </p>
                <p className="pl-10">
                  {" "}
                  4. These databases are best suited for complex queries.
                </p>
                <p className="pl-10"> 5. Vertically Scalable.</p>
              </div>
              <div>
                <h2>NSQL:</h2>
                <p className="pl-10 pt-4">
                  1. Non-relational or distributed database system.
                </p>
                <p className="pl-10">2. They have dynamic schema.</p>
                <p className="pl-10">
                  {" "}
                  3. These databases are best suited for hierarchical data
                  storage.
                </p>
                <p className="pl-10">
                  {" "}
                  4. These databases are not so good for complex queries.
                </p>
                <p className="pl-10"> 5. Horizontally scalable.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-slate-200 dark:bg-gray-900 my-10">
          <div className="flex items-center justify-between">
            <span className="text-sm dark:text-gray-400">
              November 09, 2022
            </span>
            <button className="px-2 py-1 font-bold rounded dark:bg-violet-400 bg-cyan-300 dark:text-gray-900">
              JWT
            </button>
          </div>
          <div className="mt-3">
            <h2 className="text-2xl font-bold">
              What is JWT? How does it work?
            </h2>
            <h3 className="mt-2">
              JWT or JSON Web Token, is an open standard used to share security
              information between two parties — a client and a server. Each JWT
              contains encoded JSON objects, including a set of claims. JWTs are
              signed using a cryptographic algorithm to ensure that the claims
              cannot be altered after the token is issued.
              <br /> <br />
              Basically the identity provider(IdP) generates a JWT certifying
              user identity and Resource server decodes and verifies the
              authenticity of the token using secret salt / public key.
              <p className="pl-10 pt-4">
                1. User sign-in using username and password or google/facebook.
              </p>
              <p className="pl-10">
                2. Authentication server verifies the credentials and issues a
                jwt signed using either a secret salt or a private key.
              </p>
              <p className="pl-10">
                {" "}
                3. User's Client uses the JWT to access protected resources by
                passing the JWT in HTTP Authorization header.
              </p>
              <p className="pl-10">
                {" "}
                4. Resource server then verifies the authenticity of the token
                using the secret salt/ public key.
              </p>
            </h3>
          </div>
        </div>
        <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-slate-200 dark:bg-gray-900 my-10">
          <div className="flex items-center justify-between">
            <span className="text-sm dark:text-gray-400">
              November 09, 2022
            </span>
            <button className="px-2 py-1 font-bold rounded dark:bg-violet-400 bg-cyan-300 dark:text-gray-900">
              JavaScript vs NodeJS
            </button>
          </div>
          <div className="mt-3">
            <h2 className="text-2xl font-bold">
              What is the Differences Between JavaScript & NodeJS?
            </h2>
            <div className="mt-2 lg:flex lg:justify-between">
              <div>
                <h2>JavaScript:</h2>
                <p className="pl-10 pt-4">
                  1. Javascript is a programming language that is used for
                  writing scripts on the website.
                </p>
                <p className="pl-10">
                  2. Javascript can only be run in the browsers.
                </p>
                <p className="pl-10">
                  {" "}
                  3. It is basically used on the client-side.
                </p>
                <p className="pl-10">
                  {" "}
                  4. Javascript is capable enough to add HTML and play with the
                  DOM.
                </p>
                <p className="pl-10">
                  {" "}
                  5. Javascript can run in any browser engine as like JS core in
                  safari and Spidermonkey in Firefox.
                </p>
              </div>
              <div>
                <h2>NodeJS:</h2>
                <p className="pl-10 pt-4">
                  1. NodeJS is a Javascript runtime environment.
                </p>
                <p className="pl-10">
                  2. We can run Javascript outside the browser with the help of
                  NodeJS.
                </p>
                <p className="pl-10">
                  {" "}
                  3. It is mostly used on the server-side.
                </p>
                <p className="pl-10">
                  {" "}
                  4. Nodejs does not have capability to add HTML tags.
                </p>
                <p className="pl-10">
                  {" "}
                  5. V8 is the Javascript engine inside of node.js that parses
                  and runs Javascript.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-slate-200 dark:bg-gray-900 my-10">
          <div className="flex items-center justify-between">
            <span className="text-sm dark:text-gray-400">
              November 09, 2022
            </span>
            <button className="px-2 py-1 font-bold rounded dark:bg-violet-400 bg-cyan-300 dark:text-gray-900">
              NodeJS
            </button>
          </div>
          <div className="mt-3">
            <h2 className="text-2xl font-bold">
              How does NodeJS handle multiple request at the same time?
            </h2>
            <h3 className="mt-2">
              NodeJS receives multiple client requests and places them into
              EventQueue. NodeJS is built with the concept of event-driven
              architecture. NodeJS has its own EventLoop which is an infinite
              loop that receives requests and processes them. EventLoop is the
              listener for the EventQueue. If NodeJS can process the request
              without I/O blocking then the event loop would itself process the
              request and sends the response back to the client by itself. But,
              it is possible to process multiple requests parallelly using the
              NodeJS cluster module or worker_threads module.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
