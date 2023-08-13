import mongoose from 'mongoose';

const Connection = async (USERNAME, PASSWORD) => {
    const URL = `mongodb://${USERNAME}:${PASSWORD}@ac-i882wqr-shard-00-00.wfetr1s.mongodb.net:27017,ac-i882wqr-shard-00-01.wfetr1s.mongodb.net:27017,ac-i882wqr-shard-00-02.wfetr1s.mongodb.net:27017/?ssl=true&replicaSet=atlas-x05m0q-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;