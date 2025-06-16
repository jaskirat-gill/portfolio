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
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const getScrollTarget = (page: string) => {
    // Map page names to their corresponding scroll targets
    switch (page.toLowerCase()) {
      case "connect":
        return "contact";
      default:
        return page.toLowerCase();
    }
  };

  return (
    <AppBar position="sticky" color="secondary" sx={{opacity: isMobile ? '1' : '0.5', backdropFilter: 'blur(5px)'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{justifyContent:'space-between'}}>
          <Typography
            variant="h6"
            noWrap
            component="a"
            onClick={() => {
              smoothScroll("home");
            }}
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "primary.main",
              textDecoration: "none",
              cursor: "pointer",
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
              color="inherit"
            >
              <MenuIcon sx={{ color: "primary.main" }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              color="secondary"
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={() => {
                    handleCloseNavMenu();
                    smoothScroll(getScrollTarget(page));
                  }}
                >
                  <Typography textAlign="center" color="primary.main">
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
            onClick={() => {
              smoothScroll("home");
            }}
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "primary.main",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            JASKIRAT GILL
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              alignContent: "center",
              justifyContent: "right",
            }}
          >
            <Button href="https://github.com/jaskirat-gill" target="_blank">
              <GitHubIcon fontSize="large"/>
            </Button>
            <Button href="https://www.linkedin.com/in/jaskirat-s-gill/" target="_blank">
              <LinkedInIcon fontSize="large"/>
            </Button>
            <Button href="mailto:gilljaskirat04@gmail.com">
              <Email fontSize="large"/>
            </Button>
          </Box>
          <Box 
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "right",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => {
                  handleCloseNavMenu();
                  smoothScroll(getScrollTarget(page));
                }}
                sx={{ my: 2, color: "primary.main", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default TopBar;
