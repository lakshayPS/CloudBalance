const FilterSection = ({ title, children }) => (
  <div>
    <div className="flex justify-between items-center mb-2">
      <span className="font-medium">{title}</span>
      <button className="text-xs text-blue-600 hover:underline">
        Include Only
      </button>
    </div>
    <div className="space-y-2">{children}</div>
  </div>
);

const Checkbox = ({ label }) => (
  <label className="flex items-center gap-2 text-sm">
    <input type="checkbox" className="h-4 w-4" />
    {label}
  </label>
);

const FilterDrawer = ({ open }) => {
  return (
    <>
      <div
        className={`
          fixed inset-0 bg-black/20 z-40 transition-opacity duration-300
          ${
            open
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }
        `}
      />

      <div
        className={`
          fixed top-0 right-0 z-50 h-screen w-[380px] bg-white shadow-xl
          transform transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "translate-x-full"}
          flex flex-col
        `}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <h2 className="text-lg font-semibold">Filters</h2>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-6">
          <FilterSection title="Service">
            <Checkbox label="Amazon EC2" />
            <Checkbox label="Amazon RDS" />
          </FilterSection>

          <FilterSection title="Instance Type">
            <input
              className="w-full border rounded-md px-2 py-1 text-sm mb-2"
              placeholder="Search"
            />
            <Checkbox label="c5.large" />
            <Checkbox label="c5.xlarge" />
            <Checkbox label="c5.2xlarge" />
          </FilterSection>

          <FilterSection title="Region">
            <Checkbox label="us-east-1" />
            <Checkbox label="ap-south-1" />
          </FilterSection>
        </div>
      </div>
    </>
  );
};

export default FilterDrawer;
