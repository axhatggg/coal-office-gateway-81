
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full p-6 relative z-10">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center space-x-3">
          <img 
            src="/lovable-uploads/146c3695-f922-461e-a318-3652384603b0.png" 
            alt="Central Coalfields Limited Logo" 
            className="h-16 w-auto"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
