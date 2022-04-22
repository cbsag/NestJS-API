import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { UserModule } from './user/user.module';

// Controllers Handle Incoming request and response 
// Providers are services responsible for business logic


// decorator adds metadate to that class
@Module({
  imports: [AuthModule, UserModule, BookmarkModule],
})
export class AppModule {}


