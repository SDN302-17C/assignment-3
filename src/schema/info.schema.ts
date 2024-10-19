import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Info {
  @Prop({ required: true, unique: true })
  studentCode: string;

  @Prop({ required: true })
  fullName: string;
}

export const InfoSchema = SchemaFactory.createForClass(Info);
