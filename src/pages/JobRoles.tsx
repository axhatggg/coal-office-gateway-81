
import { Link } from "react-router-dom";
import { ArrowLeft, Users, UserCheck, Crown, Shield } from "lucide-react";

const JobRoles = () => {
  const roles = [
    {
      title: "Quality Control Manager",
      icon: Crown,
      responsibilities: [
        "Oversight of all quality control processes",
        "Team management and coordination",
        "Policy development and implementation",
        "Client relationship management"
      ],
      requirements: "15+ years experience, Engineering degree"
    },
    {
      title: "Laboratory Technician",
      icon: UserCheck,
      responsibilities: [
        "Sample collection and preparation",
        "Conducting standardized tests",
        "Equipment maintenance and calibration",
        "Data recording and documentation"
      ],
      requirements: "5+ years experience, Technical certification"
    },
    {
      title: "Quality Analyst",
      icon: Users,
      responsibilities: [
        "Data analysis and interpretation",
        "Report generation and review",
        "Trend analysis and forecasting",
        "Process optimization recommendations"
      ],
      requirements: "3+ years experience, Statistics background"
    },
    {
      title: "Safety Officer",
      icon: Shield,
      responsibilities: [
        "Safety protocol implementation",
        "Risk assessment and mitigation",
        "Training program coordination",
        "Incident investigation and reporting"
      ],
      requirements: "5+ years experience, Safety certification"
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
            to="/quality-manual" 
            className="flex items-center space-x-2 text-slate-600 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Quality Manual</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-full flex items-center justify-center mx-auto mb-6">
            <Users className="w-10 h-10 text-blue-600" />
          </div>
          <h1 className="text-4xl font-light text-slate-800 mb-4">Job Roles & Responsibilities</h1>
          <p className="text-xl text-slate-600">Organizational structure and personnel assignments</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {roles.map((role, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
                  <role.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold text-slate-800">{role.title}</h3>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-slate-800 mb-3">Key Responsibilities:</h4>
                <ul className="space-y-2">
                  {role.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start space-x-2 text-slate-600">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="pt-4 border-t border-slate-200">
                <h4 className="font-semibold text-slate-800 mb-2">Requirements:</h4>
                <p className="text-slate-600">{role.requirements}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-800 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-semibold mb-6">Organizational Hierarchy</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Crown className="w-8 h-8" />
              </div>
              <h4 className="font-semibold">Management</h4>
              <p className="text-blue-100 text-sm">Strategic oversight</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <UserCheck className="w-8 h-8" />
              </div>
              <h4 className="font-semibold">Technical</h4>
              <p className="text-blue-100 text-sm">Testing & analysis</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-8 h-8" />
              </div>
              <h4 className="font-semibold">Analytical</h4>
              <p className="text-blue-100 text-sm">Data processing</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="w-8 h-8" />
              </div>
              <h4 className="font-semibold">Safety</h4>
              <p className="text-blue-100 text-sm">Risk management</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default JobRoles;
