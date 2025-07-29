
import { Link } from "react-router-dom";
import { Calculator, Settings, FileText, Users } from "lucide-react";

const ProcessManagement = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 relative z-10">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-light text-slate-800 mb-4">Process Management</h2>
        <p className="text-xl text-slate-600">Comprehensive management system covering all aspects of our standard processes</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <Link to="/calculations" className="group text-center p-8 rounded-xl bg-white hover:bg-gradient-to-br hover:from-purple-50 hover:to-purple-100 transition-all duration-300 border-2 border-transparent hover:border-purple-200 shadow-sm">
          <Calculator className="w-12 h-12 text-purple-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
          <h3 className="font-semibold text-slate-800 mb-2">Calculations</h3>
          <p className="text-sm text-slate-600">Mathematical analysis methods</p>
        </Link>

        <Link to="/equipments" className="group text-center p-8 rounded-xl bg-white hover:bg-gradient-to-br hover:from-green-50 hover:to-green-100 transition-all duration-300 border-2 border-transparent hover:border-green-200 shadow-sm">
          <Settings className="w-12 h-12 text-green-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
          <h3 className="font-semibold text-slate-800 mb-2">Equipments</h3>
          <p className="text-sm text-slate-600">Testing tools and machinery</p>
        </Link>

        <Link to="/history" className="group text-center p-8 rounded-xl bg-white hover:bg-gradient-to-br hover:from-orange-50 hover:to-orange-100 transition-all duration-300 border-2 border-transparent hover:border-orange-200 shadow-sm">
          <FileText className="w-12 h-12 text-orange-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
          <h3 className="font-semibold text-slate-800 mb-2">History</h3>
          <p className="text-sm text-slate-600">Records and documentation</p>
        </Link>

        <Link to="/job-roles" className="group text-center p-8 rounded-xl bg-white hover:bg-gradient-to-br hover:from-blue-50 hover:to-blue-100 transition-all duration-300 border-2 border-transparent hover:border-blue-200 shadow-sm">
          <Users className="w-12 h-12 text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
          <h3 className="font-semibold text-slate-800 mb-2">Job Roles Assigned</h3>
          <p className="text-sm text-slate-600">Team structure and responsibilities</p>
        </Link>
      </div>
    </section>
  );
};

export default ProcessManagement;
