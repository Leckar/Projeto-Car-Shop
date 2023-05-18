import ICar from '../Interfaces/ICar';
import Vehicle from './Vehicle';

class Car extends Vehicle {
  private _doorsQty: number;
  private _seatsQty: number;

  constructor(vehicle: ICar) {
    super(vehicle);
    const { doorsQty, seatsQty } = vehicle;
    this._doorsQty = doorsQty;
    this._seatsQty = seatsQty;
  }
}

export default Car;