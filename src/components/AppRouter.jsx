import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import { routes } from '../router/routs';
import NotFound from '../pages/NotFound';

export const AppRouter = () => {
  return (
      <Routes>
        {routes.map(({ path, component, index }, i) => (
            <Route key={ `route-${i}` } path={ path } Component={ component } index={ index }/>
        ))}
        <Route path="*" element={<NotFound/>}/>
        <Route path="/" element={<Navigate to='/todos'/>}/>
      </Routes>
  )
}