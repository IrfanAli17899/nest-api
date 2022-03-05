import { JoiSchema, JoiSchemaOptions } from 'nestjs-joi';
import * as joi from 'joi';
@JoiSchemaOptions({
  allowUnknown: false,
})
export class CreateTodoDto {
  @JoiSchema(
    joi
      .string()
      .required()
      .messages({ 'any.required': 'todo title is required' }),
  )
  title: string;

  @JoiSchema(
    joi
      .string()
      .required()
      .messages({ 'any.required': 'todo description is required' }),
  )
  description: string;
}
