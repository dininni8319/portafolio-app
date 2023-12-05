import Link from "next/link"
import { useRouter } from "next/router"

export default function LocaleSwitcher(params) {
  const { locales, locale: activeLocale } = useRouter()  

  const otherLocale = locales.filter(locale => {
    return locale !== activeLocale && locale !== 'default'
  })

  return (
    <div className="flex items-center ps-3 cursor-pointer">
      {otherLocale.map(locale => (
        <Link 
          key={locale} 
          href="/" 
          locale={locale}
          className="link"
        >
         {locale}
        </Link>
      ))}
    </div>
  )  
}