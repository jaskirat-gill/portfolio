"use client";
import {
    alpha,
    Avatar,
    Box,
    Button,
    Card,
    Chip,
    Grid,
    Grow,
    Typography,
    useMediaQuery,
    useTheme,
  } from "@mui/material";
  import GitHubIcon from "@mui/icons-material/GitHub";
  import LinkedInIcon from "@mui/icons-material/LinkedIn";
  import Email from "@mui/icons-material/Email";
  import { ArrowDownward } from "@mui/icons-material";
  import { smoothScroll } from "@/lib/util";

  const HeroContent = () => {
    const isMobile = useMediaQuery("(max-width:900px)");
    const theme = useTheme();

    return (
      <Box className="flex flex-col items-center min-h-screen justify-center px-4">
        <Grow in timeout={1000}>
          <Card
            elevation={20}
            sx={{
              width: { xs: "95%", sm: "85%", md: "75%", lg: "65%" },
              maxWidth: "1200px",
              ml: "auto",
              mr: "auto",
              backgroundColor: (theme) =>
                alpha(theme.palette.secondary.main, 0.01),
              backdropFilter: "blur(5px)",
              borderRadius: 3,
              overflow: "hidden",
              position: "relative",
              border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.05)} 0%, ${alpha(theme.palette.secondary.main, 0.05)} 100%)`,
                zIndex: -1,
              }
            }}
          >
            <Grid container spacing={3} sx={{ p: { xs: 2, md: 4 } }}>
              <Grid item xs={12} md={8}>
                <Box className="flex flex-col justify-start text-left">
                  <Box sx={{ mb: 3 }}>
                    <Typography 
                      color="primary.main" 
                      variant="h2"
                      sx={{
                        fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' },
                        fontWeight: 700,
                        mb: 1,
                        background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                    >
                      Hi! I&apos;m Jaskirat Gill
                    </Typography>
                    <Typography 
                      variant="h3" 
                      color="primary.main"
                      sx={{
                        fontSize: { xs: '1.3rem', sm: '1.6rem', md: '1.8rem' },
                        fontWeight: 500,
                        opacity: 0.9,
                      }}
                    >
                      Software Developer
                    </Typography>
                  </Box>

                  {isMobile && (
                    <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
                      <Avatar
                        alt="Jaskirat Gill"
                        src="https://i.imgur.com/x4KHP4R.jpeg"
                        sx={{
                          width: "120px",
                          height: "120px",
                          border: `4px solid ${theme.palette.primary.main}`,
                          boxShadow: theme.shadows[8],
                        }}
                      />
                    </Box>
                  )}

                  <Typography 
                    sx={{ 
                      mb: 3,
                      fontSize: { xs: '0.95rem', md: '1.1rem' },
                      lineHeight: 1.6,
                      color: 'text.primary',
                      opacity: 0.9,
                    }}
                  >
                    Computer Science Major at UBC aspiring to be a Software
                    Developer. Interested in full stack development, machine
                    learning, and more! Feel free to check out my resume and connect
                    with me on LinkedIn or any of the links below!
                  </Typography>

                  <Chip
                    variant="filled"
                    label="View Resume"
                    color="primary"
                    component="a"
                    href="Resume___Jaskirat_Gill___03_22_2025.pdf"
                    clickable
                    sx={{ 
                      width: { xs: "auto", md: "200px" },
                      height: "40px",
                      fontSize: "1rem",
                      fontWeight: 600,
                      color: "white",
                      mb: 3,
                      boxShadow: theme.shadows[4],
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: theme.shadows[8],
                      }
                    }}
                  />

                  <Box
                    sx={{
                      display: "flex",
                      gap: 1,
                      alignItems: "center",
                    }}
                  >
                    {[
                      { icon: GitHubIcon, href: "https://github.com/jaskirat-gill", label: "GitHub" },
                      { icon: LinkedInIcon, href: "https://www.linkedin.com/in/jaskirat-s-gill/", label: "LinkedIn" },
                      { icon: Email, href: "mailto:gilljaskirat04@gmail.com", label: "Email" }
                    ].map(({ icon: Icon, href, label }) => (
                      <Button 
                        key={label}
                        href={href} 
                        target={href.includes('mailto') ? undefined : "_blank"}
                        sx={{
                          minWidth: 'auto',
                          p: 1.5,
                          borderRadius: 2,
                          color: 'primary.main',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            backgroundColor: alpha(theme.palette.primary.main, 0.1),
                            transform: 'translateY(-2px)',
                            color: 'primary.dark',
                          }
                        }}
                        aria-label={label}
                      >
                        <Icon fontSize="large" />
                      </Button>
                    ))}
                  </Box>
                </Box>
              </Grid>

              <Grid
                item
                xs={12}
                md={4}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {!isMobile && (
                  <Avatar
                    alt="Jaskirat Gill"
                    src="https://i.imgur.com/x4KHP4R.jpeg"
                    sx={{ 
                      width: "250px", 
                      height: "250px", 
                      border: `6px solid ${theme.palette.primary.main}`,
                      boxShadow: theme.shadows[12],
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.05)',
                        boxShadow: theme.shadows[20],
                      }
                    }}
                  />
                )}
              </Grid>
            </Grid>
          </Card>
        </Grow>
        
        <Grow in timeout={1500}>
          <Button
            variant="outlined"
            size="large"
            sx={{
              width: { xs: "280px", md: "300px" },
              height: "56px",
              mt: 4,
              borderWidth: '2px',
              fontSize: '1.1rem',
              fontWeight: 600,
              borderRadius: 3,
              textTransform: 'none',
              transition: 'all 0.3s ease',
              animation: 'bounce 2s infinite',
              '@keyframes bounce': {
                '0%, 20%, 50%, 80%, 100%': {
                  transform: 'translateY(0)',
                },
                '40%': {
                  transform: 'translateY(-8px)',
                },
                '60%': {
                  transform: 'translateY(-4px)',
                },
              },
              '&:hover': {
                borderWidth: '2px',
                transform: 'translateY(-2px)',
                boxShadow: theme.shadows[8],
                backgroundColor: alpha(theme.palette.primary.main, 0.05),
                animation: 'none',
                '& .arrow-icon': {
                  transform: 'translateY(4px)',
                }
              }
            }}
            onClick={() => {smoothScroll("projects")}}
          >
            View My Work
            <ArrowDownward 
              className="arrow-icon"
              sx={{
                ml: 1, 
                transition: 'transform 0.3s ease',
                animation: 'pulse 2s infinite',
                '@keyframes pulse': {
                  '0%': {
                    opacity: 0.7,
                  },
                  '50%': {
                    opacity: 1,
                  },
                  '100%': {
                    opacity: 0.7,
                  },
                }
              }} 
            />
          </Button>
        </Grow>
      </Box>
    );
  };
  
  export default HeroContent;
