
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-[80vh] px-6 relative z-10">
      <div className="text-center max-w-4xl mx-auto mt-16">
        <h1 className="text-6xl md:text-7xl font-light text-slate-800 mb-4 tracking-tight drop-shadow-sm">
          CCL Darbhanga House
        </h1>
        <p className="text-xl text-slate-600 font-light mb-16 tracking-wide drop-shadow-sm">
          HEAD QUARTERS
        </p>
      </div>

      {/* Navigation Buttons */}
      <div className="flex flex-col sm:flex-row gap-6 mt-12">
        <Link 
          to="/quality-manual" 
          className="group bg-white hover:bg-blue-600 text-slate-700 hover:text-white px-8 py-4 rounded-lg border border-slate-200 hover:border-blue-600 transition-all duration-300 shadow-sm hover:shadow-lg flex items-center space-x-3"
        >
          <span className="font-medium">Quality Manual</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
        
        <Link 
          to="/standard-process" 
          className="group bg-white hover:bg-blue-600 text-slate-700 hover:text-white px-8 py-4 rounded-lg border border-slate-200 hover:border-blue-600 transition-all duration-300 shadow-sm hover:shadow-lg flex items-center space-x-3"
        >
          <span className="font-medium">Standard Process</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
    </main>
  );
};

export default HeroSection;
