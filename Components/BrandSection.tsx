// // import Image from "next/image";

// export default function BrandSection() {
//   const brands = [
//     {
//       name: "Brand Alpha",
//       logo: "/brand1.svg", // replace with real logo path
//     },
//     {
//       name: "Brand Beta",
//       logo: "/brand2.svg",
//     },
//     {
//       name: "Brand Gamma",
//       logo: "/brand3.svg",
//     },
//   ];

//   return (
//     <section className="container mx-auto py-16 px-6 sm:px-16 bg-white rounded-4xl shadow-lg border border-gray-100">
//       <div className=" mx-auto">
//         <h2 className="text-3xl font-bold mb-12 text-left text-gray-900">
//           Trusted by industry leaders
//         </h2>

//         <div className="h-56">
//           {/* Row 1 – Single centered brand */}
//           <div className=" flex justify-center">
//             <div className="bg-[#f2f2f2] p-6 rounded-3xl h-64  shadow-md w-full  flex items-center justify-center">
//               <img src={brands[0].logo} alt={brands[0].name} className="h-12" />
//             </div>
//           </div>

//           {/* Row 2 – Two brands side-by-side */}
//           {/* {brands.slice(1).map((brand, index) => (
//             <div
//               key={index}
//               className="bg-[#f2f2f2] p-6 rounded-2xl shadow-md flex items-center justify-center">
//               <img src={brand.logo} alt={brand.name} className="h-12" />
//             </div>
//           ))} */}
//         </div>
//       </div>
//     </section>
//   );
// }
