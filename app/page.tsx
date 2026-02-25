"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  Youtube,
  Twitch,
  Instagram,
  MessageCircle,
  Heart,
  Coins,
  MessageSquare,
  Cpu,
  Monitor,
  Server,
  HardDrive,
  Mouse,
  Keyboard,
  Headphones,
  Mic,
  Share2,
  Megaphone,
  CircuitBoard,
  Sliders,
  Camera,
  Gamepad2,
  LayoutGrid,
  Video,
} from "lucide-react";
import { TikTokIcon, DiscordIcon, WhatsAppIcon } from "@/components/icons";

const socialLinks = [
  { name: "TikTok", url: "https://www.tiktok.com/@bocajoga", icon: TikTokIcon },
  { name: "Twitch", url: "https://www.twitch.tv/obocajoga", icon: Twitch },
  {
    name: "Instagram",
    url: "https://www.instagram.com/bocajoga/",
    icon: Instagram,
  },
  {
    name: "Discord",
    url: "https://www.instagram.com/bocajoga/",
    icon: DiscordIcon,
  },
];

const mainLinks = [
  {
    title: "Grupo VIP no WhatsApp",
    url: "https://chat.whatsapp.com/Ir2LIC4C6E7CRqjMXLmmF6",
    icon: WhatsAppIcon,
    theme: "whatsapp",
    subtitle: "Só entra quem aguenta o nível.😎🚀",
  },
  {
    title: "Inscreva-se no YouTube",
    url: "https://www.youtube.com/@bocajoga",
    icon: Youtube,
    theme: "youtube",
    subtitle: "Vídeos novos toda semana! 🎬",
  },
  {
    title: "Mande um Pix na Live 📢",
    url: "https://livepix.gg/bocadebide",
    icon: Megaphone,
    theme: "livepix",
    subtitle: "Sua mensagem toca ao vivo (LivePix)",
  },
  {
    title: "Moedas do TikTok com desconto",
    url: "https://www.tiktok.com/coin",
    icon: Coins,
    theme: "default",
  },
  {
    title: "Meu servidor no Discord",
    url: "https://discord.gg/JRZerx9A",
    icon: MessageSquare,
    theme: "default",
  },
];

