import { Link, Outlet} from 'react-router-dom';

function PostLayout()
{
    return(

<>
        <div className="container">
        <h1 className="text-center">It is used outlet concept and also useParams Hook concept</h1>


        <ul className='submenu'>

<li><Link to="/postpage/1">postpage 1</Link></li>
<li><Link to="/postpage/2">postpage 2</Link></li>
<li><Link to="/postpage/3">postpage 3</Link></li>
<li><Link to="/postpage/newpost">New Post</Link></li>
</ul>
<Outlet />
      
</div>
</>
    )
}
export default PostLayout;