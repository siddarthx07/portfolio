"use client";

import { motion } from "motion/react";

const CODE_SNIPPETS = [
  { lang: "ts", code: "app.post('/api/schedule', authenticate, async (req, res) => {" },
  { lang: "py", code: "result = coreml_model.predict(image) # <200ms on 43+ classes" },
  { lang: "tsx", code: "const Dashboard = () => <FraudAlerts metrics={realTimeData} />" },
  { lang: "py", code: "retriever = FAISS.from_documents(docs, embeddings)" },
  { lang: "java", code: "@PostMapping(\"/fraud/detect\") public ResponseEntity<Result>" },
  { lang: "ts", code: "await Farm.findOne({ farmerId }).populate('weatherTasks')" },
];

export const CodeScroll = () => {
  // Duplicate the snippets for seamless loop
  const allSnippets = [...CODE_SNIPPETS, ...CODE_SNIPPETS];

  return (
    <div className="relative h-64 w-full overflow-hidden sm:h-72 lg:h-80">
      <motion.div
        className="flex flex-col gap-2"
        animate={{
          y: ["0%", "-50%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {allSnippets.map((snippet, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2 rounded-md bg-slate-950/50 px-3 py-1.5 font-mono text-xs"
          >
            <span
              className={`text-[10px] font-bold uppercase ${
                snippet.lang === "py"
                  ? "text-blue-400"
                  : snippet.lang === "ts"
                    ? "text-green-400"
                    : "text-purple-400"
              }`}
            >
              {snippet.lang}
            </span>
            <code className="text-cloud/70">{snippet.code}</code>
          </div>
        ))}
      </motion.div>

      {/* Gradient fade at top and bottom */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-slate-900/50 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-slate-900/50 to-transparent" />
    </div>
  );
};
