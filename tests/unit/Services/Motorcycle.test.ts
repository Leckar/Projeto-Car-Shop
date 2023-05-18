import { Model } from 'mongoose';
import { expect } from 'chai';
import Sinon from 'sinon';

import MotorcycleService from '../../../src/Services/MotorcycleService';
import { motorcyclesArr, newMotorcycle } from './Mocks/MotorcycleMocks';

const service = new MotorcycleService();

describe('The Motorcycle service layer should work properly:', function () {
  describe('Verifies if a POST works coherently', function () {
    it('should allow a valid request to go through', async function () {
      Sinon.stub(Model, 'create').resolves(motorcyclesArr[1]);
      const result = await service.createVehicle(newMotorcycle);
      expect(result).to.deep.eq(motorcyclesArr[1]);
    });
  });
  describe('Verifies if a PUT works coherently', function () {
    afterEach(function () {
      Sinon.restore();
    });
    it('should return an updated vehicle data with a valid request', async function () {
      Sinon.stub(Model, 'findOneAndUpdate').resolves(motorcyclesArr[2] as any);
      const result = await service.update('634852326b35b59438fbea32', newMotorcycle);
      expect(result).to.deep.eq(motorcyclesArr[2]);
    });
    it(
      'should throw an error when the request is done with an invalid id',
      async function () {
        try {
          Sinon.stub(Model, 'findOneAndUpdate').resolves(undefined);
          await service.update('64662d0d7df9409966ab505d', newMotorcycle);
        } catch (error) {
          const { message } = error as Error;
          expect(message).to.eq('Motorcycle not found');
        }
      },
    );
  });
  describe('Verifies if a GET returns the complete vehicle list', function () {
    afterEach(function () {
      Sinon.restore();
    });
    it('should return a list with all motorcycles in the document', async function () {
      Sinon.stub(Model, 'find').resolves(motorcyclesArr);
      const result = await service.getAll();
      expect(result).to.deep.eq(motorcyclesArr);
    });
  });
  describe('Verifies if a GET request with a specific id works as intented', function () {
    afterEach(function () {
      Sinon.restore();
    });
    it('should return an object when using a valid id', async function () {
      Sinon.stub(Model, 'findById').resolves(motorcyclesArr[0]);
      const result = await service.getById('634852326b35b59438fbea2f');
      expect(result).to.deep.eq(motorcyclesArr[0]);
    });
    it('should throw an error when using an invalid id', async function () {
      try {
        Sinon.stub(Model, 'findById').resolves(undefined);
        await service.getById('64662ab97df9409966ab505XOXO');
      } catch (error) {
        const { message } = error as Error;
        expect(message).to.eq('Invalid mongo id');
      }
    });
    it('should throw an error when using an id that matches no object', async function () {
      try {
        Sinon.stub(Model, 'findById').resolves(undefined);
        await service.getById('6466378bced50e0ef0d24dc4');
      } catch (error) {
        const { message } = error as Error;
        expect(message).to.eq('Motorcycle not found');
      }
    });
  });
});
