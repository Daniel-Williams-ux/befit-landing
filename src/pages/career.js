import Image from 'next/image';
import { useState } from 'react';

export default function CareerPage() {

  // State to manage the currently opened dropdown
  const [openDropdown, setOpenDropdown] = useState(null);

  // Function to toggle dropdown visibility
  function toggleDropdown(id) {
    // Toggle the dropdown: if the same id is clicked, close it
    setOpenDropdown((prev) => (prev === id ? null : id));

  }
  return (
    <main>
      {/* Hero Section */}
      <section className="text-center px-4 md:px-16 lg:px-32 mt-40 font-medium font-dmSans space-y-10">
        {/* Section Title */}
        <div className="space-y-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-black leading-tight">
            We give the best work<br />environment
          </h1>
          <a
            href="#open-roles"
            className="text-headerColor text-base hover:underline font-semibold p-28"
          >
            SEE ALL OPEN ROLES
          </a>
        </div>

        {/* Hero Image */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Large Image */}
          <div className="col-span-3 flex justify-center">
            <Image
              src="/images/career-hero.jpg"
              alt="Work environment"
              width={1200}
              height={600}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* Purple Background Section */}
      <section className="bg-careerColor text-white py-16 px-4 md:px-16 lg:px-32 relative mt-16 overflow-hidden">
        {/* Decorative Dots */}
        <div className="absolute inset-0 pointer-events-none">
          <svg
            className="absolute w-[500px] h-[500px] -left-40 top-20 text-white/20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 800 800"
          >
            <circle cx="400" cy="400" r="300" stroke="currentColor" strokeWidth="1" />
            <circle cx="400" cy="400" r="200" stroke="currentColor" strokeWidth="1" />
            <circle cx="400" cy="400" r="100" stroke="currentColor" strokeWidth="1" />
          </svg>
          <svg
            className="absolute w-[400px] h-[400px] -right-40 bottom-20 text-white/20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 800 800"
          >
            <circle cx="400" cy="400" r="300" stroke="currentColor" strokeWidth="1" />
            <circle cx="400" cy="400" r="200" stroke="currentColor" strokeWidth="1" />
            <circle cx="400" cy="400" r="100" stroke="currentColor" strokeWidth="1" />
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Side: Small Text */}
          <div className="text-4xl sm:text-5xl lg:pl-48 lg:text-7xl font-medium font-dmSans leading-10 text-left">
            <p>More than</p>
            <p>body-building,</p>
            <p>health attention.</p>
          </div>

          {/* Right Side: Large Text */}
          <div className="lg:pl-24 text-left">
            <p className="text-xs sm:text-lg font-medium font-dmSans leading-5 text-white/90">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip <br />
              ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 px-4 md:px-16 lg:px-32">
        <div className="flex flex-col items-center space-y-12">
          {/* Title */}
          <h2 className="text-3xl sm:text-4xl font-bold text-black text-center">
            Our Core Values
          </h2>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
            {/* Left - List */}
            <div className="space-y-2 lg:mt-10 lg:pl-96">
              <ul className="space-y-2">
                <li className="text-lg font-medium text-blue-600 hover:underline cursor-pointer">
                  Customers First
                </li>
                <li className="text-lg font-medium text-gray-700">Better Together</li>
                <li className="text-lg font-medium text-gray-700">Keep it real</li>
                <li className="text-lg font-medium text-gray-700">Keep it simple</li>
                <li className="text-lg font-medium text-gray-700">Set the bar high</li>
                <li className="text-lg font-medium text-gray-700">Never stop learning</li>
              </ul>
            </div>

            {/* Right - Empty Space Placeholder */}
            <div className="lg:pr-16"></div>
          </div>

          {/* Bottom Text */}
          <div className="text-left lg:mt-14 lg:pl-[44rem]">
            <p className="text-gray-600">
              Our customers are our greatest asset. <br />
              We obsess over each and every one.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 md:px-16 lg:px-32">
  <div className="space-y-8">
    {/* Section Title */}
    <h3 className="text-2xl sm:text-3xl font-medium font-dmSans text-gridText text-left">
      What&#39;s behind a great product? <br /> An even greater team
    </h3>
    <p className="text-left text-sm font-medium font-dmSans text-gridText">
      Our currency is collaboration. Our work, a blend of ideas and efforts. <br />
      The result, a stronger bond and a world-class product. <br />
      We compound these by investing in the best people.
    </p>

    {/* Four-Column Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 font-dmSans">
      {/* Grid 1: Engineering */}
      <div className="space-y-4 bg-careerColor px-9 rounded">
        {/* Title */}
        <h4 className="text-xl font-medium text-white pt-6">Engineering</h4>
        {/* Background Box */}
        <div className="bg-headerColor p-4 rounded-lg">
          <pre className="text-white text-sm font-mono whitespace-pre-wrap">
            print(
            <br />
            &nbsp;&nbsp;"We call them our product <br />
            &nbsp;&nbsp;&nbsp;&nbsp;mechanics, superheroes in <br />
            &nbsp;&nbsp;&nbsp;&nbsp;their own right!" <br />
            )
          </pre>
        </div>
        {/* Link */}
        <a
          href="#"
          className="text-white text-xs pt-32 pb-8 hover:underline font-medium flex items-center space-x-2"
        >
          <span>SEE OPEN ROLES</span>
          <span className="mb-1">→</span>
        </a>
      </div>

      {/* Grid 2: Design */}
      <div className="bg-gray-100 px-9 rounded space-y-4">
        {/* Title */}
        <h4 className="text-xl font-medium text-gridText pt-6">Design</h4>
        <p className="font-medium text-sm text-gridText">
          Ever fallen in love with our product? Stash <br />
          the design team! Their thirst for <br />
          simplicity + usability and attention to <br />
          detail is unmatched.
        </p>
        
        {/* Link */}
        <a
          href="#"
          className="text-gridText text-xs pt-44 pb-8 hover:underline font-medium flex items-center space-x-2"
        >
          <span>SEE OPEN ROLES</span>
          <span  className="mb-1">→</span>
        </a>
      </div>

      {/* Grid 3: Customer Experience */}
      <div className="bg-gray-100 px-9 rounded space-y-4">
        {/* Title */}
        <h4 className="text-xl font-medium text-gridText pt-6">Customer Experience</h4>
        <p className="font-medium text-sm text-gridText">
          Our Customer Satisfaction Score (CSAT) <br />
          is off the charts. Customer satisfaction <br />
          and obsession are some of the values our <br />
          CX team holds to heart
        </p>
        <a
          href="#"
          className="text-gridText text-xs pt-44 pb-8 hover:underline font-medium flex items-center space-x-2"
        >
          <span>SEE OPEN ROLES</span>
          <span  className="mb-1">→</span>
        </a>
      </div>

      {/* Grid 4: Nutrition */}
      <div className="bg-gray-100 px-9 rounded space-y-4">
        {/* Title */}
        <h4 className="text-xl font-medium text-gridText pt-6">Nutritioni</h4>
        {/* Background Box */}
        <p className="font-medium text-sm text-gridText">
          Our Customer Satisfaction Score (CSAT) <br />
          is off the charts. Customer satisfaction <br />
          and obsession are some of the values our <br />
          CX team holds to heart
        </p>
        {/* Link */}
        <a
          href="#"
          className="text-gridText text-xs pt-44 pb-8 hover:underline font-medium flex items-center space-x-2"
        >
          <span>SEE OPEN ROLES</span>
          <span  className="mb-1">→</span>
        </a>
      </div>
    </div>
  </div>
