const translations = {
    fr: {
        // Page d'accueil
        welcome: "Bienvenue chez AB Service",
        homeTitle: "Bienvenue chez AB Service",
        homeText: "Chez AB Service, nous transformons vos idées en réalités numériques. Que vous soyez une petite entreprise ou une grande organisation, nous offrons des solutions innovantes et adaptées à vos besoins pour vous aider à atteindre vos objectifs.",
        whatWeDoTitle: "Ce que nous faisons",
        whatWeDoText: "Spécialisés dans la création d'applications web, de sites internet modernes, de Motion Graphics, ainsi que dans la conception de logos et le marketing digital, nous accompagnons nos clients dans la mise en place de stratégies digitales efficaces.",
        whyChooseUsTitle: "Pourquoi nous choisir ?",
        whyChooseUsText: "Chez AB Service, nous croyons en une approche sur mesure pour chaque client. Nous vous garantissons : Innovation, Fiabilité, Support personnalisé.",
        
        // Page À propos
        aboutTitle: "À propos de nous",
        aboutText: "Chez AB Service, nous sommes passionnés par la technologie et la créativité. Depuis notre création, nous nous engageons à fournir des solutions numériques innovantes qui aident nos clients à se démarquer dans un monde en constante évolution.",
        missionTitle: "Notre Mission",
        missionText: "Notre mission est de transformer vos idées en réalités digitales. Que vous ayez besoin d'un site web, d'une application web performante, d'animations graphiques captivantes, ou de stratégies marketing impactantes, nous sommes là pour vous accompagner à chaque étape.",
        servicesTitle: "Ce que nous offrons",
        servicesText: "Avec une équipe expérimentée en développement web, design graphique, et marketing digital, nous offrons une gamme complète de services, incluant : Applications Web, Sites Web modernes, Animations Motion Graphics, Création de logos, Stratégies publicitaires, Photographie professionnelle, Design graphique, Solutions marketing.",
        whyUsTitle: "Pourquoi nous choisir ?",
        whyUsText: "Nous croyons en une approche collaborative avec nos clients. Chaque projet est unique et mérite une attention particulière. En choisissant AB Service, vous bénéficiez de : Expertise, Créativité, Fiabilité, Support personnalisé."
    },
    en: {
        // Homepage
        welcome: "Welcome to AB Service",
        homeTitle: "Welcome to AB Service",
        homeText: "At AB Service, we turn your ideas into digital realities. Whether you're a small business or a large organization, we offer innovative and tailored solutions to help you achieve your goals.",
        whatWeDoTitle: "What We Do",
        whatWeDoText: "Specialized in creating web applications, modern websites, Motion Graphics, as well as logo design and digital marketing, we support our clients in implementing effective digital strategies.",
        whyChooseUsTitle: "Why Choose Us?",
        whyChooseUsText: "At AB Service, we believe in a customized approach for each client. We guarantee: Innovation, Reliability, Personalized Support.",
        
        // About Page
        aboutTitle: "About Us",
        aboutText: "At AB Service, we are passionate about technology and creativity. Since our creation, we are committed to providing innovative digital solutions that help our clients stand out in an ever-changing world.",
        missionTitle: "Our Mission",
        missionText: "Our mission is to turn your ideas into digital realities. Whether you need a website, a high-performance web application, captivating graphics, or impactful marketing strategies, we are here to support you every step of the way.",
        servicesTitle: "What We Offer",
        servicesText: "With an experienced team in web development, graphic design, and digital marketing, we offer a full range of services, including: Web applications, Modern websites, Motion Graphics, Logo creation, Advertising strategies, Professional photography, Graphic design, Marketing solutions.",
        whyUsTitle: "Why Choose Us?",
        whyUsText: "We believe in a collaborative approach with our clients. Each project is unique and deserves special attention. By choosing AB Service, you benefit from: Expertise, Creativity, Reliability, Personalized support."
    },
    ar: {
        // الصفحة الرئيسية
        welcome: "مرحبا بكم في AB Service",
        homeTitle: "مرحبا بكم في AB Service",
        homeText: "في AB Service، نحول أفكارك إلى واقع رقمي. سواء كنت شركة صغيرة أو منظمة كبيرة، فإننا نقدم حلولًا مبتكرة ومخصصة لمساعدتك على تحقيق أهدافك.",
        whatWeDoTitle: "ماذا نقدم",
        whatWeDoText: "نحن متخصصون في إنشاء تطبيقات الويب، المواقع الإلكترونية الحديثة، الرسومات المتحركة، بالإضافة إلى تصميم الشعارات والتسويق الرقمي، وندعم عملاءنا في تنفيذ استراتيجيات رقمية فعالة.",
        whyChooseUsTitle: "لماذا تختارنا؟",
        whyChooseUsText: "في AB Service، نؤمن بنهج مخصص لكل عميل. نحن نضمن: الابتكار، الموثوقية، والدعم الشخصي.",
        
        // صفحة "من نحن"
        aboutTitle: "من نحن",
        aboutText: "في AB Service، نحن شغوفون بالتكنولوجيا والإبداع. منذ إنشائنا، نحن ملتزمون بتقديم حلول رقمية مبتكرة تساعد عملائنا على التميز في عالم دائم التغير.",
        missionTitle: "مهمتنا",
        missionText: "مهمتنا هي تحويل أفكارك إلى حقائق رقمية. سواء كنت بحاجة إلى موقع ويب، أو تطبيق ويب عالي الأداء، أو رسوم جذابة، أو استراتيجيات تسويق فعالة، نحن هنا لدعمك في كل خطوة.",
        servicesTitle: "ما نقدمه",
        servicesText: "مع فريق ذو خبرة في تطوير الويب، التصميم الجرافيكي، والتسويق الرقمي، نقدم مجموعة كاملة من الخدمات، بما في ذلك: تطبيقات الويب، المواقع الحديثة، الرسومات المتحركة، إنشاء الشعارات، استراتيجيات الإعلان، التصوير الاحترافي، التصميم الجرافيكي، حلول التسويق.",
        whyUsTitle: "لماذا تختارنا؟",
        whyUsText: "نؤمن بنهج تعاوني مع عملائنا. كل مشروع فريد ويستحق اهتمامًا خاصًا. باختيار AB Service، تستفيد من: الخبرة، الإبداع، الموثوقية، الدعم الشخصي."
    }
};

