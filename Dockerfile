# extracted build into github workflow
FROM nginx:1.13.12-alpine

# https://docs.docker.com/engine/reference/builder/#copy
COPY nginx/root.html /usr/share/nginx/html/
COPY dist/token-customer-website /usr/share/nginx/html

COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

RUN ls /usr/share/nginx/html/en
RUN ls /usr/share/nginx/html/en/html-pages/terms
RUN ls /usr/share/nginx/html/en/html-pages/policy
