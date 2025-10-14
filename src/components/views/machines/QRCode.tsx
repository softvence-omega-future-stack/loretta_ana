// import { useState, useEffect, lazy, Suspense } from "react";
// import { useSelector } from "react-redux";
// import type { RootState } from "@/redux/store";
// import type { QrCodeCardItem } from "@/components/views components/machine/QRCode/QRCodeCard";

// // ✅ Lazy-loaded components
// const Pagination = lazy(() =>
//   import("@/components/views components/machine/Pagination")
// );
// const QrCodeCard = lazy(() =>
//   import("@/components/views components/machine/QRCode/QRCodeCard")
// );

// const QrCodeOverview = () => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const searchTerm = useSelector((state: RootState) => state.search.term);
//   const itemsPerPage = 5;

//   const allItems: QrCodeCardItem[] = [
//     {
//       id: "1",
//       title: "Wacker Neuson LD6001 Kipplader 3,2m³",
//       boelsNr: "77505267",
//       qrCode: "Ja",
//       protocol: "Ja",
//       status: "rented",
//     },
//     {
//       id: "2",
//       title: "Atlas Copco QAS80 Generator",
//       boelsNr: "77505268",
//       qrCode: "Nein",
//       protocol: "Ja",
//       status: "available",
//     },
//     {
//       id: "3",
//       title: "Doosan G70 Stromaggregat 70 kVA",
//       boelsNr: "77505269",
//       qrCode: "Ja",
//       protocol: "Nein",
//       status: "maintenance",
//     },
//     {
//       id: "4",
//       title: "Honda EU65iS Benzin Generator",
//       boelsNr: "77505270",
//       qrCode: "Nein",
//       protocol: "Ja",
//       status: "available",
//     },
//     {
//       id: "5",
//       title: "Bosch PowerGen BG90 Stromerzeuger",
//       boelsNr: "77505271",
//       qrCode: "Ja",
//       protocol: "Ja",
//       status: "rented",
//     },
//     {
//       id: "6",
//       title: "Yanmar YDG5500 Diesel Generator",
//       boelsNr: "77505272",
//       qrCode: "Ja",
//       protocol: "Ja",
//       status: "maintenance",
//     },
//     {
//       id: "7",
//       title: "CAT XZ4000 Heavy Generator",
//       boelsNr: "77505273",
//       qrCode: "Ja",
//       protocol: "Nein",
//       status: "available",
//     },
//     {
//       id: "8",
//       title: "Makita PowerDrive 9K",
//       boelsNr: "77505274",
//       qrCode: "Nein",
//       protocol: "Ja",
//       status: "rented",
//     },
//     {
//       id: "9",
//       title: "Hitachi Silent Generator HG-80",
//       boelsNr: "77505275",
//       qrCode: "Ja",
//       protocol: "Ja",
//       status: "maintenance",
//     },
//   ];

//   // 🔍 Filter logic
//   const filteredItems = allItems.filter(
//     (item) =>
//       item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       item.boelsNr.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       item.qrCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       item.protocol.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

//   const getCurrentPageItems = () => {
//     const start = (currentPage - 1) * itemsPerPage;
//     return filteredItems.slice(start, start + itemsPerPage);
//   };

//   useEffect(() => {
//     setCurrentPage(1);
//   }, [searchTerm]);

//   const handlePageChange = (page: number) => {
//     setCurrentPage(page);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <div className="flex flex-col min-h-screen w-full p-7 sm:p-8 border bg-white border-gray-300 rounded-md">
//       <h2 className="text-[1.75rem] font-bold mb-6">QR Code</h2>
//       <hr className="border-gray-300 mb-6" />

//       {/* ✅ Wrap lazy components in Suspense */}
//       <Suspense fallback={<div className="text-center py-10 text-gray-500">Loading...</div>}>
//         <div className="flex flex-col w-full gap-4">
//           {getCurrentPageItems().map((item) => (
//             <QrCodeCard key={item.id} item={item} />
//           ))}

//           {filteredItems.length === 0 && (
//             <p className="text-gray-500 text-center py-6">
//               No QR codes found for "{searchTerm}"
//             </p>
//           )}
//         </div>

//         {filteredItems.length > 0 && totalPages > 1 && (
//           <div className="mt-6 w-full flex justify-center">
//             <Pagination
//               currentPage={currentPage}
//               totalPages={totalPages}
//               onPageChange={handlePageChange}
//             />
//           </div>
//         )}
//       </Suspense>
//     </div>
//   );
// };

// export default QrCodeOverview;

import React, { useState, useEffect, lazy, Suspense } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "@/redux/store";
import type { QrCodeCardItem } from "@/components/views components/machine/QRCode/QRCodeCard";

