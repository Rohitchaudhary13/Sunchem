import React from "react";

const MapSelector = () => {  
  const itemsArray = [
    {
      id: 1,
      text: "Unit 1",
      address:
        "SUN CHEM (INDIA), Plot No-77, phase-1, Genesis Industrial Township, Village-Kolgaon (east), Dist. Palghar, Maharashtra- 401404. India",
    },
    {
      id: 2,
      text: "Unit 2",
      address:
        "SUN CHEM (INDIA), Plot No-43, phase-1, Genesis Industrial Township, Village-Kolgaon (east), Dist. Palghar, Maharashtra- 401404. India",
    },
    {
      id: 3,
      text: "Unit 3",
      address:
        "SUN CHEM (INDIA), Plot No-52, phase-1, Genesis Industrial Township, Village-Kolgaon (east), Dist. Palghar, Maharashtra- 401404. India",
    },
    {
      id: 4,
      text: "Unit 4",
      address:
        "SUN CHEM (INDIA), Plot No-19, phase-1, Genesis Industrial Township, Village-Kolgaon (east), Dist. Palghar, Maharashtra- 401404. India",
    },
    {
      id: 5,
      text: "Unit 5",
      address:
        "SUN CHEM (INDIA), Plot No-20, phase-1, Genesis Industrial Township, Village-Kolgaon (east), Dist. Palghar, Maharashtra- 401404. India",
    },
    {
      id: 6,
      text: "Unit 6",
      address:
        "SUN CHEM (INDIA), Plot No-21, phase-1, Genesis Industrial Township, Village-Kolgaon (east), Dist. Palghar, Maharashtra- 401404. India",
    },
    {
      id: 7,
      text: "Unit 7",
      address:
        "SUN CHEM (INDIA), Plot No-17 C, phase-1, Genesis Industrial Township, Village-Kolgaon (east), Dist. Palghar, Maharashtra- 401404. India",
    },
    {
      id: 8,
      text: "Unit 8",
      address:
        "SUN CHEM (INDIA), Plot No-17 A, phase-1, Genesis Industrial Township, Village-Kolgaon (east), Dist. Palghar, Maharashtra- 401404. India",
    },
    {
      id: 9,
      text: "Unit 9",
      address:
        "SUN CHEM (INDIA), Plot No-17 B, phase-1, Genesis Industrial Township, Village-Kolgaon (east), Dist. Palghar, Maharashtra- 401404. India",
    },
    {
      id: 10,
      text: "Unit 10",
      address:
        "SUN CHEM (INDIA), Plot No-15, 16, phase-1, Genesis Industrial Township, Village-Kolgaon (east), Dist. Palghar, Maharashtra- 401404. India",
    },
  ];
  
  return (
    <div className="">
      <div className="py-16">
        <h2 className="text-3xl md:text-5xl text-center">
          Our <span className="italic">Factories</span>
        </h2>
        <div className="max-[700px]:p-0 max-[700px]:flex-col-reverse mt-4 bg-secondary border-none rounded-xl flex w-full mx-auto p-4 py-8">
          <div className="max-[700px]:w-full h-96 w-5/12 overflow-y-auto p-4">
            <ul>
              {itemsArray.map((item) => (
                <li
                  key={item.id}
                  className="border-none rounded-xl p-3 mb-6 bg-gray-300"
                >
                  <h3 className="text-xl font-bold">{item.text}</h3>
                  <p>{item.address}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="max-[700px]:w-full w-7/12 p-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3755.397196030904!2d72.77281899436353!3d19.738272215439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be71c41ca3c1f23%3A0x7b84b58e513f6ba3!2sSUN%20CHEM%20INDIA%2C%20KOLGAON%20EAST%2C%20PALGHAR!5e0!3m2!1sen!2sin!4v1703078556897!5m2!1sen!2sin"
              className="w-full h-96 border-none rounded-xl"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapSelector;
