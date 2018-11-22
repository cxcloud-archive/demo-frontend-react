# CX Cloud React Demo

React demo is part of CX Cloud, an open source accelerator for cloud native solutions. You can read more about CX Cloud [here](https://docs.cxcloud.com/).

Demo Frontend is implemented using React framework [Next.js](https://github.com/zeit/next.js/) and demonstrates CX Cloud capabilities. Currently, the React frontend demonstrates capabilities of Commerce tools API as part of CX Cloud services. In upcoming plans, adding demonstration for various other APIs which are also part of CX Cloud services such as Contentful for managing content, Algolia for search and AWS Cognito for authentication.

## Generate demo with CX Cloud CLI

CX Cloud CLI Tools allows you to generate a frontend demo to test the concept with end-to-end functionality. CLI also allows you to set up a Kubernetes cluster and deploy your frontend there. Read more how to generate and deploy frontend demo using CX Cloud CLI [here](https://docs.cxcloud.com/setting-up-a-cxcloud-project/generating-a-frontend).

## Run project locally

For quick testing, you can also install and run the demo locally. In order to explore/modify demo frontend locally, it is required to clone repository, install required `npm` packages and run the project:

```sh
$ git clone git@github.com:cxcloud/demo-frontend-react.git
$ cd demo-frontend-react
$ npm install
$ npm run dev
```
The demo currenty is available [here](https://cx-cloud-nextjs-woibykrhav.now.sh).

> **Note:** **TBA**

## Copy repository

1. Create clone of this repository and navigate to it:
```sh
$ git clone git@github.com:cxcloud/demo-frontend-react.git
$ cd demo-frontend-react
```

2. Remove git tracking and create a new repository:
```sh
$ rm -rf .git
$ git init
```

3. Add and verify a new remote:
```sh
$ git remote add origin https://github.com/*user*/*repo*.git
$ git remote -v
```

4. Push to new remote:
```sh
$ git commit -am "Initial commit"
$ git push --set-upstream origin master [--force]
```
