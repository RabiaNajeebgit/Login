import React, {useContext}from "react";
import {loginUserIdentifier} from '../Login/Login';
import Navigation from "./Navigation";
const Home=()=>
{
   const getTrackVariable =useContext(loginUserIdentifier);

    return(<>
    {getTrackVariable===true?
    <div>
        <Navigation valuetoDirecttheNavigation={getTrackVariable}></Navigation>
    </div>:''}
    </>)

}
export default Home;