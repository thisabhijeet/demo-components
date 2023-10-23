import Image from "next/image";
import Table from "./components/Table";
import DropDown from "./components/DropDown";

export default function Home() {
  const data = [
    {
      Video: "SummarySummarySummary",
      "Tagged to": "Product",
      "Tagged Entities": "22 Jan 2022",
      "Video Tags": ["Active", "Customer data"],
      Flows: [
        "Active",
        "Customer data",
        "Admin",
        "Admin",
        "Admin",
        "Admin",
        "Admin",
        "Admin",
        "Admin",
        "Admin",
      ],
      Status: "Active",
    },
    {
      Video: "SummarySummarySummary",
      "Tagged to": "Brand",
      "Tagged Entities": "22 Jan 2022",
      "Video Tags": ["Active", "Customer data"],
      Flows: [
        "Active",
        "Customer data",
        "Admin",
        "Admin",
        "Admin",
        "Admin",
        "Admin",
        "Admin",
        "Admin",
        "Admin",
      ],
      Status: "Draft",
    },
    {
      Video: "SummarySummarySummary",
      "Tagged to": "Collection",
      "Tagged Entities": "22 Jan 2022",
      "Video Tags": ["Active", "Customer data"],
      Flows: [
        "Active",
        "Customer data",
        "Admin",
        "Admin",
        "Admin",
        "Admin",
        "Admin",
        "Admin",
        "Admin",
        "Admin",
      ],
      Status: "Inactive",
    },
    {
      Video: "SummarySummarySummary",
      "Tagged to": "Collection",
      "Tagged Entities": "22 Jan 2022",
      "Video Tags": ["Active", "Customer data"],
      Flows: [
        "Active",
        "Customer data",
        "Admin",
        "Admin",
        "Admin",
        "Admin",
        "Admin",
        "Admin",
        "Admin",
        "Admin",
      ],
      Status: "Active",
    },
    {
      Video: "SummarySummarySummary",
      "Tagged to": "Product",
      "Tagged Entities": "22 Jan 2022",
      "Video Tags": ["Active", "Customer data"],
      Flows: [
        "Active",
        "Customer data",
        "Admin",
        "Admin",
        "Admin",
        "Admin",
        "Admin",
        "Admin",
        "Admin",
        "Admin",
      ],
      Status: "Active",
    },
    {
      Video: "SummarySummarySummary",
      "Tagged to": "Product",
      "Tagged Entities": "22 Jan 2022",
      "Video Tags": ["Active", "Customer data"],
      Flows: [
        "Active",
        "Customer data",
        "Admin",
        "Admin",
        "Admin",
        "Admin",
        "Admin",
        "Admin",
        "Admin",
        "Admin",
      ],
      Status: "Active",
    },
  ];

  const data2 = [
    "Product",
    "Collection",
    "Collection Products",
    "Video Tags",
    "Product Tags",
    "Product Group Tags",
    "Collection Tags",
    "None",
  ];

  return (
    <div className="mx-auto mb-[400px]">
      <Table tableData={data} />
      <DropDown data={data2} />
    </div>
  );
}
