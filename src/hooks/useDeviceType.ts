import { useState, useEffect } from "react";

type DeviceType = "desktop" | "tablet" | "mobile";

const useDeviceType = (): DeviceType => {
  const [deviceType, setDeviceType] = useState<DeviceType>("desktop");

  useEffect(() => {
    const updateDeviceType = () => {
      const width = window.innerWidth;

      if (width >= 1024) {
        setDeviceType("desktop");
      } else if (width >= 768) {
        setDeviceType("tablet");
      } else {
        setDeviceType("mobile");
      }
    };

    updateDeviceType();

    window.addEventListener("resize", updateDeviceType);

    return () => {
      window.removeEventListener("resize", updateDeviceType);
    };
  }, []);

  return deviceType;
};

export default useDeviceType;
