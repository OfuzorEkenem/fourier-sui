import * as dotenv from 'dotenv';
dotenv.config();

export default () => ({
    PORT: process.env.PORT,
    DB_URI: "mongodb+srv://ofuzor:ofuzor2018@cluster0.qjl8f.mongodb.net/fourierpay_sui?retryWrites=true&w=majority",
})