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
- After all that you just need to add your language to the other languages in the `Navbar` component's  select tag
  ```
  <select name="language" id="language" onChange={changeLanguage}>
    <option value="en" selected={siteLang == "en"}>English</option>
    <option value="hu" selected={siteLang == "hu"}>Magyar</option>
    ---> HERE <---
  </select>
  ``` 
  - The value and "selected" condition of the `<option>` have to be the **same code you have given to your language**
- Now you can reach your own language at `http://localhost:3000/YOUR_CODE/`
- You can now start translating! YAAAY! It's that easy. :smile:
