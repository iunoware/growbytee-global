"use client";

import { useState } from "react";
import FadeIn from "@/src/components/molecule/FadeIn";
import Image from "next/image";

// Edit this array to update the FAQs
const faqs = [
  {
    question: "How long does it take to see results?",
    answer:
      "It depends on your goals and channels. Most clients start seeing meaningful traction within 2–3 months, with stronger results building over time.",
  },
  {
    question: "What services do you offer?",
    answer:
      "We help brands grow through websites, social media, performance marketing, and content that turns attention into customers.",
  },
  {
    question: "How much does a project cost?",
    answer:
      "Pricing depends on scope and timeline. Book a strategy call and we'll share a clear quote tailored to your needs.",
  },
  {
    question: "Do you work with small businesses?",
    answer: "Yes. We work with startups, small businesses, and established brands alike.",
  },
  {
    question: "How do we get started?",
    answer:
      "Fill out the contact form or book a strategy call. We'll learn about your business and suggest the best next steps.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-bg px-6 py-20">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_1.8fr]">
        {/* Left */}
        <FadeIn>
          <h2 className="text-3xl font-semibold text-black">
            Have Questions? We&apos;ve Got{" "}
            <span className="bg-linear-to-r from-[#5851db] to-[#FD1D1D] bg-clip-text text-5xl text-transparent">
              Answers.
            </span>
          </h2>
        </FadeIn>

        {/* Right */}
        <div>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <FadeIn key={faq.question} delay={index * 0.1}>
                <div className="py-5">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="flex w-full cursor-pointer items-center gap-4 text-left"
                  >
                    <span className="text-xl text-gray-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1 text-xl font-semibold text-gray-800">
                      {faq.question}
                    </span>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white shadow-md">
                      <div className={`relative h-5 w-5 invert rotate-270 `}>
                        <Image
                          src="/images/menu-arrow.svg"
                          alt="seo agency tamil nadu"
                          fill
                          className={`${isOpen ? "rotate-180" : ""} transition duration-300`}
                        />
                      </div>
                    </span>
                  </button>

                  {/* Answer */}
                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen ? "grid-rows-[1fr] pt-4" : "grid-rows-[0fr]"
                    }`}
                  >
                    <p className="overflow-hidden pl-12 pr-12 text-sm leading-relaxed text-gray-600">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
