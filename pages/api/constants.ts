import i18next from 'i18next'

interface faq {
  question: string
  answer: string[]
}

interface supportedLanguages {
  en: faq[]
  hu: faq[]
}

export const getFaqs = (): { question: string; answer: string[] }[] => {
  const supportedLanguages: supportedLanguages = {
    en: en,
    hu: hu
  }

  let langSrting = i18next.language.toString()

  return supportedLanguages[langSrting as keyof supportedLanguages]
}

/** English */
const en: faq[] = [
  {
    question: 'What is Heroic?',
    answer: [
      'Heroic is an open source, lightweight games launcher that is available for Linux, Windows, and macOS. It is an alternative to the Epic Games Launcher and GOG Galaxy, and it is focused on privacy, using fewer resources, and supporting a range of tools such as Wine, Proton, Crossover, DXVK, and VKD3D.'
    ]
  },
  {
    question: 'Is Heroic safe to use?',
    answer: [
      "Yes, Heroic is a safe and secure games launcher that does not collect any data from the user's computer. It is also open source, which means that the source code is publicly available and can be reviewed by the community to ensure that it does not contain any malicious code."
    ]
  },
  {
    question: 'Does Heroic collect my data, username, or password?',
    answer: [
      'No, Heroic is a privacy-centered application and does not collect any data from your computer or device. It does not collect your username, password, or any other personal information. You will login on the official Epic Games Store or GOG website and then Heroic will keep only a token that serves only to list, download and to launch games from those stores.',
      'In addition, Heroic does not collect any usage data or analytics from your use of the application. Your privacy is important to us and we take steps to ensure that your data is secure and not collected or shared without your consent.'
    ]
  },
  {
    question: 'Can I get banned for using Heroic?',
    answer: [
      'It is unlikely that you will get banned for using Heroic to launch games from the Epic Games Store or GOG.',

      'However, please note that certain actions, such as cheating or violating the terms of service for a particular game, may result in a ban. It is important to follow the rules and guidelines of each game and store in order to avoid any issues.',
      'Some games also might ban you if you are trying to run the game on a non-supported operating system using Wine or Proton, for example.'
    ]
  },

  {
    question: 'How do I install Heroic on my computer?',
    answer: [
      `The process for installing Heroic depends on your operating system. On Linux, you can use a package manager such as Flatpak, .deb, .pacman, or .rpm to install Heroic, or you can use an AppImage. On macOS, you can install Heroic as a standard application package and then run the command xattr -r -d com.apple.quarantine /Applications/Heroic.app in the terminal to complete the installation. On Windows, you can use the WinGet package manager by running the command winget install HeroicGamesLauncher.HeroicGamesLauncher, or you can download and run the setup exe or portable exe from the website.`
    ]
  },
  {
    question:
      'What features are currently available in Heroic, and what features are planned for the future?',
    answer: [
      'Currently available features in Heroic include:',
      'Support for launching games from the Epic Games Store and GOG',
      'Support for installing, uninstalling, updating, repairing, and moving games',
      'Support for importing already installed games',
      'Support for playing Epic games online (AntiCheat on macOS and on Linux depends on the game)',
      'Support for playing games using Wine or Proton on Linux',
      'Support for playing games using Crossover on macOS',
      'Support for downloading custom Wine and Proton versions on Linux',
      'Direct access to the Epic and GOG stores from within the Heroic interface',
      'Search for game compatibility information on ProtonDB on Linux',
      'Sync installed games with an existing Epic Games Store installation',
      'Sync saves with the cloud',
      'Custom theming support',
      'Download queue',
      'Add games and applications outside of GOG and Epic Games',
      'Planned features for the future include:',
      'Support for other stores (such as Amazon Gaming and IndieGala)',
      'Play GOG games online'
    ]
  },
  {
    question: 'What are the supported operating systems for Heroic?',
    answer: [
      'Linux: Ubuntu 20.04LTS or newer, Fedora 33 or newer, Arch Linux and derivatives (such as Manjaro, Garuda, and EndeavourOS). Heroic will work on most other Linux distros, but it may require some additional setup and troubleshooting. It is also supported on SteamOS, but downloading is only available through the Discover software center.',
      'Windows: Windows 10 and 11',
      'macOS: macOS 10.15 or newer.'
    ]
  },
  {
    question: 'What are the minimum system requirements for Heroic?',
    answer: [
      'Heroic is an Electron-based application and requires approximately 500MB of storage space. In terms of hardware requirements, the minimum specifications for running Heroic are:',
      '2GB of RAM',
      '1.8GHz dual-core processor',
      'However, please note that these are the minimum requirements and you may need more powerful hardware in order to run certain games or applications.'
    ]
  },
  {
    question: 'How do I use Heroic to play games?',
    answer: [
      'Once you have installed Heroic, you can use it to browse and install games from a range of sources. You can also use it to launch and manage games that you have installed on your computer. If you encounter any issues with games, you can check the general documentation for troubleshooting and workarounds at this link: https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher/wiki . If you are unable to find a solution, you can also seek help on the Heroic Discord server at this link: https://discord.com/invite/rHJ2uqdquK .'
    ]
  },
  {
    question: 'Can I download multiple games at once?',
    answer: [
      'Yes, you can download multiple games at once in Heroic by using the download queue. To use the download queue, simply start a new Install option when already  installing a game. This will add the game to the queue and it will be downloaded once the games in front of it have finished downloading.',
      "You can view the download queue and monitor the progress of your downloads by going to the 'Downloads' tab in the sidebar. From there, you can also pause or cancel downloads as needed."
    ]
  },
  {
    question: 'How can I add games outside Epic or GOG?',
    answer: [
      "You can add games outside Epic or GOG to Heroic by going to the 'Add Games' button on the game Library. This will allow you to browse for the executable on your computer and add it to Heroic as a custom game.",

      "Please note that support for custom games may vary and some features, such as automatic updates and save syncing, may not be available. In addition, you may need to configure the game's settings manually in order to get it to run properly."
    ]
  },
  {
    question: 'What is Wine and how does it work with Heroic?',
    answer: [
      `Wine is a free and open-source compatibility layer that allows Windows applications to run on Unix-like operating systems, including Linux and macOS. Heroic uses Wine to run Windows games on those operating systems.`,
      `Wine is not an emulator, but rather it translates the Windows API calls into POSIX calls that are understood by the operating system. This allows Windows games to run without the need for a full Windows installation.`,
      `You can learn more about Wine and its capabilities on the Wine project website: https://www.winehq.org`
    ]
  },

  {
    question: 'What is Proton and how does it work with Heroic?',
    answer: [
      'Proton is a compatibility layer developed by Valve that allows running Windows games on Linux. It is based on Wine, but includes additional patches and improvements to make it more stable and compatible with a larger number of games. In Heroic, you can use Proton to run Windows games on Linux. You can choose which version of Proton to use for each game, and you can also download custom versions of Proton directly from the Wine Manager page inside Heroic. It is important to note that Proton was not designed to run games outside of Steam, and the results may vary. You can check for compatibility information for each game on the ProtonDB website: https://www.protondb.com'
    ]
  },
  {
    question: 'What is Crossover and how does it work with Heroic?',
    answer: [
      `Crossover is a commercial software that allows you to run Windows applications on Linux and macOS. It is developed by CodeWeavers and can be purchased from their website: https://www.codeweavers.com/ .`,
      `In Heroic, you can use Crossover to run Windows games on macOS by selecting the "Crossover" version in the game settings and also the bottle name (default is HEROIC). Please note that Crossover is a third-party software and its usage is not officially supported by Heroic.`,
      `If you decide to purchase Crossover, you can use the coupon code LEGENDARY to get a discount and support the development of the Legendary app, which is used by Heroic to integrate with the Epic Games Store.`
    ]
  },
  {
    question: 'My game is not working with Heroic. What should I do?',
    answer: [
      `If you are having trouble running a game with Heroic, you can: 
    Check the general documentation for troubleshooting and workarounds at this link: https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher/wiki. This resource may contain information that can help you resolve your issue.`,

      `If you are unable to find a solution in the documentation, you can seek help on the Heroic Discord server at this link: https://discord.com/invite/rHJ2uqdquK . Other users and members of the Heroic team may be able to offer advice or assistance.`,

      `If the issue persists, you can consider opening an issue on the Heroic GitHub page at this link: https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher/issues . Providing as much information as possible about your issue, such as the operating system, game, and any error messages you are seeing, can help the team investigate and resolve the issue.`,

      `If the issue is specific to a particular game, you may want to check the game's documentation or contact the game developer for assistance.`,

      `Finally, you may want to consider trying other tools or compatibility layers, such as Wine or Proton, to see if they can help resolve the issue.`
    ]
  },
  {
    question:
      'Can I use Heroic to install and run native Linux games from the GOG store?',
    answer: [
      `Yes, Heroic can be used to install and run native Linux games from the GOG store. However, it is not currently possible to install or run native Linux games from the Epic Games store, as Epic Games does not currently offer native Linux games. If you encounter issues running a native Linux game with Heroic, you may be able to resolve them by enabling the "Use Steam Runtime" setting in the Game Settings menu. This setting will use the Steam Runtime, if it is installed on your system, to provide any missing libraries that the game may require.`
    ]
  },
  {
    question:
      'Can I use Heroic to install and run native macOS games from GOG and Epic Games?',
    answer: [
      `Yes, Heroic can be used to install and run native macOS games from the GOG store and the Epic Games store. Simply browse and install the games as you would any other game in Heroic.`
    ]
  },
  {
    question:
      'Can I use Heroic to manage and download Wine and Proton versions directly from the interface on Linux?',
    answer: [
      `Yes, Heroic includes tools for managing and downloading Wine and Proton versions directly from the interface on Linux. You can access these tools by going to the Tools menu in the main menu and selecting either "Manage Wine Versions" or "Manage Proton Versions."`
    ]
  },
  {
    question:
      'How can I add game shortcuts to my Desktop or Startup menu in Heroic?',
    answer: [
      `To add game shortcuts to your Desktop or Startup menu in Heroic, first go to the page for the game you want to create a shortcut for. Then, click on the three dots icon in the top right corner of the page and select "Add Shortcuts" from the menu. This will create a shortcut for the game on your Desktop and add it to your Startup menu, so that it will be launched automatically when you start your computer. You can also use the "Add Shortcut to Steam" option to create a shortcut for the game in the Steam client.`
    ]
  },
  {
    question: 'How can I support the Heroic project financially?',
    answer: [
      `If you would like to support the Heroic project financially, there are a few ways you can do so. You can become a patron on Patreon, make a one-time donation through Ko-fi, or sign up as a sponsor on GitHub Sponsors. You can find links to all of these options on the Heroic website at this link: https://heroicgameslauncher.com/donate .`
    ]
  },
  {
    question: 'How can I contribute with translations for Heroic?',
    answer: [
      `If you would like to help translate Heroic into different languages, you can contribute through the Weblate platform at this link: https://hosted.weblate.org/projects/heroic-games-launcher/ . Simply create an account on Weblate and join the project to start translating. Your contributions will be reviewed and merged by the Heroic team.`
    ]
  },
  {
    question: 'How does Heroic integrate with Epic Games and GOG?',
    answer: [
      'Heroic uses two command-line interface (CLI) tools to integrate with the Epic Games store and the GOG store. For Epic Games, it uses Legendary, an open source CLI app developed by derrod and hosted on GitHub at this link: https://github.com/derrod/legendary . For GOG, it uses GOGDL, an open source CLI tool developed by the Heroic team. If you encounter issues with these tools, you can try using an alternative binary by going to the Advanced Settings menu in Heroic and selecting the "Use alternative binary" option. This may help resolve any issues you are experiencing.'
    ]
  },
  {
    question: 'Is there support for different languages in Heroic?',
    answer: [
      `Yes, Heroic has been translated into more than 40 different languages thanks to contributions from the community. You can find a list of the currently supported languages on the Heroic website or in the README file on the GitHub repository. If you would like to help translate Heroic into a new language, you can contribute through the Weblate platform at this link: https://hosted.weblate.org/projects/heroic-games-launcher/ .`
    ]
  },

  {
    question:
      'How can I contribute to the development of Heroic or translate it into a new language?',
    answer: [
      'You can report bugs or suggest new features by opening an issue on the GitHub repository at this link: https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher/issues .',
      'You can contribute code or documentation by creating a pull request on the GitHub repository',
      'You can support the project financially through Patreon, Ko-fi, or GitHub Sponsors at this link: https://heroicgameslauncher.com/donate .',
      'You can help translate Heroic into a new language by contributing through the Weblate platform at this link: https://hosted.weblate.org/projects/heroic-games-launcher/ .'
    ]
  },
  {
    question:
      'How do I use the Steam Runtime to fix missing libraries on Linux when running native Linux games from GOG?',
    answer: [
      'If you are running native Linux games from the GOG store on Linux and encounter issues with missing libraries, you can try using the Steam Runtime to fix the problem. To do this, go to the Game Settings menu in Heroic and select the "Use Steam Runtime" option. This will cause Heroic to use the Steam Runtime to launch the game, which may help to resolve issues with missing libraries. Note that this option is only available on Linux, and it requires that you have the Steam client installed on your computer.'
    ]
  },
  {
    question:
      'Can I use Heroic to manage and launch games from other platforms, such as Ubisoft Connect or the EA App?',
    answer: [
      'Yes, it is possible to use the feature ADD GAME to add another store frontend like Ubisoft Connect and EA APP. However, the integration is not the same as it has for Epic and GOG, since in this case you will need to launch Heroic and then launch the other launcher from within Heroic.'
    ]
  },
  {
    question:
      'Is it possible to use Heroic to launch games that have been purchased outside of the Epic Games Store or GOG, such as on a physical disc or through another digital store?',
    answer: [
      `Yes, you can use the ADD GAME feature in Heroic to add games that have been purchased outside of the Epic Games Store or GOG. After installing the game normally, use the ADD GAME option and fill in the necessary information. Heroic will automatically retrieve an image for the game from the web. If the game requires an installer to be run before launching, you can use the "Run Installer First" button on the ADD GAME screen to do so.`
    ]
  },
  {
    question: 'Is Heroic free to use?',
    answer: ['Yes, Heroic is completely free to use.']
  },
  {
    question: 'Are there any alternatives to Heroic?',
    answer: [
      "Yes, sometimes some game won't work on Heroic for some reason and the good thing about the open source world we have alternatives. For Epic games there are a few alternatives that can be used to launch games depending on the platform. On Linux, some options include Bottles, Lutris, and Gamehub. For GOG games specifically, Minigalaxy is also an option. On Windows, Playnite is a popular alternative."
    ]
  },
  {
    question: "What is Heroic's license?",
    answer: [
      'Heroic is released under the GNU General Public License v3.0. This is a copyleft license, which means that users are free to use, modify, and distribute the app as they see fit, as long as they follow the terms of the license. In particular, any modified version of the app must also be released under the same license, and must include a copy of the license. Therefore, if you make a fork of Heroic and sell it, you must also release the source code for your modified version under the same license, and make it available to others for free. You are also not allowed to use the Heroic name or branding for your fork without permission.'
    ]
  }
]

