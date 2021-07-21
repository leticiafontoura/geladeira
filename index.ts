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

const p: Product = {
    name: "pao",
    expireDate: new Date(),
    status: ProductState.CLOSED,
};

const b: Product = {
    name: "batata",
    expireDate: new Date(),
    status: ProductState.OPEN,
}
const v:Product = {
    name: "vinho", expireDate: new Date(), status: ProductState.CLOSED
}

const l:Product = {
    name: "leite",
    expireDate: new Date(),
    status: ProductState.CLOSED
}

const q:Product = {
    name: "queijo",
    expireDate: new Date(),
    status: ProductState.OPEN
}
// console.log(p);

const products: Array<IdentifiedProduct> = [];
let id: number = 0;

function add(product: Product) {
    const nextId = id;
    const identifiedProduct: IdentifiedProduct = {
        // name: product.name,
        // expireDate: product.expireDate,
        // status: product.status,
        // id: id
        //
        // the code above is the same as the code below
        
        ...product,
        id: nextId
    }
    
    products.push(identifiedProduct);
    id = id + 2;

    return identifiedProduct;
}


const idP = add(p);
const idB = add(b);
const idV = add(v);
const idL = add(l);
const idQ = add(q);

function getProduct(n: number) {
    let productFound = products.find(product => {
        return product.id === n;
    })

    return productFound;
}

function deleteProduct(n: number) {
    if (products.find(product => {
        return product.id === n;
    })) {
        const removeItem = products.findIndex( product => product.id === n);
    products.splice(removeItem, 1);
    return products;
    }
    else {
        return products;
    }
}

function updateItem(n: number, newProductInfo: Product) {
    const indexOfProduct = products.findIndex( product => product.id === n);

    products[indexOfProduct].name = newProductInfo.name;
    products[indexOfProduct].expireDate = newProductInfo.expireDate;
    products[indexOfProduct].status = newProductInfo.status;

    return products;
}

const vinagre: Product = {
    name: "vinagre",
    expireDate: new Date(),
    status: ProductState.OPEN
}

console.log(products);
console.log(getProduct(6));
console.log(deleteProduct(6));
console.log(updateItem(4, vinagre));
console.log(products);