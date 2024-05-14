import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class createUserDto {
    @IsNotEmpty()
    @IsString()
    username: String;
    @IsString()
    @IsOptional()
    displayName?: String;
} 