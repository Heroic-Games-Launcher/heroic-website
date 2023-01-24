import i18next from 'i18next'
import { NextPageContext } from 'next'
import { ReactElement } from 'react'

i18next.init({
  lng: "en",
  fallbackLng: "en",
  resources: {
    en: {
      translation: {
        Navbar: {
          Documentation: "Documentation",
          Support_Us: "Support Us",
          Heroic_GitHub_Page: "Heroic GitHub Page",
          Heroic_Twitter_Page: "Heroic Twitter Page", 
          Heroic_Mastodon_Page: "Heroic Mastodon Page", 
          Heroic_Discord_Server: "Heroic Discord Server",
        },
        Home_Page: {
          meta_desc: "An Open Source GOG and Epic Games Launcher",
          PLAY_LIKE_A_HERO: "PLAY LIKE A HERO!",
          Heroic_Summary: {
            Heroic: "Heroic is an Open Source",
            GOG: "GOG",
            and: "and",
            Epic_games: "Epic games",
            Launcher: "launcher for",
            Linux: "Linux",
            Windows: "Windows",
            macOS: "macOS",
            AlsoAvailable: "Also available on the",
            SteamDeck: "SteamDeck",
          },
          Download: "Download",
          Documentation: "Documentation",
          FAQ: "FAQ",

          MAIN_FEATURES_AND_MORE_INFO: "MAIN FEATURES AND MORE INFO",
          Game_Page: "Game Page",
          Game_Page_desc: "Check game details like description, publisher, download and install size, time played and more.",
          Platform_Selection: "Platform Selection",
          Platform_Selection_desc: "On Linux and on MacOS you can select to install the Windows version of a native game. This might be handy in case the native version is not supported anymore. On Linux you can choose that for GOG games only.",
          Epic_Store_inside_Heroic: "Epic Store inside Heroic",
          Access_to_the_Stores: "Access to the Stores",
          Access_to_the_Stores_desc: "Go to the Epic or GOG store without even leaving Heroic. Get free games or buy new ones directly from Heroic's interface!",
          Context_Menu: "Context Menu",
          Organize_your_library: "Organize your library",
          Organize_your_library_desc: "Add games to favorites or simply hide the games you already played or will never play at all!",
          Themes: "Themes",
          Themes_desc: "If you don't like the default colors, you have the ability to change them. It also includes the famous Dracula theme.",
          Wine_Manager: "Wine Manager",
          Wine_Manager_desc: "On Linux, download the latest version of Wine-GE, Wine-Lutris or even Proton-GE using the Wine Manager. These selection of Wine version are focused on improving the gaming experience and compatibility.",
          Wine_Settings: "Wine Settings",
          Wine_Settings_desc: "Besides using the right Wine version, it is important to setup everything to have the best gameplay experience on Linux and on macOS. Under the Wine Settings it is possible to auto install tools like DXVK, VKD3D, FSR and also to run WineCFG, Winetricks and Run EXE on the prefix, so you can install games pre-requisites in an easy way.",
          Multi_Language: "Multi Language",
          Multi_Language_desc: "Heroic was translated by the community in more than 30 languages, from Portuguese to Korean, from Farsi to French. You can also help with translations by accessing ",
          Multi_Language_desc_Weblate_link: "our Weblate Page",
        },
        Support_Us: {
          title: "Support Heroic Development",
          meta_desc: "An Open Source GOG and Epic Games Launcher",
          Support_Us: "Support Us",
          Heroic_is_free: "Heroic is free! Donations help us keep the project alive.",

          GitHub_Sponsor: "GitHub Sponsor",
          "One-time_or_flexible-sub": "One-time or flexible-sub",
          GitHub_Sponsor_desc: "Support us with a one-time or recurring donation through GitHub.",
          Go_to_GitHub: "Go to GitHub",

          Patreon: "Patreon",
          "Monthly-sub": "Monthly-sub",
          Patreon_desc: "Activate a monthly subscription on Patreon to support us and get rewards.",
          Go_to_Patreon: "Go to Patreon",

          "Ko-fi": "Ko-fi",
          "One-time": "One-time",
          "Ko-fi_desc": "Support the project by offering us a coffee. Just like that, fast and simple!",
          "Go_to_Ko-fi": "Go to Ko-fi",
        },
        Download: {
          title: "Download Heroic",
          meta_desc: "An Open Source GOG and Epic Games Launcher",
          Download: "Download",
          AvailableFor: "Heroic is available for all Major operating systems.",
          Stable: "Stable",
          Beta: "Beta",
          Other: "Other",
          Setup: "Setup",
          Portable: "Portable",
          See_all: "See all",
          Linux: {
            Flatpack_desc: "Get the best Heroic experience on any Linux distribution or on the Steam Deck via Flatpak.",
            Flatpack_get: "Get from Flathub",
            AppImage_desc: "Download it in AppImage format so it will work on any Linux distro. The AppImage can update itself when a new version is released.",
            Other_desc: "Heroic is also distributed in RPM, DEB and a TAR.XZ file. Check for alternative repos in our Github.",
          },
          MacOS: {
            IntelChips: "Intel Chips",
            IntelChips_desc: "Optimized for Intel Chips. Open it and copy the Heroic App to the Applications folder and you are good to go!",
            AppleChips: "Apple Chips (M1/M2)",
            AppleChips_desc: "Might need to run this command on the terminal to make it work: ",
          },
          Windows: {
            Setup_desc: "Install Heroic on your system and get auto-updates when a new version is released. Next, Next, Finish!",
            Portable_desc: "Use the portable version in case you do not want the full installation. You will still have all the features included.",
          }
        },
        FAQ:{
          title: "Frequently Asked Questions",
          meta_desc: "An Open Source GOG and Epic Games Launcher",
        }
      }
    },
    hu: {
      translation: {
        Navbar: {
          Documentation: "Documentáció",
          Support_Us: "Támogass minket",
          Heroic_GitHub_Page: "Heroic GitHub oldal",
          Heroic_Twitter_Page: "Heroic Twitter oldal", 
          Heroic_Mastodon_Page: "Heroic Mastodon oldal", 
          Heroic_Discord_Server: "Heroic Discord Szerver",
        },
        Home_Page: {
          meta_desc: "Egy nyílt forráskódú GOG és Epic Games Launcher",
          PLAY_LIKE_A_HERO: "JÁTSSZ ÚGY, MINT EGY HŐS!",
          Heroic_Summary: {
            Heroic: "Heroic egy Nyílt Forráskódú",
            GOG: "GOG",
            and: "és",
            Epic_games: "Epic games",
            Launcher: "launcher",
            Linux: "Linux-ra",
            Windows: "Windows-ra",
            macOS: "macOS-re",
            AlsoAvailable: "Elérhető ",
            SteamDeck: "SteamDeck-en is",
          },
          Download: "Letöltés",
          Documentation: "Documentáció",
          FAQ: "GYIK",

          MAIN_FEATURES_AND_MORE_INFO: "FŐBB FUNKCIÓK ÉS MÉG TÖBB INFÓ",
          Game_Page: "Játék oldala",
          Game_Page_desc: "Nézd meg a játék részleteit: leírását, kiadóját, letöltés és telepítés méretét, játszott idejét és így tovább.",
          Platform_Selection: "Platform választás",
          Platform_Selection_desc: "Linux-on és MacOS-en kiválaszthatod a natív játék Windows-os verziójának telepítését. Ez kapóra jöhet, ha a natív verzió már nem támogatott többé. Linux-on ezt csak GOG játékok esetében választhatod ki.",
          Epic_Store_inside_Heroic: "Epic Store a Heroic-on belül",
          Access_to_the_Stores: "Hozzáférés az Áruházakhoz",
          Access_to_the_Stores_desc: "Menj az Epic vagy GOG áruház oldalára anélkül, hogy  elhagynád Heroic-ot. Szerezd be az ingyenes játékokat, vagy vegyél újakat, egyenesen a Heroic felületén!",
          Context_Menu: "Context Menu",
          Organize_your_library: "Rendszerezd könyvtáradat",
          Organize_your_library_desc: "Add hozzá kedvenc játékaidat vagy szimplán rejtsd el azokat, amiket már kijátszottál vagy épp sose fogsz egyáltalán játszani!",
          Themes: "Témák",
          Themes_desc: "Ha nem tetszenek az alapértelmezett színek, lehetőséged van megváltoztatni azokat. A kínálat a híres Dracula témát is tartalmazza.",
          Wine_Manager: "Wine Kezelő",
          Wine_Manager_desc: "Linux-on, töltsd le a legújabb Wine-GE, Wine-Lutris vagy akár Proton-GE verziókat a Wine Kezelővel. A Wine verzióinak választéka arra összpontosít, hogy fejlessze a játék élményét és kompatibilitását.",
          Wine_Settings: "Wine Beállítások",
          Wine_Settings_desc: "Mindamellett, hogy a megfelelő Wine verziót használod, fontos, hogy mindent beállíts ahhoz, hogy elérd a legjobb játék élményt Linux-on és macOS-en. A Wine Beállítások alatt lehetőséged van az olyan eszközök automatikus telepítésére, mint a DXVK, VKD3D, FSR és még a WineCFG, Winetricks futtatására is, valamint EXE-t futtatni prefix-el, tehát könnyedén telepíthetsz játékokat, előre megszabott feltételekkel.",
          Multi_Language: "Több nyelvűség",
          Multi_Language_desc: "Heroic a közösség által lett lefordítva, több mint 30 nyelvre, portugáltól koreaiig, perzsától franciáig. Te is segíthetsz a fordításban ",
          Multi_Language_desc_Weblate_link: "a Weblate Oldalunkon",
        },
        Support_Us: {
          title: "Támogasd a Heroic fejlesztésést",
          meta_desc: "Egy nyílt forráskódú GOG és Epic Games Launcher",
          Support_Us: "Támogass minket",
          Heroic_is_free: "A Heroic ingyenes! Az adományok segítenek életben tartani a projektet.",

          GitHub_Sponsor: "GitHub Szponzor",
          "One-time_or_flexible-sub": "Egyszeri alkalom vagy rugalmas előfizetés",
          GitHub_Sponsor_desc: "Támogass minket egyszeri alkalmú vagy megújuló támogatással a GitHub-on keresztül.",
          Go_to_GitHub: "Irány a GitHub",

          Patreon: "Patreon",
          "Monthly-sub": "Havi előfizetés",
          Patreon_desc: "Aktiválj egy havi előfizetést a Patreon-on hogy támogass minket és jutalmakat nyerj.",
          Go_to_Patreon: "Irány a Patreon",

          "Ko-fi": "Ko-fi",
          "One-time": "Egyszeri alkalom",
          "Ko-fi_desc": "Támogasd a projektet azzal, hogy felajánlasz nekünk egy kávét. Csak így, gyorsan és egyszerűen!",
          "Go_to_Ko-fi": "Irány a Ko-fi",
        },
        Download: {
          title: "Töltsd le a Heroic-ot",
          meta_desc: "Egy nyílt forráskódú GOG és Epic Games Launcher",
          Download: "Letöltés",
          AvailableFor: "A Heroic elérhető a jelentősebb operációs rendszerre.",
          Stable: "Stabil",
          Beta: "Béta",
          Other: "Egyéb",
          Setup: "Telepítő",
          Portable: "Hordozható",
          See_all: "Lásd mindet",
          Linux: {
            Flatpack_desc: "Legyen tied a legjobb Heroic élményt bármilyen Linux disztribúción vagy Steam Deck-en a Flatpak segítségével.",
            Flatpack_get: "Szerezd meg Flathub-ról",
            AppImage_desc: "Töltsd le AppImage formátumban , így minden Linux distrón működni fog. Az AppImage képes frissíteni önmagát, ha egy újabb verzió megjelenik.",
            Other_desc: "Heroic ugyanakkor elérhető RPM, DEB és egy TAR.XZ fájlban is. Keresd az alternatív repository-kat a Github oldalunkon.",
          },
          MacOS: {
            IntelChips: "Intel Chip-ek",
            IntelChips_desc: `Intel Chip-ekre optimalizálva. Nyisd meg és másold a Heroic App-ot az "Applications" mappába és már készen is vagy!`,
            AppleChips: "Apple Chip-ek (M1/M2)",
            AppleChips_desc: "Lehet le kell futtatnod ezt a parancsot a terminal-ba, ahhoz hogy működjön: ",
          },
          Windows: {
            Setup_desc: "Telepítsd a Heroic-ot a rendszeredre és szerezd be a frissítéseket, amint kijön az új verzió. Next/Tovább, Next/Tovább, Finish/Befejezés!",
            Portable_desc: "Használd a hordozható verziót, ha nem akarod teljesen telepíteni. Így is minden funkciót megkapsz.",
          }
        },
        FAQ:{
          title: "Gyakran Ismételt Kérdések",
          meta_desc: "Egy nyílt forráskódú GOG és Epic Games Launcher",
        }
      }
    },
  }
})


export default i18next