import React from "react";
import {
  Instagram,
  Phone,
  Mail,
  ExternalLink
} from "lucide-react";

const socialLinks = [
  {
    name: "Instagram",
    displayName: "Instagram",
    icon: Instagram,
    subText: "mohyldin",
    url: "https://www.instagram.com/mohyldin/",
    color: "#E4405F",
    gradient: "from-[#833AB4] via-[#E4405F] to-[#FCAF45]",
    isPrimary: true // <- Mark as primary to render in the top section
  },
  {
  name: "Phone",
  displayName: "Phone",
  subText: "01552257243",
  icon: Phone,
  // url: "tel:+201552257243", // optional for tel link
  color: "#10B981",
  gradient: "from-[#16a34a] to-[#10b981]"
},
{
  name: "Email",
  displayName: "Email",
  subText: "ahmedmohii17@gmail.com",
  icon: Mail,
  color: "#3B82F6",
  gradient: "from-[#2563EB] to-[#3B82F6]"
}
];

const SocialLinks = () => {
  const Instagram = socialLinks.find(link => link.name === "Instagram");
  const Phone = socialLinks.find(link => link.name === "Phone");
  const Email = socialLinks.find(link => link.name === "Email");


  return (
    <div className="w-full bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-6 py-8 backdrop-blur-xl">
      <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
        <span className="inline-block w-8 h-1 bg-black rounded-full"></span>
        Connect With Me
      </h3>

      <div className="flex flex-col gap-4">
        {/* Instagram Row */}
        <a href={Instagram.url} target="_blank" rel="noopener noreferrer" className="group relative flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-500">
          <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-r ${Instagram.gradient}`} />
          <div className="relative flex items-center gap-4">
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 opacity-20 rounded-md transition-all duration-500 group-hover:scale-110 group-hover:opacity-30" style={{ backgroundColor: Instagram.color }} />
              <div className="relative p-2 rounded-md">
                <Instagram.icon className="w-6 h-6 transition-all duration-500 group-hover:scale-105" style={{ color: Instagram.color }} />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold pt-[0.2rem] text-gray-200 tracking-tight leading-none group-hover:text-white transition-colors duration-300">{Instagram.displayName}</span>
              <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{Instagram.subText}</span>
            </div>
          </div>
          <ExternalLink className="relative w-5 h-5 text-gray-500 group-hover:text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0 -translate-x-1" />
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
          </div>
        </a>

        {/* Phone Number Row */}
        <a href={Phone.url} className="group relative flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-500">
          <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-r ${Phone.gradient}`} />
          <div className="relative flex items-center gap-4">
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 opacity-20 rounded-md transition-all duration-500 group-hover:scale-110 group-hover:opacity-30" style={{ backgroundColor: Phone.color }} />
              <div className="relative p-2 rounded-md">
                <Phone.icon className="w-6 h-6 transition-all duration-500 group-hover:scale-105" style={{ color: Phone.color }} />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold pt-[0.2rem] text-gray-200 tracking-tight leading-none group-hover:text-white transition-colors duration-300">{Phone.displayName}</span>
              <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{Phone.subText}</span>
            </div>
          </div>
        </a>

        {/* Email Row */}
        <a
          href={Email.url}
          className="group relative flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-500"
        >
          <div
            className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-r ${Email.gradient}`}
          />
          <div className="relative flex items-center gap-4">
            <div className="relative flex items-center justify-center">
              <div
                className="absolute inset-0 opacity-20 rounded-md transition-all duration-500 group-hover:scale-110 group-hover:opacity-30"
                style={{ backgroundColor: Email.color }}
              />
              <div className="relative p-2 rounded-md">
                <Email.icon
                  className="w-6 h-6 transition-all duration-500 group-hover:scale-105"
                  style={{ color: Email.color }}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold pt-[0.2rem] text-gray-200 tracking-tight leading-none group-hover:text-white transition-colors duration-300">
                {Email.displayName}
              </span>
              <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                {Email.subText}
              </span>
            </div>
          </div>
        </a>


      </div>
    </div>
  );
};


export default SocialLinks;