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

const products: Array<IdentifiedProduct> = [];
let id: number = 0;

function addProduct(product: Product) {
    const nextId = id;
    const identifiedProduct: IdentifiedProduct = {
        // name: product.name,
        // expireDate: product.expireDate,
        // status: product.status,
        // id: id
        //
        // the code above is the same as the code below

        ...product,
        id: nextId,
    };

    products.push(identifiedProduct);
    id = id + 2;

    return identifiedProduct;
}

function getProduct(n: number): IdentifiedProduct | undefined {

    for (let i=0; i < products.length; i++) {
        if (products[i].id === n) {
             return products[i];
        }
    }

    console.log("Product not found");
    return undefined

}

function deleteProduct(n: number): IdentifiedProduct | undefined  {
    
    for (let i=0; i < products.length; i++) {
        if (products[i].id === n) {
            const productRemoved = products[i];
            products.splice(i, 1);
            return productRemoved;
        }
    }

    console.log("Product nof found");
    return undefined;

}

function updateProduct(n: number, productToMerge: Product): IdentifiedProduct | undefined {

    for (let i=0; i < products.length; i++) {
        if (products[i].id === n) {
            products[i].name = productToMerge.name;
            products[i].expireDate = productToMerge.expireDate;
            products[i].status = productToMerge.status;
            return products[i];
        }
    }

    console.log("Product not found");
    return undefined;

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

const idP = addProduct(p);
const idB = addProduct(b);
const idV = addProduct(v);
const idL = addProduct(l);
const idQ = addProduct(q);

const vinagre: Product = {
    name: "vinagre",
    expireDate: new Date(),
    status: ProductState.OPEN,
};

// console.log(products);
// console.log(getProduct(0));
// console.log(deleteProduct(4));
// console.log(deleteProduct(6));
// console.log(products);
// console.log(updateProduct(2, vinagre));
// console.log(products);