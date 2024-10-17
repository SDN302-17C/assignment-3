import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { StudentService } from './student.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateStudentDto, UpdateStudentDto } from './dto/student.dto';

@ApiTags('Students')
@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  async create(@Body() createStudentDto: CreateStudentDto) {
    return await this.studentService.create(createStudentDto);
  }

  @Get()
  async getAll() {
    return await this.studentService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    return await this.studentService.getById(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateStudentDto: UpdateStudentDto,
  ) {
    return await this.studentService.update(id, updateStudentDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.studentService.delete(id);
  }
}
