
import { Link } from "react-router-dom";
import { ArrowLeft, Flame, ThermometerSun, Scale } from "lucide-react";

const AshContent = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="w-full p-6 border-b border-slate-200 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <Link to="/" className="flex items-center space-x-3 group">
            <img 
              src="/lovable-uploads/146c3695-f922-461e-a318-3652384603b0.png" 
              alt="Central Coalfields Limited Logo" 
              className="h-12 w-auto"
            />
            <span className="text-slate-600 font-medium group-hover:text-blue-600 transition-colors">
              Central Coalfields Limited
            </span>
          </Link>
          <Link 
            to="/quality-manual" 
            className="flex items-center space-x-2 text-slate-600 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Quality Manual</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-br from-red-100 to-orange-200 rounded-full flex items-center justify-center mx-auto mb-6">
            <Flame className="w-10 h-10 text-red-600" />
          </div>
          <h1 className="text-4xl font-light text-slate-800 mb-4">Ash Content Analysis</h1>
          <p className="text-xl text-slate-600">Understanding inorganic residue in coal combustion</p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 mb-8">
          <h2 className="text-2xl font-semibold text-slate-800 mb-6">Theory & Definition</h2>
          <div className="prose prose-slate max-w-none">
            <p className="text-slate-600 leading-relaxed mb-4">
              Ash content represents the inorganic residue that remains after complete combustion of coal at high temperatures. 
              It consists primarily of mineral matter that was originally present in the coal, including clay, quartz, pyrite, 
              and various metal oxides.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              The ash content is a critical parameter in coal quality assessment as it directly affects the calorific value, 
              combustion efficiency, and environmental impact of coal utilization.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
            <div className="flex items-center space-x-3 mb-4">
              <ThermometerSun className="w-6 h-6 text-orange-600" />
              <h3 className="text-xl font-semibold text-slate-800">Testing Procedure</h3>
            </div>
            <ul className="space-y-3 text-slate-600">
              <li>• Sample preparation and grinding</li>
              <li>• Controlled combustion at 815°C</li>
              <li>• Complete oxidation of organic matter</li>
              <li>• Cooling and weight measurement</li>
              <li>• Calculation of ash percentage</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
            <div className="flex items-center space-x-3 mb-4">
              <Scale className="w-6 h-6 text-blue-600" />
              <h3 className="text-xl font-semibold text-slate-800">Quality Standards</h3>
            </div>
            <ul className="space-y-3 text-slate-600">
              <li>• Low ash: &lt; 10% (Premium grade)</li>
              <li>• Medium ash: 10-20% (Standard grade)</li>
              <li>• High ash: &gt; 20% (Industrial grade)</li>
              <li>• Maximum limit: 35% for power plants</li>
              <li>• Environmental regulations compliance</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-semibold mb-4">Impact on Coal Utilization</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Calorific Value</h4>
              <p className="text-blue-100">Higher ash content reduces the heating value of coal</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Transportation</h4>
              <p className="text-blue-100">Increased ash means higher transportation costs</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Environmental</h4>
              <p className="text-blue-100">Affects emissions and waste disposal requirements</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AshContent;
