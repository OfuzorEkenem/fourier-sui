import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PaymentDocument = Payment & Document;

export enum PaymentStatus {
    PENDING = 'PENDING',
    SUCCESS = 'SUCCESS',
    DECLINED = 'DECLINED',
}

export enum BlockchainChain {
    SUI = 'SUI',
    ETHEREUM = 'ETHEREUM',
    POLYGON = 'POLYGON',
    SOLANA = 'SOLANA',
    BITCOIN = 'BITCOIN',
    APTOS = 'APTOS'
}

export enum TokenType {
    USDC = 'USDC',
    USDT = 'USDT',
    DAI = 'DAI',
    BUSD = 'BUSD',
    TUSD = 'TUSD',
}

export interface Details {
    [key: string]: any;
}

@Schema({ timestamps: true })
export class Payment {
    @Prop({ required: true })
    id: string;

    @Prop({ required: true })
    paymentName: string;

    @Prop({ required: true })
    link: string;

    @Prop({ required: true })
    amount: string;

    @Prop({ type: Object })
    details: Details;

    @Prop({ required: true })
    paymentLinks: string[];

    @Prop({ default: 0 })
    numberOfPayments: number;

    @Prop({
        type: String,
        enum: TokenType,
        default: TokenType.USDC
    })
    token: TokenType;

    @Prop({
        type: String,
        enum: TokenType,
        default: TokenType.USDC
    })
    chain: BlockchainChain
    @Prop({
        type: String,
        enum: PaymentStatus,
        default: PaymentStatus.PENDING
    })
    paymentStatus: PaymentStatus;
}

export const PaymentSchema = SchemaFactory.createForClass(Payment);