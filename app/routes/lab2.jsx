import React, { useState } from "react";

function lab2() {
  const [product, setProduct] = useState({ name: "", price: "", image: "" });
  const [products, setProducts] = useState([]);

  // ฟังก์ชันสำหรับจัดการการเปลี่ยนแปลงในฟอร์ม
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  // ฟังก์ชันสำหรับบันทึกข้อมูลสินค้า
  const handleSubmit = (e) => {
    e.preventDefault();
    if (product.name && product.price && product.image) {
      setProducts([...products, product]);
      setProduct({ name: "", price: "", image: "" });
    } else {
      alert("กรุณากรอกข้อมูลให้ครบถ้วน");
    }
  };

  // ฟังก์ชันสำหรับลบสินค้า
  const handleDelete = (index) => {
    if (window.confirm("คุณต้องการลบสินค้านี้หรือไม่?")) {
      const updatedProducts = products.filter((_, i) => i !== index);
      setProducts(updatedProducts);
    }
  };

  return (
    <div>
      <h2>เพิ่มข้อมูลสินค้า</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="ชื่อสินค้า"
          value={product.name}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          placeholder="ราคา"
          value={product.price}
          onChange={handleChange}
        />
        <input
          type="text"
          name="image"
          placeholder="รูปภาพ (URL)"
          value={product.image}
          onChange={handleChange}
        />
        <button type="submit">บันทึก</button>
        <button type="button" onClick={() => setProduct({ name: "", price: "", image: "" })}>
          เคลียร์
        </button>
      </form>

      <h2>รายการสินค้า</h2>
      <table border="1">
        <thead>
          <tr>
            <th>No.</th>
            <th>ชื่อสินค้า</th>
            <th>ราคา</th>
            <th>รูปภาพสินค้า</th>
            <th>ดำเนินการ</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{parseFloat(item.price).toFixed(2)}</td>
              <td>
                <img src={item.image} alt={item.name} width="50" />
              </td>
              <td>
                <button onClick={() => handleDelete(index)}>ลบ</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  
}

export default lab2;
