import { Outlet } from 'react-router-dom';
import Notebook from '../../components/notebook/notebook.component';

const Home = () => {
  return (
    <div>
      <Notebook />
      <Outlet />
    </div>
  );
};

export default Home;
