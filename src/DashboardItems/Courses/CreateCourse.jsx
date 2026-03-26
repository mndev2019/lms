import React, { useState } from "react";
import { FaUpload } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CreateCourse = () => {
  const navigate = useNavigate();

  const [course, setCourse] = useState({
    title: "",
    description: "",
    price: "",
    discount: "",
    isFree: true,
    cover: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourse({ ...course, [name]: value });
  };

  const handleFile = (e) => {
    setCourse({ ...course, cover: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // store in localStorage (temporary)
    localStorage.setItem("course", JSON.stringify(course));

    navigate("/dashboard/view-course");
  };

  return (
    <div className="p-6 bg-gradient-to-br from-[#595353]/10 to-white min-h-screen">
      <div className="max-w-5xl mx-auto space-y-6">

        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-[#595353]">
            Create Course
          </h1>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow-xl space-y-6">

          {/* Title */}
          <div>
            <label className="block text-sm font-medium mb-1">Title *</label>
            <input
              type="text"
              name="title"
              placeholder="Enter course title"
              value={course.title}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-[#595353] outline-none"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium mb-1">Description *</label>
            <textarea
              name="description"
              rows="5"
              placeholder="Enter course description"
              value={course.description}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-[#595353] outline-none"
            />
          </div>

          {/* Cover Upload */}
          <div>
            <label className="block text-sm font-medium mb-2">Course Cover</label>

            <div className="border-2 border-dashed rounded-xl p-6 text-center hover:bg-gray-50 transition">
              <input
                type="file"
                onChange={handleFile}
                className="hidden"
                id="coverUpload"
              />
              <label htmlFor="coverUpload" className="cursor-pointer">
                <FaUpload className="mx-auto text-2xl text-[#595353] mb-2" />
                <p className="text-sm text-gray-500">
                  Upload thumbnail (16:9 recommended)
                </p>
              </label>
            </div>

            {course.cover && (
              <img
                src={URL.createObjectURL(course.cover)}
                alt="preview"
                className="mt-3 w-48 rounded-xl shadow"
              />
            )}
          </div>

          {/* Pricing */}
          <div className="bg-gray-50 p-4 rounded-xl space-y-4">
            <label className="font-medium text-[#595353]">Pricing</label>

            <div className="flex gap-6">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  checked={course.isFree}
                  onChange={() => setCourse({ ...course, isFree: true })}
                />
                Free
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  checked={!course.isFree}
                  onChange={() => setCourse({ ...course, isFree: false })}
                />
                Paid
              </label>
            </div>

            {!course.isFree && (
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="number"
                  name="price"
                  placeholder="Total price"
                  value={course.price}
                  onChange={handleChange}
                  className="border rounded-lg p-3"
                />
                <input
                  type="number"
                  name="discount"
                  placeholder="Discount price"
                  value={course.discount}
                  onChange={handleChange}
                  className="border rounded-lg p-3"
                />
              </div>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[#595353] text-white py-3 rounded-xl font-semibold hover:scale-[1.02] transition"
          >
            Create Course
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateCourse;
