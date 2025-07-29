
import { Link } from "react-router-dom";
import { ArrowLeft, Wind, Flame, FlaskConical } from "lucide-react";

const VolatileMatter = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="w-full p-6 border-b border-slate-200 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">CCL</span>
            </div>
            <span className="text-slate-600 font-medium group-hover:text-blue-600 transition-colors">
              Coal Company Limited
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
          <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-teal-200 rounded-full flex items-center justify-center mx-auto mb-6">
            <Wind className="w-10 h-10 text-green-600" />
          </div>
          <h1 className="text-4xl font-light text-slate-800 mb-4">Volatile Matter Analysis</h1>
          <p className="text-xl text-slate-600">Gaseous compounds released during coal heating</p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 mb-8">
          <h2 className="text-2xl font-semibold text-slate-800 mb-6">Theory & Definition</h2>
          <div className="prose prose-slate max-w-none">
            <p className="text-slate-600 leading-relaxed mb-4">
              Volatile matter represents the gaseous products, exclusive of water vapor, that are driven off from 
              coal when heated under specific conditions. These compounds are released when coal is heated in the 
              absence of air at 900°C ± 5°C for 7 minutes.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              The volatile matter content is crucial for determining coal rank, combustion characteristics, 
              coking properties, and suitability for various industrial applications. It directly influences 
              ignition temperature, flame length, and burning rate.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
            <div className="flex items-center space-x-3 mb-4">
              <FlaskConical className="w-6 h-6 text-purple-600" />
              <h3 className="text-xl font-semibold text-slate-800">Test Procedure</h3>
            </div>
            <ul className="space-y-3 text-slate-600">
              <li>• Sample preparation (1g, 212 microns)</li>
              <li>• Heating at 900°C ± 5°C</li>
              <li>• Duration: 7 minutes precisely</li>
              <li>• Oxygen-free environment</li>
              <li>• Weight loss calculation</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
            <div className="flex items-center space-x-3 mb-4">
              <Flame className="w-6 h-6 text-orange-600" />
              <h3 className="text-xl font-semibold text-slate-800">Components Released</h3>
            </div>
            <ul className="space-y-3 text-slate-600">
              <li>• Hydrocarbons (CH₄, C₂H₆, etc.)</li>
              <li>• Carbon monoxide (CO)</li>
              <li>• Hydrogen (H₂)</li>
              <li>• Tar and oil vapors</li>
              <li>• Other organic compounds</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-600 to-teal-800 rounded-2xl p-8 text-white mb-8">
          <h3 className="text-2xl font-semibold mb-6">Coal Classification by Volatile Matter</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold mb-4">Coal Types</h4>
              <ul className="space-y-2 text-green-100">
                <li>• <strong>Anthracite:</strong> 2-8%</li>
                <li>• <strong>Bituminous:</strong> 15-45%</li>
                <li>• <strong>Sub-bituminous:</strong> 35-45%</li>
                <li>• <strong>Lignite:</strong> 45-60%</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Applications</h4>
              <ul className="space-y-2 text-green-100">
                <li>• Power generation efficiency</li>
                <li>• Coking coal assessment</li>
                <li>• Combustion optimization</li>
                <li>• Industrial process selection</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
            <h3 className="text-2xl font-semibold text-slate-800 mb-6">Calculation Method</h3>
            <div className="bg-slate-50 rounded-xl p-6">
              <p className="text-slate-800 font-mono text-lg text-center mb-4">
                VM (%) = [(W₁ - W₂) / W₁] × 100
              </p>
              <div className="text-sm text-slate-600 space-y-2">
                <p><strong>Where:</strong></p>
                <p>• W₁ = Initial weight of sample</p>
                <p>• W₂ = Final weight after heating</p>
                <p>• Corrected for moisture content</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
            <h3 className="text-2xl font-semibold text-slate-800 mb-6">Quality Indicators</h3>
            <ul className="space-y-4 text-slate-600">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <span><strong>High VM:</strong> Easy ignition, high flame</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <span><strong>Medium VM:</strong> Balanced combustion</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                <span><strong>Low VM:</strong> Difficult ignition, smokeless</span>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default VolatileMatter;
