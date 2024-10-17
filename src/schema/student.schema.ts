import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Student {
  @Prop({ required: true, unique: true })
  studentCode: string;

  @Prop({ required: true })
  fullName: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  address: string;

  @Prop({ required: true })
  gender: 'male' | 'female';

  @Prop({ default: false })
  isDeleted: boolean;
}

export const StudentSchema = SchemaFactory.createForClass(Student);
