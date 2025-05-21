import { Box } from "@mui/material";

export default function CameraViewPort({ viewPortHeight = 234, children }: {
  viewPortHeight?: number;
  children?: React.ReactNode;
}) {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: `calc(var(--vh, 1vh) * 50 - ${viewPortHeight! / 2}px)`,
        left: '16px',
        right: '16px',
        bottom: `calc(var(--vh, 1vh) * 50 - ${viewPortHeight! / 2}px)`,
        zIndex: 3,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '14px 16px',
      }}
    >
      {children}
    </Box>
  )
}