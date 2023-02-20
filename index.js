class Product {
    id;

    constructor(title, description, price, thumbnail, code, stock) {
        this.title = title
        this.description = description
        this.price = price
        this.thumbnail = thumbnail
        this.code = code
        this.stock = stock
    }
}

class ProductproductManager {
    productId = 1;

    constructor() {
        this.products = []
    }

    addProduct(product) {
        const exists = this.products.find(x => x.code == product.code);

        if (exists != null) {
            console.log(`El producto con el codigo ${product.code} ya fue ingresado.`);
            return;
        }

        product.id = this.productId;
        this.products.push(product);
        this.productId += 1;
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const found = this.products.find(x => x.id == id);
        if (found == null) {
            console.log('Not Found');
            return;
        }
        return found;
    }

}

let productManager = new ProductproductManager();
console.log(productManager.getProducts());

let product1 = new Product('producto prueba', 'Este es un producto prueba', 200, 'Sin imagen', 'abc123', 25);
productManager.addProduct(product1);
console.log(productManager.getProducts());

productManager.addProduct(product1);

console.log(productManager.getProductById(1));
productManager.getProductById(2);
