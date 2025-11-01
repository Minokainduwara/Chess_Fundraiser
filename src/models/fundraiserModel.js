import mongoose from "mongoose";
const Schema = mongoose.Schema;

export const FundraiserSchema = new Schema({

    organizationName: {
        type: String,
        required: 'Enter the organization name'
    },

    RupeesAmount: {
        type: Number,
        required: 'Enter the amount needed'
    },

    comment : {
        type: String
    },

    createdAt: {
        type: Date,
        default: Date.now
    }

})
