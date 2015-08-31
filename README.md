# eBabel home 

[![wercker status](https://app.wercker.com/status/1d2bb48a0faefdfef38c6a82f93dcbdb/s/master "wercker status")](https://app.wercker.com/project/bykey/1d2bb48a0faefdfef38c6a82f93dcbdb)

HTML only homepage to any project of mine.

This is my gateway that's easy to edit with pure HTML, without any server side processing to allow maximum flexibility of creating unique designs and layouts.

This is a single page that leads to other projects. It's not the start of a website with a template to reuse, it's a unique page "site" that effectively acts as a portfolio of every project I ever made and want to share publicly.

## todo

- Add JSDoc once I start writing Javascript.
- Turn everything into a client side app (Angular.js I guess). Single page app with hashbug sub-pages.
- Gamify filtering recruiter with questions and instant feedback on whether the job they have in mind is better than my current one.
- Check if I can have SSL while on gh-pages.
    - If SSL is possible, move the whole app from Heroku to gh-pages with a real domain name (ebabel.eu or www.ebabel.eu).
- Add unit tests.
- Add end-to-end tests.


## Front-end

### Installation

If you have a new machine and have never used some of these tools, see further instructions below under "Full installation for new machines".

```
npm install
bower install
```

When adding new npm modules, update package.json with --save-dev added to your install. 

Example:

```
npm install new-module --save-dev
```

For new bower libraries, update bower.json with --save

Example:

```
bower install new-library --save
```

### Development tasks

Development tasks do not minify, they only concatenate frontend files. If a new file is added, exist the grunt watch ongoing process (CTRL C) and start it again.

```
grunt watch
```

### Deployment tasks

Deployment tasks are run as a one off and will both concatenate and minify files.

```
grunt
```

## Run locally

### local

The site can also be run on http://localhost:5000

```
node index.js
```

## Deployment

Any code pushed to master will be published via continuous integration on Wercker.

```
git push origin master
```

However, code can also be pushed directly to a Heroku instance:

```
heroku login
git push heroku master
```

### Full installation for new machines

#### NodeJS and npm

If you don't have `NodeJS` and `npm`, install it from:

```
http://nodejs.org
```

If you don't have `Grunt` on your machine, install it:

```
npm install -g grunt-cli
```

If you don't have `Bower` on your machine, install it:

```
npm install -g bower
```

#### Ruby

If you don't have `Sass` installed, you will first need `Ruby`:

```
http://rubyinstaller.org/downloads/
```

You may want to restart at this point to make sure gem is found in your Windows PATH

#### Sass

You can finally install the `Sass` ruby gem:

```
gem install sass
```

If the command to install `Sass` doesn't work, try:

```
gem source -a http://rubygems.org/
gem install sass
```

#### Sass linting

If you have never installed the Sass linting tool on your machine, run:

```
gem install scss_lint
```