function changeLanguage(lang) {
    // Page d'accueil
    if (document.getElementById("welcome")) {
        document.getElementById("welcome").innerText = translations[lang].welcome;
        document.getElementById("home-title").innerText = translations[lang].homeTitle;
        document.getElementById("home-text").innerText = translations[lang].homeText;
        document.getElementById("what-we-do-title").innerText = translations[lang].whatWeDoTitle;
        document.getElementById("what-we-do-text").innerText = translations[lang].whatWeDoText;
        document.getElementById("why-choose-us-title").innerText = translations[lang].whyChooseUsTitle;
        document.getElementById("why-choose-us-text").innerText = translations[lang].whyChooseUsText;
    }
    
    // Page À propos
    if (document.getElementById("about-title")) {
        document.getElementById("about-title").innerText = translations[lang].aboutTitle;
        document.getElementById("about-text").innerText = translations[lang].aboutText;
        document.getElementById("mission-title").innerText = translations[lang].missionTitle;
        document.getElementById("mission-text").innerText = translations[lang].missionText;
        document.getElementById("services-title").innerText = translations[lang].servicesTitle;
        document.getElementById("services-text").innerText = translations[lang].servicesText;
        document.getElementById("why-us-title").innerText = translations[lang].whyUsTitle;
        document.getElementById("why-us-text").innerText = translations[lang].whyUsText;
    }
}
