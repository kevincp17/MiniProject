// 1. pastikan selalu import dotenv di line pertama
import "dotenv/config";
import config from './config/config'
import express from "express";
import cors from "cors";
import compress from 'compression';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import middleware from "./helpers/middleware";

//for access models to db
import models, { sequelize } from "./models/init-models";
import routes from './routes/IndexRoute'
import uploadDownload from "./helpers/UploadDownloadHelper";

// declare port
const port = process.env.PORT || 3001;

const app = express();
// parse body params and attache them to req.body
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
// use helmet spy bisa dikenali SEO
app.use(helmet())
// secure apps by setting various HTTP headers
app.use(compress())
// enable CORS - Cross Origin Resource Sharing
app.use(cors());

// load models dan simpan di req.context
app.use(async (req, res, next) => {
    req.context = { models };
    next();
});


//auth.setMiddleware(app);


// call routes
app.use(config.URL_DOMAIN + "/auth", routes.UserRoute)
app.use(config.URL_DOMAIN + "/batch", routes.BatchRoute)
app.use(config.URL_DOMAIN + "/program_entity", routes.ProgramEntityRoute)
// app.use(config.URL_IMAGE+"/program_entity",routes.ProgramEntityRoute)

app.use(config.URL_DOMAIN+"/address_type",routes.AddressTypeRoute)
app.use(config.URL_DOMAIN+"/country",routes.CountryRoute)
app.use(config.URL_DOMAIN+"/province",routes.ProvinceRoute)
app.use(config.URL_DOMAIN+"/city",routes.CityRoute)
app.use('/app/category',routes.CateRoute)
app.use('/app/edit',routes.parentCateRoute)

//dash batch evaluation (soon)

// Bootcamp Program View
app.use(config.URL_API + '/bootcamp-program', routes.BootcampProgramRoute)
app.use(config.URL_API + '/student-review', routes.StudentReviewRoute)
// Dashboard Apply - Bootcamp
app.use(config.URL_API + "/apply_bootcamp", routes.DashboardApplyRoute)
app.use(config.URL_API + "/bootcamp_list", routes.BootcampListRoute)
// show images
app.use(config.URL_API + "/images/:filename", uploadDownload.showProductImage)
// show cv
app.use(config.URL_API + "/cv/:filename", uploadDownload.showUserCv)
// Create Batch
app.use(config.URL_API+"/batch", routes.BatchRoute)
// Batch Evaluation Edit G
app.use(config.URL_API+'/BatchOk',routes.BatchRouteOk)




//use middleware to handle error from others modules
app.use(middleware.handleError);
app.use(middleware.notFound);


// set to false agar tidak di drop tables yang ada didatabase
const dropDatabaseSync = false;

sequelize.sync({ force: dropDatabaseSync }).then(async () => {
    if (dropDatabaseSync) {
        console.log("Database do not drop");
    }

    app.listen(port, () => {
        console.log(`Server is listening on port ${port}`)
    });

})


export default app;
