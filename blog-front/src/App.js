import React from 'react';

import LoginPage from './pages/LoginPage';
import PostListPage from './pages/PostListPage';
import PostPage from './pages/PostPage';
import RegisterPage from './pages/RegisterPage';
import WritePate from './pages/WritePage';

import { Route } from 'react-router-dom';

const App = () => {
   return (
      <>
         {/* PostListPage의 경우 두개의 경로의 사용으로 배열을 사용 */}
         <Route component={PostListPage} path={['/@:username', '/']} exact />
         <Route component={LoginPage} path="/login" />
         <Route component={RegisterPage} path="/register" />
         <Route component={WritePate} path="/write" />
         <Route component={PostPage} path="/@:username/:postId" />
      </>
   );
};

export default App;
