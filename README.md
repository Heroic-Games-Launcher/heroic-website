This is a the Heroic Games Launcher Website repository

## How to contribute

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Contribute with translation

You can find a component called `i18next.tsx` in components directory.
It has an initialization of i18next, already exported, and imported by each page.
- You only have to do a quick copy of an existing language under the `resources` prop of the object  
(**english recommended**, sicne it is the default language of the site, it has all the translations)
- Give a new region code for your language 
  - It's not totally important to follow the official ones, but it's recommended. 
  Just to avoid conflicts and misunderstandings in the future, in case of multi-regional languages, like spanish, portugese... etc. 
  So I recommend using `es-ES` in case of spanish of Spain, but it doesn't affect the way i18next (the translation handler plugin) works.
- Do the same with the english FAQ array in `[lang]/constants.ts`. Copy that and rename it to your region code.  
Like this (replace `en` (in this case `hu`) with your region code. and give it REM with a full name of your language in it, so it can be found more easily):  
  ```ts
  /** Hungarian */
  const hu: { question: string; answer: string[] }[] = [
    ...
  ]
  ```
- Put this region code into the `supportedLanguages` array in  `_app.tsx`. It is only needed to aviod continuous ugly URLs.  
(So if somebody tries to load the `htpp://heroicgameslauncher.com/downloads` page, it only opens the english index page, since the first prop in the URL is the language, but there is no `downloads` language. And with this array we can avoid to forward the visitor to `/downloads/downloads` which would be the english downloads page actually.  
If the array doesn't include the URL prop /which should be the region code/ the page replaces it with `en` on all of the links all around the page)
- After all that you just need to add your language to the other languages in the `Footer` component's  select tag
  ```tsx
  <select name="language" id="language" onChange={changeLanguage} value={i18next.language}>
    <option value="en" >English</option>
    <option value="hu" >Magyar</option>
    ---> HERE <---
  </select>
  ``` 
  - The value and "selected" condition of the `<option>` have to be the **same code you have given to your language**
- Now you can reach your own language at `http://localhost:3000/YOUR_CODE/`
- You can now start translating! YAAAY! It's that easy. :smile:
