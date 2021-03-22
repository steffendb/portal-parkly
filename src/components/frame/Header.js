import { ReactComponent as ParklyLogo } from "../../icons/parkly-logo.svg";
import { ReactComponent as UserIcon } from "../../icons/user-24.svg";

import PropertySelector from "../common/propertyselector";
import ProfileDropdown from "../common/profiledropdown";
import MainNavDropdown from "../common/mainnavdropdown";

const Header = (props) => {
  return (
    <header className="site-header">
      <div className="site-logo">
        <ParklyLogo />
      </div>
      <PropertySelector />
      <ProfileDropdown />
      <MainNavDropdown />
    </header>
  );
};

export default Header;
