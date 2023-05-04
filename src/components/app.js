import React, { useState } from 'react';
import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';

import Questions from './questions';
import Result from './result';

// export default class App extends Component {
//   render() {
//     return (
//       <div className="app-container">
//         <h1 className="site-title">
//           <a href="/">Trouve ta personnalité Fillactive</a>
//         </h1>
//         <Questions />
//         <Result />
//       </div>
//     );
//   }
// }


function App() {

  const locales = {
    en: { title: 'English' },
    fr: { title: 'French' }
  };

  const { t, i18n } = useTranslation();
  const [messages, setMessages] = useState(0);

  return (
    <div>
      <div className="language-options">

          {Object.keys(locales).map((locale) => (
            <button key={locale} style={{ fontWeight: i18n.resolvedLanguage === locale ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(locale)}>
              {locales[locale].title}
            </button>
          ))}

      </div>

    <div className="app-container">
      <h1 className="site-title">
        {/* <a href="/">Trouve ta personnalité Fillactive</a> */}
        <a href="/">{t('quizTitle')}</a>
        
      </h1>
      <Questions />
      <Result />
    </div>

    </div>

  );
}

export default function WrappedApp() {
  return (
    <Suspense fallback="...loading">
      <App />
    </Suspense>
  )
}