import Link from "next/link"
import { useTranslation } from "next-i18next";
import { useEffect } from "react";

export default function LocaleSwitcher(params) {
  const { i18n } = useTranslation();

  const changeLanguage = (event, language) => {
    event.preventDefault()
    i18n.changeLanguage(language);
  };

  useEffect(() => {
    if (i18n.isInitialized) {
      i18n.changeLanguage("en");
    }
  }, [i18n.isInitialized])
  
  return (
    <div className="flex items-center md:ps-3 cursor-pointer">
        <Link 
          onClick={(event) => changeLanguage(event,'en')}
          href="/" 
          className="link"
        >
         en
        </Link>
        <Link 
          onClick={(event) => changeLanguage(event,'it')}
          href="/" 
          className="link"
        >
         it
        </Link>
    </div>
  )  
}