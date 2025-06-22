"use client";
import { ProjectData, ProjectsData } from "@/lib/ProjectsHelper";
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import ProjectCard from "./ProjectCard";
import { useState } from "react";
import ProjectDetailDialog from "./ProjectDetailDialog";
import { Grow } from "@mui/material";

const ProjectsGrid = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const isTablet = useMediaQuery("(max-width:900px)");
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  
  const handleOpenProject = (project: ProjectData) => {
    setSelectedProject(project);
    setDialogOpen(true);
  };
  
  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1400px",
        marginLeft: "auto",
        marginRight: "auto",
        zIndex: 999,
        paddingBottom: "8vh",
        paddingLeft: isMobile ? "5%" : isTablet ? "8%" : "12%",
        paddingRight: isMobile ? "5%" : isTablet ? "8%" : "12%",
        paddingTop: "8vh",
        boxSizing: "border-box",
        position: "relative",
      }}
    >
      {/* Background gradient overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "radial-gradient(ellipse at center, rgba(173, 151, 79, 0.03) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: -1,
        }}
      />

      <Typography
        variant="h2"
        sx={{
          background:
            "linear-gradient(135deg, #ad974f 0%, #d4b86a 50%, #ad974f 100%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textAlign: "center",
          marginBottom: "6vh",
          fontWeight: "800",
          fontSize: isMobile ? "2.2rem" : isTablet ? "2.8rem" : "3.2rem",
          letterSpacing: "-0.02em",
          position: "relative",
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: "-16px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "80px",
            height: "4px",
            background:
              "linear-gradient(90deg, transparent, #ad974f, transparent)",
            borderRadius: "2px",
          },
        }}
      >
        Projects
      </Typography>

      <Grid container spacing={3}>
        {ProjectsData.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={project.id}>
            <Grow in timeout={1000 + index * 200}>
              <Box>
                <ProjectCard project={project} onClick={handleOpenProject} />
              </Box>
            </Grow>
          </Grid>
        ))}
      </Grid>
      
      <ProjectDetailDialog 
        project={selectedProject} 
        open={dialogOpen} 
        onClose={handleCloseDialog}
      />
    </Box>
  );
};

export default ProjectsGrid;