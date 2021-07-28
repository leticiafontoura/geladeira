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
    id = id + 1;

    return identifiedProduct;
}

function getProduct(n: number): IdentifiedProduct | undefined {
    return products.find((product) => product.id === n);
}

function deleteProduct(n: number): IdentifiedProduct | undefined {
    const indexOfProductToRemove = products.findIndex((product) => product.id === n);

    if (indexOfProductToRemove === -1) {
        return undefined;
    }

    const productToRemove = products[indexOfProductToRemove];

    products.splice(indexOfProductToRemove, 1);
    return productToRemove;
}

function updateProduct(n: number, productToMerge: Product): IdentifiedProduct | undefined {
    const productIndexToUpdate = products.findIndex((product) => product.id === n);
    if (productIndexToUpdate === -1) {
        return undefined;
    }

    products[productIndexToUpdate].name = productToMerge.name;
    products[productIndexToUpdate].expireDate = productToMerge.expireDate;
    products[productIndexToUpdate].status = productToMerge.status;

    return products[productIndexToUpdate];
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

console.log(products);
console.log(getProduct(6));
console.log(deleteProduct(6));
console.log(updateProduct(4, vinagre));
updateProduct(4, vinagre);
console.log(products);
