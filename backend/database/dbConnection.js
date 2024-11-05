import mongoose from "mongoose";

export const dbConnection = () => {
mongoose.connect(process.env.MONGODB_URL,{
    dbName: "Genius_Academy",
})
.then(() => {
    console.log("Connected To Database");
})
.catch((error) => {
    console.log("Error Occured While Connecting To Database");
});
};