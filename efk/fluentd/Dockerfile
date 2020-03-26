FROM fluent/fluentd:v1.6-debian-1
USER root
RUN ["gem", "install", "fluent-plugin-elasticsearch", "fluent-plugin-rewrite-tag-filter", "--no-document"]
USER fluent
