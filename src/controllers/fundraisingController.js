import mongoose from "mongoose";
import { FundraiserSchema } from "../models/fundraiserModel.js";


const Fundraiser = mongoose.model('Fundraiser', FundraiserSchema);

export const addNewFundraiser = (req, res) => {
    let newFundraiser = new Fundraiser(req.body);

    newFundraiser.save((err, fundraiser) => {
        if (err) {
            res.send(err);
        }
        res.json(fundraiser);
    });
}