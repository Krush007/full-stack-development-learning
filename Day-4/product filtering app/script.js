const products = [
  {
    id: 1,
    name: "MacBook Air",
    category: "Electronics",
    brand: "Apple",
    price: 1200,
    stock: 8,
    rating: 4.9,
    discount: true
  },
  {
    id: 2,
    name: "Galaxy S24",
    category: "Electronics",
    brand: "Samsung",
    price: 900,
    stock: 15,
    rating: 4.7,
    discount: false
  },
  {
    id: 3,
    name: "Dell XPS",
    category: "Electronics",
    brand: "Dell",
    price: 1400,
    stock: 5,
    rating: 4.8,
    discount: true
  },
  {
    id: 4,
    name: "Nike Hoodie",
    category: "Clothing",
    brand: "Nike",
    price: 80,
    stock: 30,
    rating: 4.3,
    discount: false
  },
  {
    id: 5,
    name: "Nike Shoes",
    category: "Clothing",
    brand: "Nike",
    price: 120,
    stock: 20,
    rating: 4.6,
    discount: true
  },
  {
    id: 6,
    name: "JavaScript Guide",
    category: "Books",
    brand: "Penguin",
    price: 35,
    stock: 40,
    rating: 4.5,
    discount: true
  },
  {
    id: 7,
    name: "React Mastery",
    category: "Books",
    brand: "Penguin",
    price: 45,
    stock: 25,
    rating: 4.8,
    discount: false
  }
];

const productList = document.getElementById("productList");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const brandFilter = document.getElementById("brandFilter");
const minPrice = document.getElementById("minPrice");
const maxPrice = document.getElementById("maxPrice");
const ratingFilter = document.getElementById("ratingFilter");
const sortBy = document.getElementById("sortBy");
const inStockOnly = document.getElementById("inStockOnly");
const discountOnly = document.getElementById("discountOnly");

function renderProducts(items) {
  productList.innerHTML = items
    .map(
      product => `
      <div class="card">
        <h3>${product.name}</h3>
        <p>${product.category}</p>
        <p>${product.brand}</p>
        <p>⭐ ${product.rating}</p>
        <p>Stock: ${product.stock}</p>
        <p class="price">$${product.price}</p>

        <div class="badges">
          ${product.discount ? '<span class="badge">Discount</span>' : ""}
          ${product.stock > 0 ? '<span class="badge">Available</span>' : ""}
        </div>
      </div>
    `
    )
    .join("");

  updateStats(items);
}

function updateStats(items) {
  const stats = items.reduce(
    (acc, item) => {
      acc.count++;
      acc.stock += item.stock;
      acc.value += item.price * item.stock;
      acc.rating += item.rating;
      return acc;
    },
    {
      count: 0,
      stock: 0,
      value: 0,
      rating: 0
    }
  );

  document.getElementById(
    "productCount"
  ).textContent = `Products: ${stats.count}`;

  document.getElementById(
    "inventoryValue"
  ).textContent = `Inventory Value: $${stats.value}`;

  document.getElementById(
    "totalStock"
  ).textContent = `Total Stock: ${stats.stock}`;

  document.getElementById(
    "averageRating"
  ).textContent =
    `Average Rating: ${
      stats.count
        ? (stats.rating / stats.count).toFixed(1)
        : 0
    }`;
}

function filterProducts() {
  let filtered = products.filter(product => {
    const searchMatch =
      product.name
        .toLowerCase()
        .includes(searchInput.value.toLowerCase());

    const categoryMatch =
      categoryFilter.value === "all" ||
      product.category === categoryFilter.value;

    const brandMatch =
      brandFilter.value === "all" ||
      product.brand === brandFilter.value;

    const minMatch =
      !minPrice.value ||
      product.price >= Number(minPrice.value);

    const maxMatch =
      !maxPrice.value ||
      product.price <= Number(maxPrice.value);

    const ratingMatch =
      product.rating >= Number(ratingFilter.value);

    const stockMatch =
      !inStockOnly.checked ||
      product.stock > 0;

    const discountMatch =
      !discountOnly.checked ||
      product.discount;

    return (
      searchMatch &&
      categoryMatch &&
      brandMatch &&
      minMatch &&
      maxMatch &&
      ratingMatch &&
      stockMatch &&
      discountMatch
    );
  });

  switch (sortBy.value) {
    case "priceLow":
      filtered.sort((a, b) => a.price - b.price);
      break;

    case "priceHigh":
      filtered.sort((a, b) => b.price - a.price);
      break;

    case "name":
      filtered.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      break;

    case "rating":
      filtered.sort((a, b) => b.rating - a.rating);
      break;
  }

  renderProducts(filtered);
}

[
  searchInput,
  categoryFilter,
  brandFilter,
  minPrice,
  maxPrice,
  ratingFilter,
  sortBy,
  inStockOnly,
  discountOnly
].forEach(element => {
  element.addEventListener("input", filterProducts);
  element.addEventListener("change", filterProducts);
});

renderProducts(products);