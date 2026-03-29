import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const current = i18n.language?.startsWith('en') ? 'en' : 'es';

  const change = (lang) => {
    if (lang !== current) i18n.changeLanguage(lang);
  };

  return (
    <div className="flex items-center gap-1 ml-2">
      <button
        onClick={() => change('es')}
        className={`px-2 py-0.5 rounded text-xs font-semibold transition-colors duration-200 cursor-pointer ${
          current === 'es'
            ? 'text-deep-blue bg-soft-gold'
            : 'text-medium-gray hover:text-soft-gold'
        }`}
      >
        ES
      </button>
      <span className="text-gray-600 text-xs select-none">|</span>
      <button
        onClick={() => change('en')}
        className={`px-2 py-0.5 rounded text-xs font-semibold transition-colors duration-200 cursor-pointer ${
          current === 'en'
            ? 'text-deep-blue bg-soft-gold'
            : 'text-medium-gray hover:text-soft-gold'
        }`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
