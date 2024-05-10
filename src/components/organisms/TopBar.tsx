import Icon from "../atoms/Icon";
const TopBar = () => {
  return (
    <div className="topbar__wrapper">
      <div className="topbar__content">
        <Icon name="logo" />
        <Icon name="facebook" />
      </div>
    </div>
  );
};

export default TopBar;
