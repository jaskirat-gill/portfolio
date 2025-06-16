"use client";
import { Card, CardContent, Link, Typography, useMediaQuery, Box, IconButton } from "@mui/material";
import { Email, LinkedIn, GitHub, Launch } from "@mui/icons-material";
import { useState } from "react";

const ContactCard = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const isTablet = useMediaQuery("(max-width:900px)");
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const contactItems = [
    {
      id: "email",
      icon: <Email sx={{ fontSize: "1.5rem" }} />,
      label: "Email",
      value: "gilljaskirat04@gmail.com",
      href: "mailto:gilljaskirat04@gmail.com",
      color: "#ad974f",
    },
    {
      id: "linkedin",
      icon: <LinkedIn sx={{ fontSize: "1.5rem" }} />,
      label: "LinkedIn",
      value: "/in/jaskirat-gill",
      href: "https://www.linkedin.com/in/jaskirat-s-gill/",
      color: "#0077b5",
    },
    {
      id: "github",
      icon: <GitHub sx={{ fontSize: "1.5rem" }} />,
      label: "GitHub",
      value: "github.com/jaskirat-gill",
      href: "https://github.com/jaskirat-gill",
      color: "#FFFFFF",
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        position: "relative",
        zIndex: 999,
      }}
    >
      <Card
        sx={{
          width: isMobile ? "90vw" : isTablet ? "70vw" : "50vw",
          maxWidth: "600px",
          backgroundColor: "rgba(43, 45, 49, 0.95)",
          backdropFilter: "blur(20px)",
          borderRadius: "24px",
          padding: isMobile ? "2rem 1.5rem" : "3rem 2.5rem",
          border: "2px solid rgba(173, 151, 79, 0.3)",
          boxShadow:
            "0 25px 80px rgba(0, 0, 0, 0.5), 0 0 60px rgba(173, 151, 79, 0.2)",
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
          },
          "&::after": {
            content: '""',
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "200%",
            height: "200%",
            background:
              "radial-gradient(circle, rgba(173, 151, 79, 0.05) 0%, transparent 70%)",
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
          },
        }}
      >
        <Typography
          variant="h2"
          sx={{
            background:
              "linear-gradient(135deg, #ad974f 0%, #d4b86a 50%, #ad974f 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textAlign: "center",
            marginBottom: "2.5rem",
            fontWeight: "800",
            fontSize: isMobile ? "2.5rem" : "3rem",
            letterSpacing: "-0.02em",
            position: "relative",
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: "-12px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "60px",
              height: "3px",
              background: "linear-gradient(90deg, transparent, #ad974f, transparent)",
              borderRadius: "2px",
            },
          }}
        >
          Let's Connect
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          {contactItems.map((item) => (
            <CardContent
              key={item.id}
              onMouseEnter={() => setHoveredLink(item.id)}
              onMouseLeave={() => setHoveredLink(null)}
              sx={{
                display: "flex",
                alignItems: "center",
                padding: "1.5rem",
                borderRadius: "16px",
                background:
                  hoveredLink === item.id
                    ? "linear-gradient(145deg, rgba(53, 55, 59, 0.8), rgba(43, 45, 49, 0.8))"
                    : "linear-gradient(145deg, rgba(35, 36, 40, 0.6), rgba(25, 26, 30, 0.6))",
                border:
                  hoveredLink === item.id
                    ? "1px solid rgba(173, 151, 79, 0.4)"
                    : "1px solid rgba(173, 151, 79, 0.1)",
                transition:
                  "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                transform:
                  hoveredLink === item.id ? "translateY(-4px)" : "translateY(0)",
                boxShadow:
                  hoveredLink === item.id
                    ? "0 12px 30px rgba(0, 0, 0, 0.3), 0 0 20px rgba(173, 151, 79, 0.2)"
                    : "0 4px 15px rgba(0, 0, 0, 0.2)",
                cursor: "pointer",
                position: "relative",
                overflow: "hidden",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: "-100%",
                  width: "100%",
                  height: "100%",
                  background: `linear-gradient(90deg, transparent, ${item.color}20, transparent)`,
                  transition: "left 0.5s ease",
                  ...(hoveredLink === item.id && { left: "100%" }),
                },
              }}
              onClick={() => window.open(item.href, "_blank")}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "48px",
                  height: "48px",
                  borderRadius: "12px",
                  background: `linear-gradient(135deg, ${item.color}20, ${item.color}10)`,
                  border: `1px solid ${item.color}40`,
                  marginRight: "1rem",
                  color: item.color,
                  transition: "all 0.3s ease",
                  ...(hoveredLink === item.id && {
                    transform: "scale(1.1)",
                    boxShadow: `0 0 20px ${item.color}40`,
                  }),
                }}
              >
                {item.icon}
              </Box>

              <Box sx={{ flex: 1 }}>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#FFFFFF",
                    fontWeight: "600",
                    fontSize: "1.1rem",
                    marginBottom: "0.25rem",
                    opacity: hoveredLink === item.id ? 1 : 0.9,
                    transition: "opacity 0.3s ease",
                  }}
                >
                  {item.label}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "rgba(173, 151, 79, 0.8)",
                    fontSize: "0.95rem",
                    fontWeight: "500",
                    transition: "color 0.3s ease",
                    ...(hoveredLink === item.id && {
                      color: "rgba(173, 151, 79, 1)",
                    }),
                  }}
                >
                  {item.value}
                </Typography>
              </Box>

              <IconButton
                sx={{
                  color: "rgba(173, 151, 79, 0.6)",
                  transition: "all 0.3s ease",
                  ...(hoveredLink === item.id && {
                    color: "#ad974f",
                    transform: "translateX(4px)",
                  }),
                }}
              >
                <Launch />
              </IconButton>
            </CardContent>
          ))}
        </Box>

        <Typography
          variant="body2"
          sx={{
            textAlign: "center",
            marginTop: "2rem",
            color: "rgba(255, 255, 255, 0.6)",
            fontSize: "0.9rem",
            fontStyle: "italic",
          }}
        >
          Always open to new opportunities and collaborations
        </Typography>
      </Card>
    </Box>
  );
};

export default ContactCard;
