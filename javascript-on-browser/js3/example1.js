console.log('From Example 1');

var beginCallback = new Date();
setTimeout(function(){
	console.log('From Example 1 | Callback: \
		Muon dc goi vao 250ms sau do | nhung thoi thuc te la:',
		new Date() - beginCallback
	);
}, 250);

var start = new Date();
var diff  = 0;
for(var i = 0; i < 10000; i++)
{
	diff = new Date() - start;
	console.log('From Example 1: ', i, ' | diff: ', diff);
}