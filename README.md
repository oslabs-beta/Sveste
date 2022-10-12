# Sveste

Sveste helps you write good unit tests for Svelte applications.

<!-- problem -->
<!-- solution -->
<!-- benefits -->
<!-- features -->

Sveste is built on Svelte, Vite, Express, and MongoDB. Our testing suite uses [Vitest](https://vitest.dev/), the [Svelte Testing Library](https://testing-library.com/docs/svelte-testing-library/intro/), and [Mock Service Worker](https://mswjs.io/).

## What is a good unit test?

Sveste was built with Kent Dodd’s advice in mind. Especially the [Testing Trophy](https://kentcdodds.com/blog/the-testing-trophy-and-testing-classifications) and (not) [testing implementation details](https://kentcdodds.com/blog/testing-implementation-details). Sveste nudges you to follow these basic rules:

1. Test what a user can see and do.
2. Test one unit at a time.
3. Test each unit in isolation.

## What Makes a Test?

<!-- define parts of a test eg. Assertions, mocking, queries, etc. -->
  <!-- Mock Data (eg. input = 'string') -->
  <!-- Events (eg. user.types(words)) -->
  <!-- Assertions (eg. it('description, () => expect(a thing).tobe(a thing))) -->
  <!-- Description (eg. it('renders...' () => {...})) -->
  <!-- Expectation (eg. expect(a thing))-->
<!-- Primitives-->
  <!-- JS variables -->
  <!-- User component/method -->
  <!-- Queries (eg. variable.getByText('string'))-->
  <!-- Test subject (special variable- defines what your UNIT is) -->

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

### If server fails to termiante upon closing.

1. Run 'ps -fA | grep sam' to view running instances.
2. Find 5-digit number and run 'kill {#####}' to terminate instance
