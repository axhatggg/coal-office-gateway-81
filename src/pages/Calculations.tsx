import { Link } from "react-router-dom";
import { ArrowLeft, Calculator, Save } from "lucide-react";
import { useState } from "react";

interface CalculationResult {
  id: string;
  type: string;
  inputs: any;
  result: number;
  timestamp: string;
}

const Calculations = () => {
  // Ash Content State
  const [ashInputs, setAshInputs] = useState({ m1: 0, m2: 0, m3: 0 });
  const [ashResult, setAshResult] = useState<number | null>(null);
  
  // Moisture Content State
  const [moistureInputs, setMoistureInputs] = useState({ m1: 0, m2: 0, m3: 0 });
  const [moistureResult, setMoistureResult] = useState<number | null>(null);
  
  // Volatile Matter State
  const [vmInputs, setVmInputs] = useState({ m1: 0, m2: 0, m3: 0, moisture: 0 });
  const [vmResult, setVmResult] = useState<number | null>(null);
  
  // Fixed Carbon State
  const [fcInputs, setFcInputs] = useState({ ash: 0, moisture: 0, vm: 0 });
  const [fcResult, setFcResult] = useState<number | null>(null);
  
  // Equilibrated Moisture State
  const [eqMoistureInputs, setEqMoistureInputs] = useState({ m1: 0, m2: 0, m3: 0 });
  const [eqMoistureResult, setEqMoistureResult] = useState<number | null>(null);

  // GCV State
  const [gcvInputs, setGcvInputs] = useState({ calorificValue: 0 });
  const [gcvResult, setGcvResult] = useState<number | null>(null);

  const saveResult = (type: string, inputs: any, result: number) => {
    const newResult: CalculationResult = {
      id: Date.now().toString(),
      type,
      inputs: { ...inputs },
      result,
      timestamp: new Date().toLocaleString()
    };
    
    // Get existing results from localStorage
    const existingResults = localStorage.getItem('calculationResults');
    const results = existingResults ? JSON.parse(existingResults) : [];
    
    // Add new result at the beginning
    results.unshift(newResult);
    
    // Save back to localStorage
    localStorage.setItem('calculationResults', JSON.stringify(results));
    
    console.log('Saved result:', newResult);
  };

  const calculateAsh = () => {
    if (ashInputs.m2 - ashInputs.m1 !== 0) {
      const result = ((ashInputs.m3 - ashInputs.m1) / (ashInputs.m2 - ashInputs.m1)) * 100;
      setAshResult(result);
      saveResult('Ash Content', ashInputs, result);
    }
  };

  const calculateMoisture = () => {
    if (moistureInputs.m2 - moistureInputs.m1 !== 0) {
      const result = ((moistureInputs.m2 - moistureInputs.m3) / (moistureInputs.m2 - moistureInputs.m1)) * 100;
      setMoistureResult(result);
      saveResult('Moisture Content', moistureInputs, result);
    }
  };

  const calculateVM = () => {
    if (vmInputs.m2 - vmInputs.m1 !== 0) {
      const result = (((vmInputs.m2 - vmInputs.m3) / (vmInputs.m2 - vmInputs.m1)) * 100) - vmInputs.moisture;
      setVmResult(result);
      saveResult('Volatile Matter', vmInputs, result);
    }
  };

  const calculateFC = () => {
    const result = 100 - (fcInputs.ash + fcInputs.moisture + fcInputs.vm);
    setFcResult(result);
    saveResult('Fixed Carbon', fcInputs, result);
  };

  const calculateEqMoisture = () => {
    if (eqMoistureInputs.m3 - eqMoistureInputs.m1 !== 0) {
      const result = ((eqMoistureInputs.m2 - eqMoistureInputs.m3) / (eqMoistureInputs.m3 - eqMoistureInputs.m1)) * 100;
      setEqMoistureResult(result);
      saveResult('Equilibrated Moisture', eqMoistureInputs, result);
    }
  };

  const calculateGCV = () => {
    const result = gcvInputs.calorificValue;
    setGcvResult(result);
    saveResult('Gross Calorific Value', gcvInputs, result);
  };

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
            to="/" 
            className="flex items-center space-x-2 text-slate-600 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-violet-200 rounded-full flex items-center justify-center mx-auto mb-6">
            <Calculator className="w-10 h-10 text-purple-600" />
          </div>
          <h1 className="text-4xl font-light text-slate-800 mb-4">Interactive Calculations</h1>
          <p className="text-xl text-slate-600">Coal quality analysis with automated calculations</p>
        </div>

        <div className="space-y-8">
          {/* Ash Content Calculation */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
            <h3 className="text-2xl font-semibold text-slate-800 mb-6">Determination of Ash Percentage</h3>
            
            <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-xl p-6 mb-6">
              <h4 className="font-semibold text-slate-800 mb-3">Formula:</h4>
              <p className="text-xl font-mono text-purple-800 bg-white rounded-lg p-4 border border-purple-200">
                Ash % = (M3 - M1) / (M2 - M1) × 100%
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-slate-800 mb-3">Input Values:</h4>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">M1 - Mass of dish (g)</label>
                    <input
                      type="number"
                      step="0.0001"
                      value={ashInputs.m1}
                      onChange={(e) => setAshInputs({...ashInputs, m1: parseFloat(e.target.value) || 0})}
                      className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">M2 - Mass of dish and sample (g)</label>
                    <input
                      type="number"
                      step="0.0001"
                      value={ashInputs.m2}
                      onChange={(e) => setAshInputs({...ashInputs, m2: parseFloat(e.target.value) || 0})}
                      className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">M3 - Mass of dish and ash (g)</label>
                    <input
                      type="number"
                      step="0.0001"
                      value={ashInputs.m3}
                      onChange={(e) => setAshInputs({...ashInputs, m3: parseFloat(e.target.value) || 0})}
                      className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <button
                    onClick={calculateAsh}
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-4 rounded-lg transition-colors"
                  >
                    Calculate Ash %
                  </button>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-slate-800 mb-3">Result:</h4>
                <div className="bg-slate-50 rounded-lg p-6">
                  {ashResult !== null ? (
                    <div className="text-center">
                      <p className="text-3xl font-bold text-purple-600">{ashResult.toFixed(4)}%</p>
                      <p className="text-slate-600 mt-2">Ash Content</p>
                    </div>
                  ) : (
                    <p className="text-slate-500 text-center">Enter values and calculate</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Moisture Content Calculation */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
            <h3 className="text-2xl font-semibold text-slate-800 mb-6">Determination of Moisture Percentage</h3>
            
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 mb-6">
              <h4 className="font-semibold text-slate-800 mb-3">Formula:</h4>
              <p className="text-xl font-mono text-blue-800 bg-white rounded-lg p-4 border border-blue-200">
                Moisture % = (M2 - M3) / (M2 - M1) × 100%
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">M1 - Mass of vessel with lid (g)</label>
                    <input
                      type="number"
                      step="0.0001"
                      value={moistureInputs.m1}
                      onChange={(e) => setMoistureInputs({...moistureInputs, m1: parseFloat(e.target.value) || 0})}
                      className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">M2 - Mass of vessel with lid and sample (g)</label>
                    <input
                      type="number"
                      step="0.0001"
                      value={moistureInputs.m2}
                      onChange={(e) => setMoistureInputs({...moistureInputs, m2: parseFloat(e.target.value) || 0})}
                      className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">M3 - Mass after heating (g)</label>
                    <input
                      type="number"
                      step="0.0001"
                      value={moistureInputs.m3}
                      onChange={(e) => setMoistureInputs({...moistureInputs, m3: parseFloat(e.target.value) || 0})}
                      className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <button
                    onClick={calculateMoisture}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg transition-colors"
                  >
                    Calculate Moisture %
                  </button>
                </div>
              </div>
              
              <div>
                <div className="bg-slate-50 rounded-lg p-6">
                  {moistureResult !== null ? (
                    <div className="text-center">
                      <p className="text-3xl font-bold text-blue-600">{moistureResult.toFixed(4)}%</p>
                      <p className="text-slate-600 mt-2">Moisture Content</p>
                    </div>
                  ) : (
                    <p className="text-slate-500 text-center">Enter values and calculate</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Volatile Matter Calculation */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
            <h3 className="text-2xl font-semibold text-slate-800 mb-6">Determination of Volatile Matter</h3>
            
            <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-6 mb-6">
              <h4 className="font-semibold text-slate-800 mb-3">Formula:</h4>
              <p className="text-xl font-mono text-orange-800 bg-white rounded-lg p-4 border border-orange-200">
                VM % = (((M2 - M3) / (M2 - M1)) × 100) - Moisture %
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">M1 - Mass of crucible (g)</label>
                    <input
                      type="number"
                      step="0.0001"
                      value={vmInputs.m1}
                      onChange={(e) => setVmInputs({...vmInputs, m1: parseFloat(e.target.value) || 0})}
                      className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">M2 - Mass of crucible and sample (g)</label>
                    <input
                      type="number"
                      step="0.0001"
                      value={vmInputs.m2}
                      onChange={(e) => setVmInputs({...vmInputs, m2: parseFloat(e.target.value) || 0})}
                      className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">M3 - Mass after heating (g)</label>
                    <input
                      type="number"
                      step="0.0001"
                      value={vmInputs.m3}
                      onChange={(e) => setVmInputs({...vmInputs, m3: parseFloat(e.target.value) || 0})}
                      className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Moisture %</label>
                    <input
                      type="number"
                      step="0.0001"
                      value={vmInputs.moisture}
                      onChange={(e) => setVmInputs({...vmInputs, moisture: parseFloat(e.target.value) || 0})}
                      className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                  <button
                    onClick={calculateVM}
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 px-4 rounded-lg transition-colors"
                  >
                    Calculate VM %
                  </button>
                </div>
              </div>
              
              <div>
                <div className="bg-slate-50 rounded-lg p-6">
                  {vmResult !== null ? (
                    <div className="text-center">
                      <p className="text-3xl font-bold text-orange-600">{vmResult.toFixed(4)}%</p>
                      <p className="text-slate-600 mt-2">Volatile Matter</p>
                    </div>
                  ) : (
                    <p className="text-slate-500 text-center">Enter values and calculate</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Fixed Carbon Calculation */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
            <h3 className="text-2xl font-semibold text-slate-800 mb-6">Determination of Fixed Carbon</h3>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 mb-6">
              <h4 className="font-semibold text-slate-800 mb-3">Formula:</h4>
              <p className="text-xl font-mono text-green-800 bg-white rounded-lg p-4 border border-green-200">
                FC % = 100 - (Ash % + Moisture % + VM %)
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Ash %</label>
                    <input
                      type="number"
                      step="0.0001"
                      value={fcInputs.ash}
                      onChange={(e) => setFcInputs({...fcInputs, ash: parseFloat(e.target.value) || 0})}
                      className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Moisture %</label>
                    <input
                      type="number"
                      step="0.0001"
                      value={fcInputs.moisture}
                      onChange={(e) => setFcInputs({...fcInputs, moisture: parseFloat(e.target.value) || 0})}
                      className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">VM %</label>
                    <input
                      type="number"
                      step="0.0001"
                      value={fcInputs.vm}
                      onChange={(e) => setFcInputs({...fcInputs, vm: parseFloat(e.target.value) || 0})}
                      className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <button
                    onClick={calculateFC}
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg transition-colors"
                  >
                    Calculate FC %
                  </button>
                </div>
              </div>
              
              <div>
                <div className="bg-slate-50 rounded-lg p-6">
                  {fcResult !== null ? (
                    <div className="text-center">
                      <p className="text-3xl font-bold text-green-600">{fcResult.toFixed(4)}%</p>
                      <p className="text-slate-600 mt-2">Fixed Carbon</p>
                    </div>
                  ) : (
                    <p className="text-slate-500 text-center">Enter values and calculate</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Equilibrated Moisture Calculation */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
            <h3 className="text-2xl font-semibold text-slate-800 mb-6">Determination of Equilibrated Moisture</h3>
            
            <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl p-6 mb-6">
              <h4 className="font-semibold text-slate-800 mb-3">Formula:</h4>
              <p className="text-xl font-mono text-pink-800 bg-white rounded-lg p-4 border border-pink-200">
                Eq. Moisture % = (M2 - M3) / (M3 - M1) × 100%
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">M1 - Mass of container (g)</label>
                    <input
                      type="number"
                      step="0.0001"
                      value={eqMoistureInputs.m1}
                      onChange={(e) => setEqMoistureInputs({...eqMoistureInputs, m1: parseFloat(e.target.value) || 0})}
                      className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-pink-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">M2 - Mass of container and sample (g)</label>
                    <input
                      type="number"
                      step="0.0001"
                      value={eqMoistureInputs.m2}
                      onChange={(e) => setEqMoistureInputs({...eqMoistureInputs, m2: parseFloat(e.target.value) || 0})}
                      className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-pink-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">M3 - Mass after equilibrium (g)</label>
                    <input
                      type="number"
                      step="0.0001"
                      value={eqMoistureInputs.m3}
                      onChange={(e) => setEqMoistureInputs({...eqMoistureInputs, m3: parseFloat(e.target.value) || 0})}
                      className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-pink-500"
                    />
                  </div>
                  <button
                    onClick={calculateEqMoisture}
                    className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3 px-4 rounded-lg transition-colors"
                  >
                    Calculate Eq. Moisture %
                  </button>
                </div>
              </div>
              
              <div>
                <div className="bg-slate-50 rounded-lg p-6">
                  {eqMoistureResult !== null ? (
                    <div className="text-center">
                      <p className="text-3xl font-bold text-pink-600">{eqMoistureResult.toFixed(4)}%</p>
                      <p className="text-slate-600 mt-2">Equilibrated Moisture</p>
                    </div>
                  ) : (
                    <p className="text-slate-500 text-center">Enter values and calculate</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Gross Calorific Value Calculation */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
            <h3 className="text-2xl font-semibold text-slate-800 mb-6">Determination of Gross Calorific Value</h3>
            
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 mb-6">
              <h4 className="font-semibold text-slate-800 mb-3">Formula:</h4>
              <p className="text-xl font-mono text-indigo-800 bg-white rounded-lg p-4 border border-indigo-200">
                GCV = Calorific Value Input
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Calorific Value (BTU/lb)</label>
                    <input
                      type="number"
                      step="0.0001"
                      value={gcvInputs.calorificValue}
                      onChange={(e) => setGcvInputs({...gcvInputs, calorificValue: parseFloat(e.target.value) || 0})}
                      className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <button
                    onClick={calculateGCV}
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-4 rounded-lg transition-colors"
                  >
                    Calculate GCV
                  </button>
                </div>
              </div>
              
              <div>
                <div className="bg-slate-50 rounded-lg p-6">
                  {gcvResult !== null ? (
                    <div className="text-center">
                      <p className="text-3xl font-bold text-indigo-600">{gcvResult.toFixed(4)} BTU/lb</p>
                      <p className="text-slate-600 mt-2">Gross Calorific Value</p>
                    </div>
                  ) : (
                    <p className="text-slate-500 text-center">Enter values and calculate</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Calculations;
