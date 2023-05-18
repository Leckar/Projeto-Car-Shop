import ICar from '../Interfaces/ICar';
import Vehicle from './Vehicle';

class Car extends Vehicle {
  private doorsQty: number;
  private seatsQty: number;

  constructor(vehicle: ICar) {
    super(vehicle);
    const { doorsQty, seatsQty } = vehicle;
    this.doorsQty = doorsQty;
    this.seatsQty = seatsQty;
  }
}

export default Car;