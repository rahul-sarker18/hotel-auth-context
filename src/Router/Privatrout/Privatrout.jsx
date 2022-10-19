import React, {  useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Authcontext } from '../../Context/Usercontext';

const Privatrout = ({children}) => {
    const {cuser ,loder} = useContext(Authcontext)
    const location =useLocation();
    
    if(loder){
        return <div className='text-center w-1/5 mx-auto mt-16'>
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
        </div>
    }

    if(cuser && cuser.uid){
        return children;
    }
    return <Navigate to='/login'  state={{ from: location }} replace></Navigate>
    
};

export default Privatrout;