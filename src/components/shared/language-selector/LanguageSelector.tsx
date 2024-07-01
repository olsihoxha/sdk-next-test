"use client";

import { useTranslation } from "react-i18next";
import { GrLanguage } from "react-icons/gr";

const LanguageSelector = () => {
  const { i18n } = useTranslation("common");

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    // <Dropdown
    //   renderTrigger={() => (
    //     <Button color={"blue"} className={"mt-4 flex items-center justify-center space-x-2"}>
    //       <div className="mr-3 flex items-center">
    //         <GrLanguage />
    //       </div>
    //       <div className="flex items-center">Language</div>
    //     </Button>
    //   )}
    //   label={<GrLanguage />}
    // >
    //   <Dropdown.Item onClick={() => changeLanguage("en")}>English</Dropdown.Item>
    //   <Dropdown.Item onClick={() => changeLanguage("es")}>Spanish</Dropdown.Item>
    // </Dropdown>
    <div className="mt-4 flex items-center justify-center space-x-2">
      <div className="mr-3 flex items-center">
        <GrLanguage />
      </div>
      <div className="flex items-center">Language</div>
    </div>
  );
};

export default LanguageSelector;
