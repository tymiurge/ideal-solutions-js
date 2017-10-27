var greetDeeplyCurried = function(greeting) {
    return function(separator) {
      return function(emphasis) {
        return function(name) {
          console.log(greeting + separator + name + emphasis);
        };
      };
    };
  };

  var greetAwkwardly = greetDeeplyCurried("Hello")("...")("?");
  greetAwkwardly("Heidi"); //"Hello...Heidi?"
  greetAwkwardly("Eddie"); //"Hello...Eddie?"
