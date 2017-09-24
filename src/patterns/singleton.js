var Singleton = function(){
	var instance;

	function init(){
		return {
			func1: function(){
				console.log("function 1 called");
            },
            func2: function(){
				console.log("function 2 called");
			}
		}
	}
	
	return {
		getInstance: function(){
			if(!instance) {
				instance = init();
			}
			return instance;
		}
	}
}