import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div>
    <h1>Page is not found</h1>
    <Link to="/">To root page</Link>
  </div>
);

export default NotFound;
