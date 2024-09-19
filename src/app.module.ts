import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './auth/user.entity'; // We'll create this entity
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost', // Change this to your database host
      port: 5432,        // PostgreSQL default port
      username: 'postgres',
      password: '515130',
      database: 'nestjs_db', // The name of your database
      entities: [User],
      synchronize: true, // This will automatically sync the database (not recommended in production)
    }),
    AuthModule,  
  ],
})
export class AppModule {}
