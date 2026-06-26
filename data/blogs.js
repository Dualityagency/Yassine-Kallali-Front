export const categoryList = {
  en: ["IMPLANTOLOGIE", "esthétique dentaire", "VOYAGE MÉDICAL"],
  fr: ["IMPLANTOLOGIE", "esthétique dentaire", "VOYAGE MÉDICAL"],
  it: ["IMPLANTOLOGIE", "esthétique dentaire", "VOYAGE MÉDICAL"],
  ar: ["IMPLANTOLOGIE", "esthétique dentaire", "VOYAGE MÉDICAL"],
};

const sharedHtmlContent = {
  fr: `
    <p>L'implant immédiat post-extraction est une solution moderne qui permet de remplacer une dent extraite le jour même de l'intervention. Cette approche réduit le nombre de rendez-vous et préserve l'os alvéolaire.</p>
    <h2>Pourquoi choisir l'implant immédiat ?</h2>
    <p>Le protocole de mise en charge immédiate offre plusieurs avantages : préservation esthétique, réduction du temps de traitement et meilleure acceptation par le patient. Toutefois, chaque cas doit être évalué individuellement.</p>
    <ul>
      <li>Évaluation radiologique 3D obligatoire</li>
      <li>Qualité et volume osseux suffisants</li>
      <li>Absence d'infection active au niveau du site</li>
    </ul>
    <p>Avant de partir à l'étranger pour un traitement implantaire, assurez-vous de disposer d'un plan de suivi post-opératoire avec un praticien local.</p>
  `,
  en: `
    <p>Immediate post-extraction implant placement is a modern solution that allows replacing an extracted tooth on the same day as the procedure. This approach reduces the number of appointments and preserves alveolar bone.</p>
    <h2>Why choose immediate implant placement?</h2>
    <p>The immediate loading protocol offers several benefits: aesthetic preservation, reduced treatment time, and better patient acceptance. However, each case must be evaluated individually.</p>
    <ul>
      <li>Mandatory 3D radiological assessment</li>
      <li>Sufficient bone quality and volume</li>
      <li>No active infection at the site</li>
    </ul>
    <p>Before traveling abroad for implant treatment, make sure you have a post-operative follow-up plan with a local practitioner.</p>
  `,
  it: `
    <p>L'impianto immediato post-estrazione è una soluzione moderna che consente di sostituire un dente estratto lo stesso giorno dell'intervento. Questo approccio riduce il numero di appuntamenti e preserva l'osso alveolare.</p>
    <h2>Perché scegliere l'impianto immediato?</h2>
    <p>Il protocollo di carico immediato offre diversi vantaggi: preservazione estetica, riduzione dei tempi di trattamento e migliore accettazione da parte del paziente. Tuttavia, ogni caso deve essere valutato individualmente.</p>
    <ul>
      <li>Valutazione radiologica 3D obbligatoria</li>
      <li>Qualità e volume osseo sufficienti</li>
      <li>Assenza di infezione attiva nel sito</li>
    </ul>
    <p>Prima di recarsi all'estero per un trattamento implantare, assicuratevi di avere un piano di follow-up post-operatorio con un professionista locale.</p>
  `,
  ar: `
    <p>الزرع الفوري بعد الخلع هو حل حديث يسمح باستبدال السن المخلوع في نفس يوم الإجراء. يقلل هذا النهج من عدد المواعيد ويحافظ على العظم السنخي.</p>
    <h2>لماذا تختار الزرع الفوري؟</h2>
    <p>يوفر بروتوكول التحميل الفوري عدة مزايا: الحفاظ على المظهر، وتقليل وقت العلاج، وقبول أفضل من قبل المريض. ومع ذلك، يجب تقييم كل حالة على حدة.</p>
    <ul>
      <li>التقييم الإشعاعي ثلاثي الأبعاد إلزامي</li>
      <li>جودة وحجم عظم كافيان</li>
      <li>عدم وجود infection نشطة في الموقع</li>
    </ul>
    <p>قبل السفر إلى الخارج لعلاج الزرعات، تأكد من وجود خطة متابعة ما بعد العملية مع ممارس محلي.</p>
  `,
};

