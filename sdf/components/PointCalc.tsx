import AppointmentForm from "./AppointmentForm";

const PointCalc = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-md flex">
        <div className="w-1/3 p-4">
          <h2 className="text-2xl font-bold">Other Useful Links</h2>
          <ul className="space-y-2 mt-4">
            {[
              "Migration",
              "Temporary Skill Shortage (TSS) Visa - Subclass 482",
              "Training Visa - Subclass 407",
              "Skilled Independent Visa - Subclass 189",
              "Skilled Nominated Visa - Subclass 190",
              "Skilled Work Regional Visa - Subclass 491",
              "Sponsored Jobs",
            ].map((item, index) => (
              <li key={index} className="flex items-center">
                <span className="text-red-500 mr-2">✔</span> <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-2/3 p-4">
          <AppointmentForm />
        </div>
      </div>
    </div>
  );
};

export default PointCalc;
