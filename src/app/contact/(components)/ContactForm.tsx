// /* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";

// import { useState, type FormEvent } from "react";
// import Image from "next/image";
// import GradientButton from "@/src/components/ui/GradientButton";
// import FadeIn from "@/src/components/ui/FadeIn";
// import Field from "@/src/components/ui/Field";
// import { inputStyles } from "@/src/components/ui/Field";
// import { toast } from "sonner";

// export default function ContactForm() {
//   const [setIsSubmitted, setIsSubmitted] = useState(false);

//   async function handleSubmit(e: FormEvent<HTMLFormElement>) {
//     // e.preventDefault();
//     // const data = Object.fromEntries(new FormData(e.currentTarget));
//     // console.log(data); // TODO: send to your API / server action

//     e.preventDefault();
//     setIsSubmitted(true);

//     document.getElementById("submitButton")!.disabled = true;

//     const date = new Date();

//     const year = date.getFullYear();
//     const month = date.getMonth() + 1;
//     const day = date.getDate();
//     // const hour = date.getHours();
//     // const minute = date.getMinutes();
//     const fullDate = `${day}/${month}/${year}`;
//     // console.log(fullDate);

//     const form = e.target;

//     const dateInput = document.getElementById("submissionDate");
//     dateInput.value = fullDate;

//     try {
//       const response = await fetch(form.action, {
//         method: "POST",
//         body: new FormData(form),
//       });

//       // const result = await response.json();

//       // toast.success("Form submitted successfully");
//       // setIsDisabled(true);

//       // setTimeout(() => {
//       //   window.location.reload();
//       // }, 2000);
//     } catch (err: any) {
//       toast.error("Something went wrong", err);
//     }
//   }

//   return (
//     <section className="bg-bg px-6 py-10 pt-35">
//       <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_1.6fr]">
//         {/* Left */}
//         <FadeIn>
//           <span className="inline-flex items-center gap-2 rounded-full bg-gray-50 text-gray-800 px-2 py-1.5 text-md shadow-md">
//             <div className="h-6 w-7 relative">
//               <Image alt="" src="/images/logo-3.svg" fill />
//             </div>
//             Let&apos;s Connect
//           </span>

//           <h2 className="mt-10 text-3xl font-medium text-black">
//             Let&apos;s Build Something
//             <br />
//             <span className="bg-linear-to-r from-[#5851db] via-[#FD1D1D] to-[#FCAF45] bg-clip-text text-5xl font-semibold text-transparent">
//               Extraordinary
//             </span>{" "}
//             Together.
//           </h2>

//           <p className="mt-6 max-w-sm text-sm italic leading-relaxed text-black">
//             Whether you&apos;re looking to grow your brand, launch a new website, or
//             create impactful digital experiences, our team is here to help turn your ideas
//             into measurable results.
//           </p>
//         </FadeIn>

//         {/* Right */}
//         <form
//           onSubmit={handleSubmit}
//           action="https://sheetdb.io/api/v1/zmyecp0n9phlj"
//           method="POST"
//           id="sheetDb_form"
//           className="grid gap-x-3 gap-y-8 sm:grid-cols-2"
//         >
//           <FadeIn delay={0.15}>
//             <Field label="Full Name" name="name" placeholder="John Anderson" required />
//           </FadeIn>

//           <FadeIn delay={0.25}>
//             <Field
//               label="Company / Brand Name"
//               name="company"
//               placeholder="Growbytee"
//               required
//             />
//           </FadeIn>

//           <FadeIn delay={0.35}>
//             <Field
//               label="Email Address"
//               name="email"
//               type="email"
//               placeholder="john@example.com"
//               required
//             />
//           </FadeIn>

//           <FadeIn delay={0.45}>
//             <Field
//               label="Contact Number"
//               name="number"
//               type="tel"
//               placeholder="+91 00000 00000"
//               required
//             />
//           </FadeIn>

//           <FadeIn delay={0.55}>
//             <Field
//               label="Business Website"
//               name="website"
//               type="url"
//               placeholder="https://yourwebsite.com"
//             />
//           </FadeIn>

//           <FadeIn delay={0.65}>
//             <Field
//               label="Instagram Username"
//               name="inst_username"
//               placeholder="your_company"
//             />
//           </FadeIn>

//           <div>
//             <input type="hidden" name="date" id="submissionDate" />
//           </div>

