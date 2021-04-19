import "./style.css";
import React from "react";

// Misc
import FilterInputs from "../../components/FilterInputs";
import LogTable from "../../components/LogTable";

const Updates = () => {
  const data = [
    {
      id: 1,
      name: "Mohammad Esmaeili",
      date: "2018-03-20",
      title: "چاپ پوستر های با کیفیت دیواری به ابعاد دلخواه",
      field: "عنوان",
      old_value: "یدک کش جرثقیل امداد",
      new_value: "تیگو 7 اکسلنت در حد صفر مدل 97",
    },
    {
      id: 2,
      name: "Ali Zamani",
      date: "2018-09-18",
      title: "ایفون 6s plus",
      field: "قیمت",
      old_value: 902385,
      new_value: 1506113,
    },
    {
      id: 3,
      name: "Amir Samiei",
      date: "2018-10-20",
      title: "لباس مجلسی و راحتی کودک تا دوسال",
      field: "عنوان",
      old_value: "کمد دوقلو و ویترین ( کتابخانه)",
      new_value: "یک جفت خروس فولادی",
    },
    {
      id: 4,
      name: "Sadaf Hamidian",
      date: "2019-09-13",
      title: "بنایی‌.گچکاری.سرامیک‌کاشی",
      field: "قیمت",
      old_value: 997306,
      new_value: 3892397,
    },
    {
      id: 5,
      name: "Javad Zareie",
      date: "2018-11-11",
      title: "لباس مجلسی و راحتی کودک تا دوسال",
      field: "قیمت",
      old_value: 4785321,
      new_value: 4001071,
    },
    {
      id: 6,
      name: "Javad Mashhadi Zadeh",
      date: "2019-12-27",
      title: "پراید se مدل ۹۶",
      field: "عنوان",
      old_value: "کارشناسی اپتیما سراتو اسپورتیج، کارشناس انواع کیا",
      new_value: "آپارتمان ۸۰ متری نوساز شهران شمالی",
    },
    {
      id: 7,
      name: "Sina Attaran",
      date: "2019-10-28",
      title: "s4 سالم",
      field: "عنوان",
      old_value: "پژو ٢٠٦ فرانسوى ٨١",
      new_value: "100متری دنج عیان نشین",
    },
    {
      id: 8,
      name: "Ali Mashhadi Zadeh",
      date: "2018-07-18",
      title: "پژو206 تیپ 5 مدل96",
      field: "قیمت",
      old_value: 3191938,
      new_value: 2224690,
    },
    {
      id: 9,
      name: "Reza Rezaei",
      date: "2018-08-11",
      title: "کتونیzxفولوکس",
      field: "عنوان",
      old_value: "فروش انواع دستگاه گلمیخ زن استاد ولدینگ",
      new_value: "صفر کیلومتر jac s5 جک اس فایو مدل ۹۷",
    },
    {
      id: 10,
      name: "Arash Moadab",
      date: "2018-12-25",
      title: "تخت کمجا تاشو",
      field: "قیمت",
      old_value: 4451775,
      new_value: 3276701,
    },
  ];

  return (
    <div>
      <div className="updates-title">
        <h2>صفحه گزارش تغییرات آگهی ها</h2>
      </div>
      <div className="updates-content">
        <FilterInputs />
        <div className="updates-table">
          <LogTable data={data} />
        </div>
      </div>
    </div>
  );
};

export default Updates;
