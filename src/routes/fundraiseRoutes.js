import { addNewFundraiser } from "../controllers/fundraisingController";

const routes = (app) => {
    //fundraiser routes
    app.route('/fundraising')
        .get((req, res) => {
            // Logic to get all fundraising campaigns
            res.send('Get all fundraising campaigns');
        })
        
        .post(addNewFundraiser);

    
    //fundraiser by ID routes
    app.route('/fundraising/:fundraiserId')
        .get((req, res) => {
            // get a specific fundraising campaign by ID
            res.send(`Get fundraising campaign with ID: ${req.params.fundraiserId}`);
        })
        .put((req, res) => {
            // update a specific fundraising campaign by ID
            res.send(`Update fundraising campaign with ID: ${req.params.fundraiserId}`);
        })
        .delete((req, res) => {
            // delete a specific fundraising campaign by ID
            res.send(`Delete fundraising campaign with ID: ${req.params.fundraiserId}`);
        });
}

export default routes;