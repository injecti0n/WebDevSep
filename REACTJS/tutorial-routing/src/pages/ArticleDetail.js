import React from 'react'
import { useParams } from 'react-router-dom'


function ArticleDetail({single}) {

    let {id} = useParams();

    return (
        <div>
            <h1>Article Detail page!!!</h1>
            <h2>Article ID is {id}</h2>
            {console.log(single)}
            <h3 style={{'display':'block'}}>Article TITLE: {single.title}</h3>
            <p>{single.body}</p>
        </div>
    )
}

export default ArticleDetail
