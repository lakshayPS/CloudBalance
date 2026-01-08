import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { toast } from "react-toastify";

const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text);
  toast.success("Copied to clipboard");
};
export const ec2Columns = [
  {
    field: "resourceId",
    headerName: "Resource ID",
    width: 200,
    style: "color: #e8f1ff",
    renderCell: (params) => (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          color: "#3436b7",
          fontWeight: 500,
        }}
      >
        <span>{params.value}</span>

        <ContentCopyIcon
          fontSize="small"
          style={{ cursor: "pointer" }}
          onClick={() => copyToClipboard(params.value)}
        />
      </div>
    ),
  },
  { field: "resourceName", headerName: "Resource Name", width: 180 },
  {
    field: "region",
    headerName: "Region",
    width: 190,
  },
  {
    field: "status",
    headerName: "Status",
    width: 180,
  },
];

export const ec2Rows = [
  {
    resourceId: "i-01a3fbc9e72a1110",
    resourceName: "web-server-1",
    region: "N. Virginia",
    status: "RUNNING",
  },
  {
    resourceId: "i-028bdc44f8e8b220",
    resourceName: "web-server-2",
    region: "Ohio",
    status: "STOPPED",
  },
  {
    resourceId: "i-03f983ac44d63330",
    resourceName: "db-primary",
    region: "Oregon",
    status: "RUNNING",
  },
  {
    resourceId: "i-04c2dbcfe22c4440",
    resourceName: "db-replica",
    region: "Ireland",
    status: "RUNNING",
  },
  {
    resourceId: "i-05a64dbe3ea55550",
    resourceName: "analytics-node",
    region: "N. Virginia",
    status: "PENDING",
  },
  {
    resourceId: "i-06d22efbc1166660",
    resourceName: "batch-processor",
    region: "Mumbai",
    status: "RUNNING",
  },
  {
    resourceId: "i-07bc2a11ef777770",
    resourceName: "cache-redis",
    region: "Singapore",
    status: "STOPPED",
  },
  {
    resourceId: "i-0871fe99ab888880",
    resourceName: "auth-service",
    region: "Frankfurt",
    status: "RUNNING",
  },
  {
    resourceId: "i-09abc771de999990",
    resourceName: "monitoring-agent",
    region: "Sydney",
    status: "TERMINATED",
  },
  {
    resourceId: "i-0a4cbbdd10aaaa10",
    resourceName: "cdn-node-1",
    region: "N. California",
    status: "RUNNING",
  },
  {
    resourceId: "i-0b32ee55f0bbbb20",
    resourceName: "cdn-node-2",
    region: "N. California",
    status: "RUNNING",
  },
  {
    resourceId: "i-0c8977aa06cccc30",
    resourceName: "payment-gateway",
    region: "London",
    status: "STOPPED",
  },
  {
    resourceId: "i-0d42ee23a0dddd40",
    resourceName: "reporting-engine",
    region: "Paris",
    status: "RUNNING",
  },
  {
    resourceId: "i-0e672bb013eeee50",
    resourceName: "event-processor",
    region: "N. Virginia",
    status: "RUNNING",
  },
  {
    resourceId: "i-0f199cd440ffff60",
    resourceName: "lambda-runner",
    region: "Ohio",
    status: "STOPPING",
  },
  {
    resourceId: "i-102aa331fe111170",
    resourceName: "backup-engine",
    region: "Oregon",
    status: "RUNNING",
  },
  {
    resourceId: "i-113cbb4221222280",
    resourceName: "api-gateway",
    region: "Sydney",
    status: "RUNNING",
  },
  {
    resourceId: "i-124deb0021333390",
    resourceName: "image-processor",
    region: "Mumbai",
    status: "STOPPED",
  },
  {
    resourceId: "i-136e9192214444a0",
    resourceName: "media-streamer",
    region: "Seoul",
    status: "RUNNING",
  },
  {
    resourceId: "i-147f3af0215555b0",
    resourceName: "search-node",
    region: "Tokyo",
    status: "RUNNING",
  },
];

export const rdsColumns = [
  {
    field: "resourceId",
    headerName: "Resource ID",
    width: 200,
    style: "color: #e8f1ff",
    renderCell: (params) => (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          color: "#3436b7",
          fontWeight: 500,
        }}
      >
        <span>{params.value}</span>

        <ContentCopyIcon
          fontSize="small"
          style={{ cursor: "pointer" }}
          onClick={() => copyToClipboard(params.value)}
        />
      </div>
    ),
  },
  { field: "resourceName", headerName: "Resource Name", width: 180 },
  {
    field: "engine",
    headerName: "Engine",
    width: 150,
  },
  {
    field: "region",
    headerName: "Region",
    width: 190,
  },
  {
    field: "status",
    headerName: "Status",
    width: 180,
  },
];

