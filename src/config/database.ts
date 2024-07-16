import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI || 'mongodb+srv://realirfanashraf:realirfanashraf@payment-gateway-cluster.ow4jvip.mongodb.net/?retryWrites=true&w=majority&appName=payment-gateway-cluster');
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
