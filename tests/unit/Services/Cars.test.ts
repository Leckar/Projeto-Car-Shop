import { Model } from 'mongoose';
import { expect } from 'chai';
import Sinon from 'sinon';

import CarService from '../../../src/Services/CarService';
import { carsArr, newCar } from './Mocks/CarMocks';

const service = new CarService();

describe('The Cars service layer should work properly:', function () {
  describe('Verifies if a POST works coherently', function () {
    it('should allow a valid request to go through', async function () {
      Sinon.stub(Model, 'create').resolves(carsArr[1]);
      const result = await service.createVehicle(newCar);
      expect(result).to.deep.eq(carsArr[1]);
    });
  });
  describe('Verifies if a PUT works coherently', function () {
    afterEach(function () {
      Sinon.restore();
    });
    it('should return an updated vehicle data with a valid request', async function () {
      Sinon.stub(Model, 'findOneAndUpdate').resolves(carsArr[1] as any);
      const result = await service.update('64662d0d7df9409966ab505d', newCar);
      expect(result).to.deep.eq(carsArr[1]);
    });
    it(
      'should throw an error when the request is done with an invalid id',
      async function () {
        try {
          Sinon.stub(Model, 'findOneAndUpdate').resolves(undefined);
          await service.update('64662d0d7df9409966ab505d', newCar);
        } catch (error) {
          const { message } = error as Error;
          expect(message).to.eq('Car not found');
        }
      },
    );
  });
  describe('Verifies if a GET returns the complete vehicle list', function () {
    it('should return a list with all cars in the document', async function () {
      Sinon.stub(Model, 'find').resolves(carsArr);
      const result = await service.getAll();
      expect(result).to.deep.eq(carsArr);
    });
  });
  describe('Verifies if a GET request with a specific id works as intented', function () {
    afterEach(function () {
      Sinon.restore();
    });
    it('should return an object when using a valid id', async function () {
      Sinon.stub(Model, 'findById').resolves(carsArr[0]);
      const result = await service.getById('64662ab97df9409966ab505b');
      expect(result).to.deep.eq(carsArr[0]);
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
        await service.getById('6466350fced50e0ef0d24dc2');
      } catch (error) {
        const { message } = error as Error;
        expect(message).to.eq('Car not found');
      }
    });
  });
});