# eBabel home 

Web application tool to communicate what I'm working on, get in touch, schedule meetings with me and possibly hire me.

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

### Run locally

```
http-server build/
```

Browse to http://localhost:8080

### Build once before deployment

```
webpack
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
