"use client";

import { useState } from "react";
import Image from "next/image";

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
  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center p-8">
      <div className="bg-white w-full max-w-8xl rounded-xl shadow-lg p-10 grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* LEFT SIDE - PAYMENT INFO */}
      <div className="bg-blue-50 rounded-xl p-6 space-y-6 text-right text-gray-700">
  <h2 className="text-lg font-semibold">
    الدفع باستخدام {current?.name}
  </h2>
  <h4>ل {current?.beneficiary} </h4>

  <div className="border-t pt-4 space-y-3 text-gray-600">
    <h2 className="text-lg font-semibold">تفاصيل الفاتورة</h2>
    <h4>بيانات عامة</h4>

    <div className="flex justify-between mt-5">
      <span>{current?.invoice.number}</span>
      <span>:رقم الفاتورة</span>
    </div>

    <div className="flex justify-between">
      <span>{current?.invoice.beneficiaryName}</span>
      <span>:اسم المستفيد</span>
    </div>

    <div className="flex justify-between">
      <span>{current?.invoice.clientName}</span>
      <span>اسم العميل</span>
    </div>

    <div className="flex justify-between">
      <span>{current?.invoice.date}</span>
      <span>:تاريخ الإصدار</span>
    </div>
  </div>

  <div className="border-t pt-4 space-y-2 text-right">
    <h3>:التكاليف</h3>

    <div className="flex justify-between items-center">
      <span className="font-semibold">
        {current?.invoice.serviceCost} <span className="text-sm">{current?.invoice.currency}</span>
      </span>
      <span className="text-gray-500">:قيمة الخدمة</span>
    </div>

    <div className="flex justify-between items-center">
      <span className="font-semibold">
        {current?.invoice.transactionFee} <span className="text-sm">{current?.invoice.currency}</span>
      </span>
      <span className="text-gray-500">:رسوم المعاملة</span>
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
                  flex flex-col justify-between transition-all duration-200
                  hover:border-blue-500 hover:shadow-lg hover:scale-105 hover:bg-blue-100
                  ${selected === method.id ? "border-blue-600 shadow-md" : "border-gray-300"}`}
              >
                {/* IMAGE FIXED AT TOP CENTER */}
                <div className="flex-1 flex items-center justify-center pt-3">
                  <Image
                    src={method.img}
                    alt={method.name}
                    width={70}
                    height={70}
                    className="object-contain"
                  />
                </div>

                {/* METHOD NAME FIXED AT BOTTOM */}
                <p className="text-sm text-gray-400 text-center w-full pb-3">
                  {method.name}
                </p>
              </div>
            ))}
          </div>

          {/* Beneficiary Info */}
          <div className="border-2 border-blue-500 rounded-xl p-6 space-y-2">
            <h3 className="text-lg font-semibold text-black">معلومات المستفيد</h3>
            <p className="text-gray-500">{current?.beneficiary}</p>

            <div className="bg-blue-100 rounded-lg p-4 flex justify-between items-center">
              <button
                onClick={() => navigator.clipboard.writeText(current?.accountNumber || "")}
                className="bg-blue-700 text-white px-4 py-2 rounded-lg "
              >
                نسخ
              </button>

              <div className="text-right flex flex-col">
                <span className="text-sm text-gray-500">: رقم الحساب</span>
                <span className="text-lg font-semibold text-gray-500">{current?.accountNumber}</span>
              </div>
            </div>
          </div>

          {/* Upload Proof */}
          <div>
            <h2 className="text-blue-700 mb-2">طريقة الدفع عن طريق {current?.name}؟</h2>
            <p className="mb-2 font-medium text-gray-400">صورة إشعار التحويل</p>

            <div className="border-2 border-dashed border-blue-500 rounded-xl p-6 space-y-4 bg-blue-100">
              <input
                type="file"
                onChange={handleFile}
                className="w-full border rounded-lg p-2 bg-blue-500 cursor-pointer "
              />
              {preview && (
                <img src={preview} className="mt-3 rounded-lg border" />
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
              className="bg-blue-700 text-white px-6 py-3 rounded-xl text-lg font-semibold hover:bg-blue-800 transition"
            >
              تأكيد الدفع
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}