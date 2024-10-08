import aws from 'aws-sdk';
import { nanoid } from 'nanoid';
import jwt from 'jsonwebtoken';
import User from '../schema/User.js';



const s3 = new aws.S3({
    signatureVersion: 'v4',
    region: 'us-east-1',
    accessKeyId:process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    
})

const generateUploadURL = async () => {
    const date = new Date();
    const imageName = `${nanoid()}-${date.getTime()}.jpeg`;
    return await s3.getSignedUrlPromise('putObject', {
        Bucket: 'passpadi',
        Key: imageName,
        Expires:1000,
        ContentType:'image/jpeg'
    })
}
// username generator


const generateUsername = async(email) => {
    let username = email.split("@")[0];
    let usernameExists = await User.exists({
        "username": username
    })
    .then((result) => result)
    usernameExists ? username += nanoid().substring(0, 5) : "";
    return username
}




    // format Data to send
const formatDatatoSend = (user) => {
    const access_token = jwt.sign(
        { id: user._id, role:user.role }, process.env.SECRET_ACCESS_KEY
    )
    return {
        access_token,
        profile_img: user.profile_img,
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        role:user.role,
        email:user.email,
        wallet: user.wallet,
        escrow_wallet: user.escrow_wallet,
        userId:user._id
        }
    }

// upload imagge url route



const generateSlug = (title) => {
  let sanitizedTitle = title.replace(/[^a-zA-Z0-9\s]/g, '').replace(/\s+/g, "-").trim().toLowerCase();
  let appId = `${sanitizedTitle}`;
  return encodeURIComponent(appId);
};




export {
    generateSlug,
    formatDatatoSend,
    generateUploadURL,
    generateUsername,
    s3,
}