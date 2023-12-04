<script setup>
import {ref, onMounted} from 'vue';

const route = useRoute();
const developerToDisplay = ref(null);
const isTitleVisible = ref(false);

const developers = {
  Masis: {
    linkedin: 'https://www.linkedin.com/in/masis-gulmez/',
    email: 'masis.professionnel@gmail.com',
    name: 'Masis',
    lastName: 'Gulmez',
    skills: [
      'JavaScript',
      'React',
      'CSS-in-JS',
      'TypeScript',
      'Vue.js',
      'Sass',
      'Flux',
      'ESNext',
      'Flow',
      'NodeJS',
      'GraphQL',
      'LessCSS',
      'Next.js',
      'Design Systems',
      'E2E Testing',
      'PWAs',
      'Performance Optimization',
      'Software Testing',
      'SE Optimization',
      'Progressive Enhancement',
      'Accessibility auditing',
      'Build Automation',
      'Responsive Web Design',
      'UX Design/Strategy',
    ],
    position: 'Expert Frontend developer.',
    positionDescription: `
      Engineer valued for driving high-performance accessible web experiences. I design quality, user-friendly and
      scalable products regardless of stack.
    `,
    image: 'masis.jpeg',
    jobs: {
      description: "J'ai travaillé sur plusieurs projets web au fil des années, dont certains pour les organisations suivantes",
      experiences: [
        {
          socity: 'Shopify',
          position: 'Senior Frontend Engineer',
          period: 'May 2020 - Present',
          description: "J'ai travaillé sur plusieurs projets web au fil des années, dont certains pour les organisations suivantes",
          points: [
            "Pioneering initiatives around the future of onboarding, signup and developing technical vision for them",
            "Identified a gap in my team’s deployment workflow and built a solution that reduced the time required for each deployment from over 40 minutes to less than 6 minutes, which restores almost 300 hours of developer productivity every year",
            "Collaborating with UX designers and researchers to inform the direction of products we craft",
            "First-hand involvement in early-stage product and UX thinking and rapid prototyping",
            "Conducting and monitoring several strategic experiments, refining experiences based on resulting metrics and learnings",
            "Participating and incorporating learnings from real merchant interviews and research sessions",
            "Identifying gaps around the org-wide frontend infrastructure, drafting proposals and implementing solutions",
            "Mentoring engineers within and outside my team on best practices, performance and advanced patterns",
            "Providing guidance around product accessibility and inclusivity across the org",
            "Built an OAuth 2.0 compliant client-side library for our Identity provider across Shopify"
          ],
        },
        {
          socity: 'hellotax',
          position: 'Principal Frontend Engineer',
          period: 'Mar - Nov 2019',
          points: [
            "Orchestrated and developed the frontend infrastructure, design, and functionality for hellotax's new JavaScript-centric app powered by Vue and also managed a co-engineer.",
            "Crafted a scalable component library that enforced accessibility and fluency across the application.",
            "Built a multi-role user authentication system from the ground up with JavaScript.",
            "Implemented a client-side localization system for the entire app.",
            "Built a client-side multilingual routing system with solid navigation guards.",
            "Engineered fail-safe optimized utility libraries to minimize runtime errors and unusability in production.",
            "Implemented fast and reliable data transformation and diffing mechanisms on the frontend for our data pipelines.",
            "Delivered an overall fast, yet accessible and silky smooth user experience in the app."
          ],
        },
        {
          socity: 'Pixel2HTML',
          position: 'Senior Frontend Engineer',
          period: 'Nov 2018 - Oct 2019',
          points: [
            "Built frontend applications for multiple clients. Most especially JavaScript and React applications.",
            "Rebuilt the company's marketing site initially written in HTML/CSS using React and Gatsby.",
            "Crafted, audited and improved design, accessibility, and overall experience of products.",
            "Enforced healthy codebases, coding style, and standards.",
            "Completed projects on time and delivered to clients accordingly.",
            "Communicated effectively with project managers and the team."
          ],
        },
        {
          socity: 'MOONDA',
          position: 'Senior Frontend Engineer',
          period: 'Nov 2018 - Jan 2019',
          points: [
            "Built a contest application from the ground up using React which enabled users of the product from all around the globe to post photos and share reviews about the product.",
            "Designed and implemented a cross-browser, IE 11 compatible marketing site for the product.",
            "Implemented internationalization on the website with support for over 40 languages.",
            "Implemented automatic locale detection (with proper redirection based on that) and locale-specific content filtering."
          ],
        },
        {
          socity: 'Conectar',
          position: 'Lead Frontend Engineer',
          period: 'Jun - Nov 2018',
          points: [
            "Crafted a solid design system to enforce consistency across the application.",
            "Built a messaging system as powerful as Facebook Messenger with React.",
            "Built a multi-feature audio and video call application powered by React.",
            "Introduced and enforced a consistent coding style across the application.",
            "Eliminated dead code which saved us about 20% the size of every page bundle.",
            "Eliminated Bootstrap and other CSS libraries completely from the application, and replaced them with custom styles.",
            "Reduced bundle size from 5MB to a few kilobytes.",
            "Did a major re-engineering of the development workflow which led to over 70% increase in development compile speed.",
            "Built an appointment scheduling system from the ground up with React."
          ],
        },
      ],
    },
  },
  Cedric: {
    linkedin: 'https://www.linkedin.com/in/cedric-salaun/',
    email: 'salaun.cedric@gmail.com',
    name: 'Cédric',
    lastName: 'Salaün',
    skills: [
      'TypeScript',
      'JavaScript',
      'Nest.js',
      'Angular',
      'React',
      'ReactNative',
      'CSS-in-JS',
      'Vue.js',
      'Sass',
      'Next.js',
      'NodeJS',
      'GraphQL',
      'REST',
      'SOAP',
      'Design Systems',
      'E2E Testing',
      'PWAs',
      'Performance Optimization',
      'Software Testing',
      'SE Optimization',
      'Progressive Enhancement',
      'Build Automation',
      'Responsive Web Design',
    ],
    position: 'Expert Backend developer.',
    positionDescription: 'Expert Backend developer.',
    image: 'cedric.png',
    jobs: {
      description: "J'ai travaillé sur plusieurs projets web au fil des années, dont certains pour les organisations suivantes :",
      experiences: [
        {
          socity: 'Masteos',
          position: 'Full stack developer',
          period: 'Mai 2022 - Septembre 2023',
          description: 'Participation à l\'équipe de développement front-end & back-end, composée de 30 personnes, pour la création d\'une application d\'investissement locatif.',
          points: [
            "Développement Application mobile & web. Développement UI Kit.",
            "Création d'un process de population par seed.",
            "Création d’un module de suivi de projet locatif. Transfert de compétences.",
            "Création d'un système de migration.",
            "Réalisation de scénarios de tests (unitaires, e2e , d'acceptation & intégration).",
          ],
        },
        {
          socity: 'Travel Planet',
          position: 'Ingénieur études et développement',
          period: 'Décembre 2017 - Mai 2022',
          description: 'Développement front-end & back-end dans la création d’un portail de réservation B2B au sein d’une équipe de 15 personnes.',
          points: [
            "Développement de nouvelles APIs de locations de voiture.",
            "Développement de nouvelles APIs de réservations de billets d'avion. Conception d’un gestionnaire de voyageurs.",
            "Création d’un module de gestion de prestations (visualisation, processus de validation, modification).",
            "Réalisation d’un module de réservations d’hôtels.",
            "Développement d’un module de réservations de billets de train. Réalisation de scénarios de test."
          ],
        }
      ],
    },
  }
};

