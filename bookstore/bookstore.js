export const findBook = (title) => {
  const catalogue = {
    dune: 89,
    neuromancer: 79,
    foundation: 75,
  };
  return { title: title, price: catalogue[title] };
};

const reserveStock = (book) => {
  console.log(`Reserving stock for ${book.title}`);
  const reservationCode = Math.floor(Math.random() * 9000) + 1000;
  return reservationCode;
};

const confirmPurchase = (reservationCode, price) => {
  if (!reservationCode) {
    throw new Error("Invalid reservation");
  }
  console.log(`Purchase confirmed. Reservation: ${reservationCode}, Amount: ${price}`);
  return { success: true, code: reservationCode };
};

const buyBook = (title) => {
  const book = findBook(title);
  const reservationCode = reserveStock(book);
  const result = confirmPurchase(reservationCode, book.price);
  return result;
};

export { reserveStock, confirmPurchase, buyBook };
