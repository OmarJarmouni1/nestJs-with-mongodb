import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class User {
    @Prop({ unique: true, required: true })
    username: String;

    @Prop({ required: false })
    displayName?: String;

    @Prop({ required: false })
    avatarUrl?: String;
}

export const UserSchema = SchemaFactory.createForClass(User);