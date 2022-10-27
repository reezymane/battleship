const ship = (length, hitAmount = 0, sunk = false) => {
  const hit = () => {
    this.hitAmount += 1;
  };

  const isSunk = () => {
    if (this.hitAmount === this.length) {
      this.sunk = true;
    }
  };

  return { length, hitAmount, sunk, hit, isSunk };
};

export { ship };