onMounted(() => {
  developerToDisplay.value = developers[route.params.name];
  setTimeout(() => {
    isTitleVisible.value = true;
  }, 1000);
});

const doSomethingOnLoad = () => {
  console.log({});
}

</script>

<template>
  <main v-if="developerToDisplay">
    <aside>
      <div>
        <section>
          <a target="_blank" :href="developerToDisplay.linkedin"
             :aria-label="`Connect with ${developerToDisplay.name} on LinkedIn, opens a new tab.`"
             class="no-marker linkedin">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <path
                  d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a :href="`mailto:${developerToDisplay.email}`" :aria-label="`Send ${developerToDisplay.name} a mail`"
             class="no-marker">
            <svg height="24" viewBox="0 59.882 479.058 359.294" width="24" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 015.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"/>
            </svg>
          </a>
        </section>
        <section>
          <h3>Core Technologies:</h3>
          <ul>
            <li v-for="skill in developerToDisplay.skills" class="skill">{{ skill }}</li>
          </ul>
        </section>
      </div>
    </aside>

    <article>
      <header>
        <div id="prez">
          <h1 id="name" :class="{ active: isTitleVisible }">
            {{ developerToDisplay.name }} <br>{{ developerToDisplay.lastName }}
          </h1>
          <Image
              id="picture"
              :src="`/images/${developerToDisplay.image}`"
              :placeholder="[30,20,10]"
              loading="lazy"
              width="200px"
              height="200px"
              @load="doSomethingOnLoad"
          />
        </div>
        <h2>{{ developerToDisplay.position }}</h2>
        <p>
          {{ developerToDisplay.positionDescription }}
        </p>

        <!--        <br>-->
        <!--        <br>-->
        <!--        <br>-->
        <!--        <br>-->
        <!--        <nuxt-img src="/cedric.png" alt="image of my site" />-->
        <!--        <NuxtPicture format="avif,webp" src="/cedric.png" alt="image of my site" />-->
        <!--        <NuxtImg src="/images/cedric.png" alt="image of my site" />-->
        <!--        <NuxtPicture format="avif,webp" src="/images/cedric.png" alt="image of my site" />-->
        <!--        <NuxtImg :src="`~/assets/images/${developerToDisplay.image}`"-->
        <!--                 loading="lazy"-->
        <!--                 width="480"-->
        <!--                 height="300"-->
        <!--                 sizes="sm:355px md:320px lg:480px"-->
        <!--        />-->
      </header>
      <section id="experience">
        <h3 class="heading">Experience</h3>
        <p>
          {{ developerToDisplay.jobs.description }}
        </p>
        <ul id="companies">
          <li class="company" v-for="experience in developerToDisplay.jobs.experiences">
            <header>
              <h4>{{ experience.socity }} <span>{{ experience.position }}</span></h4>
              <span class="period">{{ experience.period }}</span>
            </header>
            <p>{{ experience.description }}</p>
            <ul class="points">
              <li v-for="point in experience.points">{{ point }}</li>
            </ul>
          </li>
        </ul>
      </section>
    </article>
  </main>
