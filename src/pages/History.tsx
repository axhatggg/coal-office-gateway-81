import { Link } from "react-router-dom";
import { ArrowLeft, Calculator, Archive } from "lucide-react";
import { useState, useEffect } from "react";

interface CalculationResult {
  id: string;
  type: string;
  inputs: Record<string, number | string>;
  result: number;
  timestamp: string;
}

const History = () => {
  const [calculationResults, setCalculationResults] = useState<CalculationResult[]>([]);

  useEffect(() => {
    // Load calculation results from localStorage
    const savedResults = localStorage.getItem('calculationResults');
    if (savedResults) {
      setCalculationResults(JSON.parse(savedResults));
    }
  }, []);

  const formatInputs = (inputs: Record<string, number | string>, type: string) => {
    const inputEntries = Object.entries(inputs);
    return inputEntries.map(([key, value]) => (
      <div key={key} className="text-center">
        <p className="font-medium text-slate-600 uppercase">{key}</p>
        <p className="text-slate-800">
          {typeof value === 'number' ? value.toFixed(4) : String(value)}
        </p>
      </div>
    ));
  };

  const getResultUnit = (type: string) => {
    if (type === 'Gross Calorific Value') return 'BTU/lb';
    return '%';
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
          <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-amber-200 rounded-full flex items-center justify-center mx-auto mb-6">
            <Archive className="w-10 h-10 text-orange-600" />
          </div>
          <h1 className="text-4xl font-light text-slate-800 mb-4">Calculation History</h1>
          <p className="text-xl text-slate-600">Stored calculation results and input values</p>
        </div>

        {/* Calculation Results History */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
          <div className="flex items-center space-x-3 mb-6">
            <Calculator className="w-6 h-6 text-purple-600" />
            <h3 className="text-xl font-semibold text-slate-800">Calculation Results</h3>
          </div>
          
          {calculationResults.length > 0 ? (
            <div className="space-y-4">
              {calculationResults.map((result) => (
                <div key={result.id} className="flex items-start justify-between p-6 bg-gradient-to-r from-purple-50 to-violet-50 rounded-lg border border-purple-200">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="font-semibold text-slate-800 text-lg">{result.type}</p>
                        <p className="text-sm text-slate-600">{result.timestamp}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-3xl font-bold text-purple-600">
                          {result.result.toFixed(4)}{getResultUnit(result.type)}
                        </p>
                      </div>
                    </div>
                    
                    {/* Input Values Section */}
                    <div className="bg-white rounded-lg p-4 border border-purple-200">
                      <h4 className="font-medium text-slate-700 mb-2">Input Values:</h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                        {formatInputs(result.inputs, result.type)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-slate-500 text-lg">No calculation results found.</p>
              <p className="text-slate-400 mt-2">Perform calculations to see them appear here.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default History;
