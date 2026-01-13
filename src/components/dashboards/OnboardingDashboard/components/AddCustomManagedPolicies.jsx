import img1 from "../../../../assets/addcust1.png";
import img2 from "../../../../assets/addcust2.png";
import img3 from "../../../../assets/addcust3.png";

const AddCustomManagedPolicies = () => {
  return (
    <div className="bg-white border rounded-lg p-6 space-y-6">
      <div className="flex gap-3 flex-wrap">
        <div className="flex ">
          <span className="w-7 h-7 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 text-sm font-semibold mr-2">
            1
          </span>
          <p>
            Go to the{" "}
            <a className="text-blue-600 font-medium hover:underline">
              CK-Tuner-Role
            </a>
            .
          </p>
        </div>
        <div className="border rounded-md overflow-hidden bg-gray-50">
          <img
            src={img1}
            alt="Add CustomManaged Policies"
            className="w-full object-contain"
          />
        </div>
      </div>

      <div className="flex gap-3 flex-wrap">
        <div className="flex">
          <span className="w-7 h-7 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 text-sm font-semibold mr-2">
            2
          </span>
          <p>
            In Permission policies, click on Add permissions {">"} Attach Policy
          </p>
        </div>
        <div className="border rounded-md overflow-hidden bg-gray-50">
          <img
            src={img2}
            alt="Add CustomManaged Policies"
            className="w-full object-contain"
          />
        </div>
      </div>

      <div className="flex gap-3 flex-wrap">
        <div className="flex">
          <span className="w-7 h-7 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 text-sm font-semibold mr-2">
            3
          </span>
          <p>
            Filter by Type {">"} Customer managed then search for
            cktuner-CostAuditPolicy, cktuner-SecAuditPolicy,
            cktuner-TunerReadEssentials and select them.
          </p>
        </div>
        <div className="border rounded-md overflow-hidden bg-gray-50">
          <img
            src={img3}
            alt="Add CustomManaged Policies"
            className="w-full object-contain"
          />
        </div>
      </div>

      <div className="flex gap-3">
        <span className="w-7 h-7 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 text-sm font-semibold">
          4
        </span>
        <p>Now, click on Add permissions</p>
      </div>
    </div>
  );
};

export default AddCustomManagedPolicies;
