import Wishlist from "../models/Wishlist.js";

const addwishlistController = (req, res) => {
    const { id, poster, title, date, media_type } = req.body;

    if (!id || !title || !media_type) {
        return res.json({ message: "Please send all data" })
    }

    const wishlist = new Wishlist({
        id,
        poster,
        title,
        date,
        media_type,
        postedBy: req.user
    })
    wishlist.save()
        .then(saved => {
            return res.json({ saved })
        })
        .catch(err => {
            return res.json({ error: err })
        })
}

const mywishlistController = (req, res) => {
    Wishlist.find({ postedBy: req.user._id })
        .populate("postedBy", "_id name")
        .then(mywishlist => {
            res.json({ mywishlist })
        })
        .catch(err => {
            res.json({ error: err })
        })
}

const removeController = (req, res) => {

    Wishlist.findById(req.body.wishlistid)

    .then(found => {

        if (!found) {
            return res.status(422).json({ message: "This post does not exist" });
        }

        found.remove()
            .then((result) => {
                return res.json({ result })
            })
            .catch(err => {
                return res.json({ error: err })
            })
    })
}

export { addwishlistController, mywishlistController, removeController };