// importo Contenedor
const Contenedor = require("./Contenedor.js");

// creo una funcion mailn
async function main() {
  // creo un nuevo Contenedor llamado products
  const products = new Contenedor("productos");

  // funcion de testeo de save
  const testSave = async () => {
    console.log("Corriendo test del metodo save");
    console.log("Para esto se crea el siguiente objeto");
    obj = {
      title: "Mens Casual Slim Fit",
      price: 15.99,
      thumbnail: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    };
    console.log(obj);
    const id = await products.save(obj);
    console.log("Id del objeto grabado: ", id);
  };

  // funcion de testeo de getAll
  const testGetAll = async () => {
    console.log("Corriendo test del metodo getAll");
    const productsAll = await products.getAll();
    console.log(productsAll);
  };

  // funcion de testeo de getById
  const testGetById = async (id) => {
    console.log(`Corriendo test del metodo getById para el id ${id}. Objeto:`);
    const productById = await products.getById(id);
    console.log(productById);
  };

  //funcion de testeo de deleteById
  const testDeleteById = async (id) => {
    console.log(`Corriendo test del metodo deleteById para el id ${id}`);
    await products.deleteById(id);
  };

  //funcion de testeo de deleteAll
  const testDeleteAll = async () => {
    console.log("Corriendo test del metodo deleteAll");
    await products.deleteAll();
  };

  //   Descomentar para correr (les puse await para hacerlas secuenciales - ej quiero testear save y dsps get all)
  //   await testSave();
  //   await testGetAll();
  //   await testGetById(1);
  //   await testDeleteById(1);
  //   await testDeleteAll();
}

main();
