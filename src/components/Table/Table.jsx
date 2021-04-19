import "./style.css";
import React from "react";

const Table = (props) => {
  const { data } = props;

  return (
    <div className="table-root">
      <table>
        <thead>
          <tr>
            <th>نام تغییر دهنده</th>
            <th>تاریخ</th>
            <th>نام آگهی</th>
            <th>فیلد</th>
            <th>مقدار قدیمی</th>
            <th>مقدار جدید</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((row) => (
            <tr key={row.id}>
              <td data-column="نام تغییر دهنده">{row.name}</td>
              <td data-column="تاریخ">{row.date}</td>
              <td data-column="نام آگهی">{row.title}</td>
              <td data-column="فیلد">{row.field}</td>
              <td data-column="مقدار قدیمی">{row.old_value}</td>
              <td data-column="مقدار جدید">{row.new_value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
