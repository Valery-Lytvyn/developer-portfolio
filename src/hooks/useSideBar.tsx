import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

function useSideBar(defaultNavItem: string) {
  const [isVisible, setIsVisible] = useState({ visible: false, label: "" });
  const [selectedItem, setSelectedItem] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    defaultNavItem === "__PAGE__"
      ? setSelectedItem("home")
      : setSelectedItem(defaultNavItem);
  }, [defaultNavItem]);

  const hoverHandler = useCallback(
    (label: string) => {
      setIsVisible((prev) => ({
        visible: !prev.visible,
        label: label,
      }));
    },
    [setIsVisible],
  );

  const clickHandler = useCallback(
    (label: string, route: string) => {
      if (label === selectedItem) return;
      setSelectedItem(label);
      return router.push(route);
    },
    [selectedItem, router],
  );

  return { isVisible, selectedItem, hoverHandler, clickHandler };
}

export default useSideBar;