export const blogs = [
  {
    slug: "implant-immediat-post-extraction",
    img: "/blog/header.webp",
    date: {
      fr: "Janvier 26, 2026",
      en: "January 26, 2026",
      it: "26 Gennaio 2026",
      ar: "26 يناير 2026",
    },
    readTime: {
      fr: "5 min",
      en: "5 min",
      it: "5 min",
      ar: "5 دقائق",
    },
    fr: {
      badge: "IMPLANTOLOGIE",
      title:
        "Implant immédiat post-extraction : ce que personne ne vous dit avant de partir à l'étranger.",
      description:
        "Comprendre les protocoles de mise en charge immédiate et les précautions essentielles pour assurer la réussite et la pérennité de votre implant. Découvrez les points clés à connaître avant de vous lancer.",
      htmlContent: sharedHtmlContent.fr,
    },
    en: {
      badge: "IMPLANTOLOGIE",
      title:
        "Immediate post-extraction implant: what nobody tells you before going abroad.",
      description:
        "Understand immediate loading protocols and essential precautions to ensure the success and longevity of your implant. Discover the key points to know before you start.",
      htmlContent: sharedHtmlContent.en,
    },
    it: {
      badge: "IMPLANTOLOGIE",
      title:
        "Impianto immediato post-estrazione: cosa nessuno ti dice prima di partire all'estero.",
      description:
        "Comprendere i protocolli di carico immediato e le precauzioni essenziali per garantire il successo e la longevità del tuo impianto. Scopri i punti chiave da conoscere prima di iniziare.",
      htmlContent: sharedHtmlContent.it,
    },
    ar: {
      badge: "IMPLANTOLOGIE",
      title:
        "الزرع الفوري بعد الخلع: ما لا يخبرك به أحد قبل السفر إلى الخارج.",
      description:
        "فهم بروتوكولات التحميل الفوري والاحتياطات الأساسية لضمان نجاح واستدامة زرعتك. اكتشف النقاط الرئيسية التي يجب معرفتها قبل البدء.",
      htmlContent: sharedHtmlContent.ar,
    },
  },
  {
    slug: "esthetique-dentaire-smile-design",
    img: "/blog/header.webp",
    date: {
      fr: "Février 12, 2026",
      en: "February 12, 2026",
      it: "12 Febbraio 2026",
      ar: "12 فبراير 2026",
    },
    readTime: {
      fr: "4 min",
      en: "4 min",
      it: "4 min",
      ar: "4 دقائق",
    },
    fr: {
      badge: "esthétique dentaire",
      title:
        "Smile design : comment obtenir un sourire harmonieux et naturel.",
      description:
        "Le smile design combine analyse faciale, proportions dentaires et matériaux esthétiques pour créer un sourire sur mesure adapté à votre morphologie.",
      htmlContent: `
        <p>Le smile design est une approche personnalisée qui analyse l'harmonie de votre visage avant toute intervention esthétique.</p>
        <h2>Les étapes d'un smile design réussi</h2>
        <p>Photographies, empreintes numériques et simulation 3D permettent de visualiser le résultat final avant le traitement.</p>
      `,
    },
    en: {
      badge: "esthétique dentaire",
      title: "Smile design: how to achieve a harmonious and natural smile.",
      description:
        "Smile design combines facial analysis, dental proportions, and aesthetic materials to create a custom smile adapted to your morphology.",
      htmlContent: `
        <p>Smile design is a personalized approach that analyzes your facial harmony before any aesthetic intervention.</p>
        <h2>The steps of a successful smile design</h2>
        <p>Photographs, digital impressions, and 3D simulation allow you to visualize the final result before treatment.</p>
      `,
    },
    it: {
      badge: "esthétique dentaire",
      title:
        "Smile design: come ottenere un sorriso armonioso e naturale.",
      description:
        "Lo smile design combina analisi facciale, proporzioni dentali e materiali estetici per creare un sorriso su misura adattato alla tua morfologia.",
      htmlContent: `
        <p>Lo smile design è un approccio personalizzato che analizza l'armonia del viso prima di qualsiasi intervento estetico.</p>
        <h2>Le fasi di uno smile design di successo</h2>
        <p>Fotografie, impronte digitali e simulazione 3D permettono di visualizzare il risultato finale prima del trattamento.</p>
      `,
    },
    ar: {
      badge: "esthétique dentaire",
      title: "تصميم الابتسامة: كيف تحصل على ابتسامة متناسقة وطبيعية.",
      description:
        "يجمع تصميم الابتسامة بين تحليل الوجه ونسب الأسنان والمواد التجميلية لإنشاء ابتسامة مخصصة تناسب شكل وجهك.",
      htmlContent: `
        <p>تصميم الابتسامة هو نهج شخصي يحلل تناسق وجهك قبل أي تدخل تجميلي.</p>
        <h2>خطوات تصميم ابتسامة ناجح</h2>
        <p>تسمح الصور والطبعات الرقمية والمحاكاة ثلاثية الأبعاد بتصور النتيجة النهائية قبل العلاج.</p>
      `,
    },
  },
  {
    slug: "voyage-medical-dentaire-conseils",
    img: "/blog/header.webp",
    date: {
      fr: "Mars 3, 2026",
      en: "March 3, 2026",
      it: "3 Marzo 2026",
      ar: "3 مارس 2026",
    },
    readTime: {
      fr: "6 min",
      en: "6 min",
      it: "6 min",
      ar: "6 دقائق",
    },
    fr: {
      badge: "VOYAGE MÉDICAL",
      title:
        "Voyage médical dentaire : les 5 questions à poser avant de réserver.",
      description:
        "Un voyage médical bien préparé repose sur la transparence du praticien, la qualité des matériaux utilisés et un plan de suivi clairement défini.",
      htmlContent: `
        <p>Le tourisme médical dentaire gagne en popularité, mais une bonne préparation est essentielle pour éviter les mauvaises surprises.</p>
        <h2>Questions essentielles avant de partir</h2>
        <ol>
          <li>Quelle est l'expérience du chirurgien en implantologie ?</li>
          <li>Quels matériaux et marques d'implants sont utilisés ?</li>
          <li>Le suivi post-opératoire est-il inclus ?</li>
          <li>Que couvre la garantie en cas de complication ?</li>
          <li>Avez-vous un interlocuteur local après votre retour ?</li>
        </ol>
      `,
    },
    en: {
      badge: "VOYAGE MÉDICAL",
      title:
        "Dental medical travel: 5 questions to ask before booking.",
      description:
        "A well-prepared medical trip relies on practitioner transparency, quality of materials used, and a clearly defined follow-up plan.",
      htmlContent: `
        <p>Dental medical tourism is growing in popularity, but good preparation is essential to avoid unpleasant surprises.</p>
        <h2>Essential questions before leaving</h2>
        <ol>
          <li>What is the surgeon's experience in implantology?</li>
          <li>What materials and implant brands are used?</li>
          <li>Is post-operative follow-up included?</li>
          <li>What does the warranty cover in case of complications?</li>
          <li>Do you have a local contact after your return?</li>
        </ol>
      `,
    },
    it: {
      badge: "VOYAGE MÉDICAL",
      title:
        "Viaggio medico dentale: 5 domande da porre prima di prenotare.",
      description:
        "Un viaggio medico ben preparato si basa sulla trasparenza del professionista, sulla qualità dei materiali utilizzati e su un piano di follow-up chiaramente definito.",
      htmlContent: `
        <p>Il turismo medico dentale sta guadagnando popolarità, ma una buona preparazione è essenziale per evitare brutte sorprese.</p>
        <h2>Domande essenziali prima di partire</h2>
        <ol>
          <li>Qual è l'esperienza del chirurgo in implantologia?</li>
          <li>Quali materiali e marche di impianti vengono utilizzati?</li>
          <li>Il follow-up post-operatorio è incluso?</li>
          <li>Cosa copre la garanzia in caso di complicazioni?</li>
          <li>Hai un referente locale dopo il tuo ritorno?</li>
        </ol>
      `,
    },
    ar: {
      badge: "VOYAGE MÉDICAL",
      title:
        "السفر الطبي لطب الأسنان: 5 أسئلة يجب طرحها قبل الحجز.",
      description:
        "يعتمد السفر الطبي الجيد على شفافية الممارس وجودة المواد المستخدمة وخطة متابعة محددة بوضوح.",
      htmlContent: `
        <p>تزداد شعبية السياحة الطبية لطب الأسنان، لكن التحضير الجيد ضروري لتجنب المفاجآت غير السارة.</p>
        <h2>أسئلة أساسية قبل المغادرة</h2>
        <ol>
          <li>ما هي خبرة الجراح في زراعة الأسنان؟</li>
          <li>ما هي المواد وعلامات الزرعات المستخدمة؟</li>
          <li>هل المتابعة بعد العملية مشمولة؟</li>
          <li>ماذا يغطي الضمان في حالة المضاعفات؟</li>
          <li>هل لديك جهة اتصال محلية بعد عودتك؟</li>
        </ol>
      `,
    },
  },
];

export function getBlogBySlug(slug) {
  return blogs.find((blog) => blog.slug === slug) ?? null;
}
