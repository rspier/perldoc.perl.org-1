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
