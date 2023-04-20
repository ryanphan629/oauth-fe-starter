FROM node:18-alpine

# run init command
RUN npm install -g pnpm

# set working directory
WORKDIR /app

# Copy all to app
COPY . .

# Install all dependencies using pnpm
RUN pnpm install

# Build application
RUN pnpm build

# Run
CMD ["npx", "serve", "build"]

# Expose port
EXPOSE 3000
