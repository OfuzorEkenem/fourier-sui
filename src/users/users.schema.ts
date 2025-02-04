// user.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Payment } from 'src/payments/payment.schema';

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
    @Prop({ required: true })
    id: string;

    @Prop({ default: 0 })
    numberOfPaymentLinks: number;

    @Prop({ type: [{ type: Types.ObjectId, ref: 'Payment' }] })
    payment_ids: Payment[];

    @Prop({ required: true })
    agent: string;

    @Prop()
    createdAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
