import { HydratedDocument } from "mongoose";
import { Model } from "mongoose";

//interface
export interface IUser {
    id: string;
    role: "student";
    password: string;
    name: {
        firstName: string;
        middleName?: string;
        lastName: string;
    };
    dateOfBirth?: string;
    gender: "male" | "female";
    email?: string;
    contactNo: string;
    emergencyContactNo: string;
    presentAddress: string;
    permanentAddress: string;
}

export interface UserModel extends Model<IUser, {}, IUserMethods> {
    getAdminUsers(): Promise<HydratedDocument<IUser, IUserMethods>>;
}

// // statics
// interface UserModel extends Model<IUser> {
//     getAdminUsers(): IUser[];
// }


// instance methods
export interface IUserMethods {
    fullName(): string;
}
