import { useState } from "react";
import frameworkData from "./framework.json";

export default function FrameworkListSearchFilter() {
  /* 1. Inisialisasi State dalam bentuk Object */
  const [dataForm, setDataForm] = useState({
    searchTerm: "",
    selectedTag: "",
  });

  /* 2. Fungsi untuk menangani perubahan input secara dinamis */
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  /* 3. Logic Filter: Mencari berdasarkan Nama/Deskripsi & Filter Tag */
  const _searchTerm = dataForm.searchTerm.toLowerCase();

  const filteredFrameworks = frameworkData.filter((framework) => {
    const matchesSearch =
      framework.name.toLowerCase().includes(_searchTerm) ||
      framework.description.toLowerCase().includes(_searchTerm);

    const matchesTag = dataForm.selectedTag
      ? framework.tags.includes(dataForm.selectedTag)
      : true;

    return matchesSearch && matchesTag;
  });

  /* 4. Mengambil daftar Tag Unik dari JSON */
  const allTags = [...new Set(frameworkData.flatMap((item) => item.tags))].sort();

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        
        {/* Header & Search Section */}
        <div className="max-w-2xl mx-auto text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Framework Explorer</h1>
          
          <input
            type="text"
            name="searchTerm"
            placeholder="Search framework by name or description..."
            className="w-full p-3 border border-gray-300 rounded-lg mb-4 shadow-sm focus:ring-2 focus:ring-blue-400 outline-none transition-all"
            value={dataForm.searchTerm}
            onChange={handleChange}
          />

          <select
            name="selectedTag"
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 outline-none transition-all cursor-pointer"
            value={dataForm.selectedTag}
            onChange={handleChange}
          >
            <option value="">All Categories (Tags)</option>
            {allTags.map((tag) => (
              <option key={tag} value={tag}>
                {tag}
              </option>
            ))}
          </select>
        </div>

        {/* --- GRID LAYOUT RESPONSIF --- */}
        {filteredFrameworks.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFrameworks.map((item) => (
              <div 
                key={item.id} 
                className="border border-gray-100 p-6 rounded-xl shadow-md bg-white flex flex-col justify-between hover:shadow-lg transition-shadow"
              >
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <h2 className="text-xl font-bold text-blue-600">{item.name}</h2>
                    <span className="text-xs font-mono bg-blue-50 text-blue-600 px-2 py-1 rounded">
                      {item.details.releaseYear}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                  
                  <p className="text-gray-400 text-[11px] uppercase tracking-wider font-semibold">
                    Developer
                  </p>
                  <p className="text-gray-700 text-sm mb-4">
                    {item.details.developer}
                  </p>
                </div>

                <div>
                  <hr className="mb-4 border-gray-50" />
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-600 text-[10px] px-2 py-1 rounded-md font-medium"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={item.details.officialWebsite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center bg-blue-500 hover:bg-blue-600 text-white text-sm font-bold py-2 rounded-lg transition-colors"
                  >
                    Visit Official Site
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-400 text-xl italic">No frameworks match your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}