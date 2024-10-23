/*
Project object properties:
- name : name of project
- type : "WEBSITE" | "WEBAPP" | "GAME" | "LIBRARY"
- technologies : array of used technologies
- webURL ?: link to website
- documentationURL ?: link to documentation
- sourceCodeURL ?: link to source code
- deprecated ?: can be set to true when project is useless, bad or related to old technologies
- notice ?: notice message
*/

const projects = [
    {
        name: "Předpověď počasí",
        type: "WEBAPP",
        technologies: ["HTML", "CSS", "TypeScript", "Webpack"],
        webURL: "https://jirkasa.github.io/predpoved-pocasi/",
        sourceCodeURL: "https://github.com/Jirkasa/predpoved-pocasi"
    },
    {
        name: "Code Box",
        type: "LIBRARY",
        technologies: ["HTML", "CSS", "TypeScript", "Webpack"],
        documentationURL: "https://jirkasa.github.io/code-box/",
        sourceCodeURL: "https://github.com/Jirkasa/code-box"
    },
    {
        name: "Servlet Router - CSRF Protection",
        type: "LIBRARY",
        technologies: ["Java"],
        sourceCodeURL: "https://github.com/Jirkasa/servlet-router-csrf-protection"
    },
    {
        name: "Servlet Router",
        type: "LIBRARY",
        technologies: ["Java"],
        documentationURL: "https://jirkasa.github.io/servlet-router/",
        sourceCodeURL: "https://github.com/Jirkasa/servlet-router"
    },
    {
        name: "Servlety a JSP - Návod",
        type: "WEBSITE",
        technologies: ["HTML", "CSS", "TypeScript", "Webpack"],
        webURL: "https://jirkasa.github.io/servlety-a-jsp-navod/",
        sourceCodeURL: "https://github.com/Jirkasa/servlety-a-jsp-navod"
    },
    {
        name: "String Striker",
        type: "GAME",
        technologies: ["HTML", "CSS", "JS", "Three.js", "Node.js", "MySQL", "Redis", "Webpack"],
        webURL: "https://string-striker.com/"
    },
    {
        name: "Kuře na silnici",
        type: "GAME",
        technologies: ["HTML", "CSS", "JS", "Three.js", "PHP", "MySQL", "Webpack"],
        webURL: "https://kure-na-silnici.4fan.cz/",
        sourceCodeURL: "https://github.com/Jirkasa/rocnikova-prace"
    },
    {
        name: "Three.js návod",
        type: "WEBSITE",
        technologies: ["HTML", "CSS", "JS", "Three.js", "Webpack"],
        webURL: "https://jirkasa.github.io/threejs-navod/",
        sourceCodeURL: "https://github.com/Jirkasa/threejs-navod"
    },
    {
        name: "Webpack tahák",
        type: "WEBSITE",
        technologies: ["HTML", "CSS", "JS", "Webpack"],
        webURL: "https://jirkasa.github.io/webpack-tahak/",
        sourceCodeURL: "https://github.com/Jirkasa/webpack-tahak"
    },
    {
        name: "Testování v JS - Tahák",
        type: "WEBSITE",
        technologies: ["HTML", "CSS"],
        webURL: "https://jirkasa.github.io/testovani-v-js-tahak/",
        sourceCodeURL: "https://github.com/Jirkasa/testovani-v-js-tahak"
    },
    {
        name: "Díla na maturitu",
        type: "WEBAPP",
        technologies: ["HTML", "CSS", "JS", "React", "Node.js", "MySQL"],
        sourceCodeURL: "https://github.com/Jirkasa/dila-na-maturitu",
        notice: "Tento projekt je již mrtvý, ale materiály, které s jeho pomocí byly vytvořeny jsou archivovány na GitHubu."
    },
    {
        name: "React taháky",
        type: "WEBSITE",
        technologies: ["HTML", "CSS"],
        webURL: "https://jirkasa.github.io/react-tahaky/",
        sourceCodeURL: "https://github.com/Jirkasa/react-tahaky"
    },
    {
        name: "Teorie grafického designu",
        type: "WEBSITE",
        technologies: ["HTML", "CSS", "JS"],
        webURL: "https://jirkasa.github.io/teorie-grafickeho-designu/",
        sourceCodeURL: "https://github.com/Jirkasa/teorie-grafickeho-designu",
        notice: "Tento web je o teorii grafického designu, ale z grafického hlediska vypadá otřesně. Co se však týče obsahu, myslím, že to není zas tak špatné."
    },
    {
        name: "Web design tahák",
        type: "WEBSITE",
        technologies: ["HTML", "CSS", "JS"],
        webURL: "https://jirkasa.github.io/web-design-tahak/",
        sourceCodeURL: "https://github.com/Jirkasa/web-design-tahak"
    },
    {
        name: "Návrhové vzory v JS",
        type: "WEBSITE",
        technologies: ["HTML", "CSS", "JS"],
        webURL: "https://jirkasa.github.io/navrhove-vzory-v-js/",
        sourceCodeURL: "https://github.com/Jirkasa/navrhove-vzory-v-js",
        deprecated: true,
        notice: "Tento web o návrhových vzorech v JavaScriptu bude pravděpodobně většině lidí k ničemu. Vytvořil jsem ho, když jsem se o nich učil. Možná by se někdy mohl hodit mě samotnému, ale také spíš ne, protože existují mnohem lepší zdroje, kde jsou návrhové vzory lépe vysvětleny."
    },
    {
        name: "Algoritmy a datové struktury v JS",
        type: "WEBSITE",
        technologies: ["HTML", "CSS", "JS"],
        webURL: "https://jirkasa.github.io/algoritmy-a-datove-struktury-v-js/",
        sourceCodeURL: "https://github.com/Jirkasa/algoritmy-a-datove-struktury-v-js"
    },
    {
        name: "SmartMenus tutoriál",
        type: "WEBSITE",
        technologies: ["HTML", "CSS", "JS"],
        webURL: "https://jirkasa.github.io/smartmenus-tutorial/",
        sourceCodeURL: "https://github.com/Jirkasa/smartmenus-tutorial",
        deprecated: true,
        notice: "Tento web je o JQuery pluginu jménem SmartMenus. JQuery už je ale zastaralé a rozhodně nedoporučuji jej používat."
    },
    {
        name: "Funkce v JS",
        type: "WEBSITE",
        technologies: ["HTML", "CSS"],
        webURL: "https://jirkasa.github.io/funkce-v-js/",
        sourceCodeURL: "https://github.com/Jirkasa/funkce-v-js"
    },
    {
        name: "Slick tutoriál",
        type: "WEBSITE",
        technologies: ["HTML", "CSS", "JS"],
        webURL: "https://jirkasa.github.io/slick-tutorial/",
        sourceCodeURL: "https://github.com/Jirkasa/slick-tutorial",
        deprecated: true,
        notice: "Tento web je o JQuery pluginu jménem Slick. JQuery už je ale zastaralé a rozhodně nedoporučuji jej používat."
    },
    {
        name: "Piš všemi deseti",
        type: "WEBAPP",
        technologies: ["HTML", "CSS", "JS", "PHP"],
        webURL: "https://pis-vsemi-deseti.4fan.cz/"
    },
    {
        name: "MySQL tahák",
        type: "WEBSITE",
        technologies: ["HTML", "CSS", "JS"],
        webURL: "https://jirkasa.github.io/mysql-tahak/",
        sourceCodeURL: "https://github.com/Jirkasa/mysql-tahak"
    },
    {
        name: "JS promisy",
        type: "WEBSITE",
        technologies: ["HTML", "CSS", "JS"],
        webURL: "https://jirkasa.github.io/javascript-promisy/",
        sourceCodeURL: "https://github.com/Jirkasa/javascript-promisy"
    },
    {
        name: "Pole v JS",
        type: "WEBSITE",
        technologies: ["HTML", "CSS", "JS"],
        webURL: "https://pole-v-js.4fan.cz/"
    },
    {
        name: "Strukturování CSS kódu",
        type: "WEBSITE",
        technologies: ["HTML", "CSS", "JS"],
        webURL: "https://strukturovani-css-kodu.4fan.cz/",
        notice: 'Část "Postup při tvorbě", která se na tomto webu nachází a popisuje můj postup při tvorbě projektu, již vůbec neodpovídá skutečnosti. Dnes už jsem na úplně jiné úrovni, ale každý jsme nějak začínali.'
    },
    {
        name: "CSS layouty",
        type: "WEBSITE",
        technologies: ["HTML", "CSS"],
        webURL: "https://css-layouty.4fan.cz/",
        deprecated: true,
        notice: "Tento web, který se zabývá tvorbou layoutů v CSS, je nic moc. Pokud se chcete naučit tvořit layouty, najděte si nějaký lepší zdroj."
    },
    {
        name: "Ukázky kódu v HTML",
        type: "WEBAPP",
        technologies: ["HTML", "CSS", "JS"],
        webURL: "https://ukazky-kodu-v-html.4fan.cz/",
        deprecated: true,
        notice: "Tento projekt je naprosto zbytečná webová aplikace. Nic zbytečnějšího jsem snad ani nevytvořil, ale hlavně že to na hlavní stránce webu tak vychvaluju :D. Tento projekt mi připomíná, že je v pořádku vytvořit na své cestě při učení se programovat i takové blbosti. Všichni nějak začínáme."
    },
    {
        name: "Less preprocesor návod",
        type: "WEBSITE",
        technologies: ["HTML", "CSS", "JS"],
        webURL: "https://less-preprocesor-navod.4fan.cz/"
    },
    {
        name: "Programování her v JavaScriptu",
        type: "WEBSITE",
        technologies: ["HTML", "CSS", "JS", "PHP"],
        webURL: "https://programovani-her-v-javascriptu.4fan.cz/"
    },
    {
        name: "Texturování v Substance Painteru",
        type: "WEBSITE",
        technologies: ["HTML", "CSS"],
        webURL: "https://texturovani-v-substance-painteru.4fan.cz/",
        notice: "Jedná se o můj první web, který jsem publikoval na internetu. Není to moc responzivní."
    }
]

export default projects;