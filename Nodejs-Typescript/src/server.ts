import  express from 'express';
import  morgan from 'morgan';
import helmet from 'helmet';
import mongoose from 'mongoose';
import compression from 'compression';
import cors from 'cors';

//import routes
import indexRoutes from './routes/indexRoutes';
import PostRoutes from './routes/PostRoutes'
import UserRoutes from './routes/UserRoutes';


class Server{
  public app:express.Application;
  
  constructor(){
  this.app = express();
  this.config();
  this.routes();
 }

 config(){

   const MONGO_URI = "mongodb://localhost/restapi";
   mongoose.set('useFindAndModify',true);
   mongoose.connect(MONGO_URI || process.env.MONGO_URI,{
      useNewUrlParser :true,
      useCreateIndex: true
   })
   .then(db => console.log('DB is Connected'));

    //settings
    this.app.set('port',process.env.PORT || 4000);
    //middlewares
    this.app.use(morgan('dev'));
    this.app.use(express.json());
    this.app.use(express.urlencoded({extended:false}))
    this.app.use(helmet());
    this.app.use(compression());
    this.app.use(cors());
  
 }

 routes(){
    this.app.use(indexRoutes);
    this.app.use('/api/posts',PostRoutes);
    this.app.use('/api/users', UserRoutes);
 }

 start(){
     this.app.listen(this.app.get('port'),()=>{
        console.log('Server is listenning on port', this.app.get('port'));
     });
 }


}
const server = new Server();
server.start();

