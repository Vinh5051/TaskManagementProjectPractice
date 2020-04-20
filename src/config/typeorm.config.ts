import { TypeOrmModule } from '@nestjs/typeorm';
export const typeOrmConfig: TypeOrmModule = {
    type: 'postgres',
    host: 'localhost',
    port: 6969,
    username: 'postgres',
    password: 'root',
    database: 'TaskManagement',
    entities: [__dirname + '/../**/**/**/*.entity.{js,ts}'],
    synchronize: true,
};
