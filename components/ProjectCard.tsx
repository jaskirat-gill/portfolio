"use client";
import { ProjectData } from "@/lib/ProjectsHelper";
import { Box, Card, CardContent, CardMedia, Chip, Typography, alpha, useTheme } from "@mui/material";
import { useState } from "react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface ProjectCardProps {
  project: ProjectData;
  onClick: (project: ProjectData) => void;
}

const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  const theme = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      sx={{
        height: "400px", // Fixed height for all cards
        display: "flex",
        flexDirection: "column",
        background: "linear-gradient(145deg, rgba(43, 45, 49, 0.95), rgba(35, 36, 40, 0.95))",
        backdropFilter: "blur(10px)",
        borderRadius: "16px",
        overflow: "hidden",
        border: isHovered 
          ? `2px solid ${alpha(theme.palette.primary.main, 0.9)}`
          : `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
        transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        transform: isHovered ? "translateY(-8px) scale(1.02)" : "translateY(0) scale(1)",
        boxShadow: isHovered
          ? "0 20px 50px rgba(0, 0, 0, 0.4), 0 10px 30px rgba(173, 151, 79, 0.2)"
          : "0 8px 20px rgba(0, 0, 0, 0.2)",
        cursor: "pointer",
        position: "relative",
      }}
      onClick={() => onClick(project)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* View More indicator */}
      <Box 
        sx={{
          position: "absolute",
          top: 15,
          right: 15,
          zIndex: 2,
          backgroundColor: alpha(theme.palette.background.paper, 0.7),
          backdropFilter: "blur(5px)",
          borderRadius: "8px",
          padding: "4px 10px",
          display: "flex",
          alignItems: "center",
          opacity: isHovered ? 1 : 0,
          transform: isHovered ? "translateY(0)" : "translateY(-5px)",
          transition: "all 0.3s ease",
          border: `1px solid ${alpha(theme.palette.primary.main, 0.4)}`,
        }}
      >
        <Typography variant="caption" sx={{ 
          color: theme.palette.primary.main,
          fontWeight: 600,
          mr: 0.5,
          fontSize: "0.7rem",
        }}>
          View Details
        </Typography>
        <ArrowForwardIcon sx={{ 
          fontSize: "0.9rem", 
          color: theme.palette.primary.main,
          transform: isHovered ? "translateX(3px)" : "translateX(0)",
          transition: "transform 0.3s ease",
        }} />
      </Box>
      
      <CardMedia
        component="div"
        sx={{
          height: "200px",
          backgroundImage: `url(${project.previewImage.url || "https://i.imgur.com/kuNxTU5.png"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "all 0.5s ease",
          transform: isHovered ? "scale(1.05)" : "scale(1)",
          filter: isHovered ? "brightness(1.1)" : "brightness(0.9)",
          position: "relative",
          "&::after": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: isHovered 
              ? `linear-gradient(to bottom, ${alpha("#000", 0.3)}, ${alpha(theme.palette.primary.main, 0.4)})`
              : `linear-gradient(to bottom, transparent 50%, ${alpha("#000", 0.8)} 100%)`,
            transition: "all 0.3s ease",
          },
        }}
      />
      
      <CardContent sx={{ 
        flexGrow: 1, 
        p: 3,
        position: "relative",
        display: "flex",
        flexDirection: "column",
        borderTop: isHovered ? `1px solid ${alpha(theme.palette.primary.main, 0.3)}` : "none",
        transition: "all 0.3s ease",
      }}>
        <Typography
          variant="h5"
          sx={{
            mb: 1,
            fontWeight: "700",
            color: isHovered ? theme.palette.primary.main : alpha(theme.palette.primary.main, 0.9),
            position: "relative",
            transition: "all 0.3s ease",
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: "-6px",
              left: "0",
              width: isHovered ? "80px" : "40px",
              height: "2px",
              background: `linear-gradient(90deg, ${theme.palette.primary.main}, transparent)`,
              transition: "width 0.3s ease",
            },
          }}
          gutterBottom
        >
          {project.title}
        </Typography>

        <Typography 
          variant="body2" 
          sx={{ 
            mb: 2,
            color: isHovered ? alpha("#fff", 0.9) : alpha("#fff", 0.7),
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 3,
            overflow: "hidden",
            textOverflow: "ellipsis",
            flexGrow: 1,
            transition: "color 0.3s ease",
          }}
        >
          {project.previewText}
        </Typography>

        <Box sx={{ 
          display: "flex", 
          flexWrap: "wrap", 
          gap: 0.7,
          mt: "auto",
          opacity: isHovered ? 1 : 0.8,
          transition: "all 0.3s ease",
        }}>
          {project.skills.slice(0, 3).map((skill) => (
            <Chip
              key={skill}
              label={skill}
              size="small"
              sx={{
                background: isHovered 
                  ? "linear-gradient(135deg, rgba(173, 151, 79, 0.4), rgba(142, 121, 62, 0.3))"
                  : "linear-gradient(135deg, rgba(173, 151, 79, 0.2), rgba(142, 121, 62, 0.2))",
                border: `1px solid ${isHovered ? alpha(theme.palette.primary.main, 0.6) : "rgba(173, 151, 79, 0.4)"}`,
                color: isHovered ? "#e5cb7d" : "#d4b86a",
                fontSize: "0.7rem",
                fontWeight: "600",
                height: "24px",
                borderRadius: "12px",
                backdropFilter: "blur(10px)",
                transition: "all 0.3s ease",
              }}
            />
          ))}
          {project.skills.length > 3 && (
            <Chip
              label={`+${project.skills.length - 3}`}
              size="small"
              sx={{
                background: "transparent",
                border: `1px solid ${isHovered ? alpha(theme.palette.primary.main, 0.6) : "rgba(173, 151, 79, 0.4)"}`,
                color: isHovered ? "#e5cb7d" : "#d4b86a",
                fontSize: "0.7rem",
                fontWeight: "600",
                height: "24px",
                borderRadius: "12px",
                transition: "all 0.3s ease",
              }}
            />
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;