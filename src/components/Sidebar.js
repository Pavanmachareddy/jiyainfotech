import SidebarItem from "./SidebarItem";
import items from "../data/sidebar.json";
import Table1 from "./Table1";

const Sidebar = () => {
  console.log(items, "item");
  return (
    <div
      style={{ display: "flex", padding: "0px 20px 10px 0px", height: "400px" }}
    >
      <div className="sidebar">
        {items.map((item, index) => (
          <SidebarItem key={index} item={item} />
        ))}
      </div>
      <Table1 />
    </div>
  );
};
export default Sidebar;
