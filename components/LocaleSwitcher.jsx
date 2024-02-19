import Link from "next/link"
import { useTranslation } from "next-i18next";
import { useState, useEffect } from "react";

export default function LocaleSwitcher(params) {
  const { i18n } = useTranslation();
  const [active, setActive ] = useState('en')
  const changeLanguage = (event, language) => {
    event.preventDefault()
    i18n.changeLanguage(language);
    setActive(language)
  };

  useEffect(() => {
    i18n.changeLanguage("en");
  }, [i18n.isInitialized])
  
  return (
    <div className="flex justify-between md:justify-around items-center cursor-pointer w-24">
        <Link 
          onClick={(event) => changeLanguage(event,'en')}
          href="/" 
          className={`link ${active === 'en'  ? 'text-yellow-500 font-semibold' : 'text-[#5651e5] hover:text-[#628be5]' }`}
        >
          en
        </Link>
        <Link 
          onClick={(event) => changeLanguage(event,'it')}
          href="/" 
          className={`link ${active === 'it'  ? 'text-yellow-500 font-semibold' : 'text-[#5651e5] hover:text-[#628be5]' }`}
        >
         it
        </Link>
        <Link 
          onClick={(event) => changeLanguage(event,'de')}
          href="/" 
          className={`link ${active === 'de'  ? 'text-yellow-500 font-semibold' : 'text-[#5651e5] hover:text-[#628be5]' }`}
        >
         de
        </Link>
    </div>
  )  
}