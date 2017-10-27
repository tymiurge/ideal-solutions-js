var uuidv1 = require('uuid/v1')
var singleton = (function() {

    var instanceId = uuidv1();
    
    function getInstanceId() {
        return instanceId;
    }

    return {
        getInstanceId: getInstanceId
    }
    
})()

    

// ==========================================================================
//                              Tests
// ==========================================================================
var first = singleton.getInstanceId();
var second = singleton.getInstanceId();
console.log(first)
console.log(second)
console.log(first === second)