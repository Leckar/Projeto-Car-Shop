import IMotorcycle from '../Interfaces/IMotorcycle';
import Vehicle from './Vehicle';

class Motorcycle extends Vehicle {
  private _category: number;
  private _engineCapacity: number;

  constructor(vehicle: IMotorcycle) {
    super(vehicle);
    const { category, engineCapacity } = vehicle;
    this._category = category;
    this._engineCapacity = engineCapacity;
  }
}

export default Motorcycle;