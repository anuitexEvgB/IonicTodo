import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersService } from './users/users.service';
import { UsersController } from './users/users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './models/user.model';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb+srv://local:12345@cluster0-vrq7n.mongodb.net/users',
      entities: [__dirname + '/**/*.model{.ts,.js}'],
      synchronize: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [AppController, UsersController],
  providers: [AppService, UsersService],
})
export class AppModule {}
