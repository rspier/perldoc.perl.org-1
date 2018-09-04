# gen-perldoc

A script to convert base perl pod files into html

navigate to Builds directory and into the first version you want to build

navigate to version / env directory

make sure you change the output directory to the directory you are in

```
mkdir -p ~/projects/gen-perldoc/outputs/5/x/x
```

update the script bellow and run the script

```
perl ../../../../build-perldoc-html.pl -output-path ~/projects/gen-perldoc/outputs/5/x/x -perl ~/projects/gen-perldoc/builds/perl-5.x.x/env/bin/perl
```

IF the directory ENV is not present - compile has failed and the version will not have any documentation and wont appear in the navigation neither

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
