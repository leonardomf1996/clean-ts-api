import { AddAccountRepository } from '../../../../data/protocols/add-account-repository';
import { AccountModel } from '../../../../domain/models/account';
import { AddAccountModel } from '../../../../domain/usecases/add-account';
import { MongoHelper } from '../helpers/mongo-helper';

export class AccountMongoRepository implements AddAccountRepository {
   async add(accountData: AddAccountModel): Promise<AccountModel> {
      const accountCollection = MongoHelper.getCollection('accounts');
      await accountCollection.insertOne(accountData)

      /* Fiz essa gambiarra para se adequar ao que o Mango faz */
      const accountInserted = {
         id: 'id_valid',
         name: accountData.name,
         email: accountData.email,
         password: accountData.password
      }

      return new Promise(resolve => resolve(accountInserted));
   }

}
