function ProductManager() {
    this.products = [];
    this.nextProductId = 1;
  
    this.addProduct = function (product) {
      const requiredFields = ["title", "description", "price", "thumbnail", "code", "stock"];
      const missingFields = requiredFields.filter((field) => !product[field]);
      if (missingFields.length > 0) {
        alert(`Los siguientes campos son obligatorios: ${missingFields.join(", ")}`);
      }
  
      if (this.products.some((p) => p.code === product.code)) {
        alert(`Ya existe un producto con el código ${product.code}`);
      }
  
      product.id = this.nextProductId++;
      this.products.push(product);
    };
  
    this.getProducts = function () {
      return this.products;
    };
  
    this.getProductById = function (id) {
      const product = this.products.find((p) => p.id === id);
      if (!product) {
        console.error("Not Found");
      }
      return product;
    };
  }
  
  const productManager = new ProductManager();
  
  try {
    productManager.addProduct({
      title: "Producto 1",
      description: "Descripción del producto 1",
      price: 10.99,
      thumbnail: "imagen1.jpg",
      code: "ABC123",
      stock: 50,
    });
  
    productManager.addProduct({
      title: "Producto 2",
      description: "Descripción del producto 2",
      price: 25.99,
      thumbnail: "imagen2.jpg",
      code: "XYZ789",
      stock: 30,
    });
  
    console.log(productManager.getProducts());
  
    console.log(productManager.getProductById(1));
  
    console.log(productManager.getProductById(3));
    
  } catch (error) {
    console.error(error.message);
  }
  