// ✅ Lazy-loaded components
const Pagination = lazy(() =>
  import("@/components/views components/machine/Pagination")
);
const QrCodeCard = lazy(() =>
  import("@/components/views components/machine/QRCode/QRCodeCard")
);
const QrCodeDetail = lazy(() =>
  import("@/components/views components/machine/QRCode/QRCodeDetails/QRCodeDetails")
);

const QrCodeOverview = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchTerm = useSelector((state: RootState) => state.search.term);
  
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const allItems: QrCodeCardItem[] = [
    {
      id: "1",
      title: "Wacker Neuson LD6001 Kipplader 3,2m³",
      boelsNr: "77505267",
      qrCode: "Ja",
      protocol: "Ja",
      status: "rented",
    },
    {
      id: "2",
      title: "Atlas Copco QAS80 Generator",
      boelsNr: "77505268",
      qrCode: "Nein",
      protocol: "Ja",
      status: "available",
    },
    {
      id: "3",
      title: "Doosan G70 Stromaggregat 70 kVA",
      boelsNr: "77505269",
      qrCode: "Ja",
      protocol: "Nein",
      status: "maintenance",
    },
    {
      id: "4",
      title: "Honda EU65iS Benzin Generator",
      boelsNr: "77505270",
      qrCode: "Nein",
      protocol: "Ja",
      status: "available",
    },
    {
      id: "5",
      title: "Bosch PowerGen BG90 Stromerzeuger",
      boelsNr: "77505271",
      qrCode: "Ja",
      protocol: "Ja",
      status: "rented",
    },
    {
      id: "6",
      title: "Yanmar YDG5500 Diesel Generator",
      boelsNr: "77505272",
      qrCode: "Ja",
      protocol: "Ja",
      status: "maintenance",
    },
    {
      id: "7",
      title: "CAT XZ4000 Heavy Generator",
      boelsNr: "77505273",
      qrCode: "Ja",
      protocol: "Nein",
      status: "available",
    },
    {
      id: "8",
      title: "Makita PowerDrive 9K",
      boelsNr: "77505274",
      qrCode: "Nein",
      protocol: "Ja",
      status: "rented",
    },
    {
      id: "9",
      title: "Hitachi Silent Generator HG-80",
      boelsNr: "77505275",
      qrCode: "Ja",
      protocol: "Ja",
      status: "maintenance",
    },
  ];

  // 🔍 Filter logic
  const filteredItems = allItems.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.boelsNr.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.qrCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.protocol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  const getCurrentPageItems = () => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredItems.slice(start, start + itemsPerPage);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  // ✅ Extract ID from URL path for custom router
  // Expected paths: 
  // /machines/machines-qrcode -> overview
  // /machines/machines-qrcode/1 -> detail for item 1
  const pathSegments = location.pathname.split("/").filter(Boolean);
  
  const detailId = pathSegments.length === 3 && pathSegments[1] === "machines-qrcode"
    ? pathSegments[2]
    : null;
  
  const selectedItem = detailId ? allItems.find((item) => item.id === detailId) : null;

  const handleCardClick = (item: QrCodeCardItem) => {
    navigate(`/machines/machines-qrcode/${item.id}`);
  };

  const handleBack = () => {
    navigate("/machines/machines-qrcode");
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col min-h-screen w-full p-7 sm:p-8 border bg-white border-gray-300 rounded-md">
      <Suspense fallback={<div className="text-center py-10 text-gray-500">Loading...</div>}>
        {!detailId ? (
          <>
            {/* Overview Page */}
            <h2 className="text-[1.75rem] font-bold mb-6">QR Code</h2>
            <hr className="border-gray-300 mb-6" />

            <div className="flex flex-col w-full">
              {getCurrentPageItems().map((item, index) => (
                <React.Fragment key={item.id}>
                  <QrCodeCard
                    item={item}
                    onClick={() => handleCardClick(item)}
                  />
                  
                  {index < getCurrentPageItems().length - 1 && (
                    <hr className="border-gray-300 my-4" />
                  )}
                </React.Fragment>
              ))}

              {filteredItems.length === 0 && (
                <p className="text-gray-500 text-center py-6">
                  No QR codes found for "{searchTerm}"
                </p>
              )}
            </div>

            {filteredItems.length > 0 && totalPages > 1 && (
              <div className="mt-6 w-full flex justify-center">
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              </div>
            )}
          </>
        ) : selectedItem ? (
          /* Detail Page */
          <QrCodeDetail item={selectedItem} onBack={handleBack} />
        ) : (
          /* Not Found */
          <div className="text-center mt-10">
            <p className="text-gray-500 mb-4">QR Code not found</p>
            <button 
              onClick={handleBack}
              className="text-blue-600 hover:text-blue-700 underline"
            >
              Back to Overview
            </button>
          </div>
        )}
      </Suspense>
    </div>
  );
};

export default QrCodeOverview;