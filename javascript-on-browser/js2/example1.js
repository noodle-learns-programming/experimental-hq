console.log('From Example 1');
setTimeout(function(){
	console.log('From Example 1 at: ', new Date().toISOString());
}, 5);
setTimeout(function(){
	console.log('From Example 1 at: ', new Date().toISOString());
}, 20);
setTimeout(function(){
	console.log('From Example 1 at: ', new Date().toISOString());
}, 30);