import React from "react";

interface DataUser {
  name: string;
  money: number;
  status: "Đã thanh toán" | "Chưa thanh toán";
}

export default function Table({
  list,
  setList,
}: {
  list: DataUser[];
  setList: React.Dispatch<React.SetStateAction<DataUser[]>>;
}) {
  const handleDelete = (index: number) => {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
    localStorage.setItem("list", JSON.stringify(newList));
  };

  return (
    <div className="bg-white mt-5 shadow-2xs rounded-2xl p-5">
      <h2 className="text-[25px] py-5">Danh sách hóa đơn</h2>
      <table className="w-[90%] table-auto border-collapse border border-gray-400 m-auto">
        <thead>
          <tr>
            <th className="border border-gray-300 py-3">Tên chủ hộ</th>
            <th className="border border-gray-300 py-3">Số tiền</th>
            <th className="border border-gray-300 py-3">Trạng thái</th>
            <th className="border border-gray-300 py-3">Hành động</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {list.length > 0 ? (
            list.map((item, index) => (
              <tr key={index}>
                <td className="border border-gray-300 py-3">{item.name}</td>
                <td className="border border-gray-300 py-3">
                  {item.money.toLocaleString()} VND
                </td>
                <td className="border border-gray-300 py-3">{item.status}</td>
                <td className="border border-gray-300 py-3">
                  <button className="p-3 text-blue-500 border-2 rounded-2xl mr-2">
                    Sửa
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="p-3 text-red-500 border-2 rounded-2xl"
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4} className="py-3 text-gray-500">
                Chưa có hóa đơn nào
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
