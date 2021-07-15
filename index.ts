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

console.log(p);

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
    id = id + 1;

    return identifiedProduct;
}


const idP = add(p);
console.log(idP);
add(b);

