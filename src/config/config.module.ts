import { Global, Module } from '@nestjs/common';
import { ConfigSrevice } from './config.service';

@Global()
@Module({
    controllers: [],
    providers: [
        ConfigSrevice,
    ],
    exports: [
        ConfigSrevice,
    ],
})

export class ConfigModule {}
