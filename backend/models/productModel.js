import mongoose from 'mongoose';
const productSchema = new mongoose.Schema(
    {
        title: { type: String, required: true, unique: true },
        imageUrl: {
            front: { type: String, required: true }, 
            back: { type: String, required: true }},
        category: { type: String, required: false },
        description: { type: String, required: false },
        price: { type: Number, required: true },
        countInStock: { type: Number, required: true },
    },
    {
        timestamps: true,
    }
);

const Product = mongoose.model('Product', productSchema);

export default Product;