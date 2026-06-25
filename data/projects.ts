export type Lang = "en" | "pl";

export interface Bullet {
  text: string;
  boldPrefix?: string;
}

export interface TableRow {
  feature: string;
  solution: string;
}

export interface SlideSection {
  label?: string;
  text?: string;
  boldPhrases?: string[];
  bullets?: Bullet[];
  tags?: string[];
  italic?: boolean;
  cite?: string;
  table?: TableRow[];
}

export interface Persona {
  name: string;
  bullets: string[];
  image?: string;
}

export interface ProcessPhase {
  name: string;
  activities: string[];
}

export interface Concept {
  title: string;
  pros: string[];
  cons: string[];
  image?: string;
}

export interface Slide {
  title?: string;
  subtitle?: string;
  layout?: "two-col" | "default" | "personas" | "cover" | "process" | "concepts" | "client" | "fullimage";
  sections: SlideSection[];
  image?: string;
  images?: string[];
  personas?: Persona[];
  footerTags?: string[];
  phases?: ProcessPhase[];
  concepts?: Concept[];
  hideFromNav?: boolean;
}

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  tags: string[];
  description: string;
  images: string[];
  client?: string;
  slides?: Slide[];
}

/* ── Project 1: Human Centered Evaluator ─────────────────────── */

