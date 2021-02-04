import React, { useState } from 'react'
import { useParams } from 'react-router-dom'


// useState(()=>{
// console.log('hello')
// },[])

function ArticleDetail() {
    let {id} = useParams();
    return (
        <div>
            <h1>Article Detail page!!!</h1>
            <h2>Article ID is {id}</h2>
        </div>
    )
}

export default ArticleDetail
