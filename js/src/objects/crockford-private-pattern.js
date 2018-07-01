var MyObj = (function() {
function MyObj(arg) {
    this.getMyVar = function(){
         return arg;   
    };
}
MyObj.prototype.print = function() {
    console.log(this.getMyVar());
};
    return MyObj;
})();
var instance1 = new MyObj('instance1');
var instance2 = new MyObj('instance2');
instance1.print(); // instance2
instance2.print(); // instance2
