import useWindowWidth from "./useWindowWidth";

function LayoutComponent() {
  const onSmallScreen = useWindowWidth(768);

  return (
    <div>
      <p>
        You are browsing on <b>{onSmallScreen ? "small" : "large"}</b> device
      </p>
    </div>
  );
}

export default LayoutComponent;
