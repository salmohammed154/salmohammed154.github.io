  let cart = JSON.parse(localStorage.getItem("cart")) || [];
        function addToCart(name, price){
       cart.push({name:name, price:price});
       localStorage.setItem("cart", JSON.stringify(cart));
       alert("Added to cart");
        }
        function goToCart(){
        window.location.href = "cart.html";
        }


function search() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let products = document.querySelectorAll(".product");

    products.forEach(product => {
        let name = product.querySelector("p").innerText.toLowerCase();

        product.style.display = name.includes(input) ? "block" : "none";
    });
}

function setView(type) {
    let container = document.getElementById("productsContainer");

    container.classList.remove("grid", "list", "details");
    container.classList.add(type);
}

function showMore() {
    let hiddenProducts = document.querySelectorAll(".product.hidden");

    hiddenProducts.forEach(product => {
        product.classList.remove("hidden");
    });

    document.querySelector(".more").style.display = "none";
}
 