import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      className="bg-cover bg-no-repeat w-full py-4 lg:py-8 bg-fixed flex flex-col items-center justify-center"
      style={{ backgroundImage: "url('/contact2.jpg')" }}
    >
      <div className=" w-full max-w-[90%]  mx-auto flex flex-col lg:flex-row mt-10 items-center lg:items-center justify-center lg:space-x-10">
        <div className="relative bg-cover bg-center rounded-md h-80 lg:h-[54vh] lg:w-1/2 w-full" style={{backgroundImage: `url('/contact.jpg')`}}>
        <div className="absolute bg-black/20 w-full h-[100%] rounded-md z-10"></div>
          <div className="relative z-20 flex flex-col items-start p-4 lg:p-8 justify-center">
            <h1 className="text-3xl md:text-5xl font-black text-white">
              Contact Us Today
            </h1>
            <p className="text-xl text-white mt-2">
              We’re here to help you with any inquiries.
            </p>
            <p className="text-lg text-white mt-1">
              Location: 1234 Tech Avenue, Nairobi, Kenya
            </p>
          </div>

        </div>

        {/* Form Section */}
        <motion.div
          className="w-full lg:w-1/2 bg-white rounded-lg shadow-lg p-8 md:p-10 items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <form className="space-y-4">
            <div className="flex flex-col md:flex-row md:space-x-4">
              <div className="w-full md:w-1/2">
                <label htmlFor="Fname" className="block text-sm font-medium">
                  First Name
                </label>
                <input
                  type="text"
                  id="Fname"
                  placeholder="John"
                  className="mt-1 p-3 border border-gray-300 rounded-md w-full focus:none focus:ring-green"
                />
              </div>
              <div className="w-full md:w-1/2 mt-4 md:mt-0">
                <label htmlFor="Lname" className="block text-sm font-medium">
                  Last Name
                </label>
                <input
                  type="text"
                  id="Lname"
                  placeholder="Doe"
                  className="mt-1 p-3 border border-gray-300 rounded-md w-full focus:none focus:ring-green-500"
                />
              </div>
            </div>

            <div>
              <label htmlFor="Email" className="block text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="Email"
                placeholder="johndoe@example.com"
                className="mt-1 p-3 border border-gray-300 rounded-md w-full focus:none focus:ring-green-500"
              />
            </div>

            <div>
              <label htmlFor="Message" className="block text-sm font-medium">
                Message
              </label>
              <textarea
                id="Message"
                placeholder="Type your message here"
                rows="5"
                className="mt-1 p-3 border border-gray-300 rounded-md w-full focus:none focus:ring-green-500"
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full py-3 bg-black text-white font-semibold rounded-md mt-6 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
