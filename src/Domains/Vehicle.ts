import IVehicle from '../Interfaces/IVehicle';

class Vehicle {
  protected buyValue: number;
  protected color: string;
  protected id?: string;
  protected model: string;
  protected status?: boolean;
  protected year: number;
  
  constructor(vehicle: IVehicle) {
    const { buyValue, color, id, model, status, year } = vehicle;
    this.buyValue = buyValue;
    this.color = color;
    this.id = id;
    this.model = model;
    this.status = status || false;
    this.year = year;
  }
}

export default Vehicle;