import { buildS3Url } from "@/utils/s3Url";
import { ENV } from "@/config/env";

const humanSideCards = [
    {
        id: "historia",
        title: "card_section.card_1.title",
        icon: 'ri-road-map-line',
        image_url: buildS3Url(ENV.bucket, ENV.region, "about_me/building.jpg"),
        description: "card_section.card_1.description",
        span: { xs: { c: 12, r: 1 }, sm: { c: 12, r: 1 }, md: { c: 8, r: 1 } }
    },
    {
        id: "familia",
        title: "card_section.card_2.title",
        icon: 'ri-home-2-line',
        image_url: buildS3Url(ENV.bucket, ENV.region, "about_me/family.jpg"),
        description: "card_section.card_2.description",
        span: { xs: { c: 12, r: 1 }, sm: { c: 6, r: 1 }, md: { c: 4, r: 1 } }
    },
    {
        id: "valores",
        title: "card_section.card_3.title",
        icon: 'ri-earth-line',
        image_url: buildS3Url(ENV.bucket, ENV.region, "about_me/universe.png"),
        description: "card_section.card_3.description",
        span: { xs: { c: 12, r: 1 }, sm: { c: 6, r: 1 }, md: { c: 4, r: 1 } }
    },
    {
        id: "analitico",
        title: "card_section.card_4.title",
        icon: 'ri-book-open-line',
        image_url: buildS3Url(ENV.bucket, ENV.region, "about_me/analysis.jpg"),
        description: "card_section.card_4.description",
        span: { xs: { c: 12, r: 1 }, sm: { c: 6, r: 1 }, md: { c: 4, r: 1 } }
    },
    {
        id: "pizzas",
        title: "card_section.card_5.title",
        icon: 'ri-restaurant-line',
        image_url: buildS3Url(ENV.bucket, ENV.region, "about_me/pizza.jpg"),
        description: "card_section.card_5.description",
        span: { xs: { c: 12, r: 1 }, sm: { c: 6, r: 2 }, md: { c: 4, r: 1 } }
    },
    {
        id: "coding",
        title: "card_section.card_6.title",
        icon: 'ri-code-s-slash-line',
        image_url: buildS3Url(ENV.bucket, ENV.region, "about_me/react.jpg"),
        description: "card_section.card_6.description",
        span: { xs: { c: 12, r: 1 }, sm: { c: 6, r: 1 }, md: { c: 4, r: 1 } }
    },
    {
        id: "musica",
        title: "card_section.card_7.title",
        icon: 'ri-music-2-line',
        image_url: buildS3Url(ENV.bucket, ENV.region, "about_me/music.jpg"),
        description: "card_section.card_7.description",
        span: { xs: { c: 12, r: 1 }, sm: { c: 6, r: 1 }, md: { c: 8, r: 1 } }
    },
]

const identityData = [
    { icon: "ri-music-2-line", description: "identity_section.identity_1" },
    { icon: "ri-restaurant-line", description: "identity_section.identity_2" },
    { icon: "ri-parent-line", description: "identity_section.identity_3" },
    { icon: "ri-code-s-slash-line", description: "identity_section.identity_4" },
    { icon: "ri-question-line", description: "identity_section.identity_5" },
    { icon: "ri-book-line", description: "identity_section.identity_6" },
    { icon: "ri-hand-heart-line", description: "identity_section.identity_7" },
    { icon: "ri-cup-line", description: "identity_section.identity_8" },
];

export default {
    humanSideCards,
    identityData
}