import { AccountModel, AddAccountModel, AddAccount, Encrypter, AddAccountRepository } from './db-add-account-protocols';

export class DbAddAccount implements AddAccount {
   constructor(
      private readonly encrypter: Encrypter,
      private readonly addAccountRepository: AddAccountRepository,
   ) { }

   async add(accountData: AddAccountModel): Promise<AccountModel> {
      const { name, email, password } = accountData;

      const hashedPassword = await this.encrypter.encrypt(password);

      await this.addAccountRepository.add(Object.assign({}, accountData, { password: hashedPassword }));

      return new Promise(resolve => resolve(null));
   }
}