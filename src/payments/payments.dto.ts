
import { IsString, IsEnum, IsOptional, IsArray, IsNumber } from 'class-validator';
import { BlockchainChain, Details, PaymentStatus, TokenType } from './payment.schema';


export class CreatePaymentDto {
    @IsString()
    id: string;

    @IsString()
    paymentName: string;

    @IsString()
    link: string;

    @IsString()
    amount: string;

    @IsOptional()
    details?: Details;

    @IsEnum(TokenType)
    @IsOptional()
    token?: TokenType = TokenType.USDC;

    @IsEnum(BlockchainChain)
    @IsOptional()
    chain?: BlockchainChain = BlockchainChain.SUI;

    @IsEnum(PaymentStatus)
    @IsOptional()
    paymentStatus?: PaymentStatus = PaymentStatus.PENDING;
}