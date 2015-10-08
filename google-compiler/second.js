//java -jar compiler.jar --js_output_file=second.min.js second.js
(function(){
    var STR_HELLO = 'Hello world!';
    var PI  = 3.1416;
    function test()
    {
        alert(2*PI*10);
        alert(STR_HELLO);
    }
    test();
})();