export const rdsRows = [
  {
    resourceId: "i-21b3aac7e72f1111",
    resourceName: "inventory-db",
    engine: "postgres",
    region: "Oregon",
    status: "RUNNING",
  },
  {
    resourceId: "i-32c4bbd8f83a2222",
    resourceName: "orders-db",
    engine: "mysql",
    region: "Ohio",
    status: "STOPPED",
  },
  {
    resourceId: "i-43d5ccd9a94b3333",
    resourceName: "auth-db",
    engine: "postgres",
    region: "N. Virginia",
    status: "RUNNING",
  },
  {
    resourceId: "i-54e6ddeaa15c4444",
    resourceName: "logging-db",
    engine: "aurora-postgresql",
    region: "Ireland",
    status: "RUNNING",
  },
  {
    resourceId: "i-65f7eefbb26d5555",
    resourceName: "analytics-db",
    engine: "aurora-mysql",
    region: "Oregon",
    status: "PENDING",
  },
  {
    resourceId: "i-76a8ff0cc37e6666",
    resourceName: "customers-db",
    engine: "postgres",
    region: "Mumbai",
    status: "RUNNING",
  },
  {
    resourceId: "i-87b9001dd48f7777",
    resourceName: "billing-db",
    engine: "mysql",
    region: "Frankfurt",
    status: "RUNNING",
  },
  {
    resourceId: "i-98ca112ee5908888",
    resourceName: "sessions-db",
    engine: "postgres",
    region: "Singapore",
    status: "STOPPED",
  },
  {
    resourceId: "i-a9db223ff6a19999",
    resourceName: "products-db",
    engine: "mariadb",
    region: "Sydney",
    status: "TERMINATED",
  },
  {
    resourceId: "i-b0ec334a07b2aaaa",
    resourceName: "images-db",
    engine: "postgres",
    region: "London",
    status: "RUNNING",
  },
  {
    resourceId: "i-c1fd445b18c3bbbb",
    resourceName: "events-db",
    engine: "mysql",
    region: "Tokyo",
    status: "RUNNING",
  },
  {
    resourceId: "i-d20e556c29d4cccc",
    resourceName: "reports-db",
    engine: "postgres",
    region: "Paris",
    status: "STOPPED",
  },
  {
    resourceId: "i-e31f667d3ae5dddd",
    resourceName: "recommendation-db",
    engine: "aurora-postgresql",
    region: "N. California",
    status: "RUNNING",
  },
  {
    resourceId: "i-f420778e4bf6eeee",
    resourceName: "tags-db",
    engine: "mysql",
    region: "Ohio",
    status: "STOPPING",
  },
  {
    resourceId: "i-0531888f5c07ffff",
    resourceName: "profiles-db",
    engine: "postgres",
    region: "Seoul",
    status: "RUNNING",
  },
  {
    resourceId: "i-164299906d180111",
    resourceName: "cache-index-db",
    engine: "mariadb",
    region: "N. Virginia",
    status: "RUNNING",
  },
  {
    resourceId: "i-2753aaa17e291222",
    resourceName: "tracking-db",
    engine: "postgres",
    region: "Oregon",
    status: "STOPPED",
  },
  {
    resourceId: "i-3864bbb28f3a1333",
    resourceName: "checkout-db",
    engine: "aurora-mysql",
    region: "Mumbai",
    status: "RUNNING",
  },
  {
    resourceId: "i-4975ccc39g4b1444",
    resourceName: "streaming-db",
    engine: "postgres",
    region: "Tokyo",
    status: "RUNNING",
  },
  {
    resourceId: "i-5a86ddd4ah5c1555",
    resourceName: "metrics-db",
    engine: "mysql",
    region: "Germany",
    status: "PENDING",
  },
];

export const asgColumns = [
  {
    field: "resourceId",
    headerName: "Resource ID",
    width: 200,
    style: "color: #e8f1ff",
    renderCell: (params) => (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          color: "#3436b7",
          fontWeight: 500,
        }}
      >
        <span>{params.value}</span>

        <ContentCopyIcon
          fontSize="small"
          style={{ cursor: "pointer" }}
          onClick={() => copyToClipboard(params.value)}
        />
      </div>
    ),
  },
  { field: "resourceName", headerName: "Resource Name", width: 180 },
  {
    field: "region",
    headerName: "Region",
    width: 190,
  },
  { field: "desiredCapacity", headerName: "Desired Capacity", width: 190 },
  { field: "minSize", headerName: "Min Size", width: 190 },
  { field: "maxSize", headerName: "Max Size", width: 190 },
  {
    field: "status",
    headerName: "Status",
    width: 180,
  },
];

