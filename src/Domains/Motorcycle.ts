import IMotorcycle from '../Interfaces/IMotorcycle';
import Vehicle from './Vehicle';

class Motorcycle extends Vehicle {
  private category: string;
  private engineCapacity: number;

  constructor(vehicle: IMotorcycle) {
    super(vehicle);
    const { category, engineCapacity } = vehicle;
    this.category = category;
    this.engineCapacity = engineCapacity;
  }
}

export default Motorcycle;