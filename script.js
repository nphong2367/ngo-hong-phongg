// Danh sách sản phẩm mẫu để demo tìm kiếm nhanh
const products = [
  "Máy in HP LaserJet",
  "Ghế công thái học",
  "Máy tính Dell Inspiron",
  "Bút bi Thiên Long",
  "Giấy A4 Double A",
  "Bàn làm việc gỗ",
  "Kệ tài liệu 3 tầng"
];

const searchInput = document.getElementById("search");
const resultsBox = document.getElementById("search-results");

searchInput?.addEventListener("input", () => {
  const keyword = searchInput.value.toLowerCase().trim();
  resultsBox.innerHTML = "";
  
  if (keyword === "") {
    resultsBox.style.display = "none";
    return;
  }

  const filtered = products.filter(p => p.toLowerCase().includes(keyword));

  if (filtered.length > 0) {
    resultsBox.style.display = "block";
    filtered.forEach(p => {
      const div = document.createElement("div");
      div.textContent = p;
      div.onclick = () => {
        alert(`Xem chi tiết: ${p}`);
        resultsBox.style.display = "none";
        searchInput.value = p;
      };
      resultsBox.appendChild(div);
    });
  } else {
    resultsBox.style.display = "block";
    resultsBox.innerHTML = "<div>Không tìm thấy sản phẩm</div>";
  }
});

// Ẩn kết quả khi click ra ngoài
document.addEventListener("click", (e) => {
  if (!e.target.closest(".search-box")) {
    resultsBox.style.display = "none";
  }
});
