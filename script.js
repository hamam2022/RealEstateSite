// دالة بحث تجريبية
function searchProperties() {
  const searchInput = document.getElementById('search-input').value.trim();
  if (searchInput) {
    alert(`البحث عن: ${searchInput}`);
    // يمكنك إضافة منطق البحث الفعلي هنا
  } else {
    alert("من فضلك أدخل كلمة بحث.");
  }
}

// مثال مبسط لاستدعاء خرائط Google (عند تفعيل الـ API)
/*
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: { lat: 24.7136, lng: 46.6753 } // إحداثيات الرياض كمثال
  });

  // إضافة مؤشر مكان
  new google.maps.Marker({
    position: { lat: 24.7136, lng: 46.6753 },
    map,
    title: "عقار الرياض"
  });
}
*/