</template>

<style scoped lang="scss">
main {
  @include flex;
  max-width: unset;
  padding: $spacing-2 0 $spacing-6;

  aside {
    @include flex;
    flex-direction: column;
    flex: 1;
    font-size: $font-xtra-small;
    gap: $spacing-2;
    position: relative;

    & > div {
      position: sticky;
      top: $spacing-3;
    }

    section {
      flex: 1;
    }

    a {
      color: var(--text-base);
      display: inline-block;
      font-weight: normal;

      &.linkedin {
        color: var(--primary)
      }

      svg {
        display: inline-block;
        height: $spacing-3;
        width: $spacing-3;
        margin-right: $spacing-1;
        margin-bottom: $spacing-1;

        path {
          fill: currentColor;
        }
      }
    }

    li.skill{
      margin-bottom: $spacing-1;
    }
  }

  article {
    @include flex;

    flex: 2;
    flex-direction: column;
    gap: $spacing-5;

    div#prez {
      display: flex;
      margin-bottom: $spacing-2;
      flex-wrap: wrap;
    }

    h1#name {
      margin-top: 0;
      margin-bottom: $spacing-2;
      font-size: $font-maximum;
      line-height: 1;
      letter-spacing: -0.05em;
      //transition: $xtra-long-transition-all;
      width: max-content;
      font-weight: bold;
      align-self: center;

      &.active {
        --tw-text-opacity: 1;
        box-shadow: var(--shadow-line);
        color: var(--text-base);
        font-weight: 700;
      }
    }

    div#picture {
      margin: 0 auto;
    }

    p {
      font-size: $font-small;
    }
  }

  p, ul {
    color: var(--text-base);
  }

  .company header {
    @include flex;
    margin-top: $spacing-3;
  }

  .company .period {
    //-webkit-flex-shrink: 0;
    //-ms-flex-shrink: 0;
    //flex-shrink: 0;
  }

  .company h4 {
    //margin-top: 0;
    //line-height: 1.4;
    //margin-right: 1em;
  }

  .company h4 span {
    //font-weight: normal;
    //color: rgba(71, 71, 71, 0.75);
  }

  .company p {
    //margin: 0;
  }

  .company .points {
    //margin-top: 1em;
    //margin-left: 1em;
  }

  .company .points li {
    //-webkit-text-indent: -0.97em;
    //text-indent: -0.97em;
  }

  .company .points li:not(:last-of-type) {
    //margin-bottom: 0.3em;
  }
}
</style>
