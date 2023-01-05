//~ Import Module
import { Route } from 'react-router-dom';
import { NoPage, Home } from '../Pages';
import { ArticlesRoutes } from './ArticlesRoutes';

const Router = [
  { id: 1, isNav: true, name: 'Home', mainPath: '/', mainElement: <Home /> },
  { id: 2, isNav: false, name: 'NoPage', mainPath: '*', mainElement: <NoPage /> },
  { id: 3, ...ArticlesRoutes },
];

//& Define routes to use in App

const mainRoutes = Router.map(({ id, mainPath, mainElement }) => <Route key={id} path={mainPath} element={mainElement} />);

const { articlePath, articleElement } = ArticlesRoutes;
const articleRoute = <Route path={articlePath} element={articleElement} />;

export { Router, mainRoutes, articleRoute };

