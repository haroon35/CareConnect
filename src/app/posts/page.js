"use client";

export default function OrphanagePosts() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = {
      title: formData.get("title"),
      description: formData.get("description"),
      category: formData.get("category"),
      image: formData.get("image"), // File object
    };

    console.log("Submitted data:", data);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Post a Help Request
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Image Upload */}
          <div className="flex justify-center">
            <label
              htmlFor="image"
              className="relative flex flex-col items-center justify-center w-40 h-40 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 hover:border-gray-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
              <span className="mt-2 text-sm font-medium text-gray-600">
                Upload Image
              </span>
              <input
                type="file"
                name="image"
                id="image"
                className="absolute inset-0 opacity-0"
              />
            </label>
          </div>

          {/* Title */}
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Enter the title of your request"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-900 focus:ring-red-500 focus:border-red-500 sm:text-sm"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              name="description"
              id="description"
              rows="4"
              placeholder="Describe what kind of help you need"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-900 focus:ring-red-500 focus:border-red-500 sm:text-sm"
              required
            ></textarea>
          </div>

          {/* Category */}
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700">
              Category
            </label>
            <select
              name="category"
              id="category"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-900 focus:ring-red-500 focus:border-red-500 sm:text-sm"
            >
              <option value="Food">Food</option>
              <option value="Clothing">Clothing</option>
              <option value="Education">Education</option>
              <option value="Health">Health</option>
              <option value="Others">Others</option>
            </select>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-3 px-4 bg-red-500 text-white font-semibold rounded-md shadow-md hover:bg-red-600 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
            >
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}