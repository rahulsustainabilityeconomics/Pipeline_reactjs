import React from "react";
import "./UserProfile.scss";
import AccountSetting from "../../assets/userProfileAsset/AccountingSetting.svg";
import ContactSupport from "../../assets/userProfileAsset/contactSupport.svg";
import orderHistory from "../../assets/userProfileAsset/orderHistory.svg";
import SignOut from "../../assets/userProfileAsset/SignOut.svg";

interface DropdownContentProps {
  handleProfileLogout: () => void;
}

const UserProfile: React.FC<DropdownContentProps> = ({
  handleProfileLogout,
}) => {
  return (
    <div className="UserProfileDropdown">
      <ul>
        <li>
          <img src={AccountSetting} alt="" />
          Account Setting
        </li>
        <li>
          <img src={orderHistory} alt="" />
          Order History
        </li>
        <li>
          <img src={ContactSupport} alt="" />
          Contact Support
        </li>
        <li onClick={handleProfileLogout}>
          <img src={SignOut} alt="" />
          Sign out
        </li>
      </ul>
    </div>
  );
};

export default UserProfile;
