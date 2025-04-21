import { NavLink } from "react-router";


export default function NotFoundPage() {

  return (
   
   <>
   <div style={{display:'flex', flexDirection: 'column'}}>
     <h1 style={{color: 'red',padding: '155px',textAlign: 'center'}}>NOT FOUND PAGE</h1>
     <NavLink to='/' style={{textDecoration:'none', textAlign: 'center', marginBottom: '20px'}}>На головну</NavLink>
   </div>
 
   </>
 
)
}