const project1En: Project = {
  id: "project-1",
  title: "Human Centered Evaluator",
  subtitle: "A unified platform for evaluating and governing AI systems.",
  tags: ["UX Research", "User Interviews", "Personas", "Jobs to be done", "Prototyping", "Usability testing"],
  description: "",
  images: ["/images/hce-thumb.png"],
  client: "PwC",
  slides: [
    {
      layout: "cover",
      title: "Human Centered Evaluator",
      subtitle: "A unified platform for evaluating and governing AI systems.",
      sections: [],
      images: ["/images/hce-use-cases.png", "/images/hce-cover.png"],
      footerTags: ["UX Research", "User Interviews", "Personas", "Jobs to be done", "Prototyping", "Usability testing"],
    },
    {
      layout: "client",
      image: "/images/pwc-logo.png",
      sections: [
        {
          label: "Client",
          text: "PwC Consulting Factory",
        },
        {
          text: "Consulting Factory is an internal initiative platform in PwC focused on building and scaling AI and GenAI solutions for Consulting practices.",
        },
      ],
    },
    {
      title: "Design process",
      layout: "process",
      sections: [],
      phases: [
        {
          name: "Discover",
          activities: ["POC application UX audit", "User research", "User journey mapping"],
        },
        {
          name: "Define",
          activities: ["Personas", "Jobs to be done", "User Flow mapping"],
        },
        {
          name: "Develop",
          activities: ["Lo-fi Wireframing", "Preparing design concepts", "User testing"],
        },
        {
          name: "Deliver",
          activities: ["HiFi mock-ups of the final solution", "Prototyping", "Development support"],
        },
      ],
    },
    {
      title: "How I started?",
      layout: "two-col",
      image: "/images/hce-analysis.png",
      sections: [
        {
          text: "The product was initially handed over to me as a tool that required only a visual redesign. It was created as a POC, solely by developers, without the involvement of a UX designer.",
        },
        {
          text: "After conducting a quick audit and spending a short time using it, it became clear to me that a surface-level update would not be sufficient. I found the interface unintuitive, struggled with gaps in the logic and I had problems with understanding both application and underlying processes.",
        },
        {
          text: "I started by mapping the existing application flow and defining the jobs to be done. This process helped us step back and critically assess what the application was actually meant to achieve. My role was to identify logical gaps and redesign the application from the ground up, improving and structuring the process flow to make it coherent and user-centered.",
          boldPhrases: ["jobs to be done", "process flow", "user-centered."],
        },
      ],
      footerTags: ["UX Audit", "User Flow", "User-Centered Design"],
    },
    {
      title: "Jobs to be done",
      layout: "personas",
      sections: [],
      personas: [
        {
          name: "Group Admin",
          image: "/images/persona-3.png",
          bullets: [
            "Use Case creation",
            "Control over granting access to Use Cases for Use Case Admins",
            "Langfuse configuration",
          ],
        },
        {
          name: "Use Case Admin",
          image: "/images/persona-2.png",
          bullets: [
            "Use Cases preparation",
            "Datasets Creation",
            "Adding SMEs to the Use Cases",
            "Supervision over evaluation results performed by SMEs",
            "Monitoring the performance of LLM applications",
          ],
        },
        {
          name: "Subject Matter Expert (SME)",
          image: "/images/persona-1.png",
          bullets: [
            "Running evaluations",
            "LLM applications quality assessment",
            "Evaluation review (Human Feedback Form)",
            "Results calibration",
          ],
        },
      ],
      footerTags: ["UX Research", "User Interviews", "Personas"],
    },
    {
      title: "Key challenges",
      image: "/images/hce-process-flow.png",
      sections: [
        {
          bullets: [
            {
              text: "The application flow is distributed across multiple user roles, each with distinct permissions, access levels, and responsibilities within the system. At the same time, their work is highly interdependent. The core issue was the lack of clearly defined role responsibilities, along with insufficient clarity around how these responsibilities overlapped and interacted. Additionally, the roles were not effectively managed.",
            },
          ],
          tags: ["UX Research", "User Interviews"],
        },
        {
          bullets: [
            {
              text: "The application also required integration with an external tool, Langfuse, which involved technical coordination and a solid understanding of the tool itself.",
            },
          ],
          tags: ["System analysis", "Technical research", "Technical discovery"],
        },
        {
          text: "All of these challenges required the creation of a detailed process flow, clearly mapping user roles and their actions both within the application and in external systems (such as Langfuse).",
        },
      ],
      footerTags: ["User flow"],
    },
    {
      title: "UI challenges",
      sections: [
        {
          bullets: [
            {
              boldPrefix: "The key UI challenge — and at the same time the most critical module of the application — was the Human Feedback Form.",
              text: " The goal was to design a clear and intuitive interface that users could easily navigate, despite the large number of questions, inputs, outputs, and evaluation metrics. This section required dedicated usability exploration.",
            },
          ],
        },
        {
          text: "The main difficulty was that users needed to go through dozens of questions, often involving lengthy input, output, and expected output content, while evaluating each metric individually. The goal was to design a form that minimizes the number of clicks and reduces friction, preventing additional user frustration.",
        },
      ],
      footerTags: ["UI Design", "Visual Design", "User testing", "A/B testing", "Lo-fi wireframes", "Quick usability testing", "Quick insights"],
    },
    {
      layout: "concepts",
      sections: [],
      concepts: [
        {
          title: "Concept 1",
          image: "/images/concept-1.png",
          pros: ["Side panel is a convenient solution for users"],
          cons: ["Typing scores by keyboard and moving between pages using navigation is really time-consuming"],
        },
        {
          title: "Concept 2",
          image: "/images/concept-2.png",
          pros: ["Scrolling through questions is a very convenient solution", "Radio buttons are a fairly quick way to provide ratings"],
          cons: ["Users may be confused about which question is being rated", "The bottom position of the panel doesn't feel natural for users"],
        },
        {
          title: "Concept 3",
          image: "/images/concept-3.png",
          pros: ["Scrolling through questions is a very convenient solution"],
          cons: ["Users may be confused about which question is being rated"],
        },
      ],
      footerTags: ["UI Design", "Visual Design", "User testing", "A/B testing", "Lo-fi wireframes", "Quick usability testing", "Quick insights"],
    },
    {
      layout: "fullimage",
      title: "Human Feedback Form — final UI concept",
      image: "/images/hce-hff-final.png",
      sections: [],
      footerTags: [],
    },
    {
      title: "User Tests",
      sections: [
        {
          text: "The whole user flow was tested with few CF members. They were asked to go through the prototype and make few tasks:",
          bullets: [
            { text: "Prepare the dataset" },
            { text: "Review the Evaluation (using human feedback module)" },
            { text: "Download and compare reports before and after calibration" },
          ],
        },
        {
          text: "Users handled all tasks very well; however, during the tests I observed that it takes a significant amount of time from logging into the application to reaching the report they are looking for. Additionally, users need to use sorting to find the report they are searching for, because the names of use cases and evaluations can be difficult to remember and are created by other people.",
        },
      ],
      footerTags: ["Task-Based Testing", "Prototype testing", "Moderated Usability Testing", "Qualitative research"],
    },
    {
      layout: "two-col",
      hideFromNav: true,
      image: "/images/hce-reports.png",
      sections: [
        {
          label: "Problem:",
          text: "Difficult access to the final evaluation documents - the Reports.",
        },
        {
          label: "Solutions:",
          bullets: [
            {
              boldPrefix: "A separate landing dashboard",
              text: " for each user group (to be implemented in the next application release)",
            },
            {
              boldPrefix: "An additional tab with all reports generated",
              text: " - this was a quick win, as the frontend cost was minimal",
            },
          ],
        },
      ],
      footerTags: ["Key findings", "Problem solving", "Quick win"],
    },
  ],
};

