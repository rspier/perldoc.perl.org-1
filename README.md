# Perl Documentation Website

Thir repo contains all the scrips that are neccessary to develop the documentation website locally and then just deploy with a simple copy/paste to the server.

## gen-perldoc.pm

A script to download perl versions, compile them and convert base perl pod files into html

Using the scripts

Running the script bellow will create the `builds` and `outputs` folders that contain each version of Perl released and its documentation.

```bash
perl gen-perldoc.pm
```

This script will run once per day so that if a new version is release this is downloaded, compiled and it's documentation released to the site automatically.

## Developing locally and modifying the templates

### Template modifying

There are 2 major files that can modified to change the strctural integrity of the static html files.

`***default.tt***` - template for the actual documentation pages

- navigation automatically generated
- links on the sidebar automatically generated
- content automatically generated
- footer automatically generated

`***main_index.tt***` main landing pages for each release

- navigation automatically generated
- landing page content links automatically generated
- footer automatically generated

### Assets developing

Using Grunt to compile / optimize Sass, JS and Images

This will install the required dependencies that will allow you to update / optimize / improve and remove code from the website

```
npm install
```

There are a few tasks that have been created by default

- image - optimize and copy images from the root into the outputs folder
- sass - compile, optimize and export code into the outputs folder
- uglify - compile, optimize, transpile and export code into the outputs folder
  For development, open up a terminal and navigate to the current project

```
grunt watch
```

this will watch all the souce folders and recreate/ recompile files as needed

```
grunt
```

this command will run all tasks (sass, js, images) and compile the build into the outputs/public folder
