import { VscAccount } from "react-icons/vsc";
import { IoSettingsOutline } from "react-icons/io5";
import { View } from "../styles/Global.styled";
import { StyledNavbar, Logo } from "../styles/Navbar.styled";
import { Link } from "react-router-dom";

const AdminNavbar = () => {
  return (
    <StyledNavbar>
      <Logo>GROOB</Logo>
      <View>
        <Link to="/admin/manage-users" pa>
          <View>
            <p>Users</p>
            <IoSettingsOutline size={22} />
          </View>
        </Link>
        <Link to="/admin/manage-items" pa>
          <View>
            <p>Items</p>
            <IoSettingsOutline size={22} />
          </View>
        </Link>
      </View>
      <VscAccount size={22} />
    </StyledNavbar>
  );
};

export default AdminNavbar;
