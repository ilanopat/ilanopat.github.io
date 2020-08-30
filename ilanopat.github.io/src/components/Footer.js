import React from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import Github from './icons/Github'
import LinkedIn from './icons/LinkedIn'
import Twitter from './icons/Twitter'

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
    return (
    <footer>
        <div>
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
              <Icon width={30} />
            </OutboundLink>
          ))}
        </div>

        <div>
          © {new Date().getFullYear()} All Rights Reserved. Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </div>
    </footer>
    )
            }