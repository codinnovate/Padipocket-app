import mongoose, { Schema } from "mongoose";

let profile_imgs_name_list = ["Garfield", "Tinkerbell", "Annie", "Loki", "Cleo", "Angel", "Bob", "Mia", "Coco", "Gracie", "Bear", "Bella", "Abby", "Harley", "Cali", "Leo", "Luna", "Jack", "Felix", "Kiki"];
let profile_imgs_collections_list = ["notionists-neutral", "adventurer-neutral", "fun-emoji"];

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        lowercase: true,
        required: true,
        minlength: [3, 'fullname must be 3 letters long'],
    },
    lastName: {
        type: String,
        lowercase: true,
        required: true,
        minlength: [3, 'fullname must be 3 letters long'],
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    password: String,
    username: {
        type: String,
        minlength: [3, 'Username must be 3 letters long'],
        unique: true,
    },
    profile_img: {
        type: String,
        default: () => {
            return `https://api.dicebear.com/6.x/${profile_imgs_collections_list[Math.floor(Math.random() * profile_imgs_collections_list.length)]}/png?seed=${profile_imgs_name_list[Math.floor(Math.random() * profile_imgs_name_list.length)]}`
        } 
    },
    wallet: {
        type: Number,
        default: 0,
    },
    escrow_wallet: {
        type: Number,
        default: 0,
    },
    verified: {
        type: Boolean,
        default: false,
    },
    address: {
        street: {
            type: String,
        },
        city: {
            type: String,
        },
        state: {
            type: String,
        },
        postalCode: {
            type: String,
        },
        country: {
            type: String,
            default: 'Nigeria', // or whatever default country you prefer
        }
    }
}, 
{ 
    timestamps: {
        createdAt: 'joinedAt'
    } 
});


export default mongoose.model("users", userSchema);