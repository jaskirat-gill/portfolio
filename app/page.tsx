import TopBar from "@/components/TopBar";
import Contact from "@/containers/Contact";
import Experience from "@/containers/Experience";
import Footer from "@/containers/Footer";
import Hero from "@/containers/Hero";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box sx={{ width: "100%", overflow: "hidden" }}>
      <Hero />
      <TopBar />
      <Experience />
      <Contact />
      <Footer />
    </Box>
  );
}
