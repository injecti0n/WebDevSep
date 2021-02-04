import React from 'react'
import {Link} from 'react-router-dom'
function NavigationBar() {
    return (
        <div>
           <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </nav> 
        </div>
    )
}

export default NavigationBar
