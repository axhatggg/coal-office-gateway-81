
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Flame, Droplets, Wind } from "lucide-react";

const QualityManual = () => {
  const coalProperties = [
    {
      name: "Ash Content",
      icon: Flame,
      description: "Measure of inorganic residue after combustion",
      link: "/ash-content"
    },
    {
      name: "Moisture Content",
      icon: Droplets,
      description: "Water content present in coal samples",
      link: "/moisture-content"
    },
    {
      name: "Volatile Matter",
      icon: Wind,
      description: "Gaseous compounds released during heating",
      link: "/volatile-matter"
    }
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
          <h1 className="text-5xl font-light text-slate-800 mb-4">Quality Manual</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive analysis and testing procedures for coal quality assessment
          </p>
        </div>

        {/* Coal Properties Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {coalProperties.map((property, index) => (
            <Link
              key={property.name}
              to={property.link}
              className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-xl border border-slate-200 hover:border-blue-300 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <property.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">{property.name}</h3>
                <p className="text-slate-600 mb-6">{property.description}</p>
                <div className="flex items-center space-x-2 text-blue-600 group-hover:translate-x-1 transition-transform duration-300">
                  <span className="font-medium">Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Process Overview Section */}
        <div className="bg-white rounded-2xl p-12 shadow-sm border border-slate-200">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-slate-800 mb-4">Quality Assurance Process</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Our systematic approach ensures consistent quality standards across all coal products
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link 
              to="/job-roles"
              className="group text-center p-6 rounded-lg hover:bg-slate-50 transition-colors"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                <span className="text-blue-600 font-bold">JR</span>
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">Job Roles Assigned</h3>
              <p className="text-sm text-slate-600">Personnel responsibilities and assignments</p>
            </Link>

            <Link 
              to="/equipments"
              className="group text-center p-6 rounded-lg hover:bg-slate-50 transition-colors"
            >
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                <span className="text-green-600 font-bold">EQ</span>
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">Equipments</h3>
              <p className="text-sm text-slate-600">Testing instruments and machinery</p>
            </Link>

            <Link 
              to="/calculations"
              className="group text-center p-6 rounded-lg hover:bg-slate-50 transition-colors"
            >
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                <span className="text-purple-600 font-bold">CA</span>
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">Calculations</h3>
              <p className="text-sm text-slate-600">Analysis methods and formulas</p>
            </Link>

            <Link 
              to="/history"
              className="group text-center p-6 rounded-lg hover:bg-slate-50 transition-colors"
            >
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                <span className="text-orange-600 font-bold">HI</span>
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">History</h3>
              <p className="text-sm text-slate-600">Historical data and records</p>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default QualityManual;
