"use client"
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Email from "@mui/icons-material/Email";
import { useMediaQuery } from "@mui/material";
import { smoothScroll } from "@/lib/util";

const pages = ["Home", "Projects", "Experience", "Connect"];

function TopBar() {
  const isMobile = useMediaQuery("(max-width:600px)");
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [isSticky, setIsSticky] = React.useState(false);
  const topBarRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      if (topBarRef.current) {
        const topBarTop = topBarRef.current.offsetTop;
        const scrollTop = window.scrollY;
        setIsSticky(scrollTop >= topBarTop);
      }
    };

    // Initial check
    handleScroll();
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const getScrollTarget = (page: string) => {
    switch (page.toLowerCase()) {
      case "connect":
        return "contact";
      default:
        return page.toLowerCase();
    }
  };

  return (
    <Box ref={topBarRef}>
      <AppBar 
        position={isSticky ? "fixed" : "static"}
        sx={{
          top: isSticky ? 0 : "auto",
          background: isSticky 
            ? "linear-gradient(145deg, rgba(26, 26, 26, 0.95), rgba(35, 36, 40, 0.95))"
            : "linear-gradient(145deg, rgba(26, 26, 26, 0.8), rgba(35, 36, 40, 0.8))",
          backdropFilter: isSticky ? "blur(20px)" : "blur(10px)",
          boxShadow: isSticky 
            ? "0 8px 32px rgba(0, 0, 0, 0.3), 0 0 20px rgba(173, 151, 79, 0.1)"
            : "0 4px 16px rgba(0, 0, 0, 0.2)",
          border: isSticky ? "1px solid rgba(173, 151, 79, 0.2)" : "1px solid rgba(173, 151, 79, 0.1)",
          borderTop: "none",
          transition: "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          zIndex: isSticky ? 1100 : 10,
          transform: isSticky ? "translateY(0)" : "none",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ justifyContent: "space-between", minHeight: "72px" }}>
            <Typography
              variant="h6"
              noWrap
              component="a"
              onClick={() => smoothScroll("home")}
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                background: "linear-gradient(135deg, #ad974f, #d4b86a)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textDecoration: "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              JASKIRAT GILL
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                sx={{
                  color: "#ad974f",
                  "&:hover": {
                    backgroundColor: "rgba(173, 151, 79, 0.1)",
                  },
                }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                keepMounted
                transformOrigin={{ vertical: "top", horizontal: "left" }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                  "& .MuiPaper-root": {
                    backgroundColor: "rgba(26, 26, 26, 0.95)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(173, 151, 79, 0.2)",
                    borderRadius: "12px",
                    marginTop: "8px",
                  },
                }}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page}
                    onClick={() => {
                      handleCloseNavMenu();
                      smoothScroll(getScrollTarget(page));
                    }}
                    sx={{
                      "&:hover": {
                        backgroundColor: "rgba(173, 151, 79, 0.1)",
                      },
                    }}
                  >
                    <Typography sx={{ color: "#ad974f", fontWeight: 500 }}>
                      {page}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Typography
              variant="h5"
              noWrap
              component="a"
              onClick={() => smoothScroll("home")}
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".2rem",
                background: "linear-gradient(135deg, #ad974f, #d4b86a)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              J. GILL
            </Typography>

            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                gap: 1,
              }}
            >
              <IconButton 
                href="https://github.com/jaskirat-gill" 
                target="_blank"
                sx={{
                  color: "#ad974f",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    color: "#d4b86a",
                    transform: "translateY(-2px)",
                    backgroundColor: "rgba(173, 151, 79, 0.1)",
                  },
                }}
              >
                <GitHubIcon />
              </IconButton>
              <IconButton 
                href="https://www.linkedin.com/in/jaskirat-s-gill/" 
                target="_blank"
                sx={{
                  color: "#ad974f",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    color: "#d4b86a",
                    transform: "translateY(-2px)",
                    backgroundColor: "rgba(173, 151, 79, 0.1)",
                  },
                }}
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton 
                href="mailto:gilljaskirat04@gmail.com"
                sx={{
                  color: "#ad974f",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    color: "#d4b86a",
                    transform: "translateY(-2px)",
                    backgroundColor: "rgba(173, 151, 79, 0.1)",
                  },
                }}
              >
                <Email />
              </IconButton>

              <Box sx={{ ml: 2, display: "flex", gap: 1 }}>
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={() => {
                      handleCloseNavMenu();
                      smoothScroll(getScrollTarget(page));
                    }}
                    sx={{
                      color: "#ad974f",
                      fontWeight: 500,
                      textTransform: "none",
                      borderRadius: "8px",
                      px: 2,
                      py: 1,
                      transition: "all 0.3s ease",
                      "&:hover": {
                        backgroundColor: "rgba(173, 151, 79, 0.1)",
                        color: "#d4b86a",
                        transform: "translateY(-1px)",
                      },
                    }}
                  >
                    {page}
                  </Button>
                ))}
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}

export default TopBar;
