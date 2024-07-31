// * codebase
class Singleton {
  private static instance: Singleton;

  private construtor() {}

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }

  // * business logic
}

// * practice
class Product {
  constructor(private id: number, private name: string, private cost: number) {}

  public getName(): string {
    return this.name;
  }

  public getcost(): number {
    return this.cost;
  }

  public getId(): number {
    return this.id;
  }
}

class ShoppingCar {
  private static instance: ShoppingCar;
  private products: Array<Product>;

  private constructor() {
    this.products = [];
  }

  public add(product: Product): void {
    this.products.push(product);
  }

  public deleteById(id: number): void {
    this.products = this.products.filter((product) => product.getId() !== id);
  }

  public getAll(): Array<Product> {
    return this.products;
  }

  public static getInstance(): ShoppingCar {
    if (!ShoppingCar.instance) {
      ShoppingCar.instance = new ShoppingCar();
    }
    return ShoppingCar.instance;
  }
}

(() => {
  const apple = new Product(1, "Apple", 1500);
  const potato = new Product(2, "Potato", 1100);
  const soap = new Product(3, "Soap", 2500);

  const cart1 = ShoppingCar.getInstance();
  const cart2 = ShoppingCar.getInstance();

  cart1.add(apple);
  cart1.add(apple);

  cart2.add(apple);
  cart2.add(potato);
  cart2.add(soap);
  cart2.deleteById(2);

  console.log({
    cart1: cart1.getAll(),
    cart2: cart2.getAll(),
    areEquals: cart1 === cart2,
  });
})();
