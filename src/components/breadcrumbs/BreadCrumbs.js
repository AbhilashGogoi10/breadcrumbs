import React from 'react'
import { Link, useLocation } from 'react-router-dom'


const BreadCrumbs = () => {

    const {pathname} = useLocation();
    const pathnames = pathname.split("/").filter((x)=>x);
    let BreadCrumbPath = ""

  return (
    <div className='breadCrumbs'>
       {pathnames.length>0 &&  <Link to="/">Home</Link>}
       {pathnames.map((name, index)=>{
        BreadCrumbPath += `/${name}`;
        const islast = index === pathnames.length - 1;
        return(

            islast? <span key={BreadCrumbPath}>/ {name}</span>
        :(
            <span key={BreadCrumbPath}>
                 /<Link to={BreadCrumbPath}>{name}</Link>
            </span>
        )
        )
         
       })}
       
    </div>
  )
}

export default BreadCrumbs