/** Hungarian */
const hu: { question: string; answer: string[] }[] = [
  {
    question: 'What is Heroic?',
    answer: [
      'Heroic is an open source, lightweight games launcher that is available for Linux, Windows, and macOS. It is an alternative to the Epic Games Launcher and GOG Galaxy, and it is focused on privacy, using fewer resources, and supporting a range of tools such as Wine, Proton, Crossover, DXVK, and VKD3D.'
    ]
  },
  {
    question: 'Is Heroic safe to use?',
    answer: [
      "Yes, Heroic is a safe and secure games launcher that does not collect any data from the user's computer. It is also open source, which means that the source code is publicly available and can be reviewed by the community to ensure that it does not contain any malicious code."
    ]
  },
  {
    question: 'Does Heroic collect my data, username, or password?',
    answer: [
      'No, Heroic is a privacy-centered application and does not collect any data from your computer or device. It does not collect your username, password, or any other personal information. You will login on the official Epic Games Store or GOG website and then Heroic will keep only a token that serves only to list, download and to launch games from those stores.',
      'In addition, Heroic does not collect any usage data or analytics from your use of the application. Your privacy is important to us and we take steps to ensure that your data is secure and not collected or shared without your consent.'
    ]
  },
  {
    question: 'Can I get banned for using Heroic?',
    answer: [
      'It is unlikely that you will get banned for using Heroic to launch games from the Epic Games Store or GOG.',

      'However, please note that certain actions, such as cheating or violating the terms of service for a particular game, may result in a ban. It is important to follow the rules and guidelines of each game and store in order to avoid any issues.',
      'Some games also might ban you if you are trying to run the game on a non-supported operating system using Wine or Proton, for example.'
    ]
  },

  {
    question: 'How do I install Heroic on my computer?',
    answer: [
      `The process for installing Heroic depends on your operating system. On Linux, you can use a package manager such as Flatpak, .deb, .pacman, or .rpm to install Heroic, or you can use an AppImage. On macOS, you can install Heroic as a standard application package and then run the command xattr -r -d com.apple.quarantine /Applications/Heroic.app in the terminal to complete the installation. On Windows, you can use the WinGet package manager by running the command winget install HeroicGamesLauncher.HeroicGamesLauncher, or you can download and run the setup exe or portable exe from the website.`
    ]
  },
  {
    question:
      'What features are currently available in Heroic, and what features are planned for the future?',
    answer: [
      'Currently available features in Heroic include:',
      'Support for launching games from the Epic Games Store and GOG',
      'Support for installing, uninstalling, updating, repairing, and moving games',
      'Support for importing already installed games',
      'Support for playing Epic games online (AntiCheat on macOS and on Linux depends on the game)',
      'Support for playing games using Wine or Proton on Linux',
      'Support for playing games using Crossover on macOS',
      'Support for downloading custom Wine and Proton versions on Linux',
      'Direct access to the Epic and GOG stores from within the Heroic interface',
      'Search for game compatibility information on ProtonDB on Linux',
      'Sync installed games with an existing Epic Games Store installation',
      'Sync saves with the cloud',
      'Custom theming support',
      'Download queue',
      'Add games and applications outside of GOG and Epic Games',
      'Planned features for the future include:',
      'Support for other stores (such as Amazon Gaming and IndieGala)',
      'Play GOG games online'
    ]
  },
  {
    question: 'What are the supported operating systems for Heroic?',
    answer: [
      'Linux: Ubuntu 20.04LTS or newer, Fedora 33 or newer, Arch Linux and derivatives (such as Manjaro, Garuda, and EndeavourOS). Heroic will work on most other Linux distros, but it may require some additional setup and troubleshooting. It is also supported on SteamOS, but downloading is only available through the Discover software center.',
      'Windows: Windows 10 and 11',
      'macOS: macOS 10.15 or newer.'
    ]
  },
  {
    question: 'What are the minimum system requirements for Heroic?',
    answer: [
      'Heroic is an Electron-based application and requires approximately 500MB of storage space. In terms of hardware requirements, the minimum specifications for running Heroic are:',
      '2GB of RAM',
      '1.8GHz dual-core processor',
      'However, please note that these are the minimum requirements and you may need more powerful hardware in order to run certain games or applications.'
    ]
  },
  {
    question: 'How do I use Heroic to play games?',
    answer: [
      'Once you have installed Heroic, you can use it to browse and install games from a range of sources. You can also use it to launch and manage games that you have installed on your computer. If you encounter any issues with games, you can check the general documentation for troubleshooting and workarounds at this link: https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher/wiki . If you are unable to find a solution, you can also seek help on the Heroic Discord server at this link: https://discord.com/invite/rHJ2uqdquK .'
    ]
  },
  {
    question: 'Can I download multiple games at once?',
    answer: [
      'Yes, you can download multiple games at once in Heroic by using the download queue. To use the download queue, simply start a new Install option when already  installing a game. This will add the game to the queue and it will be downloaded once the games in front of it have finished downloading.',
      "You can view the download queue and monitor the progress of your downloads by going to the 'Downloads' tab in the sidebar. From there, you can also pause or cancel downloads as needed."
    ]
  },
  {
    question: 'How can I add games outside Epic or GOG?',
    answer: [
      "You can add games outside Epic or GOG to Heroic by going to the 'Add Games' button on the game Library. This will allow you to browse for the executable on your computer and add it to Heroic as a custom game.",

      "Please note that support for custom games may vary and some features, such as automatic updates and save syncing, may not be available. In addition, you may need to configure the game's settings manually in order to get it to run properly."
    ]
  },
  {
    question: 'What is Wine and how does it work with Heroic?',
    answer: [
      `Wine is a free and open-source compatibility layer that allows Windows applications to run on Unix-like operating systems, including Linux and macOS. Heroic uses Wine to run Windows games on those operating systems.`,
      `Wine is not an emulator, but rather it translates the Windows API calls into POSIX calls that are understood by the operating system. This allows Windows games to run without the need for a full Windows installation.`,
      `You can learn more about Wine and its capabilities on the Wine project website: https://www.winehq.org`
    ]
  },

  {
    question: 'What is Proton and how does it work with Heroic?',
    answer: [
      'Proton is a compatibility layer developed by Valve that allows running Windows games on Linux. It is based on Wine, but includes additional patches and improvements to make it more stable and compatible with a larger number of games. In Heroic, you can use Proton to run Windows games on Linux. You can choose which version of Proton to use for each game, and you can also download custom versions of Proton directly from the Wine Manager page inside Heroic. It is important to note that Proton was not designed to run games outside of Steam, and the results may vary. You can check for compatibility information for each game on the ProtonDB website: https://www.protondb.com'
    ]
  },
  {
    question: 'What is Crossover and how does it work with Heroic?',
    answer: [
      `Crossover is a commercial software that allows you to run Windows applications on Linux and macOS. It is developed by CodeWeavers and can be purchased from their website: https://www.codeweavers.com/ .`,
      `In Heroic, you can use Crossover to run Windows games on macOS by selecting the "Crossover" version in the game settings and also the bottle name (default is HEROIC). Please note that Crossover is a third-party software and its usage is not officially supported by Heroic.`,
      `If you decide to purchase Crossover, you can use the coupon code LEGENDARY to get a discount and support the development of the Legendary app, which is used by Heroic to integrate with the Epic Games Store.`
    ]
  },
  {
    question: 'My game is not working with Heroic. What should I do?',
    answer: [
      `If you are having trouble running a game with Heroic, you can: 
    Check the general documentation for troubleshooting and workarounds at this link: https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher/wiki. This resource may contain information that can help you resolve your issue.`,

      `If you are unable to find a solution in the documentation, you can seek help on the Heroic Discord server at this link: https://discord.com/invite/rHJ2uqdquK . Other users and members of the Heroic team may be able to offer advice or assistance.`,

      `If the issue persists, you can consider opening an issue on the Heroic GitHub page at this link: https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher/issues . Providing as much information as possible about your issue, such as the operating system, game, and any error messages you are seeing, can help the team investigate and resolve the issue.`,

      `If the issue is specific to a particular game, you may want to check the game's documentation or contact the game developer for assistance.`,

      `Finally, you may want to consider trying other tools or compatibility layers, such as Wine or Proton, to see if they can help resolve the issue.`
    ]
  },
  {
    question:
      'Can I use Heroic to install and run native Linux games from the GOG store?',
    answer: [
      `Yes, Heroic can be used to install and run native Linux games from the GOG store. However, it is not currently possible to install or run native Linux games from the Epic Games store, as Epic Games does not currently offer native Linux games. If you encounter issues running a native Linux game with Heroic, you may be able to resolve them by enabling the "Use Steam Runtime" setting in the Game Settings menu. This setting will use the Steam Runtime, if it is installed on your system, to provide any missing libraries that the game may require.`
    ]
  },
  {
    question:
      'Can I use Heroic to install and run native macOS games from GOG and Epic Games?',
    answer: [
      `Yes, Heroic can be used to install and run native macOS games from the GOG store and the Epic Games store. Simply browse and install the games as you would any other game in Heroic.`
    ]
  },
  {
    question:
      'Can I use Heroic to manage and download Wine and Proton versions directly from the interface on Linux?',
    answer: [
      `Yes, Heroic includes tools for managing and downloading Wine and Proton versions directly from the interface on Linux. You can access these tools by going to the Tools menu in the main menu and selecting either "Manage Wine Versions" or "Manage Proton Versions."`
    ]
  },
  {
    question:
      'How can I add game shortcuts to my Desktop or Startup menu in Heroic?',
    answer: [
      `To add game shortcuts to your Desktop or Startup menu in Heroic, first go to the page for the game you want to create a shortcut for. Then, click on the three dots icon in the top right corner of the page and select "Add Shortcuts" from the menu. This will create a shortcut for the game on your Desktop and add it to your Startup menu, so that it will be launched automatically when you start your computer. You can also use the "Add Shortcut to Steam" option to create a shortcut for the game in the Steam client.`
    ]
  },
  {
    question: 'How can I support the Heroic project financially?',
    answer: [
      `If you would like to support the Heroic project financially, there are a few ways you can do so. You can become a patron on Patreon, make a one-time donation through Ko-fi, or sign up as a sponsor on GitHub Sponsors. You can find links to all of these options on the Heroic website at this link: https://heroicgameslauncher.com/donate .`
    ]
  },
  {
    question: 'How can I contribute with translations for Heroic?',
    answer: [
      `If you would like to help translate Heroic into different languages, you can contribute through the Weblate platform at this link: https://hosted.weblate.org/projects/heroic-games-launcher/ . Simply create an account on Weblate and join the project to start translating. Your contributions will be reviewed and merged by the Heroic team.`
    ]
  },
  {
    question: 'How does Heroic integrate with Epic Games and GOG?',
    answer: [
      'Heroic uses two command-line interface (CLI) tools to integrate with the Epic Games store and the GOG store. For Epic Games, it uses Legendary, an open source CLI app developed by derrod and hosted on GitHub at this link: https://github.com/derrod/legendary . For GOG, it uses GOGDL, an open source CLI tool developed by the Heroic team. If you encounter issues with these tools, you can try using an alternative binary by going to the Advanced Settings menu in Heroic and selecting the "Use alternative binary" option. This may help resolve any issues you are experiencing.'
    ]
  },
  {
    question: 'Is there support for different languages in Heroic?',
    answer: [
      `Yes, Heroic has been translated into more than 40 different languages thanks to contributions from the community. You can find a list of the currently supported languages on the Heroic website or in the README file on the GitHub repository. If you would like to help translate Heroic into a new language, you can contribute through the Weblate platform at this link: https://hosted.weblate.org/projects/heroic-games-launcher/ .`
    ]
  },

  {
    question:
      'How can I contribute to the development of Heroic or translate it into a new language?',
    answer: [
      'You can report bugs or suggest new features by opening an issue on the GitHub repository at this link: https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher/issues .',
      'You can contribute code or documentation by creating a pull request on the GitHub repository',
      'You can support the project financially through Patreon, Ko-fi, or GitHub Sponsors at this link: https://heroicgameslauncher.com/donate .',
      'You can help translate Heroic into a new language by contributing through the Weblate platform at this link: https://hosted.weblate.org/projects/heroic-games-launcher/ .'
    ]
  },
  {
    question:
      'How do I use the Steam Runtime to fix missing libraries on Linux when running native Linux games from GOG?',
    answer: [
      'If you are running native Linux games from the GOG store on Linux and encounter issues with missing libraries, you can try using the Steam Runtime to fix the problem. To do this, go to the Game Settings menu in Heroic and select the "Use Steam Runtime" option. This will cause Heroic to use the Steam Runtime to launch the game, which may help to resolve issues with missing libraries. Note that this option is only available on Linux, and it requires that you have the Steam client installed on your computer.'
    ]
  },
  {
    question:
      'Can I use Heroic to manage and launch games from other platforms, such as Ubisoft Connect or the EA App?',
    answer: [
      'Yes, it is possible to use the feature ADD GAME to add another store frontend like Ubisoft Connect and EA APP. However, the integration is not the same as it has for Epic and GOG, since in this case you will need to launch Heroic and then launch the other launcher from within Heroic.'
    ]
  },
  {
    question:
      'Is it possible to use Heroic to launch games that have been purchased outside of the Epic Games Store or GOG, such as on a physical disc or through another digital store?',
    answer: [
      `Yes, you can use the ADD GAME feature in Heroic to add games that have been purchased outside of the Epic Games Store or GOG. After installing the game normally, use the ADD GAME option and fill in the necessary information. Heroic will automatically retrieve an image for the game from the web. If the game requires an installer to be run before launching, you can use the "Run Installer First" button on the ADD GAME screen to do so.`
    ]
  },
  {
    question: 'Is Heroic free to use?',
    answer: ['Yes, Heroic is completely free to use.']
  },
  {
    question: 'Are there any alternatives to Heroic?',
    answer: [
      "Yes, sometimes some game won't work on Heroic for some reason and the good thing about the open source world we have alternatives. For Epic games there are a few alternatives that can be used to launch games depending on the platform. On Linux, some options include Bottles, Lutris, and Gamehub. For GOG games specifically, Minigalaxy is also an option. On Windows, Playnite is a popular alternative."
    ]
  },
  {
    question: "What is Heroic's license?",
    answer: [
      'Heroic is released under the GNU General Public License v3.0. This is a copyleft license, which means that users are free to use, modify, and distribute the app as they see fit, as long as they follow the terms of the license. In particular, any modified version of the app must also be released under the same license, and must include a copy of the license. Therefore, if you make a fork of Heroic and sell it, you must also release the source code for your modified version under the same license, and make it available to others for free. You are also not allowed to use the Heroic name or branding for your fork without permission.'
    ]
  }
]
