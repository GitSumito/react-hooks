import  { Layout } from './components/Layout';
import { BadgeCheckIcon } from '@heroicons/react/solid';

function App() {
  return (
    <Layout>
      <p className='my-5 text-xl font-bold'>react18 basic lesson</p>
      <BadgeCheckIcon className='w-10 h-10 text-green-500' />
    </Layout>
  );
}

export default App;
