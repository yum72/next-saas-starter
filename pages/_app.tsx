import 'swiper/css'
import 'swiper/css/bundle'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'

import { AppProps } from 'next/dist/shared/lib/router/router'
import Head from 'next/head'
import { ColorModeScript } from 'nextjs-color-mode'
import { PropsWithChildren, useState } from 'react'
import Footer from 'components/Footer'
import { GlobalStyle } from 'components/GlobalStyles'
import Navbar from 'components/Navbar'
import NavigationDrawer from 'components/NavigationDrawer'
import NewsletterModal from 'components/NewsletterModal'
// import WaveCta from 'components/WaveCta'
import Logo from '../components/Logo'
import styled from 'styled-components'
import Container from 'components/Container'

import { NewsletterModalContextProvider, useNewsletterModalContext } from 'contexts/newsletter-modal.context'
import { NavItems } from 'types'

const navItems: NavItems = [
  { title: 'Awesome SaaS Features', href: '/features' },
  { title: 'Pricing', href: '/pricing' },
  { title: 'Contact', href: '/contact' },
  { title: 'Sign up', href: '/sign-up', outlined: true },
]

function MyApp ({ Component, pageProps }: AppProps) {
  const standaloneMarkup = <Component {...pageProps} />
  const [theme, setTheme] = useState('light')

  return (
    <>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='' />
        <link rel='icon' href='/bountiful-favicon.png' />
        {/* <link rel="alternate" type="application/rss+xml" href={EnvVars.URL + 'rss'} title="RSS 2.0" /> */}
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
          ga('create', 'UA-117119829-1', 'auto');
          ga('send', 'pageview');`,
          }}
        /> */}
        {/* <script async src="https://www.google-analytics.com/analytics.js"></script> */}
      </Head>
      <ColorModeScript />
      <GlobalStyle />
      <Providers>
        <Modals />
        <Navbar items={navItems} theme={theme} setTheme={setTheme} />
        {standaloneMarkup}
        {/* <WaveCta /> */}
        <Container>
          <LogoWrapper>
            <Logo theme={theme} />
          </LogoWrapper>
        </Container>
        <Footer />
      </Providers>
    </>
  )
}

const LogoWrapper = styled.div`
  display: flex;
  margin-right: auto;
  text-decoration: none;
  margin-top: 5rem;

  color: rgb(var(--logoColor));
  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`

function Providers<T> ({ children }: PropsWithChildren<T>) {
  return (
    <NewsletterModalContextProvider>
      <NavigationDrawer items={navItems}>{children}</NavigationDrawer>
    </NewsletterModalContextProvider>
  )
}

function Modals () {
  const { isModalOpened, setIsModalOpened, tags } = useNewsletterModalContext()
  if (!isModalOpened) {
    return null
  }
  // @ts-expect-error
  return <NewsletterModal onClose={() => setIsModalOpened(false)} tags={tags} />
}

export default MyApp
