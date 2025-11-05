import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ChevronRight } from "lucide-react";

const ClientDetails = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const [client, setClient] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    // 🔹 Static client data (each with 3 videos)
    const clientsData = {
      Red_Bull: {
        logo: "/clients/redbull.png",
        description: "Crative directing and video production for Red Bull campaigns.",
        videos: [
          "/videos/Redbull/RedBull/Flugtag Saba & Dina/1.mp4",
          "/videos/Redbull/RedBull/Symphonic X Marwan Pablo/1.mp4",
          "/videos/Redbull/RedBull/Jukebox X Tamer Hosny/1.mp4",
        ],
      },
      Cairokee: {
        logo: "/clients/cairokee.png",
        description: "Social Media Management and post production for Cairokee band.",
        videos: [
          "/videos/Cairokee/4.mp4",
          "/videos/Cairokee/2.mp4",
          "/videos/Cairokee/1.mp4",
          "/videos/Cairokee/3.mp4",
        ],
      },
      Puma: {
        logo: "/clients/puma.png",
        description: "Creative Content and Live Coverage for Puma events.",
        videos: [
          "/videos/Puma/puma1.mp4",
          "/videos/Puma/puma2.mp4",
          "/videos/Puma/puma3.mp4",
        ],
      },
      Al_Ahly: {
        logo: "/clients/alahly.png",
        description: "Creative post-production and branding visuals for Al Ahly SC.",
        videos: [
          "/videos/Alahly/Alahly/2.mp4",
          "/videos/Alahly/Alahly/4.mp4",
          "/videos/Alahly/Alahly/3.mp4",
          "/videos/Alahly/Alahly/1.mp4",
        ],
      },
    };

    setClient(clientsData[name]);
  }, [name]);

  if (!client) {
    return <div className="text-white text-center p-10">Client not found.</div>;
  }

  return (
    <div className="min-h-screen bg-[#000000] px-[2%] sm:px-0 relative overflow-hidden">
      {/* Background animation */}
      <div className="fixed inset-0">
        <div className="absolute -inset-[10px] opacity-20">
          <div className="absolute top-0 -left-4 w-72 md:w-96 h-72 md:h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
          <div className="absolute top-0 -right-4 w-72 md:w-96 h-72 md:h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-20 w-72 md:w-96 h-72 md:h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000" />
        </div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]" />
      </div>

      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-16">
          {/* Breadcrumb + Back button */}
          <div className="flex items-center space-x-2 md:space-x-4 mb-8 md:mb-12 animate-fadeIn">
            <button
              onClick={() => navigate("/#Portofolio")}
              className="group inline-flex items-center space-x-1.5 md:space-x-2 px-3 md:px-5 py-2 md:py-2.5 bg-white/5 backdrop-blur-xl rounded-xl text-white/90 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20 text-sm md:text-base"
            >
              <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 group-hover:-translate-x-1 transition-transform" />
              <span>Back</span>
            </button>
            <div className="flex items-center space-x-1 md:space-x-2 text-sm md:text-base text-white/50">
              <button
                onClick={() => navigate("/#Portofolio")}
                className="hover:text-white transition-colors duration-200"
              >
                Clients
              </button>
              <ChevronRight className="w-3 h-3 md:w-4 md:h-4" />
              <span className="text-white/90 truncate">{name}</span>
            </div>
          </div>

          {/* Client info section */}
          <div className="space-y-6 md:space-y-10 animate-slideInLeft text-center">
            {/* Client Name and Logo */}
            <div className="space-y-6">
              <img
                src={client.logo}
                alt={name}
                className="mx-auto w-40 md:w-52 rounded-xl shadow-lg border border-white/10"
              />
              <h1 className="text-3xl md:text-6xl font-bold bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight">
                {name}
              </h1>
              <div className="relative h-1 w-16 md:w-24 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-sm" />
              </div>
            </div>

            {/* Description */}
            <div className="prose prose-invert max-w-2xl mx-auto">
              <p className="text-base md:text-lg text-gray-300/90 leading-relaxed">
                {client.description}
              </p>
            </div>

            {/* Multiple Videos */}
            {client.videos && client.videos.length > 0 && (
              <div className="grid gap-8 md:gap-10 mt-10">
                {client.videos.map((videoSrc, index) => (
                  <video
                    key={index}
                    className="w-full max-w-3xl mx-auto rounded-xl shadow-lg border border-white/10"
                    controls
                    loop
                  >
                    <source src={videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 10s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animate-fadeIn {
          animation: fadeIn 0.7s ease-out;
        }
        .animate-slideInLeft {
          animation: slideInLeft 0.7s ease-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default ClientDetails;
