const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI);

        console.log('mongoDB connected');
    } catch (error){
        console.log(error);
        process.exit(1);
    }
};

module.exports = connectDB


//Use this function here in server.js to connect to mongoDB and start the server (if you preffer)

// const startServer = async ()=>{
//     try {
//         await connectDB();
//         app.listen(PORT, () => {
//             console.log(`Server is running on port ${PORT}`);
//         });
//     } catch (error){
//         console.log(error);
//     }
// };
// startServer();