const project1Pl: Project = {
  id: "project-1",
  title: "Human Centered Evaluator",
  subtitle: "Spójna platforma do oceny i nadzoru nad systemami AI.",
  tags: ["UX Research", "User Interviews", "Personas", "Jobs to be done", "Prototyping", "Usability testing"],
  description: "",
  images: ["/images/hce-thumb.png"],
  client: "PwC",
  slides: [
    {
      layout: "cover",
      title: "Human Centered Evaluator",
      subtitle: "Spójna platforma do oceny i nadzoru nad systemami AI.",
      sections: [],
      images: ["/images/hce-use-cases.png", "/images/hce-cover.png"],
      footerTags: ["UX Research", "User Interviews", "Personas", "Jobs to be done", "Prototyping", "Usability testing"],
    },
    {
      layout: "client",
      image: "/images/pwc-logo.png",
      sections: [
        {
          label: "Klient",
          text: "PwC Consulting Factory",
        },
        {
          text: "Consulting Factory to wewnętrzna platforma inicjatyw w PwC skoncentrowana na budowaniu i skalowaniu rozwiązań AI oraz GenAI dla zespołów konsultingowych.",
        },
      ],
    },
    {
      title: "Proces projektowy",
      layout: "process",
      sections: [],
      phases: [
        {
          name: "Odkrywanie",
          activities: ["Audyt UX aplikacji POC", "Badania z użytkownikami", "Mapowanie podróży użytkownika"],
        },
        {
          name: "Definiowanie",
          activities: ["Persony", "Jobs to be done", "Mapowanie User Flow"],
        },
        {
          name: "Rozwijanie",
          activities: ["Makiety lo-fi", "Przygotowanie koncepcji projektowych", "Testy z użytkownikami"],
        },
        {
          name: "Dostarczanie",
          activities: ["Makiety hi-fi finalnego rozwiązania", "Prototypowanie", "Wsparcie deweloperskie"],
        },
      ],
    },
    {
      title: "Jak zaczęłam?",
      layout: "two-col",
      image: "/images/hce-analysis.png",
      sections: [
        {
          text: "Produkt został początkowo przekazany mi jako narzędzie wymagające jedynie odświeżenia wizualnego. Powstał jako POC, stworzony wyłącznie przez deweloperów, bez udziału projektanta UX.",
        },
        {
          text: "Po przeprowadzeniu szybkiego audytu i krótkim korzystaniu z narzędzia stało się dla mnie jasne, że powierzchowna aktualizacja nie wystarczy. Interfejs był nieintuicyjny, zmagałam się z lukami w logice i miałam trudności ze zrozumieniem zarówno aplikacji, jak i stojących za nią procesów.",
        },
        {
          text: "Zaczęłam od zmapowania istniejącego przepływu w aplikacji i zdefiniowania jobs to be done. Ten proces pozwolił nam zrobić krok wstecz i krytycznie ocenić, co aplikacja właściwie ma osiągać. Moją rolą było zidentyfikowanie luk logicznych i przeprojektowanie aplikacji od podstaw, usprawniając i porządkując przepływ procesu, aby uczynić go spójnym i zorientowanym na użytkownika.",
          boldPhrases: ["jobs to be done", "przepływ procesu", "zorientowanym na użytkownika."],
        },
      ],
      footerTags: ["UX Audit", "User Flow", "User-Centered Design"],
    },
    {
      title: "Jobs to be done",
      layout: "personas",
      sections: [],
      personas: [
        {
          name: "Group Admin",
          image: "/images/persona-3.png",
          bullets: [
            "Tworzenie Use Case'ów",
            "Kontrola nad przyznawaniem dostępu do Use Case'ów dla Use Case Adminów",
            "Konfiguracja Langfuse",
          ],
        },
        {
          name: "Use Case Admin",
          image: "/images/persona-2.png",
          bullets: [
            "Przygotowywanie Use Case'ów",
            "Tworzenie zbiorów danych",
            "Dodawanie SME do Use Case'ów",
            "Nadzór nad wynikami ewaluacji wykonywanych przez SME",
            "Monitorowanie działania aplikacji LLM",
          ],
        },
        {
          name: "Subject Matter Expert (SME)",
          image: "/images/persona-1.png",
          bullets: [
            "Przeprowadzanie ewaluacji",
            "Ocena jakości aplikacji LLM",
            "Przegląd ewaluacji (Human Feedback Form)",
            "Kalibracja wyników",
          ],
        },
      ],
      footerTags: ["UX Research", "User Interviews", "Personas"],
    },
    {
      title: "Kluczowe wyzwania",
      image: "/images/hce-process-flow.png",
      sections: [
        {
          bullets: [
            {
              text: "Przepływ w aplikacji jest rozłożony pomiędzy wiele ról użytkowników, z których każda ma odrębne uprawnienia, poziomy dostępu i zakresy odpowiedzialności w systemie. Jednocześnie ich praca jest silnie współzależna. Głównym problemem był brak jasno zdefiniowanych zakresów odpowiedzialności poszczególnych ról oraz niewystarczająca przejrzystość tego, jak te zakresy się nakładają i wzajemnie oddziałują. Dodatkowo role nie były efektywnie zarządzane.",
            },
          ],
          tags: ["UX Research", "User Interviews"],
        },
        {
          bullets: [
            {
              text: "Aplikacja wymagała również integracji z zewnętrznym narzędziem Langfuse, co wiązało się z koordynacją techniczną i dobrym zrozumieniem samego narzędzia.",
            },
          ],
          tags: ["System analysis", "Technical research", "Technical discovery"],
        },
        {
          text: "Wszystkie te wyzwania wymagały stworzenia szczegółowego przepływu procesu, jasno mapującego role użytkowników i ich działania zarówno wewnątrz aplikacji, jak i w systemach zewnętrznych (takich jak Langfuse).",
        },
      ],
      footerTags: ["User flow"],
    },
    {
      title: "Wyzwania UI",
      sections: [
        {
          bullets: [
            {
              boldPrefix: "Kluczowym wyzwaniem UI — a zarazem najważniejszym modułem aplikacji — był Human Feedback Form.",
              text: " Celem było zaprojektowanie przejrzystego i intuicyjnego interfejsu, po którym użytkownicy mogliby łatwo się poruszać mimo dużej liczby pytań, danych wejściowych, wyjściowych i metryk ewaluacji. Ta sekcja wymagała dedykowanej eksploracji użyteczności.",
            },
          ],
        },
        {
          text: "Główna trudność polegała na tym, że użytkownicy musieli przejść przez dziesiątki pytań, często obejmujących obszerne treści wejściowe, wyjściowe i oczekiwane, oceniając każdą metrykę osobno. Celem było zaprojektowanie formularza minimalizującego liczbę kliknięć i redukującego tarcie, aby nie potęgować frustracji użytkownika.",
        },
      ],
      footerTags: ["UI Design", "Visual Design", "User testing", "A/B testing", "Lo-fi wireframes", "Quick usability testing", "Quick insights"],
    },
    {
      layout: "concepts",
      sections: [],
      concepts: [
        {
          title: "Koncept 1",
          image: "/images/concept-1.png",
          pros: ["Panel boczny to wygodne rozwiązanie dla użytkowników"],
          cons: ["Wpisywanie ocen z klawiatury i przechodzenie między stronami za pomocą nawigacji jest bardzo czasochłonne"],
        },
        {
          title: "Koncept 2",
          image: "/images/concept-2.png",
          pros: ["Przewijanie pytań to bardzo wygodne rozwiązanie", "Przyciski radio to dość szybki sposób na wystawianie ocen"],
          cons: ["Użytkownicy mogą być zdezorientowani, które pytanie jest oceniane", "Dolne położenie panelu nie wydaje się użytkownikom naturalne"],
        },
        {
          title: "Koncept 3",
          image: "/images/concept-3.png",
          pros: ["Przewijanie pytań to bardzo wygodne rozwiązanie"],
          cons: ["Użytkownicy mogą być zdezorientowani, które pytanie jest oceniane"],
        },
      ],
      footerTags: ["UI Design", "Visual Design", "User testing", "A/B testing", "Lo-fi wireframes", "Quick usability testing", "Quick insights"],
    },
    {
      layout: "fullimage",
      title: "Human Feedback Form — finalny koncept UI",
      image: "/images/hce-hff-final.png",
      sections: [],
      footerTags: [],
    },
    {
      title: "Testy z użytkownikami",
      sections: [
        {
          text: "Cały przepływ użytkownika został przetestowany z kilkoma członkami CF. Zostali poproszeni o przejście przez prototyp i wykonanie kilku zadań:",
          bullets: [
            { text: "Przygotuj zbiór danych" },
            { text: "Przejrzyj ewaluację (korzystając z modułu human feedback)" },
            { text: "Pobierz i porównaj raporty przed i po kalibracji" },
          ],
        },
        {
          text: "Użytkownicy bardzo dobrze poradzili sobie ze wszystkimi zadaniami; jednak podczas testów zaobserwowałam, że od zalogowania do aplikacji do dotarcia do poszukiwanego raportu mija sporo czasu. Dodatkowo użytkownicy muszą korzystać z sortowania, aby znaleźć szukany raport, ponieważ nazwy use case'ów i ewaluacji bywają trudne do zapamiętania i są tworzone przez inne osoby.",
        },
      ],
      footerTags: ["Task-Based Testing", "Prototype testing", "Moderated Usability Testing", "Qualitative research"],
    },
    {
      layout: "two-col",
      hideFromNav: true,
      image: "/images/hce-reports.png",
      sections: [
        {
          label: "Problem:",
          text: "Utrudniony dostęp do finalnych dokumentów ewaluacji — Raportów.",
        },
        {
          label: "Rozwiązania:",
          bullets: [
            {
              boldPrefix: "Osobny dashboard startowy",
              text: " dla każdej grupy użytkowników (do wdrożenia w kolejnym wydaniu aplikacji)",
            },
            {
              boldPrefix: "Dodatkowa zakładka ze wszystkimi wygenerowanymi raportami",
              text: " — to był quick win, ponieważ koszt po stronie frontendu był minimalny",
            },
          ],
        },
      ],
      footerTags: ["Key findings", "Problem solving", "Quick win"],
    },
  ],
};

