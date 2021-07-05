import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema.Types

const wishlistSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    poster: {
        type: String,
        default: "https://www.movienewz.com/img/films/poster-holder.jpg"
    },
    title: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    media_type: {
        type: String,
        required: true
    },
    postedBy: {
        type: ObjectId,
        ref: "User"
    }
})

const res = mongoose.model("Wishlist", wishlistSchema);
export default res;