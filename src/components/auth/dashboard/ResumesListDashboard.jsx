import React from "react";
import { Plus, FileText, Download, Edit, Trash2, Eye } from "lucide-react";

const ResumesListDashboard = ({
  resumes,
  onCreateNew,
  onEdit,
  onDelete,
  onView,
  onDownload,
}) => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              My Resumes
            </h1>
            <p className="text-gray-600">Manage your professional resumes</p>
          </div>
          <button
            onClick={onCreateNew}
            className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            <Plus className="w-5 h-5" />
            Create New Resume
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resumes.map((resume) => (
            <div
              key={resume.id}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="h-48 bg-gradient-to-br from-blue-50 to-gray-50 flex items-center justify-center border-b border-gray-200">
                <FileText className="w-16 h-16 text-gray-400" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {resume.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  Last updated:{" "}
                  {new Date(resume.updatedAt).toLocaleDateString()}
                </p>

                <div className="flex gap-2">
                  <button
                    onClick={() => onEdit(resume.id)}
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm"
                  >
                    <Edit className="w-4 h-4" />
                    Edit
                  </button>
                  <button
                    onClick={() => onView(resume.id)}
                    className="px-3 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors"
                    title="Preview"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => onDownload(resume.id)}
                    className="px-3 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors"
                    title="Download"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => onDelete(resume.id)}
                    className="px-3 py-2 bg-red-50 text-red-600 rounded hover:bg-red-100 transition-colors"
                    title="Delete"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResumesListDashboard;
