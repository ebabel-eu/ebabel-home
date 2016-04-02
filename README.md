# eBabel home 

Web application tool to communicate what I'm working on, get in touch, schedule meetings with me and possibly hire me.

## Front-end

### Installation

If you have a new machine and have never used some of these tools, see further instructions below under "Full installation for new machines".

```
npm install
npm install -g webpack
npm install -g http-server
npm install -g eslint
npm install -g jshint
```

To test against npm unpublished packages, install snyk and run the following command.

```
npm install snyk -g
snyk test-unpublished
```

### Linting

In visual studio code, install eslint, jshint and wallaby:

F1 on Windows, ext install, then:

- ext install eslint
- ext install jshint
- ext install wallaby

Visual Studio code will need to restart.

### Build continuously during development

```
webpack -w
```

### Run unit tests continuously during development

```
npm run watch
```

### Run locally

```
http-server build/
```

Browse to http://localhost:8080

### Build once before deployment

```
webpack
```

### Run unit tests once before deployment

```
npm test
```

## Deployment to Production

The production server is a Digital Ocean droplet.

Any code pushed to master will be published via continuous integration with Jenkins.

```
git push origin master
```

## Todo:

- nav needs to change to work like project, i.e. localStorage first and the json api call.

- make a list of issues in Github instead of this README todo list
- setup Jenkins
- look into ["tree shaking"](https://medium.com/modus-create-front-end-development/webpack-2-tree-shaking-configuration-9f1de90f3233#.ceyvzb1bl) to make the webpack bundle smaller
- webpack is adding a Hash at every build (see console). Can I use this for cache busting purposes?
- I'm using the Promise object to async build the projects. This requires a polyfill for IE <= 11 and Android < 4.4.4. See https://github.com/stefanpenner/es6-promise
- On the layout of my current projects, do something about large gaps that may appear depending on width of the screen of various heights of each project. Maybe a case for Flex?
- Add editing functionality and use a real web API to get data instead of the current JSON stubs (my current projects for example).
- Get in touch form: add validation (see http://1000hz.github.io/bootstrap-validator/). Refactor this to be a parent/child tree of elements separated by the dot notation (form.yourName, form.email, form.telephone, form.optIn, form.button)
- Store the data send by the Get in touch form to a real web API.
- Place a live chat in the third column (Firebase?) or maybe a way for people to leave notes, or maybe a photo or video of me in the middle column?
