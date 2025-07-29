
import { Link } from "react-router-dom";
import { ArrowLeft, Droplets, Thermometer, Beaker } from "lucide-react";

const MoistureContent = () => {
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
          <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-cyan-200 rounded-full flex items-center justify-center mx-auto mb-6">
            <Droplets className="w-10 h-10 text-blue-600" />
          </div>
          <h1 className="text-4xl font-light text-slate-800 mb-4">Moisture Content Analysis</h1>
          <p className="text-xl text-slate-600">Measuring water content in coal samples</p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 mb-8">
          <h2 className="text-2xl font-semibold text-slate-800 mb-6">Theory & Definition</h2>
          <div className="prose prose-slate max-w-none">
            <p className="text-slate-600 leading-relaxed mb-4">
              Moisture content refers to the amount of water present in coal, expressed as a percentage of the total weight. 
              This includes both surface moisture (adhering water) and inherent moisture (water held within the coal structure).
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Moisture content significantly affects coal's calorific value, combustion characteristics, handling properties, 
              and overall economic value. High moisture content reduces the net calorific value and increases transportation costs.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
            <div className="flex items-center space-x-3 mb-4">
              <Thermometer className="w-6 h-6 text-red-600" />
              <h3 className="text-xl font-semibold text-slate-800">Testing Methods</h3>
            </div>
            <ul className="space-y-3 text-slate-600">
              <li>• Oven drying method at 105-110°C</li>
              <li>• Toluene distillation method</li>
              <li>• Karl Fischer titration</li>
              <li>• Microwave drying technique</li>
              <li>• Infrared moisture analyzer</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
            <div className="flex items-center space-x-3 mb-4">
              <Beaker className="w-6 h-6 text-green-600" />
              <h3 className="text-xl font-semibold text-slate-800">Moisture Types</h3>
            </div>
            <ul className="space-y-3 text-slate-600">
              <li>• <strong>Total Moisture:</strong> All water in coal</li>
              <li>• <strong>Surface Moisture:</strong> External water</li>
              <li>• <strong>Inherent Moisture:</strong> Internal water</li>
              <li>• <strong>Equilibrium Moisture:</strong> Natural content</li>
              <li>• <strong>Bed Moisture:</strong> As-received basis</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-cyan-600 to-blue-800 rounded-2xl p-8 text-white mb-8">
          <h3 className="text-2xl font-semibold mb-6">Standard Specifications</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold mb-4">Acceptable Ranges</h4>
              <ul className="space-y-2 text-cyan-100">
                <li>• Bituminous Coal: 2-15%</li>
                <li>• Sub-bituminous Coal: 15-25%</li>
                <li>• Lignite: 25-45%</li>
                <li>• Anthracite: 2-8%</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quality Impact</h4>
              <ul className="space-y-2 text-cyan-100">
                <li>• Reduces net calorific value</li>
                <li>• Affects combustion efficiency</li>
                <li>• Influences handling characteristics</li>
                <li>• Impacts transportation costs</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
          <h3 className="text-2xl font-semibold text-slate-800 mb-6">Calculation Formula</h3>
          <div className="bg-slate-50 rounded-xl p-6">
            <p className="text-slate-800 font-mono text-lg text-center mb-4">
              Moisture (%) = [(Initial Weight - Final Weight) / Initial Weight] × 100
            </p>
            <div className="text-sm text-slate-600 space-y-2">
              <p><strong>Where:</strong></p>
              <p>• Initial Weight = Weight of coal sample before drying</p>
              <p>• Final Weight = Weight of coal sample after drying</p>
              <p>• Temperature maintained at 105-110°C until constant weight</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MoistureContent;
