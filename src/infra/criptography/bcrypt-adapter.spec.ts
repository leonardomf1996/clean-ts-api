import bcrypt from 'bcrypt';
import { BcryptAdapter } from './bcrypt-adapter';

jest.mock('bcrypt', () => ({
   async hash(): Promise<string> {
      return new Promise(resolve => resolve('hashed_password'))
   }
}))

const salt = 12;
const makeSut = (): BcryptAdapter => {
   const sut = new BcryptAdapter(salt);

   return sut;
}

describe('Bcrypt Adapter', () => {
   test('Should call bcrypt with correct values', async () => {
      const sut = makeSut();

      const hashSpy = jest.spyOn(bcrypt, 'hash');
      await sut.encrypt('any_value');

      expect(hashSpy).toHaveBeenCalledWith('any_value', salt)
   });

   test('Should return a hash on success', async () => {
      const sut = makeSut();

      const hash = await sut.encrypt('any_value');

      expect(hash).toBe('hashed_password');
   });
});