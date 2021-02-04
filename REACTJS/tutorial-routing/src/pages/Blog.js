import React from 'react'
import {Link, Route} from 'react-router-dom'
import ArticleDetail from './ArticleDetail'
function Blog({data}) {
    return (
        <div>
            <h1>Blog page</h1>
            {console.log(data)}
            {
                data.map((item,i)=>{
                    return (
                        <Link key={i} to={`/blog/${item.id}`} style={{'display':'block'}}>{item.title}</Link>
                    )
                })
            }
            <Route path='/blog/:id' render={()=><ArticleDetail/>} />
        </div>
    )
}

export default Blog
