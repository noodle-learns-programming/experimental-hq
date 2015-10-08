//java -jar compiler.jar --js_output_file=first.min.js first.js
(function(){
    /**@const*/
    var STR_HELLO = 'Hello world!';
    /**@const*/
    var PI  = 3.1416;
    function test()
    {
        alert(2*PI*10);
        alert(STR_HELLO);
    }
    test();
})();