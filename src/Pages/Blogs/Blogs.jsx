import React from 'react';
import useTitle from '../../Hooks/useTitle';

const Blogs = () => {
    useTitle('Blogs')
    return (
        <div className='my-5'>
            <h1 className='my-10 text-5xl text-amber-600 font-bold text-center'>My Answer's</h1>

            <div className='mt-8'>
                <h3 className='text-xl font-bold text-yellow-500'>Q1: What is an access token and refresh token? How do they work and where should we store them on the client-side?</h3>

                <p className='mt-3'><span className='font-bold'>Answer:</span> Modern secure applications often use access tokens to ensure a user has access to the appropriate resources, and these access tokens typically have a limited lifetime. This is done for various security reasons: for one, limiting the lifetime of the access token limits the amount of time an attacker can use a stolen token. In addition, the information contained in or referenced by the access token could become stale. <br />

                    When access tokens expire or become invalid but the application still needs to access a protected resource, the application faces the problem of getting a new access token without forcing the user to once again grant permission. To solve this problem, OAuth 2.0 introduced an artifact called a refresh token. A refresh token allows an application to obtain a new access token without prompting the user.</p>

            </div>
            <div className='mt-8'>
                <h3 className='text-xl font-bold text-yellow-500'>Q2: Compare SQL and NoSQL databases?</h3>

                <p className='mt-3'><span className='font-bold'>Answer:</span> SQL is a decades-old method for accessing relational databases, and most who work with databases are familiar with it. As unstructured data, amounts of storage and processing power and types of analytics have changed over the years, however, we’ve seen different database technologies become available that are a better fit for newer types of use cases. These databases are commonly called NoSQL. <br />

                    SQL and NoSQL differ in whether they are relational (SQL) or non-relational (NoSQL), whether their schemas are predefined or dynamic, how they scale, the type of data they include and whether they are more fit for multi-row transactions or unstructured data.</p>

            </div>
            <div className='mt-8'>
                <h3 className='text-xl font-bold text-yellow-500'>Q3: What is express js? What is Nest JS ?</h3>

                <p className='mt-3'><span className='font-bold'>Answer:</span> Express is a Node.js web application framework that provides a wide range of functionality for constructing web and mobile applications. It is a layer built on top of Node that aids in the management of servers and routes.

                    You can use Express with Node to create single-page, multi-page, or hybrid web applications. It supports the MVC architectural pattern for designing web applications: Model, View, and Controller. <br />

                    NestJS is a Node.js framework for building server-side applications. It is based on TypeScript and JavaScript.

                    This framework is inspired by Angular, so most of what you find in Angular can also be found in Nest, including providers, middleware, components, and services. It is safe to say that Nest can be easily learned by Angular developers for any type of project.

                    Nest makes use the Express HTTP framework by default. However, Nest is platform agnostic, meaning it can work with any Node HTTP framework. For example, it can optionally be configured to use Fastify, which can improve the Node framework.

                    One of the cool things about NestJS is that anything supported in Express (i.e., Express functions) is also supported in Nest.</p>

            </div>
            <div className='mt-8'>
                <h3 className='text-xl font-bold text-yellow-500'>Q3: What is MongoDB aggregate and how does it work ?</h3>

                <p className='mt-3'><span className='font-bold'>Answer:</span>
                    Aggregation operations process multiple documents and return computed results. You can use aggregation operations to:
                    <li>Group values from multiple documents together.</li>
                    <li>Perform operations on the grouped data to return a single result.</li>
                    <li>Analyze data changes over time.</li>

                    To perform aggregation operations, you can use:
                    <li>
                        Aggregation pipelines
                        , which are the preferred method for performing aggregations.</li>
                    <li>Single purpose aggregation methods
                        , which are simple but lack the capabilities of an aggregation pipeline.</li>
                </p>

            </div>
        </div>
    );
};

export default Blogs;