</section>

 {/* How We Hire Section */}
 <section className="bg-primaryColor text-black py-16 px-4">
        <div className="bg-careerColor text-center space-y-8">
          {/* Title */}
          <h3 className="text-white text-2xl sm:text-4xl font-dmSans font-medium pt-16">How We Hire</h3>
          {/* Subtitle */}
          <p className="text-white text-base font-dmSans font-normal">
            You&#39;ve heard recruiters spend 6 seconds on a resume? Well, we don&#39;t. <br />
            We give every application the same time and consideration.
          </p>

          {/* Dropdown */}
          <div className="bg-white max-w-3xl mx-auto font-dmSans font-medium text-hireColor">
            {/* Item 1 */}
            <div className="border-b border-gray-200">
              <button
                className="w-full flex justify-between items-center px-6 py-4 text-left"
                onClick={() => toggleDropdown(1)}
              >
                <span className="text-xl font-medium">01. Apply</span>
                <svg
                  className={`w-5 h-5 transform ${
                    openDropdown === 1 ? "rotate-180" : ""
                  } transition-transform`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openDropdown === 1 && (
                <div className="px-6 py-4 text-sm">
                  Placeholder content for "Apply" step. Describe the application process here.
                </div>
              )}
            </div>
            {/* Item 2 */}
            <div className="border-b border-gray-200">
              <button
                className="w-full flex justify-between items-center px-6 py-4 text-left"
                onClick={() => toggleDropdown(2)}
              >
                <span className="text-xl font-medium">02. Interview</span>
                <svg
                  className={`w-5 h-5 transform ${
                    openDropdown === 2 ? "rotate-180" : ""
                  } transition-transform`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openDropdown === 2 && (
                <div className="px-6 py-4 text-sm">
                  Placeholder content for "Interview" step. Describe the interview process here.
                </div>
              )}
            </div>
            {/* Item 3 */}
            <div>
              <button
                className="w-full flex justify-between items-center px-6 py-4 text-left"
                onClick={() => toggleDropdown(3)}
              >
                <span className="text-xl font-medium">03. Decision</span>
                <svg
                  className={`w-5 h-5 transform ${
                    openDropdown === 3 ? "rotate-180" : ""
                  } transition-transform`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openDropdown === 3 && (
                <div className="px-6 py-4 text-sm">
                  Placeholder content for "Decision" step. Describe the decision process here.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}