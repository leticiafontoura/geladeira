interface Product {
    name: string,
    expireDate: Date,
    status: ProductState
}

enum ProductState {
    OPEN = "open",
    CLOSED = "closed",
    NOT_APPLICABLE = "n/a"
}

const p: Product = {
    name: "pao",
    expireDate: new Date(),
    status: ProductState.CLOSED
}

console.log(p)

const products: Array<Product> = []