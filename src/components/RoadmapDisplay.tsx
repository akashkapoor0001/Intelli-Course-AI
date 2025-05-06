import React, { useEffect, useState, useRef } from "react";
import { MapPin } from "lucide-react";
import { motion } from "framer-motion";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

interface RoadmapItem {
  goal: string;
  course_name: string;
  course_link: string;
}

interface Props {
  roadmap: {
    [month: string]: RoadmapItem[];
  };
}

const RoadmapJourney: React.FC<Props> = ({ roadmap }) => {
  const months = Object.entries(roadmap);
  const flatTasks = months.flatMap(([month, tasks]) =>
    tasks.map((task, i) => ({
      task,
      month,
      globalIndex: `${month}-${i}`,
    }))
  );

  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const roadmapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (roadmapRef.current) {
      roadmapRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [roadmap]);

  useEffect(() => {
    if (currentTaskIndex < flatTasks.length) {
      const currentTask = flatTasks[currentTaskIndex].task.goal;

      if (charIndex < currentTask.length) {
        const timeout = setTimeout(() => {
          setTypedText((prev) => prev + currentTask[charIndex]);
          setCharIndex((prev) => prev + 1);
        }, 10);
        return () => clearTimeout(timeout);
      } else {
        const delay = setTimeout(() => {
          setTypedText("");
          setCharIndex(0);
          setCurrentTaskIndex((prev) => prev + 1);
        }, 500);
        return () => clearTimeout(delay);
      }
    }
  }, [charIndex, currentTaskIndex]);

  const getTypedStatus = (month: string, index: number) => {
    const flatIndex = flatTasks.findIndex(
      (t) => t.month === month && t.globalIndex === `${month}-${index}`
    );
    if (flatIndex < currentTaskIndex) return "completed";
    if (flatIndex === currentTaskIndex) return "typing";
    return "pending";
  };

  const generatePDF = async () => {
    if (!roadmapRef.current) return;
    const input = roadmapRef.current;
    const canvas = await html2canvas(input, {
      scale: 2,
      useCORS: true,
    });

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    const imgProps = pdf.getImageProperties(imgData);
    const imgRatio = imgProps.width / imgProps.height;
    const pdfRatio = pdfWidth / pdfHeight;

    let imgWidth = pdfWidth;
    let imgHeight = pdfWidth / imgRatio;

    if (imgRatio < pdfRatio) {
      imgHeight = pdfHeight;
      imgWidth = pdfHeight * imgRatio;
    }

    const x = (pdfWidth - imgWidth) / 2;
    const y = 10;

    pdf.addImage(imgData, "PNG", x, y, imgWidth, imgHeight);
    pdf.save("roadmap.pdf");
  };

  return (
    <div ref={roadmapRef} className="py-10 px-4 max-w-7xl mx-auto overflow-hidden">
      <div className="mb-6 text-center">
        <button
          onClick={generatePDF}
          className="bg-blue-500 text-white p-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Download PDF
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-x-12 gap-y-20 relative">
        {months.map(([month, tasks], monthIdx) => (
          <div key={month} className="relative">
            <div className="bg-gray-900 text-white p-6 rounded-2xl shadow-xl border border-gray-700">
              <h3 className="text-2xl font-bold mb-4 text-center">{month}</h3>
              <div className="space-y-4">
                {tasks.map((task, i) => {
                  const status = getTypedStatus(month, i);
                  const isCurrent = status === "typing";
                  const isDone = status === "completed";

                  return (
                    <div key={i} className="flex items-start gap-3">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{
                          scale: isCurrent || isDone ? 1 : 0.5,
                          opacity: isCurrent || isDone ? 1 : 0.3,
                        }}
                        transition={{ duration: 0.3 }}
                        className={`rounded-full p-1 ${
                          isCurrent
                            ? "bg-green-500"
                            : isDone
                            ? "bg-blue-500"
                            : "bg-gray-600"
                        }`}
                      >
                        <MapPin className="text-white w-5 h-5" />
                      </motion.div>

                      <div className="text-sm mt-1 text-gray-300">
                        {isDone && (
                          <div>
                            <p className="font-medium mb-1">{task.goal}</p>
                            <a
                              href={task.course_link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-400 hover:underline"
                            >
                              📘 {task.course_name}
                            </a>
                          </div>
                        )}
                        {isCurrent && (
                          <p className="text-green-400">
                            {typedText}
                            <span className="animate-pulse">_</span>
                          </p>
                        )}
                        {status === "pending" && (
                          <p className="text-gray-500">...</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoadmapJourney;
