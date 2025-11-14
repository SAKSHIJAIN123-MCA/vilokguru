export function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 py-16 px-4 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-orange-400 to-amber-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-br from-amber-400 to-yellow-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center space-y-8">
          {/* Main footer content */}
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6 animate-fade-in-up">
            <div className="relative group">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-400 via-amber-400 to-yellow-400 rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-all duration-500 group-hover:rotate-12">
                <span className="text-3xl filter drop-shadow-lg">🕉️</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-amber-400 to-yellow-400 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
            </div>

            <div className="text-center md:text-left animate-fade-in-up delay-200">
              <h3 className="text-2xl md:text-3xl font-bold text-orange-500 mb-2 drop-shadow-sm">
                मुनि श्री विलोक सागर जी महाराज
              </h3>
              <p className="text-lg text-amber-700 font-medium">जैन धर्म के महान संत</p>
            </div>
          </div>

          {/* Spiritual quotes section */}
          <div className="animate-fade-in-up delay-300">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-orange-200/50 shadow-xl">
              <p className="text-amber-800 text-lg font-medium italic mb-2">"अहिंसा परमो धर्मः"</p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-amber-700">
                  <span className="bg-orange-100/80 px-3 py-1 rounded-full">अहिंसा</span>
                <span className="bg-orange-100/80 px-3 py-1 rounded-full">सत्य</span>
                <span className="bg-amber-100/80 px-3 py-1 rounded-full">अचौर्य</span>
                <span className="bg-yellow-100/80 px-3 py-1 rounded-full">ब्रह्मचर्य</span>
                <span className="bg-orange-100/80 px-3 py-1 rounded-full">अपरिग्रह</span>
              </div>
            </div>
          </div>

          {/* Copyright section */}
          <div className="border-t border-gradient-to-r from-orange-200 via-amber-200 to-yellow-200 pt-8 animate-fade-in-up delay-500">
            <p className="text-amber-700 text-base font-medium mb-2">
              © 2025 निर्यापक श्रमण मुनि श्री 108 विलोक सागर जी महाराज। सभी अधिकार सुरक्षित।
            </p>
            <p className="text-amber-600 text-sm">जैन धर्म की शाश्वत शिक्षाओं का प्रसार</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
