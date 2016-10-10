[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Node HTTP Module: Client

Node has a built-in HTTP module for making and responding to requests. In this
training, we'll use the HTTP module to issue requests to a server.

## Prerequisites

-   [ga-wdi-boston/node-api-promises](https://github.com/ga-wdi-boston/node-api-promises)

## Objectives

By the end of this, developers should be able to:

-   Make request from a Node client, similar to `curl`.

## Preparation

1.  [Fork and clone](https://github.com/ga-wdi-boston/meta/wiki/ForkAndClone)
    this repository.
1.  Install dependencies with `npm install`.

## Lab: Read Node Client Documentation

Read the following documentation from the Node HTTP module. While reading, take
note of any new concepts or vocabulary that is confusing. Pay attention to
function signatures. When you're finished taking notes, research one or two
points you'd like made clearer. We will discuss our findings.

-   [Class: `http.ClientRequest`](https://nodejs.org/dist/latest-v4.x/docs/api/http.html#http_class_http_clientrequest)
-   [`http.request(options[, callback])`](https://nodejs.org/dist/latest-v4.x/docs/api/http.html#http_http_request_options_callback)

## Demo: Make a Request

Start an echo server with `node lib/http-server.js`.

Make a request by running `node lib/http-client-request.js`.

## Annotate Along: A Simple request

Let's examine and run the request script, `lib/http-client-request.js`.

## Lab: Compare HTTP Client with `curl` and AJAX

Examine the code in [lib/http-client-request.js](lib/http-client-request.js).
How is it similar to `curl` and AJAX? How does it differ?  Make a list.

Annotate the code in [lib/http-client-request-promises.js](lib/http-client-request-promises.js).

## Annotate Along: Sign up then in

Let's examine and run `lib/sign-up-and-in.js`.

We'll use [library-api](https://github.com/ga-wdi-boston/library-api) to handle
 requests.

## Lab: Compare with using promises

List the similarities and differences between `lib/sign-up-and-in.js` and
 `lib/sign-up-and-in-promises.js`

Which has clearer flow control?

## Additional Resources

-   [Basic HTTP Request with Node.js](https://davidwalsh.name/nodejs-http-request)
-   [Making HTTP Requests in Node.js](http://www.sitepoint.com/making-http-requests-in-node-js/)

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
