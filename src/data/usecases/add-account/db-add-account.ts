import { AccountModel } from "../../../domain/models/account";
import { AddAccount, AddAccountModel } from "../../../domain/usecases/add-account";
import { Encrypter } from "../../protocols/encrypter";

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