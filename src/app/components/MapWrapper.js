import dynamic from 'next/dynamic';

const MapWrapper = () => {
  const PhysicalMap = dynamic(
    () => import('./PhysicalMap'),
    { 
      loading: () => <p>Loading Map...</p>,
      ssr: false 
    }
  );

  return <PhysicalMap />;
};

export default MapWrapper;