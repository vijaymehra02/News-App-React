import React, { Component } from 'react'
import Newsitem from './Newsitem'

export default class Newscomponent extends Component {

  articles = [
    {
      "source": {
        "id": "engadget",
        "name": "Engadget"
      },
      "author": "Kris Holt",
      "title": "Apple TV will stream every MLS game for free this weekend",
      "description": "If you happen to find yourself at a loose end this weekend, it might not be a bad idea to fire up the Apple TV app and check out some Major League Soccer action. All 14 of this weekend's games will be available to watch for free in English and Spanish, so you…",
      "url": "https://www.engadget.com/apple-tv-will-stream-every-mls-game-for-free-this-weekend-170045330.html",
      "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-06/bb155570-ec02-11ec-83fb-c6c11ad20cf4",
      "publishedAt": "2024-03-14T17:00:45Z",
      "content": "If you happen to find yourself at a loose end this weekend, it might not be a bad idea to fire up the Apple TV app and check out some Major League Soccer action. All 14 of this weekend's games will b… [+923 chars]"
    },
    {
      "source": {
        "id": "wired",
        "name": "Wired"
      },
      "author": "Simon Hill",
      "title": "Blink Mini 2 Review: Small Size, Big Value",
      "description": "Amazon’s small but mighty Blink Mini 2 comes with handy person detection, if you can stomach another subscription.",
      "url": "https://www.wired.com/review/blink-mini-2/",
      "urlToImage": "https://media.wired.com/photos/65f210bc4afda3a2fd9a6330/191:100/w_1280,c_limit/blink-mini-2-collage.jpg",
      "publishedAt": "2024-03-14T13:00:00Z",
      "content": "I set the camera to record clips when it detected a person, and it hasnt made many mistakes. (It has categorized a couple of clips with people in them as motion, but there have been no false positive… [+2799 chars]"
    },
    {
      "source": {
        "id": "the-verge",
        "name": "The Verge"
      },
      "author": "Quentyn Kennemer",
      "title": "Sonos soundbars and speakers are on sale just in time for March Madness",
      "description": "Sonos is taking 20 percent off the Sonos Ray and Beam soundbars, the matching Sub Mini woofer, and a Move 2 portable speaker.",
      "url": "https://www.theverge.com/2024/3/14/24100247/sonos-ray-beam-sub-mini-move-2-march-madness-deal-sale",
      "urlToImage": "https://cdn.vox-cdn.com/thumbor/084EcXLB2GCIznfzqerJc_uximQ=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/22888939/cwelch_290921_4780_5681.jpg",
      "publishedAt": "2024-03-14T13:59:22Z",
      "content": "Sonos soundbars and speakers are on sale just in time for March Madness\r\nSonos soundbars and speakers are on sale just in time for March Madness\r\n / You can save 20 percent on the Ray and Beam soundb… [+4645 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Gizmodo.com"
      },
      "author": "Florence Ion",
      "title": "OnePlus Watch 2 Review: A Long-Lasting Android Smartwatch",
      "description": "I did it. I wore the OnePlus Watch 2 for two weeks to write this review. It was tough at times, and I have to be honest, I hated some of it. (Though not as much as my former coworker hated the first version of this watch.) The OnePlus Watch 2 does not vibe wi…",
      "url": "https://gizmodo.com/oneplus-watch-2-specs-performance-fitness-1851333880",
      "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/7332b2ae51f88517bc9a26fea9638ff2.png",
      "publishedAt": "2024-03-14T14:00:00Z",
      "content": "OnePlus Watch 2\r\nOnePlus's second attempt at an Android smartwatch is so much better than the first round if you can handle the big look. \r\nThe OnePlus Watch 2 offers Android users the best battery l… [+7890 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "https://www.facebook.com/bbcnews",
      "title": "Critics say Morning Show star is magnetic on stage",
      "description": "Emmy-winning actor Billy Crudup is starring in a one-man play, Harry Clarke, in London's West End.",
      "url": "https://www.bbc.co.uk/news/entertainment-arts-68556131",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/15A19/production/_132910688_indcrbillycrudupinharryclarke.credit-carolrosegg.0252.jpg",
      "publishedAt": "2024-03-14T11:29:52Z",
      "content": "Critics have praised The Morning Show star Billy Crudup's performance in one-man show Harry Clarke as \"magnetic\".\r\nThe Emmy-winning actor previously starred in the show in New York before its transfe… [+7561 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "MacRumors"
      },
      "author": "Juli Clover",
      "title": "Hello Kitty to Make Special Appearance at Apple Union Square",
      "description": "To celebrate an in-game event for popular Apple Arcade game Hello Kitty Island Adventure, Apple is teaming up with Sanrio to have Hello Kitty herself visit Apple Union Square in San Francisco, California.\n\n\n\n\n\nHello Kitty will be at the San Francisco store on…",
      "url": "https://www.macrumors.com/2024/03/14/hello-kitty-apple-union-square/",
      "urlToImage": "https://images.macrumors.com/t/CxS8DTkoz-FziT8LeTpCZaQZPdk=/2000x/article-new/2024/03/hello-kitty-island-adventure.jpg",
      "publishedAt": "2024-03-14T16:55:52Z",
      "content": "To celebrate an in-game event for popular Apple Arcade game Hello Kitty Island Adventure, Apple is teaming up with Sanrio to have Hello Kitty herself visit Apple Union Square in San Francisco, Califo… [+1164 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "MacRumors"
      },
      "author": "Joe Rossignol",
      "title": "Apple Sports App Updated for MLB and NCAA's March Madness",
      "description": "The new Apple Sports app for the iPhone received its first update today with optimizations for the MLB and NCAA's March Madness. If you are a fan of these leagues, make sure to update the app to ensure that complete data is available.\n\n\n\n\n\nThe full release no…",
      "url": "https://www.macrumors.com/2024/03/14/apple-sports-app-mlb-and-ncaa-march-madness/",
      "urlToImage": "https://images.macrumors.com/t/24EUIBKjWIbL4h7Cgj-9twCURaI=/1961x/article-new/2024/02/Apple-Sports-App-Preview-Feature.jpg",
      "publishedAt": "2024-03-14T13:01:17Z",
      "content": "The new Apple Sports app for the iPhone received its first update today with optimizations for the MLB and NCAA's March Madness. If you are a fan of these leagues, make sure to update the app to ensu… [+740 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "MacRumors"
      },
      "author": "Joe Rossignol",
      "title": "Apple Begins Selling Refurbished iMac With M3 Chip in Canada",
      "description": "Apple this week added the latest-generation iMac with the M3 chip to its certified refurbished store in Canada for the first time since the computer was introduced in October. As a reminder, availability in the U.S. began last month.\n\n\n\n\n\nAs usual for Apple's…",
      "url": "https://www.macrumors.com/2024/03/14/apple-refurbished-m3-imac-canada/",
      "urlToImage": "https://images.macrumors.com/t/GWseXmv6rDBfqsbBH5mnDKt2v_E=/2500x/article-new/2023/11/M3-iMac-Feature-Teal.jpg",
      "publishedAt": "2024-03-14T13:50:29Z",
      "content": "Apple this week added the latest-generation iMac with the M3 chip to its certified refurbished store in Canada for the first time since the computer was introduced in October. As a reminder, availabi… [+944 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "MacRumors"
      },
      "author": "Hartley Charlton",
      "title": "Apple Vision Pro's Name May Still Face Trademark Issues in China",
      "description": "The Apple's Vision Pro headset may still face trademark issues with Huawei when the company launches it in China.\n\n\n\n\n\nAs highlighted by the South China Morning Post, Chinese tech giant Huawei registered the \"Vision Pro\" name in the country in 2021. This regi…",
      "url": "https://www.macrumors.com/2024/03/14/vision-pro-trademark-issues-in-china/",
      "urlToImage": "https://images.macrumors.com/t/YKtAsJO8NDYr3D05sfn-vc73xx4=/1920x/article-new/2023/09/Vision-Pro-Person.jpg",
      "publishedAt": "2024-03-14T12:57:00Z",
      "content": "The Apple's Vision Pro headset may still face trademark issues with Huawei when the company launches it in China.\r\nAs highlighted by the South China Morning Post, Chinese tech giant Huawei registered… [+1029 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "CNET"
      },
      "author": "Abrar Al-Heeti",
      "title": "Spotify Music Videos Are Launching -- With One Big Catch - CNET",
      "description": "Look out, YouTube.",
      "url": "https://www.cnet.com/tech/services-and-software/spotify-music-videos-are-launching-with-one-big-catch/",
      "urlToImage": "https://www.cnet.com/a/img/resize/b27c684496e93dd22416dbf2bd37ce139ba4e304/hub/2022/04/15/151c9a6a-fb38-4fa2-93b1-c0886080b8e8/spotify-logo-2022-147.jpg?auto=webp&fit=crop&height=675&width=1200",
      "publishedAt": "2024-03-14T11:00:11Z",
      "content": "Music streaming service Spotify is adding full music videos to its platform, the company said Wednesday, but not everyone will be able to access the new feature just yet. For now, it's available in b… [+1977 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "CNET"
      },
      "author": "Tyler Lacoma",
      "title": "Blink Mini 2 Review: Plentiful Features, Small Size - CNET",
      "description": "The Blink Mini 2 remains a compact security cam while adding indoor-outdoor features and more.",
      "url": "https://www.cnet.com/home/security/blink-mini-2-review-plentiful-features-in-a-small-size/",
      "urlToImage": "https://www.cnet.com/a/img/resize/9e197681fc4f1c9eb1b81026b29c83c7f460fcea/hub/2024/03/12/ea29963a-7458-4a72-af6c-eb60a463d17a/blink-mini-2-table.jpg?auto=webp&fit=crop&height=675&width=1200",
      "publishedAt": "2024-03-14T13:00:00Z",
      "content": "Amazon Blink's original Blink Mini was one of the smallest home security cameras available with modern smart features, a tiny and affordable cam. We enjoyed the original Blink as a budget option and … [+6727 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "CNET"
      },
      "author": "Ian Sherr",
      "title": "There's a New Juicy Chapter in the Kate Middleton Photoshop Backlash - CNET",
      "description": "A photo agency says its controversial photo of Prince William and Kate in a car wasn't doctored. Yes, all photos are suspect now.",
      "url": "https://www.cnet.com/tech/mobile/theres-a-new-juicy-chapter-in-the-kate-middleton-photoshop-backlash/",
      "urlToImage": "https://www.cnet.com/a/img/resize/8ca9adf5e4c3943f1668c2abc7000f80cebee2ec/hub/2024/03/11/02038d0d-4b63-4f03-9392-8e21ad6f7a64/gettyimages-1241452579.jpg?auto=webp&fit=crop&height=675&width=1200",
      "publishedAt": "2024-03-14T00:34:00Z",
      "content": "Ready for the latest news in the Kate Middleton photo scandal? That news story, in which England's royal family had to admit that the Princess of Wales had edited a photo of her family sent to news a… [+9034 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "MacRumors"
      },
      "author": "Juli Clover",
      "title": "Apple Buys DarwinAI Ahead of Major Generative AI Updates Coming in iOS 18",
      "description": "Apple acquired Canada-based company DarwinAI earlier this year to build out its AI team, reports Bloomberg. DarwinAI created AI technology for inspecting components during the manufacturing process, and it also had a focus on making smaller and more efficient…",
      "url": "https://www.macrumors.com/2024/03/14/apple-acquires-darwinai/",
      "urlToImage": "https://images.macrumors.com/t/X8Mvv4-ay3fM6NWUohr6lbyLJmM=/1600x/article-new/2022/03/hey-siri-banner-apple.jpg",
      "publishedAt": "2024-03-14T17:27:45Z",
      "content": "Apple acquired Canada-based company DarwinAI earlier this year to build out its AI team, reports Bloomberg. DarwinAI created AI technology for inspecting components during the manufacturing process, … [+1421 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "MacRumors"
      },
      "author": "Joe Rossignol",
      "title": "Apple Said iPhone Driver's Licenses Would Expand to These 8 U.S. States… Two Years Ago",
      "description": "In just four U.S. states, residents can add their driver's license or ID to the Apple Wallet app on the iPhone and Apple Watch, providing a convenient and contactless way to display proof of identity or age at select airports, businesses, and venues.\n\n\n\n\n\nAdo…",
      "url": "https://www.macrumors.com/2024/03/14/apple-wallet-app-ids-slow-adoption/",
      "urlToImage": "https://images.macrumors.com/t/IIqUXDGdVJb6LhdWV1RGD_tvuJE=/1698x/article-new/2021/09/apple-wallet-drivers-license-feature.jpg",
      "publishedAt": "2024-03-14T14:33:34Z",
      "content": "In just four U.S. states, residents can add their driver's license or ID to the Apple Wallet app on the iPhone and Apple Watch, providing a convenient and contactless way to display proof of identity… [+1736 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "MacRumors"
      },
      "author": "Tim Hardwick",
      "title": "AirPods Case With Touchscreen Knock-Off Copies Apple Patent",
      "description": "Apple registers many patents most of which never see the light of day as consumer products – officially, that is. One burgeoning knock-off merchant in China has apparently taken cues from an idea Apple had in 2021 for AirPods featuring a case with a built-in …",
      "url": "https://www.macrumors.com/2024/03/14/airpods-case-with-touchscreen-knock-off/",
      "urlToImage": "https://images.macrumors.com/t/3TCGkxhtTZIpcoLYEPQzutjb-rc=/1920x/article-new/2023/04/AirPods-Pro-Case-With-Screen.jpg",
      "publishedAt": "2024-03-14T11:29:29Z",
      "content": "Apple registers many patents most of which never see the light of day as consumer products  officially, that is. One burgeoning knock-off merchant in China has apparently taken cues from an idea Appl… [+2363 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "MacRumors"
      },
      "author": "Tim Hardwick",
      "title": "Apple Vision Pro is 'Over-Engineered DevKit,' Says Former Oculus Head",
      "description": "Apple's first-generation Vision Pro headset is an \"over-engineered devkit\" that ships with more sensors than is necessary to deliver Apple's intended experience. That's according to Hugo Barra, former VP of Android and head of Meta's phased-out Oculus headset…",
      "url": "https://www.macrumors.com/2024/03/14/apple-vision-pro-over-engineered-devkit/",
      "urlToImage": "https://images.macrumors.com/t/JSPwBrS9RzxLuGx0P44yMj2AN0E=/1920x/article-new/2023/11/apple-vision-pro-setup.jpg",
      "publishedAt": "2024-03-14T10:37:02Z",
      "content": "Apple's first-generation Vision Pro headset is an \"over-engineered devkit\" that ships with more sensors than is necessary to deliver Apple's intended experience. That's according to Hugo Barra, forme… [+2883 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "NPR"
      },
      "author": "Rund Abdelfatah",
      "title": "A Symphony of Resistance (Throwback)",
      "description": "In 2011, the world was shaken by the Arab Spring, a wave of \"pro-democracy\" protests that spread throughout the Middle East and North Africa. The effects of the uprisings reverberated around the world as regimes fell in some countries, and civil war began in …",
      "url": "https://www.npr.org/2024/03/14/1198908629/a-symphony-of-resistance-throwback",
      "urlToImage": "https://media.npr.org/assets/img/2024/03/13/gettyimages-108994884_wide-db0dc9da3fa046f680dbaf95da14f6e7c519a92d-s1400-c100.jpg",
      "publishedAt": "2024-03-14T07:00:59Z",
      "content": "An anti-government protester is carried on shoulders in Tahrir Square in the afternoon before a speech by Egyptian President Hosni Mubarak in Tahrir Square February 10, 2011 in Cairo, Egypt.\r\nChris H… [+552 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Slashdot.org"
      },
      "author": "BeauHD",
      "title": "Trying Out Microsoft's Pre-Release OS/2 2.0",
      "description": "Last month, the only known surviving copy of 32-bit OS/2 from Microsoft was purchased for $650. \"Now, two of the internet's experts in getting early PC operating systems running today have managed to fire it up, and you can see the results,\" reports The Regis…",
      "url": "https://tech.slashdot.org/story/24/03/13/2333243/trying-out-microsofts-pre-release-os2-20",
      "urlToImage": "https://a.fsdn.com/sd/topics/microsoft_64100.png",
      "publishedAt": "2024-03-14T00:45:00Z",
      "content": "Why such interest in this nearly third-of-a-century old, unreleased OS? Because this is the way the PC industry very nearly went. This SDK came out in June 1990, just one month after Windows 3.0. If … [+2013 chars]"
    },
    {
      "source": {
        "id": "business-insider",
        "name": "Business Insider"
      },
      "author": "Shubhangi Goel",
      "title": "The CEO of Palantir says he expects to keep losing employees over the company's support for Israel",
      "description": "\"We've lost employees. I'm sure we'll lose employees,\" Alexander Karp said in an interview with CNBC.",
      "url": "https://www.businessinsider.com/palantir-tech-ceo-lost-employees-over-israel-support-2024-3",
      "urlToImage": "https://i.insider.com/65f2841d90413ab8e1dc68f2?width=1200&format=jpeg",
      "publishedAt": "2024-03-14T11:43:20Z",
      "content": "Alex KarpMustafa Yalcin/Anadolu Agency/Getty Images\r\n<ul><li>The CEO of Palantir said the company has lost employees due to its support of Israel.</li><li>The American data analytics company provides… [+2483 chars]"
    },
    {
      "source": {
        "id": "business-insider",
        "name": "Business Insider"
      },
      "author": "David E. Slotnick",
      "title": "FoundersCard: Exclusive Benefits for Entrepreneurs",
      "description": "Explore the exclusive world of FoundersCard, offering unique benefits and networking opportunities for entrepreneurs and professionals.",
      "url": "https://www.businessinsider.com/personal-finance/what-is-founderscard-is-it-worth-it",
      "urlToImage": "https://i.insider.com/5d77a7442e22af7b1f09fa09?width=1200&format=jpeg",
      "publishedAt": "2024-03-14T17:39:06Z",
      "content": "The offers and details on this page may have updated or changed since the time of publication. See our article on Business Insider for current information.Affiliate links for the products on this pag… [+8096 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "ReadWrite"
      },
      "author": "Rachael Davies",
      "title": "Apple Vision Pro expected to launch in nine countries soon",
      "description": "After Apple Vision Pro’s initial release in the United States, Apple now appears to be preparing to launch in nine… Continue reading Apple Vision Pro expected to launch in nine countries soon\nThe post Apple Vision Pro expected to launch in nine countries soon…",
      "url": "https://readwrite.com/apple-vision-pro-expected-to-launch-in-nine-countries-soon/",
      "urlToImage": "https://readwrite.com/wp-content/uploads/2024/03/Apple-Vision-Pro.png",
      "publishedAt": "2024-03-14T15:57:52Z",
      "content": "After Apple Vision Pro’s initial release in the United States, Apple now appears to be preparing to launch in nine other countries.\r\nApple Vision Pro currently only supports English (US) and Emoji as… [+1799 chars]"
    },
    {
      "source": {
        "id": "time",
        "name": "Time"
      },
      "author": "Alana Semuels",
      "title": "Why We’re Spending So Much Money",
      "description": "Breaking down how the rise of frictionless payments drove consumers to buy more.",
      "url": "https://time.com/6899688/why-we-spend-money-frictionless-transactions/",
      "urlToImage": "https://api.time.com/wp-content/uploads/2024/03/why-we-are-spending-so-much-money.jpg?quality=85",
      "publishedAt": "2024-03-14T11:05:00Z",
      "content": "My credit card is a mangled thing. Its blue plastic backing is peeling so much that it doesnt work in swipe machines; it looks like a dog chewed it up and spat it out. It seldom leaves my wallet anym… [+10738 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Xataka.com"
      },
      "author": "Alberto García",
      "title": "Cinco geniales ideas para hacer el mejor regalo a un padre amante de Apple",
      "description": "Ya queda menos para el Día del Padre, por lo que es un buen momento para ir haciendo las compras y evitar que después nos pille el toro. Si tu padre es un amante de Apple y no se pierde casi ningún lanzamiento de los de Cupertino, hoy hemos reunido cinco prod…",
      "url": "https://www.xataka.com/seleccion/cinco-geniales-ideas-para-hacer-mejor-regalo-a-padre-amante-apple",
      "urlToImage": "https://i.blogs.es/342306/apple-recopilatorio-cabecera/840_560.jpeg",
      "publishedAt": "2024-03-14T09:16:48Z",
      "content": "Ya queda menos para el Día del Padre, por lo que es un buen momento para ir haciendo las compras y evitar que después nos pille el toro. Si tu padre es un amante de Apple y no se pierde casi ningún l… [+4302 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Xataka.com"
      },
      "author": "Alberto de la Torre",
      "title": "Huawei enseña el camino a Xiaomi y adelanta un cambio de paradigma en la industria: su startup es la que más coches vende",
      "description": "La industria del automóvil que conocíamos ha saltado por los aires. Los fabricantes tradicionales están pasando apuros para el dar el salto al coche eléctrico, las nuevas empresas están conociendo las particularidades y las dificultades que tiene construir de…",
      "url": "https://www.xataka.com/movilidad/huawei-ensena-camino-a-xiaomi-adelanta-cambio-paradigma-industria-su-startup-que-coches-vende",
      "urlToImage": "https://i.blogs.es/5cdbae/aito-m5/840_560.jpeg",
      "publishedAt": "2024-03-14T15:01:18Z",
      "content": "La industria del automóvil que conocíamos ha saltado por los aires. Los fabricantes tradicionales están pasando apuros para el dar el salto al coche eléctrico, las nuevas empresas están conociendo la… [+5664 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Daringfireball.net"
      },
      "author": "John Gruber",
      "title": "★ Apple Adjusts DMA Plan to Offer Direct Downloading of Apps From the Web (With a Big Asterisk), Custom Link-Out Screens, and Marketplaces Solely for the Distribution of the Developer’s Own Apps",
      "description": "I suspect Apple was ready to go from the start with web downloads — they knew the EC *might* demand it — and so they opened their hand January 25 with the compliance plan they hoped would fly, and are ratcheting out, piecemeal, with additional changes in the …",
      "url": "https://daringfireball.net/2024/03/apple_adjusts_dma_plan",
      "urlToImage": "https://daringfireball.net/graphics/df-wide-card.png",
      "publishedAt": "2024-03-14T03:43:22Z",
      "content": "Apple Developer News, yesterday:\n\n\n Developers who’ve agreed to the Alternative Terms Addendum for \nApps in the EU have new options for their apps in the EU: \r\n\n\n<ul>\n<li>Alternative app marketplaces… [+11229 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Digital Trends"
      },
      "author": "Phil Nickinson",
      "title": "Apple’s MLS Season Pass is streaming all games free this weekend",
      "description": "Every MLS match March 16-17 will be streamed for free on Apple's MLS Season Pass service — even if you're not a subscriber.",
      "url": "https://www.digitaltrends.com/home-theater/apple-mls-season-pass-free-march-2024/",
      "urlToImage": "https://www.digitaltrends.com/wp-content/uploads/2024/03/mls-season-pass-houpor.jpg?resize=1200%2C630&p=1",
      "publishedAt": "2024-03-14T14:19:02Z",
      "content": "Phil Nickinson / Digital Trends\r\nIf you’re a fan of Major League Soccer and haven’t yet experienced MLS Season Pass on Apple TV (the app, not the hardware), this is a good weekend to do so. All 14 ma… [+2061 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Digital Trends"
      },
      "author": "Christine Persaud",
      "title": "Don’t let these 3 hidden March streaming TV shows fly under your radar",
      "description": "If you don't want to miss out, don't let these three hidden March 2024 streaming TV shows, including Guy Ritchie's The Gentlemen, fly under your radar.",
      "url": "https://www.digitaltrends.com/movies/3-hidden-march-2024-streaming-tv-shows/",
      "urlToImage": "https://www.digitaltrends.com/wp-content/uploads/2024/03/the-gentlemen-theo-james.jpg?resize=1200%2C630&p=1",
      "publishedAt": "2024-03-14T12:30:16Z",
      "content": "Netflix\r\nThe most high-profile shows are the ones you likely gravitate to from one month to the next. But the hidden gems can be really fun to find. These are the shows you can watch and tell everyon… [+3709 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Digital Trends"
      },
      "author": "Derek Malcolm",
      "title": "Are you telling me Cambridge Audio built an amplifier … out of a DeLorean?",
      "description": "Cambridge Audio today launched its Evo 150 DeLorean Edition integrated amplifier and network streamer that pays homage to the iconic car's past and present.",
      "url": "https://www.digitaltrends.com/home-theater/cambridge-audio-unveils-evo-150-delorean-edition-amplifier/",
      "urlToImage": "https://www.digitaltrends.com/wp-content/uploads/2024/03/cambridge-audio-evo-150-delorean-05.jpeg?resize=1200%2C630&p=1",
      "publishedAt": "2024-03-14T14:00:12Z",
      "content": "Cambridge Audio\r\nPioneering British hi-fi maker Cambridge Audio has just unveiled a special edition of one of its most popular integrated amplifier/network player combos that would make Marty McFly p… [+3358 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Digital Trends"
      },
      "author": "Andy Boxall",
      "title": "I reviewed an Android phone that simply doesn’t make any sense",
      "description": "The Asus Zenfone 11 Ultra is a decent smartphone, but answering the question of whether you should buy it isn't straightforward, as our review explains.",
      "url": "https://www.digitaltrends.com/mobile/asus-zenfone-11-ultra-review/",
      "urlToImage": "https://www.digitaltrends.com/wp-content/uploads/2024/03/asus-zenfone-11-ultra-back-wood.jpg?resize=1200%2C630&p=1",
      "publishedAt": "2024-03-14T12:30:38Z",
      "content": "What a confusing phone the Asus Zenfone 11 Ultra is. It’s not because it’s terrible or hard to use or has some bizarre features that don’t make sense; it’s because I don’t really get what the point i… [+12751 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "The Atlantic"
      },
      "author": "Hanna Rosin",
      "title": "Inside a Hospital’s Abortion Committee",
      "description": "A Tennessee doctor explains how lifesaving decisions get made. And denied.",
      "url": "https://www.theatlantic.com/podcasts/archive/2024/03/inside-a-hospitals-abortion-committee/677751/?utm_source=feed",
      "urlToImage": null,
      "publishedAt": "2024-03-14T10:00:00Z",
      "content": "<!-----\n\n\n\nConversion time: 0.882 seconds.\n\n\nUsing this HTML file:\n\n1. Paste this output into your source file.\n2. See the notes and action items below regarding this conversion run.\n3. Check the ren… [+22158 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Gigazine.net"
      },
      "author": "@GIGAZINE",
      "title": "ウェブブラウザ「Brave」のインストール数が急増、Appleがデジタル市場法準拠のためブラウザ選択画面を追加した影響か",
      "description": "プライバシー重視のウェブブラウザとして知られる「Brave」のiOS版のインストール数が、2024年3月に入って急増していることがBrave Softwareの報告で明らかになりました。続きを読む...",
      "url": "https://gigazine.net/news/20240314-web-browser-brave-installs-after-browser-choice-screen/",
      "urlToImage": "https://i.gzn.jp/img/2024/03/14/web-browser-brave-installs-after-browser-choice-screen/00.png",
      "publishedAt": "2024-03-14T08:00:00Z",
      "content": "BraveiOS20243Brave Software\r\nBrave: Sharp increase in installs after iOS DMA update in EUhttps://www.bleepingcomputer.com/news/technology/brave-sharp-increase-in-installs-after-ios-dma-update-in-eu/\r… [+1433 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "heise online"
      },
      "author": "Leo Becker",
      "title": "MacBook Air M3 – das perfekte Apple-Notebook? | Mac & i-Podcast",
      "description": "Details und Aspekte aus dem Test des MacBook Air 2024 sind ebenso Thema wie der Abschied von der klassischen Keilform – und Apples jüngste EU-Manöver.",
      "url": "https://www.heise.de/news/MacBook-Air-M3-das-perfekte-Apple-Notebook-Mac-i-Podcast-9654606.html",
      "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/5/5/6/3/9/8/mbam3169-043e48b334c44f30.jpg",
      "publishedAt": "2024-03-14T09:25:00Z",
      "content": "Mit dem M3-Chip hat Apple seine populärste Notebook-Reihe auf den aktuellen Stand gebracht. Bei MacBook Air 13 und 15 räumt der Hersteller zugleich eine lästige Einschränkung bei der Unterstützung ex… [+1597 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "heise online"
      },
      "author": "Ben Schwan",
      "title": "Leak: In diesen Ländern könnte die Vision Pro als nächstes erscheinen",
      "description": "Bislang wird Apples Mixed-Reality-Headset nur in den USA vertrieben. Die nächsten Länder dürften jedoch bald folgen. Erste Indizien liefert nun ein Codeleak.",
      "url": "https://www.heise.de/news/Leak-In-diesen-Laendern-koennte-die-Vision-Pro-als-naechstes-erscheinen-9654632.html",
      "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/5/5/6/4/1/2/vision_pro_set-e9ec54093d28d03c.png",
      "publishedAt": "2024-03-14T09:44:00Z",
      "content": "Wann kommt die Vision Pro nach Europa? Noch gibt es nur Gerüchte, dass es bis zum Sommer zu Apples Entwicklerkonferenz WWDC 2024 soweit sein könnte. Im Rahmen eines Codeleaks sind nun zwölf neue Länd… [+2186 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "heise online"
      },
      "author": "Robin Brand",
      "title": "Asus Zenfone 11 Ultra: Kompakt und High-End war einmal​",
      "description": "Kompakt, aber High-End: Das war bislang die Nische des Zenfone. In der elften Auflage ändert Asus das Rezept und baut ein Smartphone wie jedes andere.​",
      "url": "https://www.heise.de/news/Asus-Zenfone-11-Ultra-Kompakt-und-High-End-war-einmal-9654688.html",
      "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/5/5/6/4/4/3/Screenshot_2024-03-14_102336-be6ab9b1eb3fde7d.png",
      "publishedAt": "2024-03-14T12:30:00Z",
      "content": "Was haben Apple iPhone 15 Pro Max, Samsung Galaxy S24 Ultra, Google Pixel 8 Pro und OnePlus 12 (die Reihe ließe sich fortsetzen) gemeinsam? Richtig, sie alle haben Displays mit Bildschirmdiagonalen v… [+2744 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "9to5Mac"
      },
      "author": "Benjamin Mayo",
      "title": "Apple TV+ shows and movies: Everything to watch on Apple TV Plus",
      "description": "Apple TV+ offers exclusive Apple original TV shows and movies in 4K HDR quality. You can watch across all of your screens and pick up where you left off on any device. Apple TV+ costs $9.99 per month. Here’s every Apple original television show and movie avai…",
      "url": "https://9to5mac.com/2024/03/14/apple-tv-plus-tv-shows-movies-guide/",
      "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2019/12/apple-tv-plus.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      "publishedAt": "2024-03-14T12:02:19Z",
      "content": "Apple TV+ offers exclusive Apple original TV shows and movies in 4K HDR quality. You can watch across all of your screens and pick up where you left off on any device. Apple TV+ costs $9.99 per month… [+78741 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "9to5Mac"
      },
      "author": "Filipe Espósito",
      "title": "visionOS code suggests that Apple Vision Pro will soon be available in more countries",
      "description": "Apple Vision Pro is currently available exclusively in the US. Although Apple has already said that the headset will come to more countries by the end of 2024, there are no details about which countries Apple has in mind to launch Vision Pro next. However, vi…",
      "url": "https://9to5mac.com/2024/03/13/visionos-apple-vision-pro-more-countries/",
      "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/02/Vision-Pro-latency.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      "publishedAt": "2024-03-14T00:30:07Z",
      "content": "Apple Vision Pro is currently available exclusively in the US. Although Apple has already said that the headset will come to more countries by the end of 2024, there are no details about which countr… [+1750 chars]"
    }
  ]

  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
    }

  };


  render() {
    return (
      <div>
        <div className="container my-3">
          <h1>i am news component</h1>
          <div className="row">
          {this.state.articles.map((element)=>{
            return <div  key={element.url} className="col-md-4">
              <Newsitem tital={element.title} discription={element.description} imgurl={element.urlToImage} newsurl={element.url} />
          </div>
          })}
          </div>
        </div>

      </div>
    )
  }
}
