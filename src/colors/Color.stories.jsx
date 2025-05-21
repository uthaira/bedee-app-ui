import { useEffect, useState } from 'react';
import { Box } from '@mui/material';

export default {
  title: 'Colors',
};

const ColorBox = ({ colorName, colorValue }) => (
  <Box sx={{ margin: '10px', textAlign: 'center' }}>
    <Box
      sx={{
        backgroundColor: colorValue,
        width: '100px',
        height: '100px',
        borderRadius: '8px',
        border: '1px solid #ddd',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    />
    <p>{colorName}</p>
    <p>{colorValue}</p>
  </Box>
);

export const AllColors = () => {
  const [groupedColors, setGroupedColors] = useState({});

  useEffect(() => {
    const loadColors = async () => {
      const colorModules = import.meta.glob('../colors/*.ts');
      const loadedColors = {};

      for (const path in colorModules) {
        const moduleName = path.split('/').pop().replace('.ts', '');
        const module = await colorModules[path]();

        loadedColors[moduleName] = module.default;
      }

      setGroupedColors(loadedColors);
    };

    loadColors();
  }, []);

  return (
    <Box>
      {Object.entries(groupedColors).map(([moduleName = '', colors = {}]) => (
        <Box key={moduleName} sx={{ marginBottom: '40px' }}>
          <h3>{moduleName}</h3>
          <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
            {Object.entries(colors).map(([colorName, colorValue]) => (
              <ColorBox key={colorName} colorName={colorName} colorValue={colorValue} />
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
};
