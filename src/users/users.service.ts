import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './users.schema';
import { UserDto } from './user.dto';


@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User.name) private userModel: Model<UserDocument>
    ) { }

    async create(createUserDto: UserDto): Promise<User> {
        const createdUser = new this.userModel(createUserDto);
        return createdUser.save();
    }

    async findAll(): Promise<User[]> {
        return this.userModel.find().populate('payment_ids').exec();
    }

    async findOne(id: string) {
        return await this.userModel.findOne({ id }).populate('payment_ids').exec();
    }

    async updatePaymentLinks(id: string, numberOfLinks: number) {
        return this.userModel.findOneAndUpdate(
            { id },
            { numberOfPaymentLinks: numberOfLinks },
            { new: true }
        ).exec();
    }
}
