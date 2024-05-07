import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "src/schemas/User.schema";
import { createUserDto } from "./dto/CreateUser.dto";
import { updateUserDto } from "./dto/UpdateUser.dto";

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModul: Model<User>){
    }
    createUser(createUserDto: createUserDto) {
        const newUser = new this.userModul(createUserDto);
        return newUser.save();
    }
    getUsers() {
        return this.userModul.find()
    }

    getUserById(id: String) {
        return this.userModul.findById(id);
    }

    updateUser(id: string, updateUserDto: updateUserDto) {
       return this.userModul.findByIdAndUpdate(id, updateUserDto, { new: true });
    }

    deleteUser(id: string) {
        return this.userModul.findByIdAndDelete(id);
    }

} 