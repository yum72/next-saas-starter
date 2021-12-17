import { InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import styled from 'styled-components'
import { EnvVars } from 'env'
import { getAllPosts } from 'utils/postsFetcher'
import Button from 'components/Button'
import ButtonGroup from 'components/ButtonGroup'
import Container from 'components/Container'
import HeroIllustration from 'components/HeroIllustation'
import OverTitle from 'components/OverTitle'
import { useNewsletterModalContext } from 'contexts/newsletter-modal.context'
import { media } from 'utils/media'

export default function Industry ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  const { setIsModalOpened } = useNewsletterModalContext()
  return (
    <>
      <Head>
        <title>{EnvVars.SITE_NAME}</title>
        <meta name='description' content='Community of hard science researchers, grad students and entrepreneurs' />
      </Head>
      <HomepageWrapper>
        <WhiteBackgroundContainer>
          <HeroWrapper>
            <Contents>
              <Heading>
                Leverage our top-tier network of researchers, grad students, entrepreneurs, industry and investors working to get research
                out of the lab and into the world.
              </Heading>
              <SignUpText>Sign up here to periodically hear about: </SignUpText>
              <Description>
                <ul>
                  <li>Problem statements from our industry partners</li>
                  <li>VC/investor requests for technology </li>
                  <li>Promising researchers and grad students from your institution and others </li>
                </ul>
              </Description>

              <CustomButtonGroup>
                <Button onClick={() => setIsModalOpened(true)}>
                  JOIN THE CREW <span>&rarr;</span>
                </Button>
              </CustomButtonGroup>
            </Contents>
            <ImageContainer>
              <HeroIllustration />
            </ImageContainer>
          </HeroWrapper>
        </WhiteBackgroundContainer>
      </HomepageWrapper>
    </>
  )
}

const HomepageWrapper = styled.div`
  & > :last-child {
    margin-bottom: 5rem;
  }
`

const DarkerBackgroundContainer = styled.div`
  background: rgb(var(--background));

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`

const WhiteBackgroundContainer = styled.div`
  background: rgb(var(--secondBackground));

  & > :last-child {
    padding-bottom: 5.1rem;
  }

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`

const HeroWrapper = styled(Container)`
  display: flex;
  padding-top: 5rem;

  ${media('<=desktop')} {
    padding-top: 1rem;
    flex-direction: column;
    align-items: center;
  }
`

const Contents = styled.div`
  flex: 1;
  max-width: 60rem;

  ${media('<=desktop')} {
    max-width: 100%;
  }
`

const CustomButtonGroup = styled(ButtonGroup)`
  margin-top: 3rem;
`

const ImageContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: flex-start;

  svg {
    max-width: 45rem;
  }

  ${media('<=desktop')} {
    margin-top: 2rem;
    justify-content: center;
    svg {
      max-width: 80%;
    }
  }
`

const Description = styled.div`
  font-size: 1.9rem;
  opacity: 0.8;
  line-height: 1.6;

  ${media('<=desktop')} {
    font-size: 1.8rem;
    opacity: 0.8;
    line-height: 1.6;
  }
`
const SignUpText = styled.p`
  padding-top: 10px;
  font-weight: 600;
  font-size: 2.1rem;
  line-height: 40px;
  opacity: 0.8;

  ${media('<=desktop')} {
    font-size: 2rem;
  }
`

const CustomOverTitle = styled(OverTitle)`
  margin-bottom: 2rem;
`

const Heading = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 4rem;
  letter-spacing: -0.03em;

  ${media('<=tablet')} {
    font-size: 4.6rem;
    margin-bottom: 2rem;
  }
`

export async function getStaticProps () {
  return {
    props: {
      posts: await getAllPosts(),
    },
  }
}
