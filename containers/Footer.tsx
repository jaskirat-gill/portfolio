import { Box, Typography } from "@mui/material"

export default function Footer() {
    return (
        <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          py: 4,
          px: 2,
          width: '100%',
          boxSizing: 'border-box',
        }}
      >
        <Typography
          variant="h6"
          color="primary"
          sx={{
            fontWeight: 600,
            fontSize: { xs: "0.9rem", sm: "1.1rem", md: "1.25rem" },
            textAlign: "center",
            letterSpacing: "0.5px",
            position: "relative",
            maxWidth: '100%',
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: -4,
              left: "50%",
              transform: "translateX(-50%)",
              width: "60%",
              height: "2px",
              background: "currentColor",
              borderRadius: "1px",
              opacity: 0.5,
            },
          }}
        >
          Made With TypeScript & React From Scratch
        </Typography>
      </Box>
    )
}