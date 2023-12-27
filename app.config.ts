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
            icon: IconBrandLinkedin,
        },
        {
            url: "https://x.com/moritzmla",
            icon: IconBrandX,
        },
        {
            url: "https://github.com/moritzmla",
            icon: IconBrandGithub,
        },
    ],
});
