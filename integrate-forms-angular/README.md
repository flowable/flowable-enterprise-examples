# How-To: Integrate Flowable Forms into an Angular App

This sample repository is based on the [How-To: Integrate Flowable Forms into an Angular App](https://documentation.flowable.com/latest/howto/howto-integrate-forms-angular/).
For further explanation please refer to the How-To.

## Requirements

* Access to the Flowable Enterprise Artifactory
* Flowable Work
* NPM

## Setup

To run the project, you need to start Flowable Work on port 8080 (or change the [proxy.conf.json](./src/proxy.conf.json)) and run the following commands:

```bash
npm install --force
npm run start
```

Note: `npm install --force` helps resolve the apparent conflict between rxjs 7 and redux-observable 1, coming transitively from the Flowable Forms dependency.
