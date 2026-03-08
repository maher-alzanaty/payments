"use client";

import { useState } from "react";
import Image from "next/image";
import { AiOutlineCopy, AiOutlineCalendar, AiOutlineUser, AiOutlineIdcard } from "react-icons/ai";

export default function PaymentPage() {
  const methods = [
    {
      id: "cashi",
      name: "كاشي",
      img: "/payments/cashi.png",
      beneficiary: "أعمال معز للحلول الرقمية",
      accountNumber: "1234567",
      invoice: {
        number: "#10001",
        beneficiaryName: "أعمال معز للحلول الرقمية",
        clientName: "Amal Ghanem",
        date: "20 فبراير 2026",
        serviceCost: 1000,
        transactionFee: 0,
        currency: "جنيه",
      },
    },
    {
      id: "neel",
      name: "بنك النيل",
      img: "/bank1.png",
      beneficiary: "شركة النيل للتقنية",
      accountNumber: "7654321",
      invoice: {
        number: "#10002",
        beneficiaryName: "شركة النيل للتقنية",
        clientName: "Omar Ali",
        date: "21 فبراير 2026",
        serviceCost: 1200,
        transactionFee: 10,
        currency: "جنيه",
      },
    },
    {
      id: "bankak",
      name: "بنك الخرطوم",
      img: "/bank2.jpeg",
      beneficiary: "أعمال معز للحلول الرقمية",
      accountNumber: "8199246",
      invoice: {
        number: "#12435",
        beneficiaryName: "Moaz Digital Solutions",
        clientName: "Amal Ghanem",
        date: "25 يناير 2026",
        serviceCost: 1000,
        transactionFee: 0,
        currency: "جنيه",
      },
    },
  ];

  const [selected, setSelected] = useState("bankak");
  const current = methods.find((m) => m.id === selected);

  const [preview, setPreview] = useState<string | null>(null);
  const [copySuccess, setCopySuccess] = useState(false);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setPreview(URL.createObjectURL(file));
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 1500);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center p-6">
      <div className="bg-white w-full max-w-8xl rounded-2xl shadow-xl p-10 grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* LEFT SIDE - ENHANCED INVOICE */}
      <div className="bg-gradient-to-b from-blue-50 to-white rounded-2xl shadow-lg p-6 space-y-6 text-right text-gray-700 hover:shadow-2xl transition transform hover:-translate-y-1">
  {/* Header */}
  <div className="flex justify-between items-center border-b pb-3">
    <div>
      <h2 className="text-2xl font-bold text-blue-700">{current?.name}</h2>
      <h4 className="text-gray-500 text-sm mt-1">ل {current?.beneficiary}</h4>
    </div>
    <span className="text-gray-400 text-sm font-medium uppercase tracking-wide">Invoice</span>
  </div>

  {/* Invoice Details */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-gray-700">
    <div className="flex items-center gap-3 bg-white rounded-lg shadow-sm p-3">
      <AiOutlineIdcard className="text-blue-500 text-xl" />
      <div className="flex flex-col">
        <p className="text-gray-400 text-xs">:رقم الفاتورة</p>
        <p className="font-semibold text-gray-800">{current?.invoice.number}</p>
      </div>
    </div>

    <div className="flex items-center gap-3 bg-white rounded-lg shadow-sm p-3">
      <AiOutlineUser className="text-blue-500 text-xl" />
      <div className="flex flex-col">
        <p className="text-gray-400 text-xs">:اسم المستفيد</p>
        <p className="font-semibold text-gray-800">{current?.invoice.beneficiaryName}</p>
      </div>
    </div>

    <div className="flex items-center gap-3 bg-white rounded-lg shadow-sm p-3">
      <AiOutlineUser className="text-green-500 text-xl" />
      <div className="flex flex-col">
        <p className="text-gray-400 text-xs">:اسم العميل</p>
        <p className="font-semibold text-gray-800">{current?.invoice.clientName}</p>
      </div>
    </div>

    <div className="flex items-center gap-3 bg-white rounded-lg shadow-sm p-3">
      <AiOutlineCalendar className="text-red-500 text-xl" />
      <div className="flex flex-col">
        <p className="text-gray-400 text-xs">:تاريخ الإصدار</p>
        <p className="font-semibold text-gray-800">{current?.invoice.date}</p>
      </div>
    </div>
  </div>

  {/* Costs Section */}
  <div className="border-t pt-4 space-y-3">
    <h3 className="font-semibold text-gray-700">:التكاليف</h3>

    <div className="flex justify-between items-center bg-blue-50 rounded-lg p-2 shadow-sm">
      <span className="text-lg font-bold text-blue-700">
        {current?.invoice.serviceCost} <span className="text-sm">{current?.invoice.currency}</span>
      </span>
      <span className="text-gray-500 font-medium">:قيمة الخدمة</span>
    </div>

    <div className="flex justify-between items-center bg-blue-50 rounded-lg p-2 shadow-sm">
      <span className="text-lg font-bold text-blue-700">
        {current?.invoice.transactionFee} <span className="text-sm">{current?.invoice.currency}</span>
      </span>
      <span className="text-gray-500 font-medium">:رسوم المعاملة</span>
    </div>

    <div className="flex justify-between items-center bg-green-50 rounded-lg p-2 shadow-sm border-t mt-2">
      <span className="text-lg font-bold text-green-600">
        {current!.invoice.serviceCost + current!.invoice.transactionFee} <span className="text-sm">{current?.invoice.currency}</span>
      </span>
      <span className="text-gray-700 font-semibold">:الإجمالي</span>
    </div>
  </div>
</div>

        {/* RIGHT SIDE */}
        <div className="space-y-6 text-right">

          {/* Payment Methods */}
          <div>
            <h2 className="text-3xl font-bold text-black">اختر طريقة الدفع</h2>
            <p className="text-gray-500">اختر طريقة الدفع المناسبة لاتمام العملية بأمان</p>
          </div>

          <div className="flex gap-3 flex-wrap justify-end">
            {methods.map((method) => (
              <div
                key={method.id}
                onClick={() => setSelected(method.id)}
                className={`relative cursor-pointer border rounded-xl w-[120px] h-[120px]
                  flex flex-col justify-between transition-all duration-200 transform
                  hover:border-blue-500 hover:shadow-lg hover:scale-105 hover:bg-blue-100
                  ${selected === method.id ? "border-blue-600 shadow-md scale-105 bg-blue-50" : "border-gray-300"}`}
              >
                <div className="flex-1 flex items-center justify-center pt-3">
                  <Image
                    src={method.img}
                    alt={method.name}
                    width={70}
                    height={70}
                    className="object-contain"
                  />
                </div>
                <p className="text-sm text-gray-400 text-center w-full pb-3">{method.name}</p>
              </div>
            ))}
          </div>

          {/* Beneficiary Info */}
          <div className="border-2 border-blue-500 rounded-xl p-6 space-y-2 bg-blue-50">
            <h3 className="text-lg font-semibold text-black">معلومات المستفيد</h3>
            <p className="text-gray-500">{current?.beneficiary}</p>

            <div className="bg-blue-100 rounded-lg p-4 flex justify-between items-center">
              <button
                onClick={() => handleCopy(current?.accountNumber || "")}
                className="bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-800 transition cursor-pointer"
              >
                نسخ <AiOutlineCopy size={18} />
              </button>
              <div className="text-right flex flex-col">
                <span className="text-sm text-gray-500">: رقم الحساب</span>
                <span className="text-lg font-semibold text-gray-500">{current?.accountNumber}</span>
              </div>
            </div>

            {copySuccess && (
              <span className="text-green-600 text-sm font-semibold mt-2 block">تم نسخ رقم الحساب!</span>
            )}
          </div>

          {/* Upload Proof */}
          <div>
            <h2 className="text-blue-700 mb-2">طريقة الدفع عن طريق {current?.name}؟</h2>
            <p className="mb-2 font-medium text-gray-400">صورة إشعار التحويل</p>

            <div className="border-2 border-dashed border-blue-500 rounded-xl p-6 space-y-4 bg-blue-100">
              <input
                type="file"
                onChange={handleFile}
                className="w-full border rounded-lg p-2 bg-blue-500 cursor-pointer hover:bg-blue-600 transition"
              />
              {preview && (
                <div className="relative mt-3 border rounded-lg overflow-hidden shadow-md">
                  <img src={preview} className="w-full object-contain" />
                  <button
                    onClick={() => setPreview(null)}
                    className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition"
                  >
                    إزالة
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Confirm Payment Button */}
          <div className="flex justify-center mt-6">
            <button
              onClick={() => {
                if (!preview) {
                  alert("يرجى رفع صورة الإشعار قبل تأكيد الدفع!");
                  return;
                }
                alert(`تم تأكيد الدفع عبر ${current?.name}`);
              }}
              className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-3 rounded-xl text-lg font-semibold hover:scale-105 hover:shadow-lg transition transform cursor-pointer"
            >
              تأكيد الدفع
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}