use 5.006;
use strict;
use warnings;

use FindBin qw/$Bin/;

use Data::Dumper;
use Template;
use Cwd;

my $tt = Template->new();

my $ttenv = {
    versions => {
        12  =>  {
            0   =>  '5.12.0',
            1   =>  '5.12.1'
        },
        20  =>  {
            0   =>  '5.20.0',
            1   =>  '5.20.1',
            2   =>  '5.20.2',
            3   =>  '5.20.3'
        },
        22  =>  {
           0   =>  '5.22.0',
           1   =>  '5.22.1',
           2   =>  '5.22.2',
           3   =>  '5.22.3'
        }
    }
};

my $output = "";
$tt->process('index.tt',$ttenv,\$output);
open(my $fh,'>','index.html');
print $fh $output;
close($fh);

