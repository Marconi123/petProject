import { Module } from '@nestjs/common';
import { CustomerModule } from './customer/customer.module';
import { AccountsModule } from './accounts/accounts.module';
import { TransactionsModule } from './transactions/transactions.module';

@Module({
  imports: [CustomerModule, AccountsModule, TransactionsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
