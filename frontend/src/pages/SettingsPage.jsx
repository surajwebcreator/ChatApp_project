
import React from 'react';
import { THEMES } from "../constants";
import { useThemeStore } from '../store/useThemeStore';
import { Send, Moon, Sun, Check } from "lucide-react";

const PREVIEW_MESSAGES = [
  { id: 1, content: "Hey! How's it going?", isSent: false },
  { id: 2, content: "I'm doing great! Just working on some new features.", isSent: true },
];

const SettingsPage = () => {
  const { theme, setTheme } = useThemeStore();

  return (
    <div className="min-h-screen container mx-auto px-4 pt-20 max-w-4xl">
      <div className="space-y-8">
        {/* Header Section */}
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl font-bold">Settings</h2>
          <p className="text-sm text-base-content/70">Personalize your chat experience</p>
        </div>

        {/* Theme Selection Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold">Appearance</span>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl">
            {THEMES.map((t) => (
              <button
                key={t}
                className={`
                  relative flex items-center justify-between p-4 rounded-2xl border-2 transition-all duration-200
                  ${theme === t 
                    ? "border-primary bg-primary/5 shadow-md" 
                    : "border-base-300 hover:border-base-content/20 bg-base-100"}
                `}
                onClick={() => setTheme(t)}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-lg ${theme === t ? "bg-primary text-primary-content" : "bg-base-200"}`}>
                    {t === "light" ? <Sun size={24} /> : <Moon size={24} />}
                  </div>
                  <div className="text-left">
                    <p className="font-bold capitalize text-sm">{t} Mode</p>
                    <p className="text-xs text-base-content/60">
                      {t === "light" ? "Classic bright look" : "Easy on the eyes"}
                    </p>
                  </div>
                </div>

                {theme === t && (
                  <div className="bg-primary rounded-full p-1">
                    <Check size={14} className="text-primary-content" />
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Live Preview Section */}
        <div className="pt-4">
          <h3 className="text-lg font-semibold mb-4">Live Preview</h3>
          <div className="rounded-2xl border border-base-300 overflow-hidden bg-base-200/50 p-4 md:p-8">
            <div className="max-w-md mx-auto shadow-2xl rounded-2xl overflow-hidden border border-base-300 bg-base-100">
              {/* Mock Chat Header */}
              <div className="px-4 py-4 border-b border-base-300 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-content font-bold shadow-sm">
                  R
                </div>
                <div>
                  <h3 className="font-semibold text-sm">User..</h3>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-success"></div>
                    <span className="text-[10px] text-base-content/70">Online</span>
                  </div>
                </div>
              </div>

              {/* Mock Chat Body */}
              <div className="p-4 space-y-4 h-[220px] overflow-y-auto bg-base-100/50">
                {PREVIEW_MESSAGES.map((msg) => (
                  <div key={msg.id} className={`flex ${msg.isSent ? "justify-end" : "justify-start"}`}>
                    <div className={`max-w-[85%] rounded-2xl p-3 text-sm shadow-sm
                      ${msg.isSent ? "bg-primary text-primary-content rounded-tr-none" : "bg-base-200 rounded-tl-none"}
                    `}>
                      {msg.content}
                    </div>
                  </div>
                ))}
              </div>

              {/* Mock Input */}
              <div className="p-4 border-t border-base-300 flex gap-2 bg-base-100">
                <div className="flex-1 bg-base-200 rounded-xl px-4 py-2 text-xs text-base-content/50 italic">
                  Type a message...
                </div>
                <button className="btn btn-primary btn-sm btn-square">
                  <Send size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;