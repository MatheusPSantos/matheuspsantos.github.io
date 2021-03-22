import dynamic from 'next/dynamic';
import config from '../admin/config';

const CMS = dynamic(
  () => import('netlify-cms-app').then(cms => {
    cms.init({ config });
  }),
  { ssr: false, loading: () => <p>Loading ...</p> }
);

export default function Admin() {
  return <CMS />
}