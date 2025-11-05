import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardProject from "../components/CardProject";
import TechStackIcon from "../components/TechStackIcon";
import AOS from "aos";
import "aos/dist/aos.css";
import { Code, Boxes, Users } from "lucide-react";
import { Link } from "react-router-dom";

function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: { xs: 1, sm: 3 } }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const techStacks = [
  { icon: "pr.png", language: "Premiere Pro" },
  { icon: "ae.png", language: "After Effects" },
  { icon: "ps.png", language: "Adobe PhotoShop" },
  { icon: "AI.png", language: "Artificial intelligence" },

];

const clients = [
  { icon: "/clients/redbull.png", name: "Red_Bull", link: "/clients/redbull.png" },
  { icon: "/clients/cairokee.png", name: "Cairokee", link: "/clients/cairokee.png" },
  { icon: "/clients/puma.png", name: "Puma", link: "/clients/puma.png" },
  { icon: "/clients/alahly.png", name: "Al_Ahly", link: "/clients/alahly.png" },
];

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = useState(0);

  useEffect(() => {
    AOS.init({ once: false });

    const allVideos = [
      { id: "pablo", Title: "Pablo", Video: "/videos/Pablo.mp4", Img: "/pablopic.PNG" },
      { id: "zaza", Title: "ZAZA", Video: "/videos/ZIAD ZAZA - ENT BTRSHD FINAL.mp4", Img: "/entabtrshd.PNG" },
      { id: "manefisto", Title: "Manefisto", Video: "/videos/Manifesto.mp4", Img: "/manifestopic.PNG" },
      { id: "fein", Title: "FE!N", Video: "/videos/FE!N.mp4", Img: "/fein.PNG" },

      { id: "metro", Title: "METRO", Video: "/videos/METRO.mp4", Img: "/Metroo.png" },
      { id: "nadia_el_gendy", Title: "Nadia El Gendy", Video: "/videos/Nadia El Gendy.mp4", Img: "/Nadia.png" },
      { id: "sad", Title: "Sad", Video: "/videos/sad.mp4", Img: "/Sad.png" },
      { id: "blue_elephant", Title: "The Blue Elephant", Video: "/videos/The Blue Elephant Finallll.mp4", Img: "/blue.png" },
      { id: "tsh", Title: "TSH Final", Video: "/videos/TSH Final.mp4", Img: "/TSH.png" },
      { id: "yourhonor", Title: "Your Honor", Video: "/videos/YOURHONOR.mp4", Img: "/yourhonor.png" },
    ];

    localStorage.setItem("projects", JSON.stringify(allVideos));
  }, []);

  const projects = JSON.parse(localStorage.getItem("projects")) || [];

  const handleChange = (event, newValue) => setValue(newValue);

  return (
    <div className="md:px-[10%] px-[5%] w-full mt-[3rem] bg-[#000000] overflow-hidden" id="Portofolio">
      <div className="text-center pb-10" data-aos="fade-up" data-aos-duration="1000">
        <h2 className="inline-block text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
          <span
            style={{
              color: "#6366f1",
              backgroundImage: "linear-gradient(45deg, #67285B 10%, #410D4D 93%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Portfolio Showcase
          </span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2">
          Explore My Vision.
        </p>
      </div>

      <Box sx={{ width: "100%" }}>
        <AppBar
          position="static"
          elevation={0}
          sx={{
            bgcolor: "transparent",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "20px",
          }}
          className="md:px-4"
        >
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            variant="fullWidth"
            sx={{
              minHeight: "70px",
              "& .MuiTab-root": {
                fontSize: { xs: "0.9rem", md: "1rem" },
                fontWeight: "600",
                color: "#94a3b8",
                textTransform: "none",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                padding: "20px 0",
                margin: "8px",
                borderRadius: "12px",
                "&:hover": {
                  color: "#ffffff",
                  backgroundColor: "rgba(139, 92, 246, 0.1)",
                  transform: "translateY(-2px)",
                },
                "&.Mui-selected": {
                  color: "#fff",
                  background:
                    "linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.2))",
                },
              },
              "& .MuiTabs-indicator": { height: 0 },
              "& .MuiTabs-flexContainer": { gap: "8px" },
            }}
          >
            <Tab icon={<Users className="mb-2 w-5 h-5" />} label="Clients Projects" {...a11yProps(0)} />
            <Tab icon={<Code className="mb-2 w-5 h-5" />} label="Passion Projects" {...a11yProps(1)} />
            <Tab icon={<Boxes className="mb-2 w-5 h-5" />} label="Tech Stack" {...a11yProps(2)} />
          </Tabs>
        </AppBar>

        <SwipeableViews axis={theme.direction === "rtl" ? "x-reverse" : "x"} index={value} onChangeIndex={setValue}>
          {/* Clients */}
          <TabPanel value={value} index={0} dir={theme.direction}>
            <div className="container mx-auto flex justify-center items-center overflow-hidden pb-[5%]">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:gap-8 gap-5">
                {clients.map((client, index) => (
                  <div key={index} data-aos="fade-up" data-aos-duration={1000 + index * 100}>
                    <Link to={`/client/${client.name}`}>
                      <TechStackIcon TechStackIcon={client.icon} Language={client.name} />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </TabPanel>

          {/* Passion Projects */}
          <TabPanel value={value} index={1} dir={theme.direction}>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-5">
              {projects.map((project, index) => (
                <div key={project.id} data-aos="fade-up" data-aos-duration={1000 + index * 100}>
                  <CardProject Img={project.Img} Title={project.Title} id={project.id} Video={project.Video} />
                </div>
              ))}
            </div>
          </TabPanel>

          {/* Tech Stack */}
          <TabPanel value={value} index={2} dir={theme.direction}>
            <div className="container mx-auto flex justify-center items-center overflow-hidden pb-[5%]">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:gap-8 gap-5">
                {techStacks.map((stack, index) => (
                  <div key={index} data-aos="fade-up" data-aos-duration={1000 + index * 100}>
                    <TechStackIcon TechStackIcon={stack.icon} Language={stack.language} />
                  </div>
                ))}
              </div>
            </div>
          </TabPanel>
        </SwipeableViews>
      </Box>
    </div>
  );
}
