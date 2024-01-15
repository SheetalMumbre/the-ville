import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

/*
TO DO: 
1.  Check How <Outlet /> is used. Or is there any need to use it?
2.  Instead create Home container and replace it
*/

const Navigation = () => {

  return (
    <Fragment>
      <div></div>
      <Outlet /> 
    </Fragment>
  );

}
export default Navigation;
