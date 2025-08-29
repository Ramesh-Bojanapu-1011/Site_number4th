"use client";
import React from "react";
import { useLanguage } from "@/components/LanguageContext";

export default function RtlWrapper({ children }: { children: React.ReactNode }) {
  const { language } = useLanguage();
  const isRTL = language === "ar" || language === "he";
  return (
    <div dir={isRTL ? "rtl" : "ltr"} lang={language} style={{ minHeight: "100vh" }}>
      {children}
    </div>
  );
}
