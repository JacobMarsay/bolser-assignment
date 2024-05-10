import Icon from "../atoms/Icon";
const TopBar = () => {
  return (
    <div className="topbar__wrapper">
      <div className="topbar__content">
        <div className="icon__wrapper left">
          <Icon name="logo" />
        </div>
        <div className="icon__wrapper right">
          <Icon name="facebook" />
        </div>
      </div>
    </div>
  );
};

export default TopBar;