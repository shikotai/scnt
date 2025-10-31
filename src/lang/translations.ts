export type Lang = "ru" | "en" | "kk";

export const translations = {
  ru: {
    nav: {
      home: "Главная",
      about: "О нас",
      news: "Новости",
      projects: "Проекты",
    },
    lang: {
      ru: "Рус",
      en: "Eng",
      kk: "Қаз",
    },
    aria: {
      toggleNavigation: "Переключить навигацию",
    },
    footer: {
      nav: {
        home: "Главная",
        about: "О нас",
        news: "Новости",
        projects: "Проекты",
      },
      contact: {
        addressLabel: "Адрес:",
        addressValue: "Казахстан, г. Алматы, пр. Абая, 191",
        phoneLabel: "Номер:",
        phoneValue: "+7 (705) 522-10-54",
        emailLabel: "Email:",
        emailValue: "info@example.kz",
      },
    },
    homeHero: {
      title: "Scientific Center for New Technologies",
      description:
        "ТОО «Scientific Center for New Technologies» — это современный научно-исследовательский кластер, объединяющий передовые разработки, инновационные технологии и высококвалифицированные кадры. Мы — аккредитованная научная организация, ориентированная на создание практико-ориентированных решений и эффективное внедрение научных разработок в реальный сектор экономики.",
      button: "О нас",
    },
    newsCarousel: {
      title: "Новости",
      items: {
        japanCollab: {
          title: "Сотрудничество с Японией",
          date: "5 октября 2025",
          description:
            "Подведены итоги командировки в Японию и определены направления дальнейшего научного сотрудничества.",
        },
      },
    },
    projectsSection: {
      title: "Исследовательская работа",
      project1: {
        alt: "Исследовательская работа",
        description:
          "Разработка и масштабирование технологий переработки отходов био- и горно-металлургической промышленности для создания высокоэффективных углеродно-кремниевых материалов в системах накопления энергии",
      },
    },
    about: {
      sections: {
        company: {
          title: "О компании",
          paragraph1:
            "Мы — аккредитованная научная организация, ориентированная на создание практико-ориентированных решений и эффективное внедрение научных разработок в реальный сектор экономики.",
        },
        mission: {
          title: "Миссия и цели организации",
          paragraph1:
            'Основная миссия ТОО "Scientific Center for New Technologies" и ТОО "AlAkSan" — создание, развитие и внедрение инновационных технологий, способствующих технологическому прогрессу, устойчивому развитию и повышению конкурентоспособности отечественной науки и промышленности на глобальном уровне. Наша деятельность направлена на преобразование научных идей в практические решения, которые находят применение в ключевых отраслях — от медицины и экологии до энергетики и сельского хозяйства.',
        },
        team: {
          title: "Наша команда",
          heading:
            "Мы объединили ведущих учёных, опытных исследователей и высококвалифицированных специалистов для решения комплексных научно-технических задач и коммерциализации разработок.",
          intro: "Состав команды:",
          list: {
            phd: "7 докторов PhD — эксперты с опытом научной и проектной работы более 15 лет, в том числе в рамках международных программ и трансфера технологий.",
            candidates:
              "5 кандидатов наук — специалисты с 20+ летним опытом, признанные в своей профессиональной среде, авторы патентов и прикладных решений.",
            masters:
              "10 магистров — молодые исследователи, активно вовлечённые в прикладные разработки, аналитическую работу и управление проектами.",
            specialists:
              "Узкопрофильные специалисты — в области органической химии, биотехнологии, аналитики, промышленной фармацевтики и инженерных решений.",
          },
        },
        partners: {
          title: "Партнёры",
          intro:
            "Наши партнёры включают ведущие исследовательские лаборатории и университеты по всему миру, такие как:",
          list: {
            sophia:
              "Университет Софии (на японском 上智大学, Jōchi Daigaku) — престижный частный исследовательский университет в Токио, основанный в 1913 году. Взаимодействие с Sophia University, включая Professors Okada и Sakaida, с целью совместных исследований и обмена.",
            camerino: "Университет Камерино (Италия)",
            cadiz: "Университет Кадиса (Испания)",
            kazeco:
              "Аналитическая лаборатория ТОО «КАЗЭКОАНАЛИЗ» – независимая аккредитованная лаборатория, специализирующаяся на проведении аналитического контроля в различных областях.",
          },
        },
      },
    },
    newsPage: {
      title: "Новости и исследования",
      items: {
        japanCollab: {
          title: "Совместное сотрудничество с Японией",
          description:
            "Подведены итоги командировки в Японию и определены направления дальнейшего научного взаимодействия.",
          date: "10 октября 2025",
          button: "Подробнее",
        },
      },
    },
    japanNews: {
      title: "Сотрудничество с Японией",
      sections: {
        sophiaUniversity: {
          title: "Университет Софии (Jōchi Daigaku)",
          paragraph1:
            "Университет Софии (на японском 上智大学, Jōchi Daigaku) — престижный частный исследовательский университет в Токио, основанный в 1913 году. Его главный кампус находится в районе Йоцуя (Chiyoda-ku), всего в нескольких минутах от станции Ёцутэя.",
          paragraph2: {
            intro: "Основные особенности:",
            list: {
              reputation:
                "Репутация: Sophia University считается одним из ведущих частных университетов Японии, наряду с Keio и Waseda. На японском резюме имя университета выглядит очень престижно.",
              programs:
                "Международные программы: Университет предлагает много программ обучения полностью на английском языке, среди которых — факультеты Liberal Arts, Science and Technology, Global Studies и SPSF.",
              campuses:
                "Кампусы: Помимо главного Йоцуя-кампуса, существуют кампусы в Сейбо (Shinjuku), Шакудзидзи (Nerima) и даже в Осаке.",
            },
            closing:
              "Международное сотрудничество: Университет имеет партнёрские соглашения с сотнями вузов по всему миру, включая Georgetown, Yale, LMU Munich и др.",
          },
        },
        meetingOkada: {
          title: "Встреча с профессором Motoyuki Okada",
          paragraphs: {
            p1: "Была пройдена встреча с профессором Motoyuki Okada (Chairman & Research Institute Director), в ходе которой были обсуждены перспективы совместных исследований в области переработки био- и металлургических отходов, а также возможности интеграции японских технологий очистки и обработки сырья в казахстанские разработки. В этот же день участники посетили лаборатории Green Energy and Sustainable Materials.",
            p2: "Институт сравнительной культуры (Institute of Comparative Culture, ICC) стремится развивать и поддерживать междисциплинарные исследования своих участников в таких областях, как социальные науки, гуманитарные дисциплины, бизнес-исследования и экономика. Институт также содействует своим членам в создании совместных проектов с исследователями за пределами Университета Софии и в укреплении международной репутации университета как центра научного превосходства.",
            p3: "Области специализации участников ICC включают антропологию, социологию, политологию, бизнес, экономику, историю, литературу и историю искусства, с особым акцентом на Восточную Азию и её глобальные связи. Научная деятельность и публичные мероприятия ICC в основном проводятся на английском языке.",
          },
        },
        meetingSakaida: {
          title: "Переговоры с профессором Sakaida Soichi. COMNEXT 2025",
          paragraphs: {
            p1: "Состоялись переговоры с профессором Sakaida Soichi (President, Aqua-Sol Research Center), посвящённые применению технологий очистки водных растворов при производстве высокочистого кремния и совместным подходам к синтезу углеродно-кремниевых материалов для систем накопления энергии. В этот же день была посещена 3-я Международная выставка COMNEXT 2025 (Tokyo Big Sight), где делегация ознакомилась с последними разработками в области 6G, IoT, искусственного интеллекта и цифровой трансформации, а также провела переговоры с компаниями — разработчиками оборудования и программного обеспечения для энергетических систем.",
            p2: "В рамках визита состоялись переговоры с профессором Motoyuki Okada (Chairman & Research Institute Director) и профессором Sakaida Soichi (President, Aqua-Sol Research Center), в ходе которых обсуждались направления научного взаимодействия и совместных исследовательских проектов.",
          },
        },
        finalMeeting: {
          title: "Итоговое совещание с представителями Sophia University",
          paragraph:
            "Прошло итоговое совещание с представителями Sophia University, на котором был сформирован предварительный план совместных исследований, включая академический обмен аспирантами и магистрантами. Были подготовлены итоговые материалы командировки и проведена краткая ознакомительная экскурсия по объектам зелёных технологий в Токио.",
        },
        visits: {
          title:
            "Посещение ряда исследовательских центров и компаний-партнёров",
          paragraph:
            "Прошло итоговое совещание с представителями Sophia University, на котором был сформирован предварительный план совместных исследований, включая академический обмен аспирантами и магистрантами. Были подготовлены итоговые материалы командировки и проведена краткая ознакомительная экскурсия по объектам зелёных технологий в Токио.",
        },
        results: {
          title: "Основные результаты командировки",
          list: {
            collaboration: {
              title: "Научное сотрудничество",
              items: [
                "Установлены прямые контакты с Professor Motoyuki Okada и Professor Sakaida Soichi.",
                "Согласованы направления совместных исследований по переработке отходов, синтезу углеродно-кремниевых материалов и интеграции технологий очистки воды.",
              ],
            },
            technicalInfo: {
              title: "Техническая информация",
              items: [
                "Получены данные о современных японских методах получения высокочистого кремния.",
                "Изучены IoT-решения для мониторинга и управления системами накопления энергии.",
              ],
            },
            international: {
              title: "Международное взаимодействие",
              items: [
                "Проведены переговоры с японскими и международными компаниями — потенциальными партнёрами для реализации пилотных проектов.",
                "Достигнуты договорённости о проведении онлайн-семинара в сентябре 2025 года.",
              ],
            },
            exhibition: {
              title: "Выставка COMNEXT 2025",
              items: [
                "Изучены передовые технологии в области 6G, цифровой трансформации и промышленного Интернета вещей.",
                "Определены потенциальные поставщики оборудования для интеграции в проект BR28713383.",
              ],
            },
          },
        },
      },
    },
    projectsList: {
      project1: {
        alt: "Project visual",
        title:
          "Разработка и масштабирование технологий переработки отходов био- и горно-металлургической промышленности для создания высокоэффективных углеродно-кремниевых материалов в системах накопления энергии",
      },
    },
    project_br28713383: {
      title:
        "Разработка и масштабирование технологий переработки отходов био- и горно-металлургической промышленности для создания высокоэффективных углеродно-кремниевых материалов",
      sections: {
        goals: {
          title: "Цели программы",
          paragraph:
            "Создать пилотную установку для получения диоксида кремния и кремния из био- и горно-металлургических отходов с целью их дальнейшего применения в качестве электродных материалов в электрохимических системах накопления энергии.",
        },
        description: {
          title: "Описание программы",
          paragraphs: {
            p1: "Отходы металлургической и биотехнологической промышленности являются одной из наиболее острых экологических проблем нашего времени, поскольку их накопление приводит к загрязнению окружающей среды и потере ценных ресурсов.",
            p2: "Разработка экологически безопасных технологий утилизации позволяет не только снизить техногенную нагрузку, но и вернуть отходы в производственный цикл в качестве вторичного сырья. Проект нацелен на формирование технологической базы для устойчивого развития, обеспечивая минимизацию экологического воздействия и переход к экономике замкнутого цикла.",
          },
        },
        publications: {
          title: "Публикации",
          paragraph:
            "Ниже представлены научные публикации и отчёты, связанные с данным проектом.",
          list: {
            paper1: "Статья в журнале «Processes» (2024)",
            paper2: "Акт приёмки — Processes №3788544",
            paper3: "Статья в журнале «Academic Journal of Physical and Chemical Sciences» (2025)"
          }
        }

      },
      backButton: "← Назад к проектам",
    },
  },

  // =========================
  // ENGLISH (stub / fill later)
  // =========================
  en: {
  nav: {
    home: "Home",
    about: "About Us",
    news: "News",
    projects: "Projects",
  },
  lang: {
    ru: "Rus",
    en: "Eng",
    kk: "Kaz",
  },
  aria: {
    toggleNavigation: "Toggle navigation",
  },
  footer: {
    nav: {
      home: "Home",
      about: "About Us",
      news: "News",
      projects: "Projects",
    },
    contact: {
      addressLabel: "Address:",
      addressValue: "Kazakhstan, Almaty, Abay Ave. 191",
      phoneLabel: "Phone:",
      phoneValue: "+7 (705) 522-10-54",
      emailLabel: "Email:",
      emailValue: "info@example.kz",
    },
  },
  homeHero: {
    title: "Scientific Center for New Technologies",
    description:
      "LLP “Scientific Center for New Technologies” is a modern research and innovation cluster that brings together advanced developments, cutting-edge technologies, and highly qualified specialists. We are an accredited research organization focused on creating practical, results-oriented solutions and efficiently implementing scientific innovations into the real economy.",
    button: "About Us",
  },
  newsCarousel: {
    title: "News",
    items: {
      japanCollab: {
        title: "Cooperation with Japan",
        date: "October 5, 2025",
        description:
          "The results of the scientific visit to Japan were summarized, and future directions for collaboration were defined.",
      },
    },
  },
  projectsSection: {
    title: "Research Work",
    project1: {
      alt: "Research project",
      description:
        "Development and scaling of technologies for processing bio- and mining-metallurgical waste to create highly efficient carbon–silicon materials for energy storage systems.",
    },
  },
  about: {
    sections: {
      company: {
        title: "About the Company",
        paragraph1:
          "We are an accredited research organization focused on creating practical, results-oriented solutions and efficiently implementing scientific innovations into the real economy.",
      },
      mission: {
        title: "Mission and Goals of the Organization",
        paragraph1:
          "The primary mission of LLP “Scientific Center for New Technologies” and LLP “AlAkSan” is the creation, development, and implementation of innovative technologies that foster technological progress, sustainable development, and enhance the global competitiveness of domestic science and industry. Our work is dedicated to transforming scientific ideas into practical solutions applied across key sectors — from medicine and ecology to energy and agriculture.",
      },
      team: {
        title: "Our Team",
        heading:
          "We have united leading scientists, experienced researchers, and highly qualified specialists to address complex scientific and technical challenges and to commercialize research developments.",
        intro: "Team composition:",
        list: {
          phd: "7 PhD holders — experts with over 15 years of research and project experience, including participation in international programs and technology transfer initiatives.",
          candidates:
            "5 Candidates of Sciences — professionals with more than 20 years of experience, recognized experts in their fields, and authors of patents and applied solutions.",
          masters:
            "10 Masters — young researchers actively involved in applied R&D, data analysis, and project management.",
          specialists:
            "Specialized experts — in the fields of organic chemistry, biotechnology, analytics, industrial pharmacy, and engineering solutions.",
        },
      },
      partners: {
        title: "Partners",
        intro:
          "Our partners include leading research laboratories and universities from around the world, such as:",
        list: {
          sophia:
            "Sophia University (上智大学, Jōchi Daigaku) — a prestigious private research university in Tokyo, founded in 1913. Collaboration with Sophia University, including Professors Okada and Sakaida, focuses on joint research and academic exchange.",
          camerino: "University of Camerino (Italy)",
          cadiz: "University of Cádiz (Spain)",
          kazeco:
            "Analytical Laboratory LLP “KAZECOANALYSIS” — an independent accredited laboratory specializing in analytical control in various industries.",
        },
      },
    },
  },
  newsPage: {
    title: "News and Research",
    items: {
      japanCollab: {
        title: "Joint Cooperation with Japan",
        description:
          "The results of the scientific visit to Japan were summarized, and future directions for collaboration were defined.",
        date: "October 10, 2025",
        button: "Read More",
      },
    },
  },
  japanNews: {
    title: "Cooperation with Japan",
    sections: {
      sophiaUniversity: {
        title: "Sophia University (Jōchi Daigaku)",
        paragraph1:
          "Sophia University (上智大学, Jōchi Daigaku) is a prestigious private research university in Tokyo, founded in 1913. Its main campus is located in the Yotsuya area (Chiyoda-ku), just a few minutes from Yotsuya Station.",
        paragraph2: {
          intro: "Key features:",
          list: {
            reputation:
              "Reputation: Sophia University is considered one of Japan’s top private universities, alongside Keio and Waseda. Its name carries strong prestige in Japanese academia.",
            programs:
              "International Programs: The university offers many degree programs fully in English, including Liberal Arts, Science and Technology, Global Studies, and the SPSF program.",
            campuses:
              "Campuses: In addition to the main Yotsuya campus, there are facilities in Seibo (Shinjuku), Shakujiji (Nerima), and even Osaka.",
          },
          closing:
            "International Collaboration: The university maintains partnerships with hundreds of institutions worldwide, including Georgetown, Yale, LMU Munich, and others.",
        },
      },
      meetingOkada: {
        title: "Meeting with Professor Motoyuki Okada",
        paragraphs: {
          p1: "A meeting was held with Professor Motoyuki Okada (Chairman & Research Institute Director), where the prospects of joint research in the field of bio- and metallurgical waste processing were discussed, as well as opportunities for integrating Japanese purification and processing technologies into Kazakhstani developments. On the same day, participants visited the Green Energy and Sustainable Materials laboratories.",
          p2: "The Institute of Comparative Culture (ICC) aims to foster and support interdisciplinary research by its members in fields such as social sciences, humanities, business, and economics. The institute also assists its members in developing collaborative projects with researchers outside Sophia University and in strengthening the university’s international reputation as a center of academic excellence.",
          p3: "The ICC’s areas of specialization include anthropology, sociology, political science, business, economics, history, literature, and art history, with a particular focus on East Asia and its global connections. Most of the ICC’s research and public events are conducted in English.",
        },
      },
      meetingSakaida: {
        title: "Discussions with Professor Sakaida Soichi. COMNEXT 2025",
        paragraphs: {
          p1: "Discussions were held with Professor Sakaida Soichi (President, Aqua-Sol Research Center), focusing on the application of water purification technologies in high-purity silicon production and joint approaches to synthesizing carbon–silicon materials for energy storage systems. On the same day, the delegation attended the 3rd International COMNEXT 2025 Exhibition (Tokyo Big Sight), where they explored the latest developments in 6G, IoT, AI, and digital transformation, and held meetings with companies developing hardware and software for energy systems.",
          p2: "As part of the visit, further talks took place with Professor Motoyuki Okada (Chairman & Research Institute Director) and Professor Sakaida Soichi (President, Aqua-Sol Research Center), during which areas for scientific collaboration and joint research projects were discussed.",
        },
      },
      finalMeeting: {
        title: "Final Meeting with Sophia University Representatives",
        paragraph:
          "A final meeting with representatives of Sophia University was held, during which a preliminary plan for joint research was established, including academic exchange programs for master’s and doctoral students. Final materials from the visit were prepared, and a brief tour of green technology facilities in Tokyo was conducted.",
      },
      visits: {
        title: "Visits to Research Centers and Partner Companies",
        paragraph:
          "The delegation visited several research institutions and partner companies, where potential collaboration areas were identified and discussions on technology transfer and joint development were held.",
      },
      results: {
        title: "Key Outcomes of the Visit",
        list: {
          collaboration: {
            title: "Scientific Collaboration",
            items: [
              "Direct contacts established with Professor Motoyuki Okada and Professor Sakaida Soichi.",
              "Agreed on directions for joint research on waste processing, synthesis of carbon–silicon materials, and integration of water purification technologies.",
            ],
          },
          technicalInfo: {
            title: "Technical Information",
            items: [
              "Obtained data on modern Japanese methods of producing high-purity silicon.",
              "Studied IoT-based solutions for monitoring and managing energy storage systems.",
            ],
          },
          international: {
            title: "International Cooperation",
            items: [
              "Held meetings with Japanese and international companies — potential partners for implementing pilot projects.",
              "Agreed to organize an online seminar in September 2025.",
            ],
          },
          exhibition: {
            title: "COMNEXT 2025 Exhibition",
            items: [
              "Explored cutting-edge technologies in 6G, digital transformation, and the industrial Internet of Things.",
              "Identified potential equipment suppliers for integration into Project BR28713383.",
            ],
          },
        },
      },
    },
  },
  projectsList: {
    project1: {
      alt: "Project visual",
      title:
        "Development and scaling of technologies for processing bio- and mining-metallurgical waste to create highly efficient carbon–silicon materials for energy storage systems.",
    },
  },
  project_br28713383: {
    title:
      "Development and Scaling of Technologies for Processing Bio- and Mining-Metallurgical Waste to Create High-Efficiency Carbon–Silicon Materials",
    sections: {
      goals: {
        title: "Program Goals",
        paragraph:
          "To create a pilot installation for producing silicon dioxide and silicon from bio- and mining-metallurgical waste, with the aim of using them as electrode materials in electrochemical energy storage systems.",
      },
      description: {
        title: "Program Description",
        paragraphs: {
          p1: "Waste from metallurgical and biotechnological industries represents one of the most pressing environmental issues today, as its accumulation leads to pollution and the loss of valuable resources.",
          p2: "Developing environmentally safe recycling technologies not only reduces environmental impact but also returns waste to the production cycle as secondary raw material. This project aims to establish a technological foundation for sustainable development, minimizing ecological damage and promoting a circular economy.",
        },
      },
      publications: {
        title: "Publications",
        paragraph:
          "Below are the scientific publications and reports related to this project.",
        list: {
          paper1: "Article in the journal “Processes” (2024)",
          paper2: "Acceptance Certificate — Processes No. 3788544",
          paper3: "Article in the “Academic Journal of Physical and Chemical Sciences” (2025)"
        }
      }

    },
      backButton: "← Back to Projects",
    },
  },


  // =========================
  // KAZAKH (stub / fill later)
  // =========================
  kk: {
  nav: {
    home: "Басты бет",
    about: "Біз туралы",
    news: "Жаңалықтар",
    projects: "Жобалар",
  },
  lang: {
    ru: "Рус",
    en: "Eng",
    kk: "Қаз",
  },
  aria: {
    toggleNavigation: "Навигацияны ауыстыру",
  },
  footer: {
    nav: {
      home: "Басты бет",
      about: "Біз туралы",
      news: "Жаңалықтар",
      projects: "Жобалар",
    },
    contact: {
      addressLabel: "Мекенжай:",
      addressValue: "Қазақстан, Алматы қ., Абай даңғ., 191",
      phoneLabel: "Телефон:",
      phoneValue: "+7 (705) 522-10-54",
      emailLabel: "Email:",
      emailValue: "info@example.kz",
    },
  },
  homeHero: {
    title: "Жаңа технологиялар ғылыми орталығы",
    description:
      "«Scientific Center for New Technologies» ЖШС – заманауи ғылыми-зерттеу және инновациялық кластер. Ол озық әзірлемелерді, инновациялық технологияларды және жоғары білікті мамандарды біріктіреді. Біз – ғылыми әзірлемелерді нақты секторға тиімді енгізуге бағытталған аккредиттелген ғылыми ұйымбыз.",
    button: "Біз туралы",
  },
  newsCarousel: {
    title: "Жаңалықтар",
    items: {
      japanCollab: {
        title: "Жапониямен ынтымақтастық",
        date: "2025 жылғы 5 қазан",
        description:
          "Жапонияға іссапардың қорытындылары шығарылып, әрі қарайғы ғылыми ынтымақтастық бағыттары айқындалды.",
      },
    },
  },
  projectsSection: {
    title: "Ғылыми-зерттеу жұмысы",
    project1: {
      alt: "Зерттеу жобасы",
      description:
        "Био және тау-металлургиялық қалдықтарды өңдеу технологияларын әзірлеу мен масштабтау – энергия сақтау жүйелеріне арналған жоғары тиімді көміртек-кремний материалдарын алу мақсатында.",
    },
  },
  about: {
    sections: {
      company: {
        title: "Компания туралы",
        paragraph1:
          "Біз – ғылыми идеяларды нақты секторға енгізуге және нәтижеге бағытталған практикалық шешімдер әзірлеуге маманданған аккредиттелген ғылыми ұйымбыз.",
      },
      mission: {
        title: "Ұйымның миссиясы мен мақсаттары",
        paragraph1:
          "«Scientific Center for New Technologies» және «AlAkSan» ЖШС-нің басты миссиясы – технологиялық прогресті, тұрақты дамуды және отандық ғылым мен өнеркәсіптің жаһандық деңгейдегі бәсекеге қабілеттілігін арттыруға бағытталған инновациялық технологияларды құру, дамыту және енгізу. Біздің қызметіміз ғылыми идеяларды тәжірибелік шешімдерге айналдыруға бағытталған – медицинадан бастап энергетика мен ауыл шаруашылығына дейінгі негізгі салаларда қолданылатын жобалар арқылы.",
      },
      team: {
        title: "Біздің команда",
        heading:
          "Біз жетекші ғалымдарды, тәжірибелі зерттеушілерді және жоғары білікті мамандарды біріктіріп, күрделі ғылыми-техникалық міндеттерді шешу және әзірлемелерді коммерцияландыру мақсатында жұмыс істейміз.",
        intro: "Команда құрамы:",
        list: {
          phd: "7 PhD докторы – 15 жылдан астам ғылыми және жобалық тәжірибесі бар сарапшылар, халықаралық бағдарламалар мен технология трансфері саласында тәжірибесі бар.",
          candidates:
            "5 ғылым кандидаты – 20 жылдан астам еңбек өтілі бар кәсіби мамандар, өз саласында танымал, патенттер мен қолданбалы шешімдердің авторлары.",
          masters:
            "10 магистр – қолданбалы зерттеулерге, аналитикалық жұмыстарға және жоба менеджментіне белсенді қатысатын жас зерттеушілер.",
          specialists:
            "Тар салалы мамандар – органикалық химия, биотехнология, аналитика, өнеркәсіптік фармацевтика және инженерлік шешімдер салаларында.",
        },
      },
      partners: {
        title: "Серіктестер",
        intro:
          "Біздің серіктестеріміз – әлемнің жетекші зертханалары мен университеттері:",
        list: {
          sophia:
            "София университеті (上智大学, Jōchi Daigaku) – 1913 жылы құрылған Токиодағы беделді жеке зерттеу университеті. Sophia University профессорлары Окада және Сакайдамен бірлескен ғылыми зерттеулер мен академиялық алмасу бағытында ынтымақтастық орнатылған.",
          camerino: "Камерино университеті (Италия)",
          cadiz: "Кадис университеті (Испания)",
          kazeco:
            "«КАЗЭКОАНАЛИЗ» ЖШС аналитикалық зертханасы – әртүрлі салаларда аналитикалық бақылау жүргізуге маманданған тәуелсіз аккредиттелген зертхана.",
        },
      },
    },
  },
  newsPage: {
    title: "Жаңалықтар мен зерттеулер",
    items: {
      japanCollab: {
        title: "Жапониямен бірлескен ынтымақтастық",
        description:
          "Жапонияға іссапардың қорытындылары шығарылып, әрі қарайғы ғылыми ынтымақтастық бағыттары айқындалды.",
        date: "2025 жылғы 10 қазан",
        button: "Толығырақ",
      },
    },
  },
  japanNews: {
    title: "Жапониямен ынтымақтастық",
    sections: {
      sophiaUniversity: {
        title: "София университеті (Jōchi Daigaku)",
        paragraph1:
          "София университеті (上智大学, Jōchi Daigaku) – 1913 жылы құрылған Токиодағы беделді жеке ғылыми университет. Негізгі кампусы Йоцуя ауданында (Chiyoda-ku) орналасқан, Йоцуя станциясынан бірнеше минуттық жерде.",
        paragraph2: {
          intro: "Негізгі ерекшеліктері:",
          list: {
            reputation:
              "Беделі: София университеті Жапонияның ең үздік жеке университеттерінің бірі болып саналады (Keio және Waseda университеттерімен қатар). Университеттің атауы Жапонияда жоғары беделге ие.",
            programs:
              "Халықаралық бағдарламалар: Университет толығымен ағылшын тілінде өтетін көптеген бағдарламаларды ұсынады, олардың қатарында – Liberal Arts, Science and Technology, Global Studies және SPSF факультеттері бар.",
            campuses:
              "Кампустар: Негізгі Йоцуя кампусынан бөлек, Сейбо (Shinjuku), Шакудзидзи (Nerima) және Осака қалаларында бөлімшелері бар.",
          },
          closing:
            "Халықаралық ынтымақтастық: Университет әлем бойынша жүздеген жоғары оқу орындарымен серіктестік орнатқан, соның ішінде Georgetown, Yale, LMU Munich және басқа да университеттер бар.",
        },
      },
      meetingOkada: {
        title: "Профессор Motoyuki Okada-пен кездесу",
        paragraphs: {
          p1: "Профессор Motoyuki Okada (Chairman & Research Institute Director) жетекшілігімен өткен кездесуде био және металлургиялық қалдықтарды өңдеу саласындағы бірлескен зерттеу перспективалары, сондай-ақ жапондық тазарту және өңдеу технологияларын қазақстандық жобаларға енгізу мүмкіндіктері талқыланды. Сол күні қатысушылар Green Energy және Sustainable Materials зертханаларына барды.",
          p2: "Institute of Comparative Culture (ICC) институтының мақсаты – әлеуметтік ғылымдар, гуманитарлық пәндер, бизнес және экономика салаларында көпсалалы зерттеулерді дамыту және қолдау. Институт сондай-ақ өз мүшелеріне София университетінен тыс зерттеушілермен бірлескен жобалар құруға және университеттің халықаралық беделін арттыруға көмектеседі.",
          p3: "ICC институтының мамандану салаларына антропология, әлеуметтану, саясаттану, бизнес, экономика, тарих, әдебиет және өнер тарихы кіреді, ерекше назар – Шығыс Азия мен оның жаһандық байланыстарына. ICC іс-шараларының көпшілігі ағылшын тілінде өткізіледі.",
        },
      },
      meetingSakaida: {
        title: "Профессор Sakaida Soichi-пен келіссөздер. COMNEXT 2025",
        paragraphs: {
          p1: "Aqua-Sol Research Center президенті профессор Sakaida Soichi-пен келіссөздер өтті. Талқылау жоғары тазалықтағы кремний өндіруде су ерітінділерін тазарту технологияларын қолдану және энергия сақтау жүйелеріне арналған көміртек-кремний материалдарын синтездеу бағыттарына арналды. Сол күні делегация Токио Big Sight орталығында өткен COMNEXT 2025 көрмесіне қатысып, 6G, IoT, жасанды интеллект және цифрлық трансформация салаларындағы соңғы әзірлемелермен танысты, сондай-ақ энергетикалық жүйелерге арналған жабдық пен бағдарламалық қамтамасыз ету өндіруші компаниялармен келіссөздер жүргізді.",
          p2: "Сапар аясында профессор Motoyuki Okada және профессор Sakaida Soichi-пен ғылыми ынтымақтастық пен бірлескен зерттеу жобаларының бағыттары бойынша қосымша кездесулер өтті.",
        },
      },
      finalMeeting: {
        title: "София университетінің өкілдерімен қорытынды кездесу",
        paragraph:
          "София университетінің өкілдерімен өткен қорытынды кездесуде бірлескен зерттеулердің алдын ала жоспары жасалды, магистранттар мен докторанттар арасындағы академиялық алмасу бағдарламалары келісілді. Сапардың қорытынды материалдары дайындалып, Токиодағы «жасыл технологиялар» нысандарына қысқаша экскурсия өткізілді.",
      },
      visits: {
        title: "Зерттеу орталықтары мен серіктес компанияларға бару",
        paragraph:
          "Делегация бірнеше ғылыми орталықтар мен серіктес компанияларға барып, ынтымақтастық бағыттары мен технология трансфері мүмкіндіктерін талқылады.",
      },
      results: {
        title: "Сапардың негізгі нәтижелері",
        list: {
          collaboration: {
            title: "Ғылыми ынтымақтастық",
            items: [
              "Профессор Motoyuki Okada және профессор Sakaida Soichi-пен тікелей байланыс орнатылды.",
              "Қалдықтарды өңдеу, көміртек-кремний материалдарын синтездеу және суды тазарту технологияларын біріктіру бойынша бірлескен зерттеулер бағыттары келісілді.",
            ],
          },
          technicalInfo: {
            title: "Техникалық ақпарат",
            items: [
              "Жоғары тазалықтағы кремний өндірудің заманауи жапон әдістері туралы деректер алынды.",
              "Энергия сақтау жүйелерін бақылау және басқару үшін IoT шешімдері зерттелді.",
            ],
          },
          international: {
            title: "Халықаралық өзара іс-қимыл",
            items: [
              "Пилоттық жобаларды жүзеге асыру бойынша әлеуетті серіктестермен – жапон және халықаралық компаниялармен келіссөздер жүргізілді.",
              "2025 жылғы қыркүйекте онлайн-семинар өткізу туралы келісімге қол жеткізілді.",
            ],
          },
          exhibition: {
            title: "COMNEXT 2025 көрмесі",
            items: [
              "6G, цифрлық трансформация және өнеркәсіптік Интернет заттар саласындағы заманауи технологиялармен таныстық.",
              "BR28713383 жобасына енгізу үшін ықтимал жабдық жеткізушілер анықталды.",
            ],
          },
        },
      },
    },
  },
  projectsList: {
    project1: {
      alt: "Жоба көрінісі",
      title:
        "Био және тау-металлургиялық қалдықтарды өңдеу технологияларын әзірлеу мен масштабтау – энергия сақтау жүйелеріне арналған жоғары тиімді көміртек-кремний материалдарын алу мақсатында.",
    },
  },
  project_br28713383: {
    title:
      "Био және тау-металлургиялық қалдықтарды өңдеу технологияларын әзірлеу және масштабтау арқылы жоғары тиімді көміртек-кремний материалдарын алу",
    sections: {
      goals: {
        title: "Бағдарламаның мақсаттары",
        paragraph:
          "Био және тау-металлургиялық қалдықтардан кремний диоксиді мен кремний алу бойынша пилоттық қондырғы құру – оларды электрохимиялық энергия сақтау жүйелеріндегі электрод материалдары ретінде пайдалану мақсатында.",
      },
      description: {
        title: "Бағдарламаның сипаттамасы",
        paragraphs: {
          p1: "Металлургиялық және биотехнологиялық өнеркәсіп қалдықтары – қазіргі замандағы ең өзекті экологиялық мәселелердің бірі, себебі олардың жиналуы қоршаған ортаны ластап, бағалы ресурстардың жоғалуына әкеледі.",
          p2: "Экологиялық қауіпсіз қайта өңдеу технологияларын әзірлеу тек техногендік жүктемені азайтып қана қоймай, қалдықтарды өндірістік айналымға қайтаруға мүмкіндік береді. Жоба тұрақты даму мен экологиялық әсерді азайтуға бағытталған технологиялық базаны қалыптастыруды көздейді.",
        },
      },
      publications: {
        title: "Жарияланымдар",
        paragraph:
          "Бұл бөлімде жобаға қатысты ғылыми мақалалар мен есептер берілген.",
        list: {
          paper1: "«Processes» журналындағы мақала (2024)",
          paper2: "Қабылдау актісі — Processes №3788544",
          paper3: "«Academic Journal of Physical and Chemical Sciences» журналындағы мақала (2025)"
        }
      }

    },
    backButton: "← Жобаларға оралу",
  },
},

} as const;

export {};

