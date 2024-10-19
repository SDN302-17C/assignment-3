import { Module } from '@nestjs/common';
import { InfoController } from './info.controller';
import { InfoService } from './info.service';
import { MongooseModule } from '@nestjs/mongoose';
import { InfoSchema } from 'src/schema/info.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Info', schema: InfoSchema }]),
  ],
  controllers: [InfoController],
  providers: [InfoService],
  exports: [InfoService],
})
export class InfoModule {}
