class ProductAlreadyExistsError extends Error {
   constructor(message) {
      super(message);
      this.code = "ProductAlreadyExists";
   }
}

class ProductNotFoundError extends Error {
   constructor(message) {
      super(message);
      this.code = "ProductNotFoundExists";
   }
}

class IllegalArgumentError extends Error {
   constructor(message) {
      super(message);
      this.code = "IllegalArgumentError";
   }
}

function insert(arr, product) {
   try {
      if (!Array.isArray(arr) || typeof product !== "string") {
         throw new IllegalArgumentError("Expected an array andf a string");
      }

      if (product.trim() === "") {
         throw new IllegalArgumentError("Product name cannot be empty");
      }

      if (arr.includes(product)) {
         throw new ProductAlreadyExistsError(`Product ${product} already exists in the array`);
      }

      arr.push(product);
   } catch (error) {
      console.error(`Insert failed: ${error.message}`);
      console.error(`${error.stack}`);
      throw error;
   }
}

// από το front end μπορει να πραγματοποιηθεί το παρακάτω

try {
   insert(products, "laptop");
} catch (error) {
   switch (error.code) {
      case "ProductAlreadyExistsError":
         console.log("handle product already exists error");
         break;
      case "IllegalArgumentError":
         console.log("handle Illegal Argument Error");
         break;
      case "ProductNotFoundError":
         console.log("handle Product Not Found Error");
         break;
      default:
         console.log("handle other errors");
         break;
   }
}
