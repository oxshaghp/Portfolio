"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Home,
  FileText,
  Facebook,
  Instagram,
  Linkedin,
  Github,
} from "lucide-react";

function NavBar() {
  const navItems = [
    { icon: Home, label: "Home", href: "/" },
    { icon: FileText, label: "Blog", href: "/Blog" },
    {
      icon: Facebook,
      label: "Facebook",
      href: "https://www.facebook.com/abdullah.atef.754",
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/oxshaghp/",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/abdullah-atef-b2061a324/",
    },
    { icon: Github, label: "GitHub", href: "https://github.com/oxshaghp" },
  ];

  return (
    <div
      className="fixed bottom-6  transform   z-[999999999] pointer-events-auto"
      style={{
        position: "fixed",
        bottom: "24px",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 999999999,
        pointerEvents: "auto",
        width: "fit-content",
      }}
    >
      <motion.div
        className="bg-[var(--bg-base-color)] rounded-full h-16 px-6 flex items-center justify-center gap-2 shadow-lg border border-gray-200/20 backdrop-blur-sm"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          position: "relative",
          zIndex: 999999999,
          minWidth: "max-content",
        }}
      >
        {navItems.map((item, index) => (
          <React.Fragment key={item.label}>
            <motion.a
              href={item.href}
              className="relative p-3 rounded-full transition-colors duration-200 group"
              whileHover={{
                scale: 1.1,
                backgroundColor: "white",
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 17,
              }}
            >
              <motion.div
                className="flex items-center justify-center"
                whileHover={{ rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                <item.icon className="w-5 h-5 text-gray-600 group-hover:text-gray-800 transition-colors duration-200" />
              </motion.div>

              {/* Tooltip */}
              <motion.div
                className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 px-3 py-2 bg-black/90 text-white text-sm rounded-lg opacity-0 pointer-events-none whitespace-nowrap z-[10000]"
                initial={{ opacity: 0, y: 10, scale: 0.8 }}
                whileHover={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.2 }}
              >
                {item.label}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90"></div>
              </motion.div>
            </motion.a>

            {/* Separator */}
            {index < navItems.length - 1 && (
              <motion.div
                className="w-px h-6 bg-gray-300/50"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{
                  delay: 0.1 * index + 0.3,
                  duration: 0.3,
                }}
              />
            )}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
}

export default NavBar;