/* ── Project 2: Dream Journal / Dziennik Snów ────────────────── */

const project2En: Project = {
  id: "project-2",
  title: "Dream Journal",
  subtitle: "A vibe-coded web and mobile app for recording dreams right after waking up — with a built-in AI agent who helps to analyze dreams.",
  tags: ["Vibe Coding", "Product Design", "AI Agent", "Mobile"],
  description: "",
  images: ["/images/dream-journal-thumb.png"],
  slides: [
    {
      layout: "cover",
      title: "Dream Journal",
      subtitle: "A web and mobile app for recording and analyzing dreams right after waking up — with a built-in AI agent grounded in Jungian psychology.",
      sections: [],
      images: ["/images/dream-mockup.png"],
      footerTags: ["Vibe Coding", "Product Design", "AI Agent", "Mobile"],
    },
    {
      title: "1. Philosophy",
      sections: [
        {
          text: "\"The dream is a spontaneous self-portrayal, in symbolic form, of the actual situation in the unconscious.\"",
          italic: true,
          cite: "— C.G. Jung",
        },
        {
          text: "In Jungian psychology, dreams are an essential part of reality. Thanks to their universality and accessibility, they are an invaluable source of knowledge about the human psyche. I decided to create a tool that brings the user closer to this philosophy.",
          boldPhrases: ["an invaluable source of knowledge about the human psyche"],
        },
        {
          text: "It is a web and mobile app that I designed and built entirely on my own — from the UX concept, through the interface design, to the implementation (vibe coding). I created it for myself, because no existing tool met my expectations.",
          boldPhrases: ["designed and built entirely on my own", "for myself"],
        },
      ],
    },
    {
      layout: "fullimage",
      image: "/images/group-164156.png",
      hideFromNav: true,
      sections: [],
    },
    {
      title: "2. Problem definition",
      sections: [
        {
          text: "The starting point was two situations I know well from my own experience:",
        },
        {
          label: "The fleeting nature of dreams",
          text: "\"When I wake up in the morning, I'm amazed at how interesting and strange the dream I had was. Unfortunately, in the morning I'm too rushed to write it down anywhere — and when I sit down calmly in the evening, I no longer remember it.\"",
          italic: true,
        },
        {
          label: "The difficulty of interpreting dreams",
          text: "\"I dreamed of a blooming oak again. I'm curious whether the recurrence of this motif means something. Maybe it's a suggestion from my subconscious to make some decision or to confront something? It's hard for me to interpret it on my own, and I don't have time to browse through dream dictionaries.\"",
          italic: true,
        },
        {
          text: "Existing dream journal apps share the same problem: they require typing text at a moment when the user is still half-asleep and has only a few minutes before the dream fades.",
          boldPhrases: ["still half-asleep"],
        },
        {
          text: "On top of that, they are either too simple (an unstructured notepad that doesn't encourage consistency) or too complicated (dozens of categories to fill in manually).",
        },
      ],
    },
    {
      title: "3. User needs",
      sections: [
        {
          bullets: [
            { boldPrefix: "Instant dream capture", text: " — in less than 60 seconds, before the dream fades." },
            { boldPrefix: "Automatic organization", text: " — without manual tagging and categorizing." },
            { boldPrefix: "The ability to \"talk about the dream\"", text: " — with someone who understands it and helps interpret it." },
            { boldPrefix: "Access to history and patterns", text: " — recurring motifs that appear over time." },
          ],
        },
        {
          label: "Key insight",
          text: "Dictating a dream right after waking up is not a matter of convenience — it is the only method that makes it possible to sustain the habit. Typing a long story at 7 a.m. on a phone keyboard is too much effort to do every day.",
          boldPhrases: ["the only method that makes it possible to sustain the habit"],
        },
        {
          label: "Design goal",
          text: "Building the habit of dictating a dream right after waking up.",
        },
      ],
    },
    {
      title: "4. Technical solutions",
      sections: [
        {
          table: [
            { feature: "Dictating an entry after waking up", solution: "Web Speech API: instant transcription in the browser." },
            { feature: "Automatic motifs and tags", solution: "The Claude API analyzes the dream content and detects recurring motifs." },
            { feature: "Dream analysis in the spirit of Jung", solution: "The Claude API with a system prompt grounded in analytical psychology." },
            { feature: "Searching and referencing dreams via the AI agent", solution: "Vector search using embeddings." },
            { feature: "Adding entries from the phone without an app", solution: "A custom skill in Claude mobile: the entry and motifs go into the database without opening a browser." },
            { feature: "A secure, private database", solution: "Supabase with row-level security: data visible only to the logged-in user." },
            { feature: "Choosing a guide for the conversation", solution: "An optional, paid persona; payments handled via Stripe." },
          ],
        },
      ],
    },
    {
      title: "5. Outcome",
      sections: [
        {
          text: "The app was created primarily for me — and I am its first, daily user. That's the best possible test: a tool I want to use myself every morning.",
          boldPhrases: ["first, daily user"],
        },
        {
          label: "What changed",
          bullets: [
            { boldPrefix: "The habit stuck", text: " — recording a dream now takes a few dozen seconds instead of requiring morning writing." },
            { boldPrefix: "Dreams gained context", text: " — a conversation with Cztu turns a raw entry into a starting point for reflection." },
          ],
        },
      ],
    },
  ],
};

