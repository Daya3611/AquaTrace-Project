import React from "react";

const features = [
  {
    icon: "👁️",
    title: "Water-Footprint Calculation",
    description: "Computes the water footprint of the specified object based on available data.",
  },
  {
    icon: "📚",
    title: "Community Features",
    description:
      "Allows users to connect with others interested in sustainable living, share tips, and discuss water conservation strategies.",
  },
  {
    icon: "✏️",
    title: "Feedback and Reporting",
    description: "Enables users to report inaccuracies or suggest improvements in the data.",
  },
  {
    icon: "🛡️",
    title: "AI Model Integration",
    description: "Utilizes an AI model to interpret and match text input with water footprint data.",
  },
  {
    icon: "☁️",
    title: "Image Recognition",
    description: "Allows users to upload images of objects, identified using the Google Cloud Vision API.",
  },
  {
    icon: "📱",
    title: "Fully Responsive",
    description: "Ensures the website's layout adapts to various screen sizes and devices.",
  },
];

const Features: React.FC = () => {
  return (
    <section className="py-12 px-8">
      <h2 className="text-4xl font-bold text-blue-800 text-center mb-8 mt-9">
        Awesome Features
      </h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-blue-50 p-6 rounded-3xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2"
          >
            <div className="text-5xl text-blue-600 mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
