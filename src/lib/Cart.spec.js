import Cart from "./Cart";
describe("Cart", () => {
  let cart;
  let product = {
    title: "Air jordan",
    price: 35388, //353.88 | R$353,88
  };
  beforeEach(() => {
    cart = new Cart();
  });
  it("should return 0 when getTotal() is executred in a newly created", () => {
    const cart = new Cart();
    expect(cart.getTotal()).toEqual(0);
  });
  it("should multiply quantity and price and receive the total amount", () => {
    const item = {
      product: {
        title: "Air jordan",
        price: 35388, //353.88 | R$353,88
      },
      quantity: 2, //70776
    };

    cart.add(item);

    expect(cart.getTotal()).toEqual(70776);
  });

  it("should endure no more than one product exists at a time", () => {
    cart.add({
      product,
      quantity: 2, //70776
    });
    cart.add({
      product,
      quantity: 1, //70776
    });
    expect(cart.getTotal()).toEqual(35388);
  });
});
