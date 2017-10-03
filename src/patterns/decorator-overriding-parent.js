function Sale(price) {  
    this.price = price || 100;
}

Sale.prototype.getPrice = function() {  
    return this.price;
};

Sale.decorators = {};

Sale.decorators.fedtax = {  
    getPrice: function() {
        var price = this._super.getPrice();
        price += price * 5 / 100;
        return price;
    }
};

Sale.decorators.quebec = {  
    getPrice: function() {
        var price = this._super.getPrice();
        price += price * 7.5 / 100;
        return price;
    }
};

Sale.decorators.usd = { // U.S. dollars  
    getPrice: function() {
        return "$" + this._super.getPrice().toFixed(2);
    }
};

Sale.decorators.cdn = { // Canadian dollars  
    getPrice: function() {
        return "CDN$" + this._super.getPrice().toFixed(2);
    }
};

Sale.prototype.decorate = function (decorator) {  
    var F = function () {},
    overrides = this.constructor.decorators[decorator],
    i,
    newobj;

    // Create prototype chain
    F.prototype = this;
    newobj = new F();
    newobj._super = F.prototype;

    // Mixin properties/methods of our decorator
    // Overriding the ones from our prototype
    for (i in overrides) {
        if (overrides.hasOwnProperty(i)) {
            newobj[i] = overrides[i];
        }
    }

    return newobj;
}


var sale = new Sale(50);  
sale = sale.decorate('fedtax');  
sale = sale.decorate('cdn');  
console.log(sale.getPrice()); // outputs $CDN52.50  
