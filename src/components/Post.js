import { useParams } from "react-router-dom";


function Post()
{

    const {id} = useParams()
    
    return(

<div className="container">
        <h1 className="text-center">Post Page</h1>

      
        <p>User id is <b>{id}</b></p>

</div>
    )
}
export default Post;