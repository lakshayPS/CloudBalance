import ContentCopyTwoToneIcon from "@mui/icons-material/ContentCopyTwoTone";
import img from "../../../../assets/createiam.png";
import { toast } from "react-toastify";

const CreateIamRoleStep = ({
  roleArn,
  setRoleArn,
  accountId,
  setAccountId,
  accountName,
  setAccountName,
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
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard");
  };

  return (
    <div className="bg-white border rounded-lg p-6 space-y-6">
      <div className="flex gap-3 items-start">
        <span className="step-badge w-7 h-7 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 text-sm font-semibold">
          1
        </span>
        <p>
          Log into AWS account &{" "}
          <a href="#" className="text-blue-600 font-medium hover:underline">
            Create an IAM Role
          </a>
          .
        </p>
      </div>

      <div className="flex gap-3 items-start">
        <span className="w-7 h-7 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 text-sm font-semibold">
          2
        </span>
        <p>
          In the <i>Trusted entity type</i> section, select{" "}
          <b>Custom trust policy</b>. Replace the prefilled policy with the
          policy provided below –
        </p>
      </div>

      <div className="relative bg-gray-50 border rounded-md p-2 text-sm font-mono">
        <button
          onClick={() => copyToClipboard(policy)}
          className="absolute top-2 right-2 p-1 rounded text-blue-400 hover:text-blue-800"
          title="Copy Policy"
        >
          <ContentCopyTwoToneIcon className="w-5 h-5" />
        </button>
        <pre className="whitespace-pre-wrap text-blue-400 max-h-64 overflow-y-auto">
          {policy}
        </pre>
      </div>

      <div className="flex gap-3 items-start">
        <span className="w-7 h-7 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 text-sm font-semibold">
          3
        </span>
        <p>
          Click on <b>Next</b> to go to the <i>Add permissions</i> page. We
          would not be adding any permissions for now. Click on <b>Next</b>.
        </p>
      </div>

      <div className="flex gap-3 items-start">
        <span className="w-7 h-7 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 text-sm font-semibold">
          4
        </span>
        <p>
          In the <i>Role name</i> field, enter the below-mentioned role name and
          click on <b>Create Role</b> –
        </p>
      </div>

      <div className="relative max-w-md">
        <input
          value={roleName}
          readOnly
          className="w-full border rounded-md px-3 py-2 bg-gray-50 text-blue-500"
        />
        <button
          onClick={() => copyToClipboard(roleName)}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded text-blue-400 hover:text-blue-800"
          title="Copy Role Name"
        >
          <ContentCopyTwoToneIcon className="w-5 h-5" />
        </button>
      </div>

      <div className="flex gap-3 items-start">
        <span className="w-7 h-7 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 text-sm font-semibold">
          5
        </span>
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

      <div className="flex gap-3 items-start">
        <span className="w-7 h-7 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 text-sm font-semibold">
          6
        </span>
        <p>
          Paste the copied <b>Role ARN</b>, Account ID, and Account Name below –
        </p>
      </div>

      <div className="flex items-center justify-between">
        <div className="max-w-lg flex items-center justify-around">
          <label className="block text-sm font-medium mb-1">
            IAM Role ARN <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={roleArn}
            onChange={(e) => setRoleArn(e.target.value)}
            placeholder="arn:aws:iam::123456789012:role/CK-Tuner-Role"
            className={`w-full border rounded-md px-3 py-2 focus:ring-red-500"
            `}
          />
        </div>

        <div className="max-w-lg flex items-center justify-around">
          <label className="block text-sm font-medium mb-1">
            Account ID <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={accountId}
            onChange={(e) => setAccountId(e.target.value)}
            placeholder="Enter Account ID"
            className="w-full border rounded-md px-3 py-2 focus:ring-indigo-500"
          />
        </div>

        <div className="max-w-lg flex items-center justify-around">
          <label className="block text-sm font-medium mb-1">
            Account Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={accountName}
            onChange={(e) => setAccountName(e.target.value)}
            placeholder="Enter Account Name"
            className="w-full border rounded-md px-3 py-2 focus:ring-indigo-500"
          />
        </div>
      </div>
    </div>
  );
};

export default CreateIamRoleStep;
