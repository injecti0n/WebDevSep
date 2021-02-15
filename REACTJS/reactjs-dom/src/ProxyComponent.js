import React, { useEffect } from 'react'
import fetch from 'node-fetch'
  // npm install http-proxy-middleware
function ProxyComponent() {
    useEffect(()=>{
        fetch('/posts')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
    },[])
    return (
        <div>
            
        </div>
    )
}

export default ProxyComponent
