# Sveste

Sveste is a no-code GUI for writing great unit tests.

Today, Sveste (Svelte + test) translates form inputs into executable tests. It uses the Testing Library to focus on best practices like testing what’s actually on screen. It uses Vitest so you can take advantage of Vite’s fast build times and run unit tests as you code. It structures your code so that each unit test is (human) readable and independent (no nested mock statements here). Sveste ensures that your test code is concise, functional, and best practice.

But this is just a first step to a bigger goal (literally, it’s v0.2!).

We want Sveste to help you write tests in plain english.

Imagine if writing tests were as easy as Mad Libs? Imagine if you got context-aware tips as you wrote your tests: guiding you towards helpful resources, and steering you away from common testing mistakes? Imagine if you could share unit tests with others, and build off of each-other’s work to write application agnostic tests?

Help us make this vision a reality!

Sveste is open source, and looking for contributors. Check out our app and repo to get started!

## How to get up and running

1. Install AWS CLI - https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html
2. Create AWS account, install AWS SAM CLI + Docker - Installing the AWS SAM CLI - AWS Serverless Application Model
3. Set AWS Congifure w/ new IAM Access ID + key - https://docs.aws.amazon.com/cli/latest/userguide/getting-started-quickstart.html
4. Run 'npm install' in terminal
5. Start up docker in background
6. Run 'npm run build:dev' to create build and running container in docker
7. App should be live
8. Upon termination of server, use run 'npm run dev' to start up existing build.

## Troubleshooting

### If your changes aren't reflected in your dev server

Any changes to the frontend are reflected automatically thanks to Vite HMR. Changes to the backend require a restart of your dev server (`^C` and `npm run dev` in your terminal).

### If server fails to termiante upon closing

1. Run 'ps -fA | grep sam' to view running instances.
2. Find 5-digit number and run 'kill {#####}' to terminate instance

## FAQ

### Why Svelte?

We love the ethos of writing less code, and thought building for this community would be a great place to start.

But ultimately, great unit testing is framework agnostic. We hope to support other platforms after we get to 1.0!

### Why Vite/Vitest?

As apps scale in complexity, so do your dev build times. Vite combats these issues by off-loading bundling of your dev-environment to your browser and compile-to-native frameworks (like Svelte)! Learn more here.

Vitest is a Vite-native testing framework that takes advantage of Vite’s speed. It’s also part of the recommended testing suite for Svelte developers.

### How do I use Sveste?

- visit www.sveste.dev.
- Click on the “Try It” button.
- When Sveste opens, you’re greeted by an add (‘+’) button that prompts you to create your first describe statement.
  Try to recreate one of your unit tests to get a feel for the navigation and test blocks.
  Checkout the readme for more details.

### What’s your stack?
Frontend: Svelte
Backend: AWS Serverless (API Gateway, Lambda, DynamoDB)
Build: AWS SAM, Vite
Testing: Svelte Testing Library, Vitest
Languages: Svelte, TypeScript (mostly)

### How can I contribute?
Sveste is an open source product, and thus open for contribution! Just visit our GitHub, fork it, and create or tackle any open issues!

### How else can I help?

Sveste and similar open source products from OSLabs are made possible thanks to the support of the open source community. If you’d like to show your support, please consider:
Sharing this article.
Following us on LinkedIn.
Starring our GitHub repository.
Supporting other projects on OSLabs and OSLabs-Beta.

## Dev Setup Guide

Install the AWS CLI,  AWS SAM CLI, and setup your AWS credentials.

Run `npm install`.
Install and start Docker.
Open your terminal and run `npm build:dev`. This will download a docker image for DynamoDB, setup required tables, and start your dev server.
Use `npm run dev` for any future restarts.

Common issues:

Any changes to the frontend are reflected automatically thanks to Vite HMR. Changes to the backend require a restart of your dev server.
If you run into an [Errno 48] error after running `npm run dev` then:
run `ps -fA | grep sam`
kill the appropriate processes using `kill <process number>`

## Contributors

<a href="https://github.com/oslabs-beta/sveste/graphs/contributors">
<img src="https://contrib.rocks/image?repo=oslabs-beta/sveste" />
</a>
