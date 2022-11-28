import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="dark:bg-gray-800  dark:text-gray-100">
        <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-slate-200 dark:bg-gray-900 my-10">
          <div className="flex items-center justify-between">
            <span className="text-sm dark:text-gray-400">
              November 27, 2022
            </span>
            <button className="px-2 py-2 rounded dark:bg-violet-400 bg-purple-700 text-white dark:text-gray-900">
              Different State
            </button>
          </div>
          <div className="mt-3">
            <h2 className="text-2xl font-bold">
              What are the different ways to manage a state in a React
              application?
            </h2>
            <div className="mt-2 text-justify">
              <h3>
                There are four main types of state need to properly manage in
                React apps: <br /> <span className="ml-8">1. Local state </span>{" "}
                <br />
                <span className="ml-8"> 2. Global state </span> <br />
                <span className="ml-8"> 3. Server state </span>
                <br /> <span className="ml-8">4. URL state </span>
                <br /> <br />
                <strong>Local (UI) state:</strong> Local state is data we manage
                in one or another component. Local state is most often managed
                in React using the useState hook. For example, local state would
                be needed to show or hide a modal component or to track values
                for a form component, such as form submission, when the form is
                disabled and the values of a form's inputs. <br /> <br />
                <strong>Global (UI) state:</strong> Global state is data we
                manage across multiple components. Global state is necessary
                when we want to get and update data anywhere in our app, or in
                multiple components at least. A common example of global state
                is authenticated user state. If a user is logged into our app,
                it is necessary to get and change their data throughout our
                application. Sometimes state we think should be local might
                become global. <br /> <br />
                <strong>Server state:</strong> Data that comes from an external
                server that must be integrated with our UI state. Server state
                is a simple concept, but can be hard to manage alongside all of
                our local and global UI state. There are several pieces of state
                that must be managed every time you fetch or update data from an
                external server, including loading and error state. Fortunately
                there are tools such as SWR and React Query that make managing
                server state much easier. <br /> <br />
                <strong>URL state:</strong> Data that exists on our URLs,
                including the pathname and query parameters. URL state is often
                missing as a category of state, but it is an important one. In
                many cases, a lot of major parts of our application rely upon
                accessing URL state. Try to imagine building a blog without
                being able to fetch a post based off of its slug or id that is
                located in the URL! There are undoubtedly more pieces of state
                that we could identify, but these are the major categories worth
                focusing on for most applications you build.
              </h3>
            </div>
          </div>
        </div>
        <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-slate-200 dark:bg-gray-900 my-10">
          <div className="flex items-center justify-between">
            <span className="text-sm dark:text-gray-400">
              November 27, 2022
            </span>
            <button className="px-2 py-2 rounded dark:bg-violet-400 bg-purple-700 text-white dark:text-gray-900">
              Prototypical Inheritance
            </button>
          </div>
          <div className="mt-3">
            <h2 className="text-2xl font-bold">
              How does prototypical inheritance work?
            </h2>
            <h3 className="mt-2">
              When we read a property from object , and it's missing, JavaScript
              automatically takes it from the prototype. In programming, this is
              called “prototypal inheritance”.
              <p className="pt-4">
                <strong>Work:</strong> Prototypical inheritance allows us to
                reuse the properties or methods from one JavaScript object to
                another through a reference pointer function. All JavaScript
                objects inherit properties and methods from a prototype: Date
                objects inherit from Date. Every object with its methods and
                properties contains an internal and hidden property known as
                Prototype. The Prototypal Inheritance is a feature in javascript
                used to add methods and properties in objects. It is a method by
                which an object can inherit the properties and methods of
                another object. Traditionally, in order to get and set the
                Prototype of an object, we use Object.getPrototypeOf and
                Object.setPrototypeOf. Nowadays, in modern language, it is being
                set using __proto__.
              </p>
            </h3>
          </div>
        </div>
        <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-slate-200 dark:bg-gray-900 my-10">
          <div className="flex items-center justify-between">
            <span className="text-sm dark:text-gray-400">
              November 27, 2022
            </span>
            <button className="px-2 py-2 rounded dark:bg-violet-400 bg-purple-700 text-white dark:text-gray-900">
              Unit Test
            </button>
          </div>
          <div className="mt-3">
            <h2 className="text-2xl font-bold">
              What is a unit test? Why should we write unit tests?
            </h2>
            <h3 className="mt-2">
              Unit Test: Unit testing is a method of testing that tests the
              individual software unit in theprocess of isolation. Check the
              output of a function for any given input. It means verifying that
              the component renders for any specific accessory to react
              components. In other words, to writing a unit tests is also alike
              writing code that verifies the code works as expected.
              <br /> <br />
              We should write unit tests because after unit test we get this
              benefits -
              <p className="pl-10 pt-4">
                1. The earlier a problem is identified, the fewer compound
                errors occur.
              </p>
              <p className="pl-10">
                2. Costs of fixing a problem early can quickly outweigh the cost
                of fixing it later.
              </p>
              <p className="pl-10"> 3. Debugging processes are made easier.</p>
              <p className="pl-10">
                {" "}
                4. We can quickly make changes to the code base.
              </p>
              <p className="pl-10">
                {" "}
                5. We can also re-use code, migrating it to new projects.
              </p>
            </h3>
          </div>
        </div>
        <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-slate-200 dark:bg-gray-900 my-10">
          <div className="flex items-center justify-between">
            <span className="text-sm dark:text-gray-400">
              November 27, 2022
            </span>
            <button className="px-2 py-2 rounded dark:bg-violet-400 bg-purple-700 text-white dark:text-gray-900">
              React vs. Angular vs. Vue
            </button>
          </div>
          <div className="my-5">
            <h2 className="text-2xl font-bold">React vs. Angular vs. Vue</h2>
            <div className="mt-3">
              <table className="w-full">
                <thead className=" bg-purple-300 text-black">
                  <tr className="text-center text-lg">
                    <th className="p-3 font-normal"></th>
                    <th className="p-3 font-normal">React</th>
                    <th className="p-3 font-normal">Angular</th>
                    <th className="p-3 font-normal">Vue</th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  <tr className="border-b border-opacity-20 border-black bg-gray-200 shadow-lg text-black">
                    <th>Initial Release</th>
                    <td className="p-3">March 2013</td>
                    <td className="p-3">May 2016</td>
                    <td className="p-3">February 2014</td>
                  </tr>
                  <tr className="border-b border-opacity-20 border-black bg-gray-200 shadow-lg text-black">
                    <th>Written In</th>
                    <td className="p-3">JavaScript</td>
                    <td className="p-3">TypeScript</td>
                    <td className="p-3">JavaScript</td>
                  </tr>

                  <tr className="border-b border-opacity-20 border-black bg-gray-200 shadow-lg text-black">
                    <th>Entry Threshold</th>
                    <td className="p-3">Average</td>
                    <td className="p-3">High</td>
                    <td className="p-3">Low</td>
                  </tr>
                  <tr className="border-b border-opacity-20 border-black bg-gray-200 shadow-lg text-black">
                    <th>Project Size</th>
                    <td className="p-3">Complex</td>
                    <td className="p-3">Very Complex</td>
                    <td className="p-3">Smaller</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
