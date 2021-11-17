async function collectproduct() {
    let data=await fetch('http://localhost:8000/products');
    console.log(data);
}
collectproduct()