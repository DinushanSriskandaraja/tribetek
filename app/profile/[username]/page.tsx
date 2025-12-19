"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { employees } from "@/data/empData";
import {
  Mail,
  Globe,
  Linkedin,
  Github,
  Instagram,
  Facebook,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Page() {
  const params = useParams();
  const username = params?.username as string;

  const employee = employees.find((emp) => emp.username === username);

  if (!employee) {
    return (
      <div className="h-screen flex items-center justify-center bg-black text-white">
        <h1>User not found</h1>
      </div>
    );
  }

  const socialIcons: any = {
    linkedin: <Linkedin />,
    github: <Github />,
    instagram: <Instagram />,
    facebook: <Facebook />,
    website: <Globe />,
  };

  // Motion variants
  const boxVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen text-white flex justify-center items-start p-6 md:pt-20">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* IMAGE BOX */}
        <motion.div
          className="rounded-2xl flex justify-center"
          variants={boxVariant}
          initial="hidden"
          animate="visible">
          <Image
            src={employee.image}
            alt={employee.name}
            width={500}
            height={700}
            className="object-cover rounded-2xl"
          />
        </motion.div>

        <div className="flex flex-col gap-4">
          {/* PROFILE DETAILS BOX */}
          <motion.div
            className="bg-[#161616] border border-zinc-800 rounded-2xl p-6 space-y-3"
            variants={boxVariant}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}>
            <h1 className="text-2xl font-bold">{employee.name}</h1>
            <p className="text-[#ED4716] font-medium">{employee.role}</p>
            {employee.location && (
              <p className="text-zinc-400">{employee.location}</p>
            )}
            <p className="text-zinc-300 mt-2">{employee.bio}</p>
          </motion.div>

          {/* EMAIL BOX */}
          <motion.div
            className="bg-[#161616] border border-zinc-800 rounded-2xl p-4 flex items-center gap-3"
            variants={boxVariant}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}>
            <Mail className="text-[#ED4716]" size={18} />
            <span>{employee.email}</span>
          </motion.div>

          {/* PORTFOLIO BOX */}
          <motion.a
            href={employee.portfolio}
            target="_blank"
            className="bg-[#161616] border border-zinc-800 rounded-2xl p-4 flex items-center gap-3 hover:border-[#ED4716] transition"
            variants={boxVariant}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6 }}>
            <Globe className="text-[#ED4716]" size={18} />
            <span>View Portfolio</span>
          </motion.a>

          {/* SOCIAL LINKS */}
          <motion.div
            className="grid grid-cols-3 gap-3 mt-2"
            variants={boxVariant}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.8 }}>
            {employee.socials.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                className="bg-[#161616] border border-zinc-800 rounded-2xl p-4 flex items-center justify-center hover:border-[#ED4716] transition">
                {socialIcons[social.platform.toLowerCase()] || <Globe />}
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