const project2Pl: Project = {
  id: "project-2",
  title: "Dziennik Snów",
  subtitle: "Vibe-codowana aplikacja webowa i mobilna do zapisywania snów zaraz po przebudzeniu — z wbudowanym agentem AI, który pomaga analizować sny.",
  tags: ["Vibe Coding", "Product Design", "AI Agent", "Mobile"],
  description: "",
  images: ["/images/dream-journal-thumb.png"],
  slides: [
    {
      layout: "cover",
      title: "Dziennik Snów",
      subtitle: "Aplikacja webowa i mobilna do zapisywania i analizowania snów zaraz po przebudzeniu — z wbudowanym agentem AI opartym na psychologii Junga.",
      sections: [],
      images: ["/images/dream-mockup.png"],
      footerTags: ["Vibe Coding", "Product Design", "AI Agent", "Mobile"],
    },
    {
      title: "1. Filozofia",
      sections: [
        {
          text: "\"Sen jest ujętym w symboliczną formę spontanicznym autoportretem aktualnej sytuacji nieświadomej.\"",
          italic: true,
          cite: "— C.G. Jung",
        },
        {
          text: "W psychologii Junga sny są istotnym elementem rzeczywistości. Dzięki swojej powszechności i dostępności stanowią nieocenione źródło wiedzy o ludzkiej psychice. Postanowiłam stworzyć narzędzie, które przybliży użytkownika do tej filozofii.",
          boldPhrases: ["nieocenione źródło wiedzy o ludzkiej psychice"],
        },
        {
          text: "To aplikacja webowa i mobilna, którą zaprojektowałam i zbudowałam w całości — od koncepcji UX, przez projekt interfejsu, po implementację (vibe coding). Stworzyłam ją dla siebie, bo żadne istniejące narzędzie nie spełniało moich oczekiwań.",
          boldPhrases: ["zaprojektowałam i zbudowałam w całości", "dla siebie"],
        },
      ],
    },
    {
      title: "2. Definicja problemu",
      sections: [
        {
          text: "Punktem wyjścia były dwie sytuacje, które dobrze znam z własnego doświadczenia:",
        },
        {
          label: "Ulotność snów",
          text: "\"Gdy budzę się rano, jestem pod wrażeniem, jak ciekawy i dziwny sen miałam. Niestety rano jestem zbyt zabiegana, żeby go gdzieś zapisać — a gdy wieczorem siądę na spokojnie, to już go nie pamiętam.\"",
          italic: true,
        },
        {
          label: "Trudność w interpretacji snów",
          text: "\"Znowu przyśnił mi się kwitnący dąb. Jestem ciekawa, czy powracanie tego motywu coś oznacza. Może to sugestia od podświadomości, żebym podjęła jakąś decyzję albo zmierzyła się z czymś? Ciężko mi to zinterpretować samej, a nie mam czasu na przeglądanie senników.\"",
          italic: true,
        },
        {
          text: "Istniejące aplikacje do prowadzenia dziennika snów mają ten sam problem: wymagają wpisywania tekstu w momencie, gdy użytkownik jest jeszcze na wpół śpiący i ma tylko kilka minut, zanim sen zblednie.",
          boldPhrases: ["jeszcze na wpół śpiący"],
        },
        {
          text: "Są przy tym albo zbyt proste (notatnik bez struktury, niezachęcający do regularności), albo zbyt skomplikowane (dziesiątki kategorii do ręcznego wypełnienia).",
        },
      ],
    },
    {
      title: "3. Potrzeby użytkownika",
      sections: [
        {
          bullets: [
            { boldPrefix: "Błyskawiczny zapis snu", text: " — w mniej niż 60 sekund, zanim sen zblednie." },
            { boldPrefix: "Automatyczna organizacja", text: " — bez ręcznego tagowania i kategoryzowania." },
            { boldPrefix: "Możliwość \"pogadania o śnie\"", text: " — z kimś, kto go zrozumie i pomoże zinterpretować." },
            { boldPrefix: "Dostęp do historii i wzorców", text: " — powracających motywów pojawiających się w czasie." },
          ],
        },
        {
          label: "Kluczowy insight",
          text: "Dyktowanie snu zaraz po przebudzeniu to nie kwestia wygody — to jedyna metoda, która pozwala utrzymać nawyk. Wpisywanie długiej opowieści o 7 rano na klawiaturze telefonu to zbyt duży wysiłek, żeby robić to codziennie.",
          boldPhrases: ["jedyna metoda, która pozwala utrzymać nawyk"],
        },
        {
          label: "Cel projektowy",
          text: "Zbudowanie nawyku dyktowania snu tuż po przebudzeniu.",
        },
      ],
    },
    {
      title: "4. Rozwiązania techniczne",
      sections: [
        {
          table: [
            { feature: "Dyktowanie wpisu po przebudzeniu", solution: "Web Speech API: natychmiastowa transkrypcja w przeglądarce." },
            { feature: "Automatyczne motywy i tagi", solution: "Claude API analizuje treść snu i wyłapuje powracające motywy." },
            { feature: "Analiza snów w duchu Junga", solution: "Claude API z systemowym promptem opartym na psychologii analitycznej." },
            { feature: "Wyszukiwanie i odnoszenie się do snów przez agenta AI", solution: "Wyszukiwanie wektorowe z wykorzystaniem embeddingów." },
            { feature: "Dodawanie wpisów z telefonu bez aplikacji", solution: "Custom skill w Claude mobile: wpis i motywy trafiają do bazy bez otwierania przeglądarki." },
            { feature: "Bezpieczna, prywatna baza", solution: "Supabase z row-level security: dane widoczne tylko dla zalogowanej użytkowniczki." },
            { feature: "Wybór przewodnika do rozmowy", solution: "Opcjonalna, dodatkowo płatna persona; płatności obsługiwane przez Stripe." },
          ],
        },
      ],
    },
    {
      title: "5. Efekt",
      sections: [
        {
          text: "Aplikacja powstała przede wszystkim dla mnie — i to ja jestem jej pierwszą, codzienną użytkowniczką. To najlepszy możliwy test: narzędzie, którego sama chcę używać każdego ranka.",
          boldPhrases: ["pierwszą, codzienną użytkowniczką"],
        },
        {
          label: "Co się zmieniło",
          bullets: [
            { boldPrefix: "Nawyk się utrzymał", text: " — zapis snu zajmuje teraz kilkadziesiąt sekund zamiast wymagać porannego pisania." },
            { boldPrefix: "Sny zyskały kontekst", text: " — rozmowa z Cztu zamienia surowy zapis w punkt wyjścia do refleksji." },
          ],
        },
      ],
    },
  ],
};

/* ── Project 3: placeholder ──────────────────────────────────── */

const project3: Project = {
  id: "project-3",
  title: "",
  tags: [],
  description: "",
  images: [],
};

export const projectsByLang: Record<Lang, Project[]> = {
  en: [project1En, project2En, project3],
  pl: [project1Pl, project2Pl, project3],
};

// Default export keeps the English content for any non-localized usage.
export const projects: Project[] = projectsByLang.en;

export const contact = {
  name: "Kinga Kowalska",
  phone: "+48 000 000 000",
  email: "kinga@example.com",
};
