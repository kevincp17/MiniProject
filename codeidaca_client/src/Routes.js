import React from 'react';
import { Navigate, useRoutes,Outlet,useNavigate } from 'react-router-dom';
import AppLayout from './component/layout/AppLayout';
import LandingPage from './component/layout/LandingPageTest';
import MainLayout from './component/layout/MainLayout';
import Page404 from './views/404/Page404';
import Bootcamp from './views/bootcamp/Bootcamp'
import Signin from './component/layout/Signin';
import Dashboard from './views/app/dashboard/Dashboard';
import Candidat from './views/app/candidat/Candidat';
import Batch from './views/app/batch/Batch';
import Curriculum from './views/app/curriculum/Curriculum';
import Hiring from './views/app/hiring/Hiring';
import Setting from './views/app/setting/Setting';
import Talent from './views/app/talent/Talent'
import BlankLayout from './component/layout/BlankLayout';
import Signup from './component/layout/Signup';
import Placement from './views/app/placement/Placement';
import Location from './views/app/setting/MasterLocation/indexLocation'
import Category from './views/app/setting/MasterCategory/indexCategory'
import Module from './views/app/setting/MasterModule/indexModule'
import Skill from './views/app/setting/MasterSkill/indexSkill'
import BatchEva from './views/app/batch/BatchStudentEvaluation';



export default function Routes(isLoggedIn) {
  return useRoutes([
    {
      path: '/',
      element: <LandingPage/>,
      children: [
        { path: 'signin', element: <Navigate to="/auth/signin"  />  },
        { path: 'signup', element: <Navigate to="/auth/signup"  />  },
        { path: 'bootcamp', element: <Bootcamp/> },
        { path: '404', element: <Page404 /> },
        { path: 'Location', element: <Location /> },
        { path: 'Setting', element: <Setting />,children:[
          { path: 'Location', element: <Location /> },
          { path: 'Category', element: <Category /> },
          { path: 'Module', element: <Module /> },
          { path: 'Skill', element: <Skill /> },
        ] },
      ]
    },
    {
      path: '/auth',
      element: <BlankLayout/>,
      children: [
        { path: 'signin', element: <Signin/> },
        { path: 'signup', element: <Signup/> },
      ]
    },
    {
      path: '/app',
      element:  <AppLayout/>,
      children: [
        { path: 'dashboard', element: isLoggedIn ? <Dashboard/> : <Navigate to="/auth/signin"/>},
        { path: 'candidat', element: isLoggedIn ? <Candidat/>: <Navigate to="/auth/signin"/> },
        { path: 'batch', element: isLoggedIn ? <Batch /> : <Navigate to="/auth/signin"/>},
        { path: 'batch/evaluation/:id', element: <BatchEva/>},
        { path: 'placement', element: isLoggedIn ? <Placement />: <Navigate to="/auth/signin"/> },
        { path: 'talent', element: isLoggedIn ? <Talent />: <Navigate to="/auth/signin"/> },
        { path: 'curriculum', element: isLoggedIn ? <Curriculum />: <Navigate to="/auth/signin"/> },
        { path: 'hiring', element: isLoggedIn ? <Hiring /> : <Navigate to="/auth/signin"/> },
        { path: 'setting', element: isLoggedIn ? <Setting /> : <Navigate to="/auth/signin"/> },
      ]
    },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}



