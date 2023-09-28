function Prod(name,price) {
    let _name = name
    let _price = price

    this.getName = ()=>{
    return _name
    }

    this.getPrice = ()=>{
        return _price
    }
}

function Shop(params) {
    
    let items = [];

    this.add = (Prod)=>{
        items.push(Prod)
    }

    this.getCartItems =()=>{
        let cartItems = [];

        for (let i = 0; i < items.length; i++) {
            cartItems.push({
                name: items[i].getName(),
                price: items[i].getPrice()
            })
        }
        return cartItems;
    }
}

const  product1 = new Prod('Drond',89)

const cart = new Shop();

cart.add(product1);

console.log(cart.getCartItems());