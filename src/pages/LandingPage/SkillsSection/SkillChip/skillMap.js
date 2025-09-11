import React from "react";
import { Box, Icon } from "@mui/material";

// Icons
import {
    SiJavascript,
    SiTypescript,
    SiDotnet,
    SiReact,
    SiSubversion,
    SiSqlite,
    SiMixpanel,
    SiGoogleanalytics,
    SiHubspot,
    SiCplusplus,
    SiHtml5,
    SiCss3,
    SiNodedotjs,
    SiGit,
} from "react-icons/si";

// import awsLogo from "../../../../assets/images/logos/technologies/aws.svg";

const skillMap = {
    javascript: {
        label: "JavaScript",
        icon: SiJavascript
    },
    typescript: {
        label: "TypeScript",
        icon: SiTypescript
    },
    csharp: {
        label: "C#",
        icon: SiDotnet
    },
    cplusplus: {
        label: "C/C++",
        icon: SiCplusplus
    },
    reactjs: {
        label: "React JS",
        icon: SiReact
    },
    html5: {
        label: "HTML5",
        icon: SiHtml5
    },
    css3: {
        label: "CSS3",
        icon: SiCss3
    },
    nodejs: {
        label: "Node JS",
        icon: SiNodedotjs
    },
    aspdotnet: {
        label: "ASP.NET",
        icon: SiDotnet
    },
    sql: {
        label: "SQL Server",
        icon: SiSqlite
    },
    sqllite: {
        label: "SQL Lite",
        icon: SiSqlite
    },
    aws: {
        label: "AWS",
        icon: SiDotnet
    },
    git: {
        label: "Git",
        icon: SiGit
    },
    mixpanel: {
        label: "Mixpanel",
        icon: SiMixpanel
    },
    ga4: {
        label: "Google Analytics 4",
        icon: SiGoogleanalytics
    },
    hubspot: {
        label: "Hubspot",
        icon: SiHubspot
    },
    svn: {
        label: "SVN",
        icon: SiSubversion
    },
};

export default skillMap;