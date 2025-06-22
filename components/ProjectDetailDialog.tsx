"use client";
import { MediaItem, ProjectData, ProjectLink } from "@/lib/ProjectsHelper";
import {
  Dialog,
  DialogContent,
  IconButton,
  Typography,
  Box,
  Chip,
  Button,
  useTheme,
  alpha,
  useMediaQuery,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState } from "react";

interface ProjectDetailDialogProps {
  project: ProjectData | null;
  open: boolean;
  onClose: () => void;
}

const ProjectDetailDialog = ({ project, open, onClose }: ProjectDetailDialogProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  if (!project) return null;
  
  const hasValidImages = project.mediaList.some(media => media.url);
  
  const handlePreviousImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.mediaList.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === project.mediaList.length - 1 ? 0 : prev + 1
    );
  };
  
  const getLinkIcon = (link: ProjectLink) => {
    if (link.url.includes("github")) return <GitHubIcon sx={{ mr: 0.5 }} />;
    return <LaunchIcon sx={{ mr: 0.5 }} />;
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="lg"
      fullWidth
      sx={{
        "& .MuiDialog-paper": {
          backgroundColor: "rgba(35, 36, 40, 0.98)",
          backdropFilter: "blur(20px)",
          borderRadius: "24px",
          border: `1px solid ${alpha(theme.palette.primary.main, 0.3)}`,
          boxShadow: "0 25px 80px rgba(0, 0, 0, 0.5), 0 0 40px rgba(173, 151, 79, 0.2)",
          overflow: "hidden",
        },
        "& .MuiBackdrop-root": {
          backdropFilter: "blur(10px)",
        },
      }}
    >
      <Box
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: { xs: 2, md: 3 },
          borderBottom: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            background: "linear-gradient(135deg, #ad974f 0%, #d4b86a 50%, #ad974f 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: "800",
            fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2rem" },
          }}
        >
          {project.title}
        </Typography>
        
        <IconButton
          onClick={onClose}
          sx={{
            color: "#ad974f",
            transition: "all 0.3s ease",
            "&:hover": {
              background: "rgba(173, 151, 79, 0.1)",
              transform: "rotate(90deg)",
            },
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>

      <DialogContent sx={{ p: { xs: 2, md: 4 } }}>
        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 4 }}>
          {/* Left side - Images */}
          <Box
            sx={{
              width: { xs: "100%", md: "55%" },
              position: "relative",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
              aspectRatio: "16 / 9",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: "#1a1a1a",
              border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
            }}
          >
            {hasValidImages ? (
              <>
                <Box
                  component="img"
                  src={project.mediaList[currentImageIndex]?.url || project.previewImage.url}
                  alt={project.mediaList[currentImageIndex]?.alt || project.previewImage.alt}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
                {project.mediaList.length > 1 && (
                  <>
                    <IconButton
                      onClick={handlePreviousImage}
                      sx={{
                        position: "absolute",
                        left: "10px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        color: "#fff",
                        "&:hover": {
                          backgroundColor: "rgba(173, 151, 79, 0.8)",
                        },
                        zIndex: 2,
                      }}
                    >
                      <ArrowBackIosNewIcon />
                    </IconButton>
                    <IconButton
                      onClick={handleNextImage}
                      sx={{
                        position: "absolute",
                        right: "10px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        color: "#fff",
                        "&:hover": {
                          backgroundColor: "rgba(173, 151, 79, 0.8)",
                        },
                        zIndex: 2,
                      }}
                    >
                      <ArrowForwardIosIcon />
                    </IconButton>
                  </>
                )}
                {/* Image indicator dots */}
                {project.mediaList.length > 1 && (
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: "15px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      display: "flex",
                      gap: "8px",
                      zIndex: 2,
                    }}
                  >
                    {project.mediaList.map((_, index) => (
                      <Box
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        sx={{
                          width: "10px",
                          height: "10px",
                          borderRadius: "50%",
                          backgroundColor:
                            index === currentImageIndex
                              ? theme.palette.primary.main
                              : "rgba(255, 255, 255, 0.5)",
                          cursor: "pointer",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            backgroundColor:
                              index !== currentImageIndex
                                ? "rgba(255, 255, 255, 0.8)"
                                : theme.palette.primary.main,
                          },
                        }}
                      />
                    ))}
                  </Box>
                )}
              </>
            ) : (
              <Typography
                sx={{
                  color: "rgba(255, 255, 255, 0.7)",
                  textAlign: "center",
                  p: 3,
                }}
              >
                No images available for this project
              </Typography>
            )}
          </Box>

          {/* Right side - Project info */}
          <Box sx={{ width: { xs: "100%", md: "45%" }, display: "flex", flexDirection: "column" }}>
            <Typography
              variant="h6"
              sx={{
                color: alpha(theme.palette.primary.main, 0.9),
                fontWeight: "600",
                mb: 2,
                fontSize: { xs: "1.1rem", md: "1.3rem" },
                borderBottom: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                pb: 1,
              }}
            >
              Project Overview
            </Typography>

            <Typography
              sx={{
                color: "rgba(255, 255, 255, 0.9)",
                mb: 3,
                fontSize: "1rem",
                lineHeight: 1.7,
              }}
            >
              {project.content}
            </Typography>

            <Typography
              variant="h6"
              sx={{
                color: alpha(theme.palette.primary.main, 0.9),
                fontWeight: "600",
                mb: 2,
                fontSize: { xs: "1.1rem", md: "1.3rem" },
                borderBottom: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                pb: 1,
              }}
            >
              Technologies
            </Typography>

            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 3 }}>
              {project.skills.map((skill) => (
                <Chip
                  key={skill}
                  label={skill}
                  sx={{
                    background: "linear-gradient(135deg, rgba(173, 151, 79, 0.2), rgba(142, 121, 62, 0.2))",
                    border: "1px solid rgba(173, 151, 79, 0.4)",
                    color: "#d4b86a",
                    fontSize: "0.8rem",
                    fontWeight: "600",
                    height: "28px",
                    borderRadius: "14px",
                    backdropFilter: "blur(10px)",
                    mb: 1,
                  }}
                />
              ))}
            </Box>

            {project.links.length > 0 && (
              <>
                <Typography
                  variant="h6"
                  sx={{
                    color: alpha(theme.palette.primary.main, 0.9),
                    fontWeight: "600",
                    mb: 2,
                    fontSize: { xs: "1.1rem", md: "1.3rem" },
                    borderBottom: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                    pb: 1,
                  }}
                >
                  Links
                </Typography>

                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
                  {project.links.map((link, index) => (
                    <Button
                      key={index}
                      variant="outlined"
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      startIcon={getLinkIcon(link)}
                      sx={{
                        color: theme.palette.primary.main,
                        borderColor: alpha(theme.palette.primary.main, 0.5),
                        "&:hover": {
                          borderColor: theme.palette.primary.main,
                          backgroundColor: alpha(theme.palette.primary.main, 0.1),
                          transform: "translateY(-2px)",
                        },
                        transition: "all 0.3s ease",
                        fontWeight: 600,
                        borderRadius: "8px",
                      }}
                    >
                      {link.displayText}
                    </Button>
                  ))}
                </Box>
              </>
            )}
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDetailDialog;