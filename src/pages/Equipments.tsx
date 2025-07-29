
import { Link } from "react-router-dom";
import { ArrowLeft, Settings, Plus, Minus } from "lucide-react";
import { useState } from "react";

const Equipments = () => {
  const [equipment, setEquipment] = useState([
    { name: "Muffle (ash) Furnace", quantity: 1 },
    { name: "Moisture (hot air) Oven", quantity: 1 },
    { name: "V.M Furnace", quantity: 1 },
    { name: "Relative Humidity (R.H) Chamber", quantity: 1 },
    { name: "GCV", quantity: 1 }
  ]);
  const [newEquipmentName, setNewEquipmentName] = useState("");

  const updateQuantity = (index: number, change: number) => {
    setEquipment(prev => prev.map((item, i) => 
      i === index ? { ...item, quantity: Math.max(0, item.quantity + change) } : item
    ));
  };

  const addNewEquipment = () => {
    if (newEquipmentName.trim()) {
      setEquipment(prev => [...prev, { name: newEquipmentName.trim(), quantity: 1 }]);
      setNewEquipmentName("");
    }
  };

  const removeEquipment = (index: number) => {
    setEquipment(prev => prev.filter((_, i) => i !== index));
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
              Coal Company Limited
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
          <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-emerald-200 rounded-full flex items-center justify-center mx-auto mb-6">
            <Settings className="w-10 h-10 text-green-600" />
          </div>
          <h1 className="text-4xl font-light text-slate-800 mb-4">Available Equipment</h1>
          <p className="text-xl text-slate-600">Manage and track laboratory equipment inventory</p>
        </div>

        {/* Equipment Management Section */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 mb-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Current Equipment List */}
            <div>
              <h4 className="font-semibold text-slate-800 mb-4">Current Equipment</h4>
              <div className="space-y-3">
                {equipment.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <span className="text-slate-700">{item.name}</span>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => updateQuantity(index, -1)}
                        className="w-6 h-6 bg-red-100 hover:bg-red-200 text-red-600 rounded flex items-center justify-center transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-8 text-center font-semibold">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(index, 1)}
                        className="w-6 h-6 bg-green-100 hover:bg-green-200 text-green-600 rounded flex items-center justify-center transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeEquipment(index)}
                        className="ml-2 text-red-500 hover:text-red-700 text-sm"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Add New Equipment */}
            <div>
              <h4 className="font-semibold text-slate-800 mb-4">Add New Equipment</h4>
              <div className="space-y-4">
                <input
                  type="text"
                  value={newEquipmentName}
                  onChange={(e) => setNewEquipmentName(e.target.value)}
                  placeholder="Enter equipment name"
                  className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <button
                  onClick={addNewEquipment}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Equipment</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Equipments;
