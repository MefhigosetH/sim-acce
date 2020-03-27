FROM ubuntu:18.04

RUN apt-get update && \
    apt-get --yes upgrade && \
    apt-get --yes install git curl && \
    curl -sL https://deb.nodesource.com/setup_12.x | bash - && \
    apt-get install --yes nodejs && \
    curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
    apt-get update && apt-get install --yes yarn && apt-get clean && \
    yarn global add react-native expo-cli

EXPOSE 19000
EXPOSE 19001
EXPOSE 19002
