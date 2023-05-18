import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';

const vehicleNotFound = 'Motorcycle not found';

class MotorcycleService {
  private _model: MotorcycleODM;
  private createMotorcycleDomain = (vehicle: IMotorcycle): Motorcycle => new Motorcycle(vehicle);

  constructor() {
    this._model = new MotorcycleODM();
  }

  async createVehicle(vehicle: IMotorcycle): Promise<Motorcycle> {
    const result = await this._model.create(vehicle);
    return this.createMotorcycleDomain(result);
  }

  async getAll(): Promise<Motorcycle[]> {
    const result = await this._model.getAll();
    return result.map((e) => new Motorcycle(e));
  }

  async getById(id: string): Promise<Motorcycle> {
    const result = await this._model.getById(id);
    if (!result) throw new Error(vehicleNotFound);
    return new Motorcycle(result);
  }

  async update(id: string, vehicle: IMotorcycle): Promise<Motorcycle> {
    const result = await this._model.update(id, vehicle);
    if (!result) throw new Error(vehicleNotFound);
    return this.createMotorcycleDomain(result);
  }
}

export default MotorcycleService;