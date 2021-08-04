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

    let index: number;
    for (const product in products) {
        index = parseInt(product);
        if (products[index].id === n) {
            return products[index];
        }
    }

    console.log("Product not found");
    return undefined

}

function deleteProduct(n: number): IdentifiedProduct | undefined  {
    
    let index: number;
    for (const indexOfProductToRemove in products) {
        index = parseInt(indexOfProductToRemove);
        if (products[index].id === n) {
            const productToRemove = products[index];
            products.splice(index, 1);
            return productToRemove;
        }
    }
    
    console.log("Product not found");
    return undefined
    
}

function updateProduct(n: number, productToMerge: Product): IdentifiedProduct | undefined {

    let index: number;
    for (const productIndexToUpdate in products) {
        index = parseInt(productIndexToUpdate);
        if (products[index].id === n) {
            products[index].name = productToMerge.name;
            products[index].expireDate = productToMerge.expireDate;
            products[index].status = productToMerge.status;
            return products[index];
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
// console.log(getProduct(2));
// console.log(deleteProduct(2));
// console.log(deleteProduct(6));
// console.log(products);
// console.log(updateProduct(4, vinagre));
// console.log(products);