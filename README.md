# eBabel home

HTML only homepage to any project of mine. 

This is my gateway that's easy to edit with pure HTML, without any server side processing to allow maximum flexibility of creating unique designs and layouts.

This is a single page that leads to other projects. It's not the start of a website with a template to reuse, it's a unique page "site" that effectively acts as a portfolio of every project I ever made and want to share publicly.

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

## Backend: Deployment on gh-pages

### gh-pages hosting without CNAME

If there is no CNAME in the root directory of the gh-pages branch, the site is visible at http://ebabel-eu.github.io/ebabel-home/

### gh-pages hosting with CNAME

If there is a CNAME and the DNS has been setup, the site is visible at the address mentioned in the CNAME file.

### local

The site can also be opened directly in a browser from its only index.html page.
