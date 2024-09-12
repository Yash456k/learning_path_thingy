import React, { useState } from "react";

const IconWrapper = ({ children }) => (
  <span className="inline-block w-4 h-4">{children}</span>
);

const PlusCircle = () => (
  <IconWrapper>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  </IconWrapper>
);

const BookOpen = () => (
  <IconWrapper>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
      />
    </svg>
  </IconWrapper>
);

const FileText = () => (
  <IconWrapper>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    </svg>
  </IconWrapper>
);

const Clock = () => (
  <IconWrapper>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  </IconWrapper>
);

const App = () => {
  const [learningPaths, setLearningPaths] = useState([]);
  const [newPath, setNewPath] = useState({ title: "", description: "" });
  const [newResource, setNewResource] = useState({
    title: "",
    type: "pdf",
    url: "",
  });
  const [activePathIndex, setActivePathIndex] = useState(null);

  const addLearningPath = () => {
    if (newPath.title && newPath.description) {
      setLearningPaths([...learningPaths, { ...newPath, resources: [] }]);
      setNewPath({ title: "", description: "" });
    }
  };

  const addResource = (pathIndex) => {
    if (newResource.title && newResource.url) {
      const updatedPaths = [...learningPaths];
      updatedPaths[pathIndex].resources.push(newResource);
      setLearningPaths(updatedPaths);
      setNewResource({ title: "", type: "pdf", url: "" });
    }
  };

  return (
    <div className="container mx-auto p-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-indigo-800">
        Teacher's Learning Path Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-500">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-500">
              Total Learning Paths
            </span>
            <BookOpen />
          </div>
          <div className="text-2xl font-bold text-blue-600">
            {learningPaths.length}
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-green-500">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-500">
              Total Resources
            </span>
            <FileText />
          </div>
          <div className="text-2xl font-bold text-green-600">
            {learningPaths.reduce(
              (acc, path) => acc + path.resources.length,
              0
            )}
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-purple-500">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-500">
              Avg. Resources per Path
            </span>
            <Clock />
          </div>
          <div className="text-2xl font-bold text-purple-600">
            {learningPaths.length > 0
              ? (
                  learningPaths.reduce(
                    (acc, path) => acc + path.resources.length,
                    0
                  ) / learningPaths.length
                ).toFixed(1)
              : "0"}
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md mb-8 md:w-1/3">
          <h2 className="text-xl font-semibold mb-4 text-indigo-700">
            Add New Learning Path
          </h2>
          <div className="flex flex-col space-y-4">
            <div>
              <label
                htmlFor="pathTitle"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Path Title
              </label>
              <input
                id="pathTitle"
                type="text"
                className="w-full p-2 border rounded focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                value={newPath.title}
                onChange={(e) =>
                  setNewPath({ ...newPath, title: e.target.value })
                }
                placeholder="Enter path title"
              />
            </div>
            <div>
              <label
                htmlFor="pathDescription"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Path Description
              </label>
              <textarea
                id="pathDescription"
                className="w-full p-2 border rounded focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                value={newPath.description}
                onChange={(e) =>
                  setNewPath({ ...newPath, description: e.target.value })
                }
                placeholder="Enter path description"
                rows="3"
              />
            </div>
            <button
              onClick={addLearningPath}
              className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors flex items-center justify-center"
            >
              <PlusCircle />
              <span className="ml-2">Add Learning Path</span>
            </button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-8 md:w-2/3">
          <h2 className="text-xl font-semibold mb-4 text-indigo-700">
            Learning Paths
          </h2>
          {learningPaths.map((path, pathIndex) => (
            <div key={pathIndex} className="mb-4 border-b pb-4 last:border-b-0">
              <h3
                className="text-lg font-semibold mb-2 text-indigo-600 cursor-pointer hover:text-indigo-800"
                onClick={() =>
                  setActivePathIndex(
                    activePathIndex === pathIndex ? null : pathIndex
                  )
                }
              >
                {path.title}
              </h3>
              {activePathIndex === pathIndex && (
                <div className="ml-4">
                  <p className="text-sm text-gray-600 mb-2">
                    {path.description}
                  </p>
                  <h4 className="font-semibold mb-2 text-indigo-500">
                    Resources:
                  </h4>
                  <ul className="list-disc pl-5 mb-4">
                    {path.resources.map((resource, resourceIndex) => (
                      <li key={resourceIndex} className="mb-1">
                        <a
                          href={resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          {resource.title}
                        </a>
                        <span className="text-gray-500 ml-2">
                          ({resource.type})
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col space-y-4">
                    <div>
                      <label
                        htmlFor={`resourceTitle${pathIndex}`}
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Resource Title
                      </label>
                      <input
                        id={`resourceTitle${pathIndex}`}
                        type="text"
                        className="w-full p-2 border rounded focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        value={newResource.title}
                        onChange={(e) =>
                          setNewResource({
                            ...newResource,
                            title: e.target.value,
                          })
                        }
                        placeholder="Enter resource title"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor={`resourceType${pathIndex}`}
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Resource Type
                      </label>
                      <select
                        id={`resourceType${pathIndex}`}
                        value={newResource.type}
                        onChange={(e) =>
                          setNewResource({
                            ...newResource,
                            type: e.target.value,
                          })
                        }
                        className="w-full p-2 border rounded focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      >
                        <option value="pdf">PDF</option>
                        <option value="video">Video</option>
                        <option value="link">Link</option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor={`resourceUrl${pathIndex}`}
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Resource URL
                      </label>
                      <input
                        id={`resourceUrl${pathIndex}`}
                        type="text"
                        className="w-full p-2 border rounded focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        value={newResource.url}
                        onChange={(e) =>
                          setNewResource({
                            ...newResource,
                            url: e.target.value,
                          })
                        }
                        placeholder="Enter resource URL"
                      />
                    </div>
                    <button
                      onClick={() => addResource(pathIndex)}
                      className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
                    >
                      Add Resource
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
