import { IconBrandGithub, IconBrandLinkedin, IconBrandX } from "@tabler/icons-vue";

export default defineAppConfig({
    skills: [
        {
            image: "/skills/typescript.svg",
            name: "TypeScript",
        },
        {
            image: "/skills/csharp.svg",
            name: "C#",
        },
        {
            image: "/skills/nuxt.svg",
            name: "Nuxt",
        },
        {
            image: "/skills/vue.svg",
            name: "Vue",
        },
        {
            image: "/skills/nodejs.svg",
            name: "Nodejs",
        },
    ],
    socials: [
        {
            url: "https://www.linkedin.com/in/moritzmla/",
            name: "Linkedin",
            icon: IconBrandLinkedin,
        },
        {
            url: "https://x.com/moritzmla",
            name: "X",
            icon: IconBrandX,
        },
        {
            url: "https://github.com/moritzmla",
            name: "GitHub",
            icon: IconBrandGithub,
        },
    ],
    projects: [
        {
            url: "https://github.com/moritzmla/nuxt-shopify-template",
            name: "Nuxt Shopify Template",
            description: "Eine einfache Shopify-Vorlage, die mit Nuxt 3 erstellt wurde.",
        },
        {
            url: "https://github.com/moritzmla/Reddnet",
            name: "Reddnet",
            description:
                "Ein einfaches Open-Source-Mini-Reddit, geschrieben in .NET 6.0 mit ASP.NET Core.",
        },
    ],
});
