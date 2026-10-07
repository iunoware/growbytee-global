// // eg
// // <Button type="background" href="contact" text="Book a Strategy Call" />

// import Link from "next/link";

// type ButtonProps = {
//   type: "outline" | "background";
//   href?: string;
//   text: string;
// };

// export default function Button({ type, href, text }: ButtonProps) {
//   const linkHref = href?.startsWith("/") ? href : `/${href}`;

//   if (type === "outline") {
//     if (href) {
//       return (
//         <Link
//           href={linkHref}
//           className="group relative inline-flex w-fit items-center justify-center rounded-full bg-linear-to-r from-[#5851db] via-[#FD1D1D] to-[#FCAF45] p-px transition-transform duration-300 hover:-translate-y-0.5"
//         >
//           <span className="rounded-full bg-[#f7f7f7] px-5 py-2.5 text-sm font-medium text-[#252525] transition-colors duration-300 group-hover:bg-white">
//             {text}
//           </span>
//         </Link>
//       );
//     }

//     return (
//       <button className="group relative inline-flex w-fit items-center justify-center rounded-full bg-linear-to-r from-[#5851db] via-[#FD1D1D] to-[#FCAF45] p-px transition-transform duration-300 hover:-translate-y-0.5">
//         <span className="rounded-full bg-[#f7f7f7] px-5 py-2.5 text-sm font-medium text-[#252525] transition-colors duration-300 group-hover:bg-white">
//           {text}
//         </span>
//       </button>
//     );
//   }

//   if (type === "background") {
//     if (href) {
//       return (
//         <Link
//           href={linkHref}
//           className="inline-flex w-fit items-center justify-center rounded-full bg-linear-to-r from-[#5851db] via-[#FD1D1D] to-[#FCAF45] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(226,46,119,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(226,46,119,0.3)]"
//         >
//           {text}
//         </Link>
//       );
//     }

//     return (
//       <button className="inline-flex w-fit cursor-pointer items-center justify-center rounded-full bg-linear-to-r from-[#5851db] via-[#FD1D1D] to-[#FCAF45] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(226,46,119,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(226,46,119,0.3)]">
//         {text}
//       </button>
//     );
//   }
// }
