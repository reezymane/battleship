const ship = (length) => ({
    length,
    hitAmount: 0,
    sunk: false,
    hit() {
      this.hitAmount += 1;
    },
    isSunk() {
      if (this.hitAmount === this.length) {
        this.sunk = true;
      }
    },
  });

export { ship };
