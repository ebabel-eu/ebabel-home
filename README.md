# eBabel home 

Web application tool to communicate what I'm working on, get in touch, schedule meetings with me and possibly hire me.

## Design

The style is in line with [React + Foundation](https://github.com/nordsoftware/react-foundation).

## Front-end

### Installation

If you have a new machine and have never used some of these tools, see further instructions below under "Full installation for new machines".

```
npm install
npm install webpack -g
npm install http-server -g
```

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

- build app (make a list of issues in Github)
- setup Jenkins
- look into ["tree shaking"](https://medium.com/modus-create-front-end-development/webpack-2-tree-shaking-configuration-9f1de90f3233#.ceyvzb1bl) to make the webpack bundle smaller
