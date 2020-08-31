import React from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import Github from './icons/Github'
import LinkedIn from './icons/LinkedIn'
import Twitter from './icons/Twitter'
import {useTheme} from './ThemeProvider';
import { Grid } from '@material-ui/core'

const links = [
  { href: 'https://twitter.com/ilanopat', icon: Twitter, title: 'Twitter' },
  { href: 'https://github.com/ilanopat', icon: Github, title: 'Github' },
  {
    href: 'https://linkedin.com/in/ilanopat',
    icon: LinkedIn,
    title: 'LinkedIn',
  },
]

export default function Footer() {
  const { themeMode } = useTheme();

    return (
    <Grid style={{gridArea:'footer'}}>
      {links.map(({ href, icon: Icon, title }) => (
        <OutboundLink
          css={{
            display: 'inline-block',
            svg: {
              transition: 'fill 0.3s ease',
            },
          }}
          key={title}
          href={href}
          title={title}
        >
          <Icon width={30} fill={themeMode==='light'?'#303030':'#fafafa'} />
        </OutboundLink>
      ))}
      © {new Date().getFullYear()} All Rights Reserved. Built with 
      {` `}
      <OutboundLink style={{color:themeMode==='light'?'#841db9':'#d087f5',textDecoration:'none'}} href="https://www.gatsbyjs.org" title="Gatsby">Gatsby</OutboundLink>
    </Grid>
)}