import { useState } from "react";
import ContentCopyTwoToneIcon from "@mui/icons-material/ContentCopyTwoTone";
import img from "../../../../assets/createiam.png";

const CreateIamRoleStep = ({
  policy = `{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "AWS": "arn:aws:iam::951485052809:role/ck-tuner-nonprod-transitive-role"
      },
      "Action": "sts:AssumeRole",
      "Condition": {
        "StringEquals": {
          "sts:ExternalId": "MU1HX0RFRkFVTFQwMzM5NTZlYS1kMDE3LTRjYmQtYjY3ZS1jMGI4NWJjY2U4Yzk="
        }
      }
    },
    {
      "Effect": "Allow",
      "Principal": {
        "Service": "s3.amazonaws.com"
      },
      "Action": "sts:AssumeRole"
    }
  ]
}`,
  roleName = "CK-Tuner-Role-dev2",
}) => {
  const [roleArn, setRoleArn] = useState("");

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  const isValidArn = roleArn.startsWith("arn:aws:iam::");

  return (
    <div className="bg-white border rounded-lg p-6 space-y-6">
      <div className="flex gap-3">
        <span className="step-badge">1</span>
        <p>
          Log into AWS account &{" "}
          <a href="#" className="text-blue-600 font-medium hover:underline">
            Create an IAM Role
          </a>
          .
        </p>
      </div>

      <div className="flex gap-3">
        <span className="step-badge">2</span>
        <p>
          In the <i>Trusted entity type</i> section, select{" "}
          <b>Custom trust policy</b>. Replace the prefilled policy with the
          policy provided below –
        </p>
      </div>

      <div className="relative bg-gray-50 border rounded-md p-1 text-sm font-mono group">
        <button
          onClick={() => copyToClipboard(policy)}
          className="absolute top-3 right-3 p-1 rounded cursor-pointer group-hover:text-blue-800 "
          title="Copy policy"
        >
          <ContentCopyTwoToneIcon className="whitespace-pre-wrap text-blue-400 max-h-64 overflow-y-auto group-hover:text-blue-800" />
        </button>

        <pre className="whitespace-pre-wrap text-blue-400 max-h-64 overflow-y-auto group-hover:bg-blue-50 hover:text-blue-800">
          {policy}
        </pre>
      </div>

      <div className="flex gap-3">
        <span className="step-badge">3</span>
        <p>
          Click on <b>Next</b> to go to the <i>Add permissions</i> page. We
          would not be adding any permissions for now. Click on <b>Next</b>.
        </p>
      </div>

      <div className="flex gap-3">
        <span className="step-badge">4</span>
        <p>
          In the <i>Role name</i> field, enter the below-mentioned role name and
          click on <b>Create Role</b> –
        </p>
      </div>

      <div className="relative max-w-md group">
        <input
          value={roleName}
          readOnly
          className="w-full border rounded-md px-3 py-2 pr-10 text-blue-500 group-hover:text-blue-800 bg-gray-50"
        />

        <button
          onClick={() => copyToClipboard(roleName)}
          className="absolute right-2 p-1.5 rounded
               group-hover:text-blue-800 "
          title="Copy role name"
        >
          <ContentCopyTwoToneIcon className="w-5 h-5 whitespace-pre-wrap text-blue-400 overflow-y-auto group-hover:text-blue-800 cursor-pointer" />
        </button>
      </div>

      <div className="flex gap-3">
        <span className="step-badge">5</span>
        <p>
          Go to the newly created IAM Role and copy the <b>Role ARN</b> –
        </p>
      </div>

      <div className="border rounded-md overflow-hidden bg-gray-50">
        <img
          src={img}
          alt="IAM Role ARN Screenshot"
          className="w-full object-contain"
        />
      </div>

      <div className="flex gap-3">
        <span className="step-badge">6</span>
        <p>
          Paste the copied <b>Role ARN</b> below –
        </p>
      </div>

      <div className="flex items-center justify-between">
        <div className="max-w-lg flex items-center justify-around">
          <label className="block text-sm font-medium mb-1">
            Enter the IAM Role ARN <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={roleArn}
            onChange={(e) => setRoleArn(e.target.value)}
            placeholder="arn:aws:iam::123456789012:role/CK-Tuner-Role"
            className={`w-full border rounded-md px-3 py-2 ${
              isValidArn ? "focus:ring-indigo-500" : "focus:ring-red-500"
            }`}
          />
        </div>
        <div className="max-w-lg flex items-center justify-around">
          <label className="block text-sm font-medium mb-1">
            Account ID <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            onChange={(e) => setRoleArn(e.target.value)}
            placeholder="Enter Account ID"
            className={`w-full border rounded-md px-3 py-2 ${
              isValidArn ? "focus:ring-indigo-500" : "focus:ring-red-500"
            }`}
          />
        </div>
        <div className="max-w-lg flex items-center justify-around">
          <label className="block text-sm font-medium mb-1">
            Account Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            onChange={(e) => setRoleArn(e.target.value)}
            placeholder="Enter Account Name"
            className={`w-full border rounded-md px-3 py-2 ${
              isValidArn ? "focus:ring-indigo-500" : "focus:ring-red-500"
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default CreateIamRoleStep;
