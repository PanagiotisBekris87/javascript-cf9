const products = [];

function insert(arr, product) {
   try {
      if (!Array.isArray(arr)) {
         throw new TypeError("Expected an array");
      }

      if (typeof product !== "string") {
         throw new TypeError("Product must be a string");
      }

      if (product.trim() === "") {
         throw new Error("Produst name cannot be empty");
      }

      // if (product.trim() === "") είναι ίδιο με if (!product.trim())
      // Αν είναι κενό είναι falsey , άρα με ! (not) γίνεται true και μπαίνει στο σώμα της if

      if (arr.includes(product)) {
         throw new Error(`Product ${product} already exists in the array`);
      }

      arr.push(product);
   } catch (error) {
      console.error(`Insert failed: ${error.message}`);
      throw error;
   }
}

insert(products, "Laptop");
insert(products, "Mouse");
insert(products, "Keyboard");
insert(products, "Laptop"); // This should throw an error since "Laptop" already exists in the array
console.log(products);
