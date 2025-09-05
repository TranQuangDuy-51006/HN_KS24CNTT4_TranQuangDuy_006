import React, { useEffect, useState } from "react";
import FormAdd from "./FormAdd";
import Table from "./Table";

interface DataUser {
  name: string;
  money: number;
  status: "Đã thanh toán" | "Chưa thanh toán";
}

export default function Manager() {
  const [list, setList] = useState<DataUser[]>(() => {
    const stored = localStorage.getItem("list");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  return (
    <div className="p-5 bg-gray-100 min-h-screen">
      <h1 className="text-white bg-orange-400 text-center text-[30px] py-5 rounded-2xl">
        Quản Lý Hóa Đơn Tiền Điện
      </h1>
      <FormAdd list={list} setList={setList} />
      <Table list={list} setList={setList} />
    </div>
  );
}
