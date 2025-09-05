import React from "react";
import FormAdd from "./FormAdd";
import Table from "./Table";

export default function Manager() {
  return (
    <div className="p-5 bg-gray-100">
      <h1 className="text-white bg-orange-400 text-center text-[30px] py-5 rounded-2xl">
        Quản Lý Hóa Đơn Tiền Điện
      </h1>
      <FormAdd />
      <Table />
    </div>
  );
}
