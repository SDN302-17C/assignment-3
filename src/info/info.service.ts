import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Info } from 'src/schema/info.schema';

@Injectable()
export class InfoService {
  constructor(
    @InjectModel(Info.name) private readonly studentModel: Model<Info>,
  ) {}

  async getAll() {
    const students = await this.studentModel
      .find()
      .select('-_id fullName studentCode')
      .exec();

    if (!students) {
      throw new NotFoundException('No students found!');
    }

    return {
      success: true,
      data: students,
    };
  }
}
