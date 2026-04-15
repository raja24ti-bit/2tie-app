export default function ResponsiveDesign() {
  return (
    <div className="p-8 bg-gray-200 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-center">Tutorial Responsive Design</h1>
      <ResponsiveText />
      <ResponsiveWidth />
      <ResponsiveLayout />
    </div>
  );
}

function ResponsiveText() {
  return (
    <p className="text-sm md:text-lg lg:text-xl xl:text-2xl mb-4 p-4 bg-white shadow rounded">
      Coba lakukan zoom in atau zoom out. Perhatikan bahwa ukuran teks akan menyesuaikan dengan ukuran layar.<br/>
      Coba hapus class yang menggunakan prefix breakpoint (md:xxx, lg:xxx, xl:xxx) dan lihat perbedaannya!
    </p>
  );
}

function ResponsiveWidth() {
  return (
    <div className="mb-4 p-4 bg-white shadow rounded">
      <p className="mb-4">
         Saat layar mencapai ukuran tablet (md: 768px) atau lebih besar, setiap kolom akan memiliki lebar 50%.
      </p>
      <div className="flex flex-col md:flex-row gap-2">
        <div className="bg-red-400 w-full md:w-1/2 p-4 text-center text-white">Kolom 1</div>
        <div className="bg-blue-400 w-full md:w-1/2 p-4 text-center text-white">Kolom 2</div>
      </div>
    </div>
  );
}

function ResponsiveLayout() {
  return (
    <div className="p-4 bg-white shadow rounded">
      <p className="mb-4">
        <strong>Grid Layout</strong>: Jumlah kolom menyesuaikan layar (1, 2, 3, atau 4 kolom).
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="bg-blue-500 p-4 text-white text-center">Box 1</div>
        <div className="bg-blue-500 p-4 text-white text-center">Box 2</div>
        <div className="bg-blue-500 p-4 text-white text-center">Box 3</div>
        <div className="bg-blue-500 p-4 text-white text-center">Box 4</div>
      </div>
    </div>
  );
}
