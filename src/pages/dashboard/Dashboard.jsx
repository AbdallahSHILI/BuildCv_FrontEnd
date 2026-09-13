import React, { useState, useEffect } from "react";
import EmptyDashboard from "../../components/auth/dashboard/EmptyDashboard";
import ResumesListDashboard from "../../components/auth/dashboard/ResumesListDashboard";
import Toast from "../../components/toast/Toast";
import { useAuth } from "../../assets/context/AuthContext";

const Dashboard = () => {
  const { user } = useAuth();
  const [resumes, setResumes] = useState([]);
  const [loading, setLoading] = useState(true);
  // null = no toast, "signup" = welcome toast, "login" = welcome back toast
  const [toastIntent, setToastIntent] = useState(null);

  // Same fallback chain used in Navbar for the display name
  const displayName = user?.displayName || user?.name || null;
  const firstName = displayName ? displayName.split(" ")[0] : null;

  // AuthCallback sets this flag right after a successful Google signup or
  // login, then navigates here. Read it once on mount, then clear it so
  // refreshing the dashboard or visiting it again later doesn't
  // re-trigger the toast.
  useEffect(() => {
    const intent = sessionStorage.getItem("authToastIntent");
    if (intent === "signup" || intent === "login") {
      sessionStorage.removeItem("authToastIntent");
      setToastIntent(intent);
    }
  }, []);

  // Fetch user's resumes on component mount
  useEffect(() => {
    const fetchResumes = async () => {
      try {
        // Replace this with your actual API call
        // const response = await fetch('/api/user/resumes', {
        //   headers: {
        //     'Authorization': `Bearer ${yourAuthToken}`
        //   }
        // });
        // const data = await response.json();

        // Simulated data for testing
        // Uncomment the lines below to test the resume list view
        const mockResumes = [
          // {
          //   id: '1',
          //   title: 'Software Engineer Resume',
          //   updatedAt: new Date().toISOString(),
          // },
          // {
          //   id: '2',
          //   title: 'Marketing Manager CV',
          //   updatedAt: new Date(Date.now() - 86400000).toISOString(),
          // }
        ];

        setResumes(mockResumes);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching resumes:", error);
        setLoading(false);
      }
    };

    fetchResumes();
  }, []);

  const handleCreateNew = () => {
    console.log("Creating new resume");
    // Navigate to resume builder
    // navigate('/resume/create');
  };

  const handleImport = () => {
    console.log("Importing resume");
    // Handle file upload logic here
    // You can open a file picker or navigate to import page
  };

  const handleEdit = (id) => {
    console.log("Editing resume:", id);
    // Navigate to resume editor
    // navigate(`/resume/edit/${id}`);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this resume?")) {
      try {
        // Call your API to delete the resume
        // await fetch(`/api/resumes/${id}`, { method: 'DELETE' });

        // Update local state
        setResumes(resumes.filter((resume) => resume.id !== id));
        console.log("Deleted resume:", id);
      } catch (error) {
        console.error("Error deleting resume:", error);
      }
    }
  };

  const handleView = (id) => {
    console.log("Viewing resume:", id);
    // Open preview modal or navigate to preview page
    // navigate(`/resume/preview/${id}`);
  };

  const handleDownload = (id) => {
    console.log("Downloading resume:", id);
    // Trigger download logic here
    // This could open a PDF or export the resume
  };

  // Show loading state
  const content = loading ? (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-gray-600">Loading your resumes...</p>
      </div>
    </div>
  ) : resumes.length === 0 ? (
    <EmptyDashboard onCreateNew={handleCreateNew} onImport={handleImport} />
  ) : (
    <ResumesListDashboard
      resumes={resumes}
      onCreateNew={handleCreateNew}
      onEdit={handleEdit}
      onDelete={handleDelete}
      onView={handleView}
      onDownload={handleDownload}
    />
  );

  return (
    <>
      {toastIntent === "signup" && (
        <Toast
          title={
            firstName ? `Welcome, ${firstName} 🎉` : "Welcome to Build CV 🎉"
          }
          message="Let's get your resume looking great."
          onClose={() => setToastIntent(null)}
        />
      )}
      {toastIntent === "login" && (
        <Toast
          title={
            firstName ? `Welcome back, ${firstName} 👋` : "Welcome back 👋"
          }
          message="Good to see you again."
          onClose={() => setToastIntent(null)}
        />
      )}
      {content}
    </>
  );
};

export default Dashboard;
