const languages = [
  { code: "en", name: "English" },
  { code: "es", name: "Spanish" },
  { code: "fr", name: "French" },
  { code: "de", name: "Deutsch" },
  { code: "it", name: "Italy" },
  { code: "pt", name: "Portuguese" },
];

function App() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center">
          <h1 className="text-headerColor text-2xl font-normal">Translate</h1>
        </div>
      </header>
      {/* Header */}

      <main className="flex flex-grow items-start justify-center px-4 py-8">
        {/* Select Lang */}
        <div className="w-full max-w-5xl bg-white rounded-lg shadow-md overflow-hidden">
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <select className="text-sm text-textColor bg-transparent border-none focus:outline-none appearance-none cursor-pointer">
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.name}
                </option>
              ))}
            </select>

            <button className="p-2 rounded-full hover:bg-gray-100 outline-none">
              <svg
                className="w-5 h-5 text-headerColor"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                />
              </svg>
            </button>
            <select className="text-sm text-textColor bg-transparent border-none focus:outline-none appearance-none cursor-pointer">
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.name}
                </option>
              ))}
            </select>
          </div>
          {/* Select Lang */}

          {/* Text Area */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-4">
              <textarea
                placeholder="Enter text"
                className="w-full h-40 text-lg text-textColor bg-transparent resize-none border-none outline-none"
              ></textarea>
            </div>
            <div className="p-4 relative bg-secondaryBackground border-l border-gray-200">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-blue-500">
                  <p className="text-lg text-textColor"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