const setupCategories = [
  {
    category: 'O "PC Chinês" 🐉',
    items: [
      {
        name: "Processador",
        desc: "Intel Xeon E5-2686 v4 (18 Cores)",
        icon: Cpu,
      },
      {
        name: "Placa de Vídeo",
        desc: "AMD Radeon RX 5700 XT 8GB",
        icon: Monitor,
      },
      { name: "Placa Mãe", desc: "Machinist X99 MR9A Pro", icon: CircuitBoard },
      {
        name: "Memória RAM",
        desc: "64GB (4x16) Kllisre DDR4",
        icon: HardDrive,
      },
    ],
  },
  {
    category: "Periféricos & Áudio 🎧",
    items: [
      {
        name: "Monitor Principal",
        desc: 'LG UltraGear 27" 144Hz',
        icon: Monitor,
      },
      {
        name: "Monitor Secundário",
        desc: 'Samsung 28" 4K (Chat/OBS)',
        icon: Monitor,
      },
      { name: "Teclado", desc: "HyperX Alloy MKW100", icon: Keyboard },
      { name: "Mouse", desc: "Fortrek 4800DPI", icon: Mouse },
      { name: "Headset", desc: "Fifine H6 7.1", icon: Headphones },
      { name: "Microfone", desc: "Fifine AmpliGame AM8", icon: Mic },
      { name: "Mixer de Áudio", desc: "Fifine AmpliGame SC3", icon: Sliders },
    ],
  },
  {
    category: "Streaming & Consoles 🎮",
    items: [
      { name: "Console", desc: "PlayStation 5", icon: Gamepad2 },
      { name: "Controle", desc: "8BitDo Ultimate 2", icon: Gamepad2 },
      { name: "Webcam", desc: "Logitech Brio 4K", icon: Camera },
      { name: "Stream Deck", desc: "Ajazz AKP153E", icon: LayoutGrid },
      { name: "Placa de Captura", desc: "Ezcap 333", icon: Video },
    ],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-emerald-200">
      {/* Cover Image */}
      <div className="h-48 w-full relative bg-stone-200 overflow-hidden">
        <Image
          src="/boca.jpg"
          alt="Cover"
          fill
          className="object-cover opacity-80"
          referrerPolicy="no-referrer"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-stone-50/90" />
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10 pb-24">
        {/* Profile Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-8"
        >
          <div className="relative w-32 h-32 rounded-full p-1 bg-stone-50 shadow-xl mb-4">
            <div className="w-full h-full rounded-full overflow-hidden relative bg-stone-200">
              <Image
                src="/boca.jpg"
                alt="BocaJoga"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-stone-900 mb-2">
            BocaJoga
          </h1>
          <p className="text-stone-500 max-w-md mx-auto">
            Valeu por chegar até aqui! 🎮✨
          </p>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center gap-4 mb-10 flex-wrap"
        >
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <a
                key={index}
                href={link.url}
                className="w-12 h-12 rounded-full bg-white shadow-sm border border-stone-100 flex items-center justify-center text-stone-600 hover:text-stone-900 hover:shadow-md hover:-translate-y-1 transition-all duration-200"
                aria-label={link.name}
              >
                <Icon className="w-5 h-5" />
              </a>
            );
          })}
        </motion.div>

        {/* Main Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col gap-3 mb-12"
        >
          {mainLinks.map((link, index) => {
            const Icon = link.icon;

            const themeStyles: Record<string, string> = {
              youtube:
                "bg-red-600 text-white shadow-md hover:bg-red-700 hover:shadow-lg hover:-translate-y-0.5",
              whatsapp:
                "bg-emerald-500 text-white shadow-md hover:bg-emerald-600 hover:shadow-lg hover:-translate-y-0.5",
              livepix:
                "bg-violet-600 text-white shadow-md hover:bg-violet-700 hover:shadow-lg hover:-translate-y-0.5",
              default:
                "bg-white text-stone-800 shadow-sm border border-stone-100 hover:shadow-md hover:border-stone-200 hover:-translate-y-0.5",
            };

            const iconThemeStyles: Record<string, string> = {
              youtube: "bg-white/20 text-white",
              whatsapp: "bg-white/20 text-white",
              livepix: "bg-white/20 text-white",
              default:
                "bg-stone-100 text-stone-600 group-hover:bg-stone-200 group-hover:text-stone-900",
            };

            const subtitleThemeStyles: Record<string, string> = {
              youtube: "text-red-100",
              whatsapp: "text-emerald-100",
              livepix: "text-violet-100",
              default: "text-stone-500",
            };

            const isDefault = link.theme === "default";

            return (
              <a
                key={index}
                href={link.url}
                className={`group relative flex items-center p-4 rounded-2xl transition-all duration-200 ${themeStyles[link.theme]}`}
              >
                <div
                  className={`flex items-center justify-center w-10 h-10 rounded-full transition-colors mr-4 ${iconThemeStyles[link.theme]}`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h2
                    className={`font-semibold ${isDefault ? "text-stone-800" : "text-white"}`}
                  >
                    {link.title}
                  </h2>
                  {link.subtitle && (
                    <p
                      className={`text-sm mt-0.5 ${subtitleThemeStyles[link.theme]}`}
                    >
                      {link.subtitle}
                    </p>
                  )}
                </div>
                <Share2
                  className={`w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity ${isDefault ? "text-stone-400" : "text-white/70"}`}
                />
              </a>
            );
          })}
        </motion.div>

        {/* Setup Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px bg-stone-200 flex-1" />
            <h2 className="text-sm font-bold uppercase tracking-widest text-stone-400">
              Meu Setup
            </h2>
            <div className="h-px bg-stone-200 flex-1" />
          </div>

          <div className="space-y-6">
            {setupCategories.map((category, catIndex) => (
              <div
                key={catIndex}
                className="bg-white rounded-3xl p-6 shadow-sm border border-stone-100"
              >
                <h3 className="text-lg font-bold text-stone-800 mb-4 px-2">
                  {category.category}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {category.items.map((item, itemIndex) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={itemIndex}
                        className="flex items-start p-3 rounded-xl hover:bg-stone-50 transition-colors"
                      >
                        <div className="mt-0.5 mr-3 text-stone-400">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-0.5">
                            {item.name}
                          </p>
                          <p className="text-sm font-medium text-stone-800">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}
