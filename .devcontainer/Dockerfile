FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:20

ENV TZ=Asia/Tokyo

# corepack を有効化し、yarn をセットアップ
RUN corepack enable && corepack prepare yarn@stable --activate

# 依存関係をコピーしてインストール
#COPY package.json yarn.lock ./
#RUN yarn install