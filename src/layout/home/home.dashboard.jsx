import React from 'react';
import { useTitle } from "../../utils/hooks";

const HomeDashboard = () => {
  useTitle("Home");
  return (
    <div>
      home.dashboard, you are authorized.
    </div>
  )
}

export default HomeDashboard