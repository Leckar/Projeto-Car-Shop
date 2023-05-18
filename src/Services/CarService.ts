import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

const vehicleNotFound = 'Car not found';

class CarService {
  private _model: CarODM;
  private createCarDomain = (vehicle: ICar): Car => new Car(vehicle);

  constructor() {
    this._model = new CarODM();
  }

  async createVehicle(vehicle: ICar): Promise<Car> {
    const result = await this._model.create(vehicle);
    return this.createCarDomain(result);
  }

  async getAll(): Promise<Car[]> {
    const result = await this._model.getAll();
    return result.map((e) => new Car(e));
  }

  async getById(id: string): Promise<Car> {
    const result = await this._model.getById(id);
    if (!result) throw new Error(vehicleNotFound);
    return new Car(result);
  }

  async update(id: string, vehicle: ICar): Promise<Car> {
    const result = await this._model.update(id, vehicle);
    if (!result) throw new Error(vehicleNotFound);
    return this.createCarDomain(result);
  }
}

export default CarService;