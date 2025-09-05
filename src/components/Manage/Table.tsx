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
    setData((prev) => ({
      ...prev,
      [name]: name === "money" ? Number(value) : value,
    }));
    setMessage({ name: "", money: "" });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (data.name.trim() === "") {
      setMessage({ ...message, name: "Vui lòng nhập tên chủ hộ" });
      return;
    }
    if (data.money <= 0 || isNaN(data.money)) {
      setMessage({ ...message, money: "Vui lòng nhập số tiền hợp lệ" });
      return;
    }
    const list: DataUser[] = JSON.parse(localStorage.getItem("list") || "[]");
    list.push(data);
    localStorage.setItem("list", JSON.stringify(list));
    setData({
      name: "",
      money: 0,
      status: "Chưa thanh toán",
    });
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
            value={data.name}
            className="border-2 p-2 rounded-2xl outline-0"
            placeholder="Tên chủ hộ"
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="number"
            name="money"
            value={data.money === 0 ? "" : data.money}
            className="border-2 p-2 rounded-2xl outline-0"
            placeholder="Số tiền"
            onChange={handleChange}
          />
        </div>
        <select
          name="status"
          value={data.status}
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
