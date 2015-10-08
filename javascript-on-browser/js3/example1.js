console.log('From Example 1');

var start = new Date();
var diff  = 0;
for(var i = 0; i < 10000; i++)
{
	diff = new Date() - start;
	console.log('From Example 1: ', i, ' | diff: ', diff);
}