import { useEffect, useState } from 'react';

export default {
  title: 'Icons',
};

export const AllIcons = () => {
  const [icons, setIcons] = useState([]);

  useEffect(() => {
    const loadIcons = async () => {
      const iconsContext = import.meta.glob('../icons/*.tsx');
      const iconsDeepContext = import.meta.glob('../icons/*/*.tsx');

      const mergedIcons = { ...iconsContext, ...iconsDeepContext };

      const loadedIcons = await Promise.all(
        Object.entries(mergedIcons).map(async ([path, importer]) => {
          const Icon = (await importer()).default;
          const name = path.split('/').pop().replace('.tsx', '');
          return { Icon, name };
        })
      );
      setIcons(loadedIcons);
    };

    loadIcons();
  }, []);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px' }}>
      {icons.map(({ Icon, name }) => (
        <div 
          key={name} 
          style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            padding: '10px', 
            border: '1px solid #ddd', 
            borderRadius: '8px', 
            textAlign: 'center' 
          }}>
          <div style={{ marginBottom: '10px' }}>
            <Icon size={1} />
          </div>
          <p style={{ fontSize: '14px', wordWrap: 'break-word' }}>{name}</p>
        </div>
      ))}
    </div>
  );
};