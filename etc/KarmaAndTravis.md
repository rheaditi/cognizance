# Karma stuffz

## Pre-requisites
1. NodeJS
2. GitHub repository :octocat: with `npm init`-ed project or an existing project.
3. Karma & its plugins:
 ```sh
 # Install Karma-CLI for global usage
 $ npm install -g karma-cli
 
 # Check if that worked
 $ karma --version
 
 # Install Karma for the project:
 $ npm install karma --save-dev

 # Install plugins that your project needs:
 $ npm install karma-jasmine karma-chrome-launcher --save-dev
 ```

### Configuring Karma

Generate the config file with `karma init`
```
$ karma init karma.conf.js
```
A series of questions to set up the inital config file ensues.  
Example answers:
```
Which testing framework do you want to use ?
Press tab to list possible options. Enter to move to the next question.
> jasmine

Do you want to use Require.js ?
This will add Require.js plugin.
Press tab to list possible options. Enter to move to the next question.
> no

Do you want to capture any browsers automatically ?
Press tab to list possible options. Enter empty string to move to the next question.
> Chrome
> Firefox
> 

What is the location of your source and test files ?
You can use glob patterns, eg. "js/*.js" or "test/**/*Spec.js".
Enter empty string to move to the next question.
> public/js/*.js
> tests/**/*.js
08 06 2016 17:43:14.925:WARN [init]: There is no file matching this pattern.

> 

Should any of the files included by the previous patterns be excluded ?
You can use glob patterns, eg. "**/*.swp".
Enter empty string to move to the next question.
> 

Do you want Karma to watch all the files and run the tests on change ?
Press tab to list possible options.
> yes


Config file generated at "/path/to/project/my.conf.js".
```

### Configure Travis
First, login to [Travis CI](https://travis-ci.org/) and add your repository to it.

Create the `.travis.yml` file (mind the leading period - it'll be a hidden file):
```yml
language: node_js

```
