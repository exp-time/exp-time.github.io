const cardData = [
  {
    title: "API Endpoints",
    iconClass: "fa fa-terminal",
    content: "Custom built, with effortless use.\nData-products for seamless integration.\nAdvanced applications and tangible value generation",
    info_Title: "API Information", 
    info_Content:"Law inexpedient noble reason abstract revaluation war salvation\n snare burying merciful love inexpedient strong.Inexpedient\n prejudice ideal victorious deceptions good holiest.\n Faithful philosophy endless fearful enlightenment."
  },
  {
    title: "Terminal Test",
    iconClass: "",
    content: 0, // createWebTerminal()
    info_Title: "second_info", 
    info_Content:"Law inexpedient noble reason abstract revaluation war salvation\n snare burying merciful love inexpedient strong.Inexpedient\n prejudice ideal victorious deceptions good holiest.\n Faithful philosophy endless fearful enlightenment."
  },
  {
    title: "Artificial Intelligence",
    iconClass: "fa fa-cog",
    content: "AI methods in support of people. Useful AI.",
    info_Title: "third_info", 
    info_Content:"Law inexpedient noble reason abstract revaluation war salvation\n snare burying merciful love inexpedient strong.Inexpedient\n prejudice ideal victorious deceptions good holiest.\n Faithful philosophy endless fearful enlightenment."
  },
  {
    title: "Simple UI <-> Advanced functionality",
    iconClass: "fa fa-check-square",
    content: "TODO TEST",
    info_Title: "nineth_info", 
    info_Content:"Law inexpedient noble reason abstract revaluation war salvation\n snare burying merciful love inexpedient strong.Inexpedient\n prejudice ideal victorious deceptions good holiest.\n Faithful philosophy endless fearful enlightenment."
  },
  {
    title: "Networks",
    iconClass: "fa fa-code-fork",
    content: "Network analysis",
    info_Title: "seventh_info", 
    info_Content:"Law inexpedient noble reason abstract revaluation war salvation\n snare burying merciful love inexpedient strong.Inexpedient\n prejudice ideal victorious deceptions good holiest.\n Faithful philosophy endless fearful enlightenment."
  },
  {
    title: "Analytics",
    iconClass: "fa fa-bar-chart",
    content: "Combine API's with analytics.",
    info_Title: "sixth_info", 
    info_Content:"Law inexpedient noble reason abstract revaluation war salvation\n snare burying merciful love inexpedient strong.Inexpedient\n prejudice ideal victorious deceptions good holiest.\n Faithful philosophy endless fearful enlightenment."
  },
  {
    title: "Excel Automation",
    iconClass: "",
    content: 1, // createEditableTable()
    info_Title: "eight_info", 
    info_Content:"Law inexpedient noble reason abstract revaluation war salvation\n snare burying merciful love inexpedient strong.Inexpedient\n prejudice ideal victorious deceptions good holiest.\n Faithful philosophy endless fearful enlightenment."
  },
  {
    title: "High Level Mathematics",
    iconClass: "fa fa-superscript",
    content: "Cutting edge optimization.",
    info_Title: "fifth_info", 
    info_Content:"Law inexpedient noble reason abstract revaluation war salvation\n snare burying merciful love inexpedient strong.Inexpedient\n prejudice ideal victorious deceptions good holiest.\n Faithful philosophy endless fearful enlightenment."
  },
  {
    title: "Deep Tech",
    iconClass: "fa fa-spinner",
    content: "Quantum Computing. Exploring Analog/Annealing methods.",
    info_Title: "fourth_info", 
    info_Content:"Law inexpedient noble reason abstract revaluation war salvation\n snare burying merciful love inexpedient strong.Inexpedient\n prejudice ideal victorious deceptions good holiest.\n Faithful philosophy endless fearful enlightenment."
  },
  {
    title: "TODO TEST",
    iconClass: "fa fa-check-square",
    content: "TODO TEST",
    info_Title: "tenth_info", 
    info_Content:"Law inexpedient noble reason abstract revaluation war salvation\n snare burying merciful love inexpedient strong.Inexpedient\n prejudice ideal victorious deceptions good holiest.\n Faithful philosophy endless fearful enlightenment."
  },
  {
    title: "TODO TEST",
    iconClass: "fa fa-check-square",
    content: "TODO TEST",
    info_Title: "eleventh_info", 
    info_Content:"Law inexpedient noble reason abstract revaluation war salvation\n snare burying merciful love inexpedient strong.Inexpedient\n prejudice ideal victorious deceptions good holiest.\n Faithful philosophy endless fearful enlightenment."
  },
  {
    title: "Tech",
    iconClass: "fa fa-check-square",
    content: "D-Wave ocean, WasmCloud, Docker, Xlwings, Anaconda, Cuda-Q",
    info_Title: "twelvth_info", 
    info_Content:"Law inexpedient noble reason abstract revaluation war salvation\n snare burying merciful love inexpedient strong.Inexpedient\n prejudice ideal victorious deceptions good holiest.\n Faithful philosophy endless fearful enlightenment."
  }
];

