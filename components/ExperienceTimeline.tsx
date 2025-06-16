"use client"
import { experienceData } from "@/lib/ExperienceHelper";
import {
  Box,
  Card,
  CardContent,
  Typography,
  useMediaQuery,
  Chip,
  Grow,
  useTheme,
} from "@mui/material";
import { useState } from "react";

function ExperienceTimeline() {
  const isMobile = useMediaQuery("(max-width:600px)");
  const isTablet = useMediaQuery("(max-width:900px)");
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1400px",
        marginLeft: "auto",
        marginRight: "auto",
        zIndex: 999,
        minHeight: "100vh",
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
          background: "radial-gradient(ellipse at center, rgba(173, 151, 79, 0.03) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: -1,
        }}
      />

      <Typography
        variant="h2"
        sx={{
          background: "linear-gradient(135deg, #ad974f 0%, #d4b86a 50%, #ad974f 100%)",
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
            background: "linear-gradient(90deg, transparent, #ad974f, transparent)",
            borderRadius: "2px",
          },
        }}
      >
        Experience
      </Typography>

      <Box
        sx={{
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            left: isMobile ? "20px" : "50%",
            top: "40px",
            bottom: "40px",
            width: "4px",
            background: "linear-gradient(to bottom, transparent 0%, #ad974f 20%, #d4b86a 50%, #ad974f 80%, transparent 100%)",
            transform: isMobile ? "none" : "translateX(-50%)",
            zIndex: 1,
            borderRadius: "2px",
            boxShadow: "0 0 20px rgba(173, 151, 79, 0.3)",
          },
        }}
      >
        {experienceData.map((experience, index) => (
          <Grow key={experience.id} in timeout={1200 + index * 300}>
            <Box
              sx={{
                position: "relative",
                marginBottom: "6vh",
                display: "flex",
                flexDirection: isMobile ? "row" : index % 2 === 0 ? "row-reverse" : "row",
                alignItems: "center",
                paddingLeft: isMobile ? "50px" : "0",
                "&::before": !isMobile ? {
                  content: '""',
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  width: "60px",
                  height: "2px",
                  background: "linear-gradient(90deg, rgba(173, 151, 79, 0.3), rgba(173, 151, 79, 0.8))",
                  transform: index % 2 === 0 ? "translate(-100%, -50%)" : "translate(40px, -50%)",
                  zIndex: 1,
                } : {},
              }}
            >
              {/* Enhanced Timeline dot */}
              <Box
                sx={{
                  position: "absolute",
                  left: isMobile ? "6px" : "50%",
                  top: "50%",
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  background: hoveredCard === index 
                    ? "linear-gradient(45deg, #d4b86a, #ad974f)" 
                    : "linear-gradient(45deg, #ad974f, #8e793e)",
                  border: "6px solid rgba(26, 26, 26, 0.9)",
                  transform: isMobile ? "translateY(-50%)" : "translate(-50%, -50%)",
                  zIndex: 3,
                  boxShadow: hoveredCard === index 
                    ? "0 0 30px rgba(173, 151, 79, 0.8), inset 0 2px 4px rgba(255, 255, 255, 0.2)"
                    : "0 0 20px rgba(173, 151, 79, 0.5), inset 0 2px 4px rgba(255, 255, 255, 0.1)",
                  transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: "#ffffff",
                    transform: "translate(-50%, -50%)",
                    opacity: hoveredCard === index ? 1 : 0.7,
                    transition: "opacity 0.3s ease",
                  },
                }}
              />

              <Card
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                sx={{
                  width: isMobile ? "100%" : isTablet ? "70%" : "48%",
                  marginLeft: isMobile ? "0" : index % 2 === 0 ? "52%" : "0",
                  marginRight: "0",
                  borderRadius: "20px",
                  background: hoveredCard === index 
                    ? "linear-gradient(145deg, rgba(53, 55, 59, 0.98), rgba(43, 45, 49, 0.98))"
                    : "linear-gradient(145deg, rgba(43, 45, 49, 0.95), rgba(35, 36, 40, 0.95))",
                  backdropFilter: "blur(20px)",
                  boxShadow: hoveredCard === index
                    ? "0 20px 60px rgba(0, 0, 0, 0.4), 0 0 40px rgba(173, 151, 79, 0.3)"
                    : "0 12px 40px rgba(0, 0, 0, 0.3), 0 0 20px rgba(173, 151, 79, 0.1)",
                  border: hoveredCard === index
                    ? "2px solid rgba(173, 151, 79, 0.5)"
                    : "1px solid rgba(173, 151, 79, 0.2)",
                  transition: "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                  transform: hoveredCard === index ? "translateY(-12px) scale(1.02)" : "translateY(0) scale(1)",
                  cursor: "pointer",
                  position: "relative",
                  overflow: "hidden",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "4px",
                    background: "linear-gradient(90deg, #ad974f, #d4b86a, #ad974f)",
                    opacity: hoveredCard === index ? 1 : 0,
                    transition: "opacity 0.3s ease",
                  },
                }}
              >
                <CardContent sx={{ padding: "32px" }}>
                  <Typography
                    variant="h5"
                    sx={{
                      background: "linear-gradient(135deg, #ad974f, #d4b86a)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      fontWeight: "800",
                      marginBottom: "12px",
                      fontSize: isMobile ? "1.3rem" : "1.5rem",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {experience.title}
                  </Typography>

                  <Typography
                    variant="h6"
                    sx={{
                      color: "#FFFFFF",
                      marginBottom: "8px",
                      fontSize: isMobile ? "1.1rem" : "1.2rem",
                      fontWeight: "700",
                      opacity: 0.95,
                    }}
                  >
                    {experience.company}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: "rgba(173, 151, 79, 0.8)",
                      marginBottom: "24px",
                      fontSize: "1rem",
                      fontWeight: "500",
                      fontStyle: "italic",
                    }}
                  >
                    {experience.duration} • {experience.location}
                  </Typography>

                  <Box sx={{ marginBottom: "24px" }}>
                    {experience.highlights.map((highlight, idx) => (
                      <Typography
                        key={idx}
                        variant="body2"
                        sx={{
                          color: "rgba(255, 255, 255, 0.9)",
                          marginBottom: "12px",
                          fontSize: "0.95rem",
                          lineHeight: 1.7,
                          position: "relative",
                          paddingLeft: "20px",
                          "&::before": {
                            content: '"•"',
                            color: "#ad974f",
                            position: "absolute",
                            left: "0",
                            fontWeight: "bold",
                            fontSize: "1.2rem",
                          },
                        }}
                      >
                        {highlight}
                      </Typography>
                    ))}
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "8px",
                    }}
                  >
                    {experience.technologies.map((tech, techIndex) => (
                      <Chip
                        key={tech}
                        label={tech}
                        size="small"
                        sx={{
                          background: "linear-gradient(135deg, rgba(173, 151, 79, 0.2), rgba(142, 121, 62, 0.2))",
                          border: "1px solid rgba(173, 151, 79, 0.4)",
                          color: "#d4b86a",
                          fontSize: "0.8rem",
                          fontWeight: "600",
                          height: "28px",
                          borderRadius: "14px",
                          backdropFilter: "blur(10px)",
                          transition: "all 0.3s ease",
                          animation: hoveredCard === index ? `chipPulse 2s ease-in-out infinite ${techIndex * 0.1}s` : "none",
                          "&:hover": {
                            backgroundColor: "rgba(173, 151, 79, 0.3)",
                            transform: "translateY(-2px)",
                            boxShadow: "0 4px 12px rgba(173, 151, 79, 0.3)",
                          },
                          "@keyframes chipPulse": {
                            "0%, 100%": { transform: "scale(1)" },
                            "50%": { transform: "scale(1.05)" },
                          },
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </Grow>
        ))}
      </Box>
    </Box>
  );
}

export default ExperienceTimeline;