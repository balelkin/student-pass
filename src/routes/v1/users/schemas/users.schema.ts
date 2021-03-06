import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

import { RolesEnum } from '@decorators/roles.decorator';

@Schema()
export class User {
  @Prop({
    required: true,
    type: String,
  })
  picture: string = '';

  @Prop({
    required: true,
    type: String,
  })
  firstName: string = '';

  @Prop({
    required: true,
    type: String,
  })
  lastName: string = '';

  @Prop({
    required: true,
    unique: true,
    type: String,
  })
  email: string = '';

  @Prop({
    type: Boolean,
  })
  verified: boolean = false;

  @Prop({
    type: RolesEnum,
    required: false,
    default: RolesEnum.user,
  })
  role: RolesEnum = RolesEnum.user;
}

export type UserDocument = User & Document;

export const UserSchema = SchemaFactory.createForClass(User).set('versionKey', false);

