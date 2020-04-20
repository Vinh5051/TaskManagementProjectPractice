import {Module} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigSrevice } from '../../config';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: async (configService: ConfigSrevice) => {
                return new Promise(resolve => resolve({
                    ...configService.getJSON('DATABASE'),
                    entities: [],
                    synchronize: true,
                }));
            },
        }),
    ],
    controllers: [],
    providers: [],
    exports: [],
})

export class DatabaseModule {}
