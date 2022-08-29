import  { Request,Response,Router,NextFunction, response} from 'express';
import Post from '../models/Post';



class PostRoutes{
    router : Router;
    constructor(){
    this.router = Router();
       this.routes();
    }

   public async getPosts(req:Request,res:Response): Promise<void> {
        const posts = await Post.find();
        res.json(posts);

    }

    public async getPost(req:Request,res:Response): Promise<void> {
        console.log(req.params.url)
        const post = await Post.findOne({url:req.params.url});
        console.log(post)
        res.json(post)
        
    }

    public async createPost(req:Request,res:Response): Promise<void> {
        console.log(req.body)
       const {title,url,content,image} = req.body;
       const newPost = new Post({title,url,content,image});
         await newPost.save();
       console.log(newPost);
       res.json({data:newPost});
    }

    public async updatePost(req:Request,res:Response): Promise<void> {
        const { url } = req.params;
        console.log(req.body);
        const post = await Post.findOneAndUpdate({url:url},req.body);
        res.json('updated')
        res.json(post)

    }
    public async deletePost(req:Request,res:Response): Promise<void> {
        const { url } = req.params;
        await Post.findOneAndDelete({url});
        res.json({response:'Post Deleted Successfull'})
        
    }

    routes(){
      this.router.get('/',this.getPosts);
      this.router.get('/:url',this.getPost);
      this.router.post('/',this.createPost);
      this.router.put('/:url',this.updatePost)
      this.router.delete('/:url',this.deletePost);
    }


}

const postRoutes = new PostRoutes();
export default postRoutes.router;