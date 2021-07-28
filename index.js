var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var ProductState;
(function (ProductState) {
    ProductState["OPEN"] = "open";
    ProductState["CLOSED"] = "closed";
    ProductState["NOT_APPLICABLE"] = "n/a";
})(ProductState || (ProductState = {}));
var products = [];
var id = 0;
function addProduct(product) {
    var nextId = id;
    var identifiedProduct = __assign(__assign({}, product), { id: nextId });
    products.push(identifiedProduct);
    id = id + 1;
    return identifiedProduct;
}
function getProduct(n) {
    return products.find(function (product) { return product.id === n; });
}
function deleteProduct(n) {
    var indexOfProductToRemove = products.findIndex(function (product) { return product.id === n; });
    if (indexOfProductToRemove === -1) {
        return undefined;
    }
    var productToRemove = products[indexOfProductToRemove];
    products.splice(indexOfProductToRemove, 1);
    return productToRemove;
}
function updateProduct(n, productToMerge) {
    var productIndexToUpdate = products.findIndex(function (product) { return product.id === n; });
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
var p = {
    name: "pao",
    expireDate: new Date(),
    status: ProductState.CLOSED
};
var b = {
    name: "batata",
    expireDate: new Date(),
    status: ProductState.OPEN
};
var v = {
    name: "vinho",
    expireDate: new Date(),
    status: ProductState.CLOSED
};
var l = {
    name: "leite",
    expireDate: new Date(),
    status: ProductState.CLOSED
};
var q = {
    name: "queijo",
    expireDate: new Date(),
    status: ProductState.OPEN
};
var idP = addProduct(p);
var idB = addProduct(b);
var idV = addProduct(v);
var idL = addProduct(l);
var idQ = addProduct(q);
var vinagre = {
    name: "vinagre",
    expireDate: new Date(),
    status: ProductState.OPEN
};
console.log(products);
console.log(getProduct(6));
console.log(deleteProduct(6));
console.log(updateProduct(4, vinagre));
updateProduct(4, vinagre);
console.log(products);
