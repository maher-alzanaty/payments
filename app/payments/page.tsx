"use client";

import { useState } from "react";
import Image from "next/image";
import { AiOutlineCopy, AiOutlineCalendar, AiOutlineUser, AiOutlineIdcard, AiOutlineQuestionCircle } from "react-icons/ai";

export default function PaymentPage() {
  const methods = [
    {
      id: "cashi",
      name: "كاشي",
      img: "/cashi.jpg",
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
  const [lang, setLang] = useState("ar");
  const t = {
  ar: {
    choosePayment: "اختر طريقة الدفع",
    choosePaymentDesc: "اختر طريقة الدفع المناسبة لاتمام العملية بأمان",
    beneficiaryInfo: "معلومات المستفيد",
    accountNumber: "رقم الحساب",
    copy: "نسخ",
    confirm: "تأكيد الدفع",
    serviceCost: "قيمة الخدمة",
    transactionFee: "رسوم المعاملة",
    total: "الإجمالي",
  },
  en: {
    choosePayment: "Choose Payment Method",
    choosePaymentDesc: "Select a payment method to complete the process safely",
    beneficiaryInfo: "Beneficiary Information",
    accountNumber: "Account Number",
    copy: "Copy",
    confirm: "Confirm Payment",
    serviceCost: "Service Cost",
    transactionFee: "Transaction Fee",
    total: "Total",
  },
};

  const [selected, setSelected] = useState("bankak");
  const [preview, setPreview] = useState<string | null>(null);
  const [copySuccess, setCopySuccess] = useState(false);

  const [showBravoModal, setShowBravoModal] = useState<string | null>(null);

  const current = methods.find((m) => m.id === selected);

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
   <div>
     {/* <div lang={lang} dir={lang === "ar" ? "rtl" : "ltr"} ></div> */}
      {/* <div className="flex justify-end p-4 bg-white">
  <button
    onClick={() => setLang(lang === "ar" ? "en" : "ar")}
    className="px-4 py-2 bg-blue-600 text-white rounded-lg"
  >
    {lang === "ar" ? "English" : "العربية"}
  </button>
</div> */}
 
    <div className="bg-gray-100 min-h-screen flex justify-center p-6 hidden lg:flex">
      
      <div className="bg-white w-full max-w-8xl rounded-2xl shadow-xl p-10 grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* LEFT SIDE - INVOICE */}
        <div className="bg-gradient-to-b from-blue-50 to-white rounded-2xl shadow-lg p-6 space-y-6 text-right text-gray-700 hover:shadow-2xl transition transform hover:-translate-y-1" dir="rtl">
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
          <div className="border-t pt-4 space-y-3 ">
            <h3 className="font-semibold text-gray-700">التكاليف</h3>
            <div className="flex justify-between items-center bg-blue-50 rounded-lg p-2 shadow-sm">
              <span className="text-gray-500 font-medium">قيمة الخدمة:</span>
              <span className="text-lg font-bold text-blue-700">
                {current?.invoice.serviceCost} <span className="text-sm">{current?.invoice.currency}</span>
              </span>
              
            </div>
            <div className="flex justify-between items-center bg-blue-50 rounded-lg p-2 shadow-sm">
              <span className="text-gray-500 font-medium">رسوم المعاملة:</span>
              <span className="text-lg font-bold text-blue-700">
                {current?.invoice.transactionFee} <span className="text-sm">{current?.invoice.currency}</span>
              </span>
              
            </div>
            <div className="flex justify-between items-center bg-green-50 rounded-lg p-2 shadow-sm border mt-2">
                     <span className="text-gray-700 font-semibold">الإجمالي:</span>
              <span className="text-lg font-bold text-green-600">
                {current!.invoice.serviceCost + current!.invoice.transactionFee} <span className="text-sm">{current?.invoice.currency}</span>
              </span>
       
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
  <div key={method.id} className="flex flex-col items-center">
    <div
      onClick={() => setSelected(method.id)}
      className={`relative cursor-pointer border rounded-xl w-[120px] h-[120px]
        flex flex-col justify-between transition-all duration-200 transform shadow-md
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
      <p className="text-sm text-gray-400 text-center w-full pb-1">{method.name}</p>
    </div>

    {/* Bravo Link with bank name */}
    <p
      className="flex items-center justify-center text-blue-600 text-xs mt-1 cursor-pointer hover:underline gap-1"
      onClick={() => setShowBravoModal(method.id)} // pass bank id
    >
      How to pay via {method.name}
      <AiOutlineQuestionCircle className="text-blue-700 text-sm" />
    </p>
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
                نسخ
                  <AiOutlineCopy className="text-lg" />
              </button>
              <div className="text-right flex flex-col">
                <span className="text-sm text-gray-500">: رقم الحساب</span>
                <span className="text-lg font-semibold text-gray-500">{current?.accountNumber}</span>
              </div>
            </div>
            {copySuccess && <span className="text-green-600 text-sm font-semibold mt-2 block">تم نسخ رقم الحساب!</span>}
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

      {/* Bravo Modal */}
{showBravoModal && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
    <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full mx-4 overflow-hidden">
      
      {/* Modal Header */}
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-lg font-bold">
          How to pay via {methods.find(m => m.id === showBravoModal)?.name}
        </h2>
        <button
          className="text-gray-400 hover:text-gray-600 p-1 rounded-lg transition-colors hover:bg-gray-100"
          onClick={() => setShowBravoModal(null)}
          aria-label="Close modal"
        >
          <svg
            width="24" height="24" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Modal Body */}
      <div className="p-6 max-h-[70vh] overflow-y-auto">
        <p className="text-center text-gray-600 mb-8">
          Follow the steps below to complete the payment successfully
        </p>

        <div className="space-y-6">
          {/* Step 1 */}
          <div className="flex gap-4 items-start" dir="ltr">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-700 text-white rounded-full flex items-center justify-center text-lg font-bold">
              1
            </div>
            <div className="flex-1 pt-2">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Enter your phone number</h3>
              <p className="text-gray-600 leading-relaxed">
                Register your phone number in {methods.find(m => m.id === showBravoModal)?.name} system by selecting &quot;Phone Number&quot; field. Make sure you choose the correct country code (+249).
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex gap-4 items-start" dir="ltr">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-700 text-white rounded-full flex items-center justify-center text-lg font-bold">
              2
            </div>
            <div className="flex-1 pt-2">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Enter your account number</h3>
              <p className="text-gray-600 leading-relaxed">
                Enter your account number in {methods.find(m => m.id === showBravoModal)?.name} consisting of 5 digits in the &quot;Account Number&quot; field.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex gap-4 items-start" dir="ltr">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-700 text-white rounded-full flex items-center justify-center text-lg font-bold">
              3
            </div>
            <div className="flex-1 pt-2">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Enter your secret number (IPIN)</h3>
              <p className="text-gray-600 leading-relaxed">
                Enter your secret number (IPIN) for electronic payment. This is the secret number that you obtained when registering for e-payment service.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex gap-4 items-start" dir="ltr">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-700 text-white rounded-full flex items-center justify-center text-lg font-bold">
              4
            </div>
            <div className="flex-1 pt-2">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Complete the payment process</h3>
              <p className="text-gray-600 leading-relaxed">
                After entering all the information, press the &quot;Pay {current?.invoice.serviceCost} {current?.invoice.currency}&quot; button to complete the payment process. You will receive a confirmation message on your phone.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Footer */}
      <div className="p-6 pt-4 border-t border-gray-200 bg-gray-50">
        <div className="bg-blue-50 rounded-lg p-4 text-center">
          <h4 className="text-base font-semibold text-gray-900 mb-2">Do you need support?</h4>
          <p className="text-sm text-gray-600 leading-relaxed">
            If you have any questions or need help, please contact us via customer support on WhatsApp <span className="font-semibold">+249912345678</span>
          </p>
        </div>
      </div>
    </div>
  </div>
)}
    </div>
       <div className="bg-gray-50 min-h-screen flex justify-center p-2 sm:p-6 lg:hidden">
      <div className="w-full max-w-md">

        {/* Invoice Summary */}
        <div className="bg-gray-100 rounded-xl p-4 shadow-sm space-y-2 mb-4 mt-4" dir="auto">
          <div className="flex justify-between text-gray-500">
         <span>المبلغ الإجمالي</span>
            <span> {current?.invoice.serviceCost} {current?.invoice.currency} </span>
               
          </div>
          <div className="flex justify-between text-gray-500">
             <span>رسوم المعاملة</span>
            <span> {current?.invoice.transactionFee} {current?.invoice.currency} </span>
           
          </div>
          <div className="flex justify-between font-bold text-blue-700 border-t pt-2 mt-2">
            <span>المبلغ الكلي</span>
            <span>{current!.invoice.serviceCost + current!.invoice.transactionFee}  {current?.invoice.currency}  </span>
            
          </div>
        </div>
    <h2 className="text-black  text-end text-lg my-2">اختر طريقة الدفع</h2>
        {/* Payment Methods - scrollable */}
        <div className="overflow-x-auto flex gap-3 py-2 mb-4 items-center justify-center">
      
          {methods.map((method) => (
            <div key={method.id} className="flex flex-col items-center min-w-[120px] ">
              <div
                onClick={() => setSelected(method.id)}
                className={`cursor-pointer border-2 rounded-xl w-[120px] h-[120px]
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
                <p className="text-sm text-gray-400 text-center w-full pb-1">{method.name}</p>
              </div>
              <p
                className="flex items-center justify-center text-blue-600 text-xs mt-1 cursor-pointer hover:underline gap-1"
                onClick={() => setShowBravoModal(method.id)}
              >
                How to pay via {method.name}
                <AiOutlineQuestionCircle className="text-blue-700 text-sm" />
              </p>
            </div>
          ))}
        </div>

    {/* Account Inputs */}
<div className="space-y-5 mb-6 text-end">

  {/* Account Number */}
  <div className="space-y-2">
    <label className="block text-black">رقم الحساب</label>
    <input
      type="text"
      placeholder="أدخل رقم حسابك"
      className="w-full p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white placeholder-gray-500 text-end text-black shadow-sm"
    />
  </div>

  {/* IPIN */}
  <div className="space-y-2">
    <label className="block text-black">
      الرقم السري للدفع الإلكتروني (IPIN)
    </label>
    <input
      type="text"
      placeholder="أدخل الرقم السري للدفع الإلكتروني (IPIN)"
      className="w-full p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white placeholder-gray-500 text-end text-black shadow-sm"
    />
  </div>

</div>

        {/* Confirm / Cancel Buttons */}
        <div className="flex flex-col gap-3">
          <button
            className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            ادفع {current?.invoice.serviceCost} {current?.invoice.currency}
          </button>
          <button
            className="w-full border border-red-500 text-red-500 py-3 rounded-xl font-semibold hover:bg-red-50 transition"
          >
            إلغاء الدفع
          </button>
        </div>
      </div>

      {/* Bravo Modal */}
      {showBravoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-2xl shadow-xl max-w-md w-full mx-4 overflow-hidden">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-4 border-b text-black">
              <h2 className="text-lg font-bold">
                How to pay via {methods.find(m => m.id === showBravoModal)?.name}
              </h2>
              <button
                className="text-gray-400 hover:text-gray-600 p-1 rounded-lg transition-colors hover:bg-gray-100"
                onClick={() => setShowBravoModal(null)}
                aria-label="Close modal"
              >
                <svg
                  width="24" height="24" viewBox="0 0 24 24" fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-4 max-h-[70vh] overflow-y-auto space-y-4">
              <p className="text-center text-gray-600 mb-4">
                Follow the steps below to complete the payment successfully
              </p>
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex gap-3 items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-700 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-gray-900 font-semibold mb-1">Step {step}</h3>
                    <p className="text-gray-600 text-sm">
                      {/* Customize content per step if needed */}
                      Example instruction for step {step} in {methods.find(m => m.id === showBravoModal)?.name}.
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t bg-gray-50">
              <div className="bg-blue-50 rounded-lg p-3 text-center">
                <h4 className="font-semibold text-gray-900 mb-1">Do you need support?</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  If you have questions, contact support on WhatsApp <span className="font-semibold">+249912345678</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    </div>
  );
}