//           <FadeIn delay={0.75}>
//             <label className="flex flex-col gap-2 text-lg text-black sm:col-span-2">
//               What is on your mind?
//               <textarea
//                 name="message"
//                 rows={5}
//                 placeholder="Tell us about your business, goals, challenges, and how we can help..."
//                 className={`${inputStyles} resize-none`}
//               />
//             </label>
//           </FadeIn>

//           <div></div>

//           <FadeIn delay={0.75}>
//             <div className="sm:col-span-2">
//               <GradientButton variant="background" type="submit" className="shadow-lg">
//                 Let&apos;s Build Together
//               </GradientButton>
//             </div>
//           </FadeIn>
//         </form>
//       </div>
//     </section>
//   );
// }

"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import { toast } from "sonner";
import GradientButton from "@/src/components/ui/GradientButton";
import FadeIn from "@/src/components/ui/FadeIn";
import Field, { inputStyles } from "@/src/components/ui/Field";

const SHEETDB_URL = "https://sheetdb.io/api/v1/zmyecp0n9phlj";
// google sheet link: https://docs.google.com/spreadsheets/d/17UzVCscAEAJTdAlLIhiiORg8tGORZ4vRmhMCIfyEdyU/edit#gid=0

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setIsSubmitting(true);

    const { day, month, year } = {
      day: new Date().getDate(),
      month: new Date().getMonth() + 1,
      year: new Date().getFullYear(),
    };

    const data = {
      ...Object.fromEntries(new FormData(form)),
      date: `${day}/${month}/${year}`,
    };

    try {
      const response = await fetch(SHEETDB_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data }),
      });

      if (!response.ok) throw new Error("Request failed");

      toast.success("Form submitted successfully");
      form.reset();
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="bg-bg px-6 py-10 pt-35">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_1.6fr]">
        {/* Left */}
        <FadeIn>
          <span className="inline-flex items-center gap-2 rounded-full bg-gray-50 text-gray-800 px-2 py-1.5 text-md shadow-md">
            <div className="h-6 w-7 relative">
              <Image alt="" src="/images/logo-3.svg" fill />
            </div>
            Let&apos;s Connect
          </span>

          <h2 className="mt-10 text-3xl font-medium text-black">
            Let&apos;s Build Something
            <br />
            <span className="bg-linear-to-r from-[#5851db] via-[#FD1D1D] to-[#FCAF45] bg-clip-text text-5xl font-semibold text-transparent">
              Extraordinary
            </span>{" "}
            Together.
          </h2>

          <p className="mt-6 max-w-sm text-sm italic leading-relaxed text-black">
            Whether you&apos;re looking to grow your brand, launch a new website, or
            create impactful digital experiences, our team is here to help turn your ideas
            into measurable results.
          </p>
        </FadeIn>

        {/* Right */}
        <form onSubmit={handleSubmit} className="grid gap-x-3 gap-y-8 sm:grid-cols-2">
          <FadeIn delay={0.15}>
            <Field label="Full Name" name="name" placeholder="John Anderson" required />
          </FadeIn>

          <FadeIn delay={0.25}>
            <Field
              label="Company / Brand Name"
              name="company"
              placeholder="Growbytee"
              required
            />
          </FadeIn>

          <FadeIn delay={0.35}>
            <Field
              label="Email Address"
              name="email"
              type="email"
              placeholder="john@example.com"
              required
            />
          </FadeIn>

          <FadeIn delay={0.45}>
            <Field
              label="Contact Number"
              name="number"
              type="tel"
              placeholder="+91 00000 00000"
              required
            />
          </FadeIn>

          <FadeIn delay={0.55}>
            <Field
              label="Business Website"
              name="website"
              type="url"
              placeholder="https://yourwebsite.com"
            />
          </FadeIn>

          <FadeIn delay={0.65}>
            <Field
              label="Instagram Username"
              name="insta_username"
              placeholder="your_company"
            />
          </FadeIn>

          <FadeIn delay={0.75} className="sm:col-span-2">
            <label className="flex flex-col gap-2 text-lg text-black">
              What is on your mind?
              <textarea
                name="message"
                rows={5}
                placeholder="Tell us about your business, goals, challenges, and how we can help..."
                className={`${inputStyles} resize-none`}
              />
            </label>
          </FadeIn>

          <FadeIn className="sm:col-span-2">
            <GradientButton
              variant="background"
              type="submit"
              disabled={isSubmitting}
              className="shadow-lg disabled:opacity-60"
            >
              {isSubmitting ? "Sending..." : "Let's Build Together"}
            </GradientButton>
          </FadeIn>
        </form>
      </div>
    </section>
  );
}
