export class Cart {
  id: number;
  amount: number;

  constructor(public item: string) {
    this.id = Date.now();
    this.amount = 1;
  }
}