export const asgRows = [
  {
    resourceId: "asg-01a3fbc9e72a1110",
    resourceName: "web-tier-asg",
    region: "N. Virginia",
    desiredCapacity: 4,
    minSize: 2,
    maxSize: 8,
    status: "ACTIVE",
  },
  {
    resourceId: "asg-02bdc44f8e8b2220",
    resourceName: "backend-api-asg",
    region: "Ohio",
    desiredCapacity: 3,
    minSize: 1,
    maxSize: 6,
    status: "ACTIVE",
  },
  {
    resourceId: "asg-03f983ac44d63330",
    resourceName: "worker-pool-asg",
    region: "Oregon",
    desiredCapacity: 10,
    minSize: 5,
    maxSize: 20,
    status: "SCALING",
  },
  {
    resourceId: "asg-04c2dbcfe22c4440",
    resourceName: "db-readreplica-asg",
    region: "Ireland",
    desiredCapacity: 2,
    minSize: 2,
    maxSize: 4,
    status: "ACTIVE",
  },
  {
    resourceId: "asg-05a64dbe3ea55550",
    resourceName: "analytics-engines-asg",
    region: "N. Virginia",
    desiredCapacity: 6,
    minSize: 3,
    maxSize: 12,
    status: "PENDING",
  },
  {
    resourceId: "asg-06d22efbc1166660",
    resourceName: "batch-processor-asg",
    region: "Mumbai",
    desiredCapacity: 8,
    minSize: 2,
    maxSize: 15,
    status: "ACTIVE",
  },
  {
    resourceId: "asg-07bc2a11ef777770",
    resourceName: "redis-cache-asg",
    region: "Singapore",
    desiredCapacity: 2,
    minSize: 1,
    maxSize: 5,
    status: "DISABLED",
  },
  {
    resourceId: "asg-0871fe99ab888880",
    resourceName: "auth-service-asg",
    region: "Frankfurt",
    desiredCapacity: 3,
    minSize: 2,
    maxSize: 6,
    status: "ACTIVE",
  },
  {
    resourceId: "asg-09abc771de999990",
    resourceName: "monitoring-agent-asg",
    region: "Sydney",
    desiredCapacity: 1,
    minSize: 1,
    maxSize: 2,
    status: "TERMINATED",
  },
  {
    resourceId: "asg-0a4cbbdd10aaaa10",
    resourceName: "cdn-distribution-asg",
    region: "N. California",
    desiredCapacity: 5,
    minSize: 3,
    maxSize: 10,
    status: "ACTIVE",
  },
  {
    resourceId: "asg-0b32ee55f0bbbb20",
    resourceName: "edge-cache-asg",
    region: "N. California",
    desiredCapacity: 4,
    minSize: 2,
    maxSize: 8,
    status: "SCALING",
  },
  {
    resourceId: "asg-0c8977aa06cccc30",
    resourceName: "payment-gateway-asg",
    region: "London",
    desiredCapacity: 3,
    minSize: 1,
    maxSize: 6,
    status: "DISABLED",
  },
  {
    resourceId: "asg-0d42ee23a0dddd40",
    resourceName: "reporting-engine-asg",
    region: "Paris",
    desiredCapacity: 2,
    minSize: 1,
    maxSize: 4,
    status: "ACTIVE",
  },
  {
    resourceId: "asg-0e672bb013eeee50",
    resourceName: "event-processor-asg",
    region: "N. Virginia",
    desiredCapacity: 12,
    minSize: 4,
    maxSize: 25,
    status: "SCALING",
  },
  {
    resourceId: "asg-0f199cd440ffff60",
    resourceName: "serverless-runner-asg",
    region: "Ohio",
    desiredCapacity: 2,
    minSize: 1,
    maxSize: 3,
    status: "STOPPING",
  },
  {
    resourceId: "asg-102aa331fe111170",
    resourceName: "backup-engine-asg",
    region: "Oregon",
    desiredCapacity: 1,
    minSize: 1,
    maxSize: 2,
    status: "ACTIVE",
  },
  {
    resourceId: "asg-113cbb4221222280",
    resourceName: "api-gateway-asg",
    region: "Sydney",
    desiredCapacity: 6,
    minSize: 3,
    maxSize: 10,
    status: "ACTIVE",
  },
  {
    resourceId: "asg-124deb0021333390",
    resourceName: "image-processor-asg",
    region: "Mumbai",
    desiredCapacity: 5,
    minSize: 2,
    maxSize: 9,
    status: "DISABLED",
  },
  {
    resourceId: "asg-136e9192214444a0",
    resourceName: "media-streamer-asg",
    region: "Seoul",
    desiredCapacity: 7,
    minSize: 4,
    maxSize: 14,
    status: "ACTIVE",
  },
  {
    resourceId: "asg-147f3af0215555b0",
    resourceName: "search-service-asg",
    region: "Tokyo",
    desiredCapacity: 9,
    minSize: 3,
    maxSize: 18,
    status: "ACTIVE",
  },
];
