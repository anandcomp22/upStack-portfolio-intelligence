import {
  Moon,
  Sun
} from "lucide-react";

import {
  useTheme
} from "next-themes";


export default function ThemeToggle(){

  const {
    theme,
    setTheme
  } = useTheme();


  return (

    <button
      onClick={() =>
        setTheme(
          theme === "dark"
            ? "light"
            : "dark"
        )
      }
      className="
        rounded-lg
        p-2
        hover:bg-accent
      "
    >

      {
        theme === "dark"
          ?
          <Sun size={20}/>
          :
          <Moon size={20}/>
      }


    </button>

  );
}