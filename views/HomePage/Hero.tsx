import NextLink from 'next/link'
import styled from 'styled-components'
import Button from 'components/Button'
import ButtonGroup from 'components/ButtonGroup'
import Container from 'components/Container'
import HeroIllustration from 'components/HeroIllustation'
import OverTitle from 'components/OverTitle'
import { useNewsletterModalContext } from 'contexts/newsletter-modal.context'
import { media } from 'utils/media'

export default function Hero () {
  const { setIsModalOpened, setTags } = useNewsletterModalContext()

  return (
    <HeroWrapper>
      <Contents>
        {/* <CustomOverTitle>Coming Soon</CustomOverTitle> */}
        <Heading>
          Join our community of hard science researchers, grad students and entrepreneurs building solutions to global problems
        </Heading>
        <Description>
          <ul>
            <li>Collaborate on problem statements direct from industry</li>
            <li>Pitch your inventions/research </li>
            <li>Attend our events and symposia</li>
            <li>Find job and fellowship opportunities</li>
          </ul>
        </Description>

        <SignUpText>Sign up to get started</SignUpText>
        <CustomButtonGroup>
          <Button
            onClick={() => {
              setIsModalOpened(true)
              setTags(['2814576'])
            }}
          >
            JOIN THE CREW <span>&rarr;</span>
          </Button>
          {/* <NextLink href='#whitepaper' passHref>
            <Button transparent>
              Features <span>&rarr;</span>
            </Button>
          </NextLink> */}
        </CustomButtonGroup>
      </Contents>
      <ImageContainer>
        <HeroIllustration />
      </ImageContainer>
    </HeroWrapper>
  )
}

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
    font-size: 3.8rem;
    margin-bottom: 2rem;
  }
`
