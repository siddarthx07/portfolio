"use client";

import Image from "next/image";

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-16 text-white sm:py-24 lg:py-32"
      style={{
        background: `
          radial-gradient(ellipse 1000px 800px at 70% 20%, rgba(249, 115, 22, 0.20) 0%, transparent 50%),
          #000000
        `,
      }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-20 text-center sm:mb-24">
          <TextGenerateEffect
            words="About Me"
            className="text-4xl sm:text-5xl lg:text-6xl"
          />
          <div className="mx-auto mt-4 h-0.5 w-48 bg-gradient-to-r from-transparent via-[#f97316] to-transparent" />
        </div>

        {/* Bento Grid */}
        <BentoGrid className="mx-auto max-w-7xl">
          {/* Card 1: Who Am I - Small, Top Left */}
          <BentoGridItem
            title={
              <div className="mb-2 text-center text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl">
                Who Am I
              </div>
            }
            description={
              <p className="text-center text-base leading-relaxed lg:text-lg">
                Software Engineer and Computer Science graduate student at Virginia Tech (2026). I specialize in building scalable backend systems, RESTful APIs, and AI-powered software integrations that drive impact.
              </p>
            }
            header={
              <div className="relative mx-auto h-64 w-64 overflow-hidden rounded-[2.75rem] border border-white/10 transition-transform duration-500 hover:scale-[1.05] sm:h-72 sm:w-72 lg:h-80 lg:w-80">
                <Image
                  src="/halftone_1762229259.png"
                  alt="Portrait of Siddarth Bandi in halftone style"
                  fill
                  sizes="(min-width: 1024px) 20rem, (min-width: 640px) 18rem, 16rem"
                  className="object-cover object-center"
                  priority
                  quality={100}
                  unoptimized
                />
              </div>
            }
            className="md:col-span-1 lg:col-span-2"
          />

          {/* Card 2: What I Do - Large, Top Right */}
          <BentoGridItem
            title={
              <div className="mb-2 text-center text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl">
                What I Do
              </div>
            }
            description={
              <div className="space-y-4 text-center text-base leading-relaxed md:text-lg lg:text-lg">
                <p>
                  I build complete software systems—from databases and REST APIs to frontend interfaces and cloud deployment, that solve real problems and run reliably in production.
                </p>
                <p className="text-sm md:text-base">
                  <a 
                    href="https://www.hackerrank.com/profile/siddarthbandi07" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#f97316] transition underline underline-offset-4"
                  >
                    HackerRank
                  </a>
                  {" "}• C++ 5★ • Problem Solving 6★ (Top 1% globally)
                </p>
              </div>
            }
            header={
              <div className="relative h-64 w-full overflow-hidden sm:h-72 lg:h-80">
                <div className="flex flex-col gap-2">
                  {[
                    { lang: "ts", code: "app.post('/api/schedule', authenticate, async (req, res) => {" },
                    { lang: "py", code: "result = coreml_model.predict(image) # <200ms on 43+ classes" },
                    { lang: "tsx", code: "const Dashboard = () => <FraudAlerts metrics={realTimeData} />" },
                    { lang: "py", code: "retriever = FAISS.from_documents(docs, embeddings)" },
                    { lang: "java", code: "@PostMapping(\"/fraud/detect\") public ResponseEntity<Result>" },
                    { lang: "ts", code: "await Farm.findOne({ farmerId }).populate('weatherTasks')" },
                    { lang: "java", code: "@Service public class AuthService implements UserDetailsService {" },
                    { lang: "ts", code: "const response = await axios.post('/api/v1/detect', formData)" },
                    { lang: "py", code: "chain = RetrievalQA.from_chain_type(llm, retriever=vectorstore)" },
                    { lang: "tsx", code: "<AnimatePresence>{isOpen && <Modal onClose={handleClose} />}</AnimatePresence>" },
                    { lang: "java", code: "repository.save(new Transaction(userId, amount, timestamp))" },
                    { lang: "ts", code: "export const getServerSideProps: GetServerSideProps = async (ctx) => {" },
                  ].map((snippet, idx) => (
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
                      <code className="text-white">{snippet.code}</code>
                    </div>
                  ))}
                </div>

                {/* Gradient fade at top and bottom */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-slate-900/50 to-transparent" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-slate-900/50 to-transparent" />
              </div>
            }
            className="md:col-span-2 lg:col-span-3"
          />

        </BentoGrid>
      </div>
    </section>
  );
}
