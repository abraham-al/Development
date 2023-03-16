import { useState, useEffect } from 'react'
import BlogList from './Bloglist';


const Home = () => {
    let name = 'ABCDef'
    const [blogs, setBlogs] = useState([
        { title: "My new Website", body: "lorem ipsum ...", author:"Abraham", id:1 },
        { title: "Welcome Party", body: "lorem ipsum ...", author:"Abie", id:2 },
        { title: "Web Dev", body: "lorem ipsum ...", author:"Melaku", id:3 }
    ]);

    const handleDelete = (id) => {

    }

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title = "All Blogs"/>
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === "Abraham")} title = "Abraham's Blogs"/> */}
        </div>
     );
}
 
export default Home;