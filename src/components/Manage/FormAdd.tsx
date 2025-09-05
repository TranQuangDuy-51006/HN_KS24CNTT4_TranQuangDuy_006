import React, { useState } from "react";

interface DataUser {
  name: string;
  money: number;
  status: "Đã thanh toán" | "Chưa thanh toán";
}

interface Message {
  name: string;
  money: string;
}

export default function FormAdd() {
  const list = localStorage.getItem("list") || [];
  const [data, setData] = useState<DataUser>({
    name: "",
    money: 0,
    status: "Chưa thanh toán",
  });
  const [message, setMessage] = useState<Message>({
    name: "",
    money: "",
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    setMessage({ name: "", money: "" });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (data.name == "") {
      setMessage({ ...message, name: "Vui lòng nhập tên chủ hộ" });
      return;
    }
    if (data.money <= 0) {
      setMessage({ ...message, money: "Vui lòng nhập số tiền" });
      return;
    }
    localStorage.setItem("list", JSON.stringify(list));
    console.log(data);
  };
  return (
    <form
      className="bg-white mt-5 shadow-2xs rounded-2xl p-5"
      onSubmit={handleSubmit}
    >
      <h2 className="text-[25px] py-5">Thêm hóa đơn mới</h2>
      <div className="flex gap-10">
        <div>
          <input
            type="text"
            name="name"
            className="border-2 p-2 rounded-2xl outline-0"
            placeholder="Tên chủ hộ"
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            name="money"
            className="border-2 p-2 rounded-2xl outline-0"
            placeholder="Số tiền"
            onChange={handleChange}
          />
        </div>

        <select
          name="status"
          id=""
          className="border-2 p-2 rounded-2xl outline-0"
          onChange={handleChange}
        >
          <option value="Chưa thanh toán">Chưa thanh toán</option>
          <option value="Đã thanh toán">Đã thanh toán</option>
        </select>
        <button className="bg-blue-500 text-white px-10 rounded-2xl">
          Thêm
        </button>
      </div>
      <div className="flex">
        <p className="w-62 text-red-600">{message.name}</p>
        <p className="w-62 text-red-600">{message.money}</p>
      </div>
    </form>
  );
}
