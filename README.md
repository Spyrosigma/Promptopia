# PromptoPia

- Discover and Share AI Powered Prompt
- CRUD Application (Create, Read, Update, Delete)
- You can copy prompts on your clipboard
- Real-time prompts searching

## Basically, I was exhausted from doing ML for the past 1 month, so to refresh, I built this. 
### The website is live, the link is in the About section. I also deployed it on Vercel, but Vercel somehow did not manage the serverless functions well(Giving Auth Errors, and sometimes not fetching data from Mongo-Atlas), so I also deployed it on Render, but it may take some time to wake up the website on render.

## Feed Page
![Screenshot (319)](https://github.com/user-attachments/assets/d7fa4d2f-b460-4e46-a359-c7ace41f870b)


## Edit Page
![Screenshot (321)](https://github.com/user-attachments/assets/3fc88a41-d5f1-411c-98f7-bf5fd4a8c44e)


## Getting Started

1. Clone this repo
    ```bash
    git clone https://github.com/Spyrosigma/Promptopia.git
    ```
2. Install dependencies
    ```bash
    npm i
    ```
3. Run the development server:
    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    # or
    bun dev
    ```
4. Make a .env file and Populate it with your Variables :)
    ```bash
    GOOGLE_ID= blah blah blah
    GOOGLE_CLIENT_SECRET=blah blah
    MONGODB_URI= blah
    NEXTAUTH_URL=http://localhost:3000
    NEXTAUTH_URL_INTERNAL=http://localhost:3000
    NEXTAUTH_SECRET=54qwNk2  
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
