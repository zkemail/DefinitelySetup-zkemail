import { IconButton, useColorMode } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

export const ColorModeSwitch: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
    bg= "transparent"
    borderRadius={0}
      aria-label="Toggle color mode"
      icon={colorMode === "light" ? <FaMoon/> : <FaSun />}
      onClick={toggleColorMode}
    />
  );
};
