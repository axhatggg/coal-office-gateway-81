
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle } from "lucide-react";

const StandardProcess = () => {
  const processSteps = [
    { step: "01", title: "Sample Collection", description: "Systematic collection of coal samples from various points" },
    { step: "02", title: "Initial Testing", description: "Preliminary analysis of physical and chemical properties" },
    { step: "03", title: "Laboratory Analysis", description: "Detailed testing using specialized equipment" },
    { step: "04", title: "Quality Assessment", description: "Evaluation against industry standards and specifications" },
    { step: "05", title: "Documentation", description: "Recording and reporting of test results and findings" },
    { step: "06", title: "Quality Certification", description: "Final approval and certification of coal quality" }
  ];

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
        <div className="text-center mb-16">
          <h1 className="text-5xl font-light text-slate-800 mb-4">Standard Process</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our standardized methodology ensures consistent quality control and reliable results
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-8">
          {processSteps.map((item, index) => (
            <div key={index} className="flex items-start space-x-6 bg-white rounded-xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">{item.step}</span>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-slate-800 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-lg">{item.description}</p>
              </div>
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default StandardProcess;
