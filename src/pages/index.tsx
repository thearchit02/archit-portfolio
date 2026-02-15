import Head from 'next/head';
import Layout from '../components/layout/Layout';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Experience from '../components/sections/Experience';
import Projects from '../components/sections/Projects';
import Education from '../components/sections/Education';
import { getPortfolioConfig, validateConfig } from '../lib/config-loader';
import { shouldRenderSection } from '../lib/section-renderer';

export default function Home() {
  const config = getPortfolioConfig();
  
  // Validate configuration on build
  if (typeof window === 'undefined') {
    validateConfig(config);
  }

  return (
    <>
      <Head>
        <title>{config.personal.name} | Backend & Data Platform Engineer</title>
        <meta
          name="description"
          content={config.professionalSummary.substring(0, 160)}
        />
        <meta property="og:title" content={`${config.personal.name} | Backend & Data Platform Engineer`} />
        <meta property="og:description" content={config.professionalSummary.substring(0, 160)} />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Hero />
        
        {shouldRenderSection(config.professionalSummary) && <About />}
        
        {shouldRenderSection(config.coreCompetencies) && <Skills />}
        
        {shouldRenderSection(config.experience) && <Experience />}
        
        {shouldRenderSection(config.projects) && <Projects />}
        
        {shouldRenderSection(config.education) && <Education />}
      </Layout>
    </>
  );
}