const modalData = [
  {
    id: "contact_modal",
    title: "Contact Information",
    content: "Email: Hello (at) this domain. Currently broken!",
    footerContent: "",
  },
  {
    id: "about_modal",
    title: "About section",
    content: "In computational complexity theory, the complexity class EXPTIME (sometimes called EXP or DEXPTIME) is the set of all decision problems that are solvable by a deterministic Turing machine in  exponential time, i.e., in O(2ᵖ⁽ⁿ⁾) time, where p(n) is a polynomial function of n[1].",
    footerContent: {"[1] wikipedia/EXPTIME": "https://en.wikipedia.org/wiki/EXPTIME",}, 
  },
  {
    id: "unfinished_modal",
    title: "Site Under Construction",
    content: "The site is under construction. Most of the contents are copy-paste type placeholders, and thus links, contact address and most everything else might or might not work currently. Contents subject to major change.",
    footerContent: "",  
  },
];

const sideBarData = [
  {
    id: 'GitRepos',
    title: "GitHub Repositories",
    content:{
      'Pickup and Delivery Problem (Unf.)': 'https://github.com/exp-time/Pickup-and-delivery',
      'Placeholder (TODO)': '',
      'Excel example (TODO)': '',
      'Analytics Example(TODO)': '',
      'Quantum Clustering (Unf.)': 'https://github.com/exp-time/Quantum-Clustering',
      'Quantum Example 2 (TODO)': '',
    },
  },
  {
    id: 'DocsLinks',
    title: "Documentation",
    content:{
      'Weather Lane Api Docs (Unf.)': 'https://docs.google.com/document/d/e/2PACX-1vQTuUQwS_95SjMQVZ63veCzpdOkEb-D0hEQpQHAH2s0d7LQZr3sqefKGL3NkKgAQMc51UzFiGmrOHDA/pub',
      'Template Document': 'Docs/Template Document.pdf',
      'Docs ex.2 (TODO)': '',
      'Docs ex.3 (TODO)': '',
      'Docs ex.4 (TODO)': '',
      'Docs ex.5 (TODO)': '',
      'Docs ex.6 (TODO)': '',
      'Docs ex.7 (TODO)': '',
    },
  },
];

const clickablesData = [
  {
    link: 'https://github.com/exp-time',
    content: 'github.com/exp-time',
    icon: 'fa-github',
  },
  {
    link: 'https://discord.gg/h4F49RCZcy',
    content: 'To Discord',
    icon: 'fa-discord',
  },
  {
    link: '',
    content: 'Go top',
    icon: 'fa-chevron-circle-up',
  },
];
const headerButtons = [
  {
    id: 'https://github.com/exp-time',
    content: 'github.com/exp-time',
    icon: 'fa-github',
  },
];