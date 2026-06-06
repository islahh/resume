"use client";

import { motion } from "framer-motion";
import {
  EnvelopeIcon,
  DevicePhoneMobileIcon,
  MapPinIcon,
  GlobeAltIcon,
  CodeBracketIcon,
  ArrowDownTrayIcon,
} from "@heroicons/react/24/outline";
import { CVData } from "../data/cv-data";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function Header({ data }: { data: CVData }) {
  const [showPhone, setShowPhone] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [pdfMode, setPdfMode] = useState(false);

  const downloadPdf = async () => {
    const resumeRoot = document.getElementById("resume-root");
    if (!resumeRoot) {
      return;
    }

    const technicalSkills = document.getElementById("technical-skills-section");

    setIsDownloading(true);
    setPdfMode(true);
    await new Promise((resolve) =>
      requestAnimationFrame(() => requestAnimationFrame(resolve)),
    );

    try {
      const canvas = await html2canvas(resumeRoot, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#ffffff",
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("portrait", "pt", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      const pageHeight = pdf.internal.pageSize.getHeight();

      const pageTopPositions = [0];

      if (technicalSkills) {
        const rootRect = resumeRoot.getBoundingClientRect();
        const skillsRect = technicalSkills.getBoundingClientRect();
        const ratio = pdfWidth / canvas.width;
        const sectionTop = (skillsRect.top - rootRect.top) * ratio;
        const sectionHeight = skillsRect.height * ratio;
        const sectionBottom = sectionTop + sectionHeight;
        const currentPageBottom =
          Math.ceil(sectionTop / pageHeight) * pageHeight;

        if (
          sectionTop > 0 &&
          sectionBottom > currentPageBottom &&
          sectionTop < currentPageBottom
        ) {
          pageTopPositions.push(sectionTop);
        }
      }

      const sortedPageTops = [...new Set(pageTopPositions)].sort(
        (a, b) => a - b,
      );
      let currentTop = 0;

      while (currentTop + pageHeight < pdfHeight) {
        const forcedBreak = sortedPageTops.find(
          (pos) => pos > currentTop && pos < currentTop + pageHeight,
        );
        if (forcedBreak) {
          currentTop = forcedBreak;
          if (!sortedPageTops.includes(currentTop)) {
            sortedPageTops.push(currentTop);
          }
          continue;
        }

        currentTop += pageHeight;
        if (currentTop < pdfHeight) {
          sortedPageTops.push(currentTop);
        }
      }

      const uniquePageTops = [...new Set(sortedPageTops)].sort((a, b) => a - b);

      uniquePageTops.forEach((top, index) => {
        if (index > 0) {
          pdf.addPage();
        }
        pdf.addImage(imgData, "PNG", 0, -top, pdfWidth, pdfHeight);
      });

      pdf.save("islah-musleh-cv.pdf");
    } finally {
      setPdfMode(false);
      setIsDownloading(false);
    }
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative py-12 text-white bg-gradient-to-br from-slate-800 to-slate-900 dark:from-[#0f172a] dark:to-[#1e293b] pl-6 pr-6"
    >
      <div className="absolute inset-0 bg-noise opacity-10 pointer-events-none" />
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-wrap items-center justify-between max-w-4xl mx-auto gap-4">
          <div>
            <h1 className="text-4xl font-bold mb-2">{data.header.name}</h1>
            <p className="text-2xl text-slate-300 dark:text-slate-400">
              {data.header.title}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={downloadPdf}
              disabled={isDownloading}
              className={`inline-flex items-center rounded-full border border-slate-300/20 bg-white/10 px-4 py-2 text-sm font-medium text-slate-100 transition hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-60 ${pdfMode ? "hidden" : ""}`}
            >
              <ArrowDownTrayIcon className="w-4 h-4 mr-2" />
              {isDownloading ? "Downloading..." : "Download PDF"}
            </button>
            <ThemeToggle />
          </div>
        </div>

        <div className="flex flex-wrap gap-4 items-center text-slate-200 dark:text-slate-300 mt-6">
          <div className="flex items-center">
            <EnvelopeIcon className="w-5 h-5 mr-2" />
            <a
              href={`mailto:${data.header.contact.email}`}
              className="hover:text-slate-100"
            >
              {data.header.contact.email}
            </a>
          </div>

          <button
            onClick={() => {
              setShowPhone(!showPhone);
              console.log("showPhone", showPhone);
            }}
            className="flex items-center hover:text-slate-100"
          >
            <DevicePhoneMobileIcon className="w-5 h-5 mr-2" />
            {showPhone ? data.header.contact.phone : "Show Phone"}
          </button>

          <div className="flex items-center">
            <MapPinIcon className="w-5 h-5 mr-2" />
            {data.header.contact.location}
          </div>

          <div className="flex items-center hover:text-slate-100">
            <a
              href={data.header.contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center hover:text-slate-100"
            >
              <GlobeAltIcon className="w-5 h-5 mr-2" />
              LinkedIn
            </a>
          </div>

          <div className="flex items-center hover:text-slate-100">
            <a
              href={data.header.contact.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center hover:text-slate-100"
            >
              <CodeBracketIcon className="w-5 h-5 mr-2" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
