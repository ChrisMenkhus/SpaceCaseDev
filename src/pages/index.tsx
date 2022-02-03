import type { NextPage } from 'next'
import Head from 'next/head'
import * as data from 'src/data/home'
import PageContainer from '@components/ui/PageContainer'
import * as Section from '@components/ui/Section'
import * as Intro from '@components/home/Intro'
import * as About from '@components/home/About'
import * as Insights from '@components/home/Insights'
import * as DevProcess from '@components/home/DevProcess'
import * as Contact from '@components/home/Contact'
import Button from '@components/ui/Button'
import ButtonGroup from '@components/ui/ButtonGroup'
import ProjectCard from '@components/home/ProjectCard'
import Navbar from '@components/ui/Navbar'
import ShootingStar from '@components/home/ShootingStar'
import Navbar2 from '@components/ui/Navbar2'
import IconButton from '@components/ui/IconButton'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Spacecase.dev - Home</title>
        <meta
          name="description"
          content="Chris Menkhus personal website home"
        />
      </Head>
      <PageContainer>
        {/* <Navbar /> */}
        <Navbar2 />
        <Section.Container name="Intro" className="min-h-[calc(100vh-12rem)] ">
          <Intro.HeaderContainer>
            <Intro.Header
              title={data.Intro.text as string}
              subtitle={data.Intro.text2 as string}
            />
            <Intro.SpaceShipImage />
          </Intro.HeaderContainer>
          <Section.Footer>
            <ButtonGroup>
              {/* <Button
                handleClick={() => null}
                alt="click"
                size="big"
                variant="primary"
                imgSrc="/scroll-down.svg"
              >
                {data.Intro.button as string}
              </Button>
              <Button
                handleClick={() => null}
                alt="click"
                size="big"
                variant="secondary"
                imgSrc="/icon/calendar_dark.svg"
              >
                {data.Intro.button2 as string}
              </Button> */}
              <Button
                handleClick={() => null}
                alt="click"
                size="big"
                variant="secondary"
                imgSrc="/icon/calendar_dark.svg"
                className="mb-4"
              >
                {data.Intro.button2 as string}
              </Button>
              <IconButton
                imgSrc="/icon/scroll-down.svg"
                alt="read more button"
                handleClick={() => {}}
                className="hidden sm:flex md:py-2"
              />
            </ButtonGroup>
          </Section.Footer>
        </Section.Container>
        <Section.Container name="About">
          <Section.Header
            title={data.About.section.name}
            subtitle={data.About.section.altname || ''}
          />
          <Section.Content>
            <About.TextBlockGroup>
              <About.TextBlock text={data.About.text || ''} />
              <About.TextBlock text={data.About.text2 || ''} />
            </About.TextBlockGroup>
            <About.CallToActionImage />
            <About.ListCards lists={data.About.lists} />
          </Section.Content>
        </Section.Container>
        <Section.Container name="Insights">
          <Section.Header
            title={data.Insights.section.name}
            subtitle={data.Insights.section.altname || ''}
          />
          <Section.Content>
            <Insights.BlogCardsGroup>
              <Insights.BlogArticleCard
                title={data.Insights.blogArticles[0].title}
                text={data.Insights.blogArticles[0].text}
                date={data.Insights.blogArticles[0].date}
                imgSrc={data.Insights.blogArticles[0].imgSrc}
                variant="large"
              />
              <Insights.BlogArticleCard
                title={data.Insights.blogArticles[1].title}
                text={data.Insights.blogArticles[1].text}
                date={data.Insights.blogArticles[1].date}
                imgSrc={data.Insights.blogArticles[1].imgSrc}
              />
              <Insights.BlogArticleCard
                title={data.Insights.blogArticles[2].title}
                text={data.Insights.blogArticles[2].text}
                date={data.Insights.blogArticles[2].date}
                imgSrc={data.Insights.blogArticles[2].imgSrc}
              />
            </Insights.BlogCardsGroup>
          </Section.Content>
          <Section.Footer>
            <ButtonGroup variant="right">
              <Button
                handleClick={() => null}
                alt="click"
                size="big"
                variant="primary"
                imgSrc="/icon/app_menu.svg"
              >
                {data.Insights.button || ''}
              </Button>
            </ButtonGroup>
          </Section.Footer>
        </Section.Container>
        <Section.Container name="Projects">
          <Section.Header
            title={data.Portfolio.section.name}
            subtitle={data.Portfolio.section.altname || ''}
          />
          <Section.Content>
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </Section.Content>
          <Section.Footer>
            <ButtonGroup variant="right">
              <Button
                handleClick={() => null}
                alt="click"
                size="big"
                variant="primary"
                imgSrc="/icon/app_menu.svg"
              >
                {data.Portfolio.button || ''}
              </Button>
            </ButtonGroup>
          </Section.Footer>
        </Section.Container>
        <Section.Container name="DevProcess">
          <Section.Header
            title={data.DevProcess.section.name}
            subtitle={data.DevProcess.section.altname || ''}
          />
          <Section.Content />
          <DevProcess.TimelineGroup
            timelineItems={[
              {
                title: 'Outline Project Through Blueprinting',
                description:
                  'When I start a project the first thing I think about is what does this project offer the visitors and what does the project mean to the client. Understanding why the client wants a website (or what they want out of a website) is very important in delivering an outstanding website. After I have defined the goals of the website I mock-up a rough draft / blueprint of the site to get an idea for number of pages, neccesary API’s, stylistic choices, and tools to use.',
              },
              {
                title: 'Web Design & Style Guide Creation',
                description:
                  'I create a style guide that contains all the information needed to turn the design into a website. This information includes font-family’s, headers, button styles, colors, icons, images, effects and everything else used in the design. This style guide can then also be used to design new pages for the website.',
              },
              {
                title: 'Components & Utilities Programming',
                description:
                  'Using the Project Blueprint, Style Guide, and Design Document as a guide I create reusable, functional, and clean components / utilities to be used throughout the application. Each UI component is developed isolated from other components with no margin because I use a custom Spacer component to take care of alignment. Keeping development clean and no harder than it needs to be is key.',
              },
              {
                title: 'Codebase Testing',
                description:
                  'Lorem ipsum dolor sit amet, autem ridens ceteros ex pri. Has et quis audiam copiosae, mutat scripta duo id. Mea tantas saperet posidonium in.',
              },
              {
                title: 'Deployment',
                description:
                  'Lorem ipsum dolor sit amet, autem ridens ceteros ex pri. Has et quis audiam copiosae, mutat scripta duo id. Mea tantas saperet posidonium in.',
              },
            ]}
          />
        </Section.Container>
        <Section.Container name="Contact" variant="fullheight">
          <Section.Header
            title={data.Contact.section.name}
            subtitle={data.Contact.section.altname || ''}
          />
          <Section.Content>
            <Contact.SimpleCard title={data.Contact.text || ''}>
              <Contact.Form />
            </Contact.SimpleCard>
            <Contact.SimpleCard
              variant="secondary"
              title={data.Contact.text2 || ''}
            >
              <Contact.SimpleCardText>
                {data.Contact.text3 as string}
              </Contact.SimpleCardText>
              <Button
                handleClick={() => null}
                alt="click"
                size="big"
                variant="primary"
                imgSrc="/icon/calendar_dark.svg"
              >
                {data.Contact.button2 as string}
              </Button>
            </Contact.SimpleCard>
          </Section.Content>
          <Contact.BottomBackground>
            <Section.Footer></Section.Footer>
          </Contact.BottomBackground>
        </Section.Container>
      </PageContainer>
    </>
  )
}

export default Home
