import { AccountModel, AddAccountModel, AddAccount, Encrypter } from './db-add-account-protocols';

export class DbAddAccount implements AddAccount {
   constructor(
      private readonly encrypter: Encrypter,
   ) { }

   async add(account: AddAccountModel): Promise<AccountModel> {
      const { name, email, password } = account;

      await this.encrypter.encrypt(password)

      return new Promise(resolve => resolve(null));
   }
}