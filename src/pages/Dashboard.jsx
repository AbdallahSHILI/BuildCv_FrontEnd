import React from "react";
import { useAuth } from "../assets/context/AuthContext";
import { Upload, Plus } from "lucide-react";

const ResumeBuilderStart = () => {
  const handleNewBlank = () => {
    console.log("Creating new blank resume");
    // Add your navigation logic here
  };

  const handleImportResume = () => {
    console.log("Importing resume");
    // Add your file upload logic here
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Start building your resume
          </h1>
          <p className="text-xl text-gray-600">
            Your first resume – 100% free, all design features, unlimited
            downloads – yes really.
          </p>
        </div>

        {/* Action Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
          {/* New Blank Card */}
          <button
            onClick={handleNewBlank}
            className="group bg-white border-2 border-dashed border-gray-300 rounded-lg p-12 hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 flex flex-col items-center justify-center min-h-[280px]"
          >
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-gray-200 transition-colors">
              <Plus className="w-8 h-8 text-gray-400 group-hover:text-gray-600" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-700 group-hover:text-gray-900">
              New blank
            </h3>
          </button>

          {/* Import Resume Card */}
          <button
            onClick={handleImportResume}
            className="group bg-white border-2 border-dashed border-gray-300 rounded-lg p-12 hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 flex flex-col items-center justify-center min-h-[280px]"
          >
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-gray-200 transition-colors">
              <Upload className="w-8 h-8 text-gray-400 group-hover:text-gray-600" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-700 group-hover:text-gray-900">
              Import resume
            </h3>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilderStart;
