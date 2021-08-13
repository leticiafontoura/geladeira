class Fridgette {
    constructor(name: string) {
        this.name = name;
    }

    private readonly name: string;
    private products: Array<IdentifiedProduct> = [];
    #id: number = 0;

    private static analytics: any = [];

    public static printAnalytics() {
        console.log("ANALYTICS!!!!");
        console.log(Fridgette.analytics);
    }

    public getProducts() {
        return new Array(this.products);
    }

    public addProduct(product: Product) {
        Fridgette.analytics.push({ type: "ADD", instance: this, product: product });
        const nextId = this.#id;
        const identifiedProduct: IdentifiedProduct = {
            ...product,
            id: nextId,
        };

        this.products.push(identifiedProduct);
        this.#id = this.#id + 1;

        return identifiedProduct;
    }

    public getProduct(n: number): IdentifiedProduct | undefined {
        Fridgette.analytics.push({ type: "GET", instance: this, productId: n });

        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].id === n) {
                return this.products[i];
            }
        }

        console.log("Product not found");
        return undefined;
    }

    public deleteProduct(n: number): IdentifiedProduct | undefined {
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].id === n) {
                const productRemoved = this.products[i];
                this.products.splice(i, 1);
                return productRemoved;
            }
        }

        console.log("Product nof found");
        return undefined;
    }

    public updateProduct(n: number, productToMerge: Product): IdentifiedProduct | undefined {
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].id === n) {
                this.products[i].name = productToMerge.name;
                this.products[i].expireDate = productToMerge.expireDate;
                this.products[i].status = productToMerge.status;
                return this.products[i];
            }
        }

        console.log("Product not found");
        return undefined;
    }
}

interface Product {
    name: string;
    expireDate: Date;
    status: ProductState;
}

interface Identified {
    id: number;
}

type IdentifiedProduct = Product & Identified;

enum ProductState {
    OPEN = "open",
    CLOSED = "closed",
    NOT_APPLICABLE = "n/a",
}

//
// MAIN

const p: Product = {
    name: "pao",
    expireDate: new Date(),
    status: ProductState.CLOSED,
};

const b: Product = {
    name: "batata",
    expireDate: new Date(),
    status: ProductState.OPEN,
};
const v: Product = {
    name: "vinho",
    expireDate: new Date(),
    status: ProductState.CLOSED,
};

const l: Product = {
    name: "leite",
    expireDate: new Date(),
    status: ProductState.CLOSED,
};

const q: Product = {
    name: "queijo",
    expireDate: new Date(),
    status: ProductState.OPEN,
};

const f1 = new Fridgette("F1");
const idP = f1.addProduct(p);
const idQ = f1.addProduct(q);

const f2 = new Fridgette("F2");
f2.addProduct(v);
f2.addProduct(b);
f2.addProduct(l);
f2.addProduct(q);

Fridgette.printAnalytics();

const vinagre: Product = {
    name: "vinagre",
    expireDate: new Date(),
    status: ProductState.OPEN,
};

console.log(f1.getProducts());
console.log(f1.getProduct(3));
console.log(f2.deleteProduct(3));
console.log(f2.getProducts());
// console.log(deleteProduct(6));
// console.log(products);
// console.log(updateProduct(2, vinagre));
// console.log(products);
