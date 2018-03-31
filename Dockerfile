FROM jekyll/jekyll:pages
VOLUME /srv/jekyll
EXPOSE 4000
CMD jekyll serve --force_polling