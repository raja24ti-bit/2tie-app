import frameworkData from "./framework.json";

export default function FrameworkList() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-2xl mx-auto">
        {frameworkData.map((item) => (
          <div
            key={item.id}
            className="border p-4 mb-4 rounded-lg shadow-md bg-white"
          >
            <h2 className="text-xl font-bold text-gray-800">{item.name}</h2>
            <p className="text-gray-600 text-sm mb-1">{item.description}</p>
            <p className="text-gray-500 text-xs">
              Developed by:{" "}
              <span className="font-bold text-gray-700">
                {item.details.developer}
              </span>{" "}
              ({item.details.releaseYear})
            </p>
            <div className="mt-2">
              <a
                href={item.details.officialWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline text-sm font-medium"
              >
                Visit Website
              </a>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {item.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-200 text-gray-700 text-[10px] px-3 py-1 rounded-full font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
