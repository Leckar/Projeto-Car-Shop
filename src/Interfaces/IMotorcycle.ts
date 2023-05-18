import IVehicle from './IVehicle';

interface IMotorcycle extends IVehicle {
  category: number;
  engineCapacity: number;
}

export default IMotorcycle;