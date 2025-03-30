![Portfolio header](https://github.com/IgorKowalczyk/igorkowalczyk.github.io/assets/49127376/59642eac-4ac5-4d03-931c-2513d46655d3)

<div align="center">
  <a aria-label="GitHub License" href="https://github.com/igorkowalczyk/igorkowalczyk.github.io/blob/master/license.md">
    <img src="https://img.shields.io/github/license/igorkowalczyk/igorkowalczyk.github.io?color=%2334D058&logo=github&style=flat-square&label=License">
  </a>
  <a aria-label="Version" href="https://github.com/igorkowalczyk/igorkowalczyk.github.io/releases">
    <img src="https://img.shields.io/github/v/release/igorkowalczyk/igorkowalczyk.github.io?color=%2334D058&logo=github&style=flat-square&label=Version">
  </a>
  <a aria-label="Discord" href="https://igorkowalczyk.dev/discord">
    <img src="https://img.shields.io/discord/695282860399001640?color=%2334D058&logo=discord&style=flat-square&logoColor=fff&label=Discord">
  </a>
</div>

---

<!-- prettier-ignore-start -->
> [!IMPORTANT]
> **Remember to change pre-defined values in `config.tsx`** file (like `name`, `description`, `socials` etc.) before deploying your website! Change them in your forked repository.
<!-- prettier-ignore-end -->

## 📸 Screenshots

![Home page](https://github.com/user-attachments/assets/ee4cc06b-432d-4e1a-8bd2-59a60d6ae31e)

## 🖥️ Hosting

### ▲ Vercel

[![Deploy with Vercel](https://vercel.com/button)](<https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FIgorKowalczyk%2Figorkowalczyk.dev&env=GITHUB_ACCESS_TOKEN,DISCORD_WEBHOOK_URL&envDescription=You%20can%20set%20these%20optional%20values%3A%20%20HOTJAR_ID%20-%20Your%20Hotjar%20website%20ID%20(for%20analytics)&envLink=https%3A%2F%2Fgithub.com%2FIgorKowalczyk%2Figorkowalczyk.dev%3Ftab%3Dreadme-ov-file%23-env-configuration&project-name=portfolio&repository-name=portfolio&demo-title=Igor%20Kowalczyk%20-%20Portfolio&demo-description=Full-stack%20developer%2C%20designer%2C%20and%20creator&demo-url=https%3A%2F%2Figorkowalczyk.dev&demo-image=https%3A%2F%2Fgithub.com%2Fuser-attachments%2Fassets%2Fee4cc06b-432d-4e1a-8bd2-59a60d6ae31e>)

1. Click on the button above or go to [Vercel](<https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FIgorKowalczyk%2Figorkowalczyk.dev&env=GITHUB_ACCESS_TOKEN,DISCORD_WEBHOOK_URL&envDescription=You%20can%20set%20these%20optional%20values%3A%20%20HOTJAR_ID%20-%20Your%20Hotjar%20website%20ID%20(for%20analytics)&envLink=https%3A%2F%2Fgithub.com%2FIgorKowalczyk%2Figorkowalczyk.dev%3Ftab%3Dreadme-ov-file%23-env-configuration&project-name=portfolio&repository-name=portfolio&demo-title=Igor%20Kowalczyk%20-%20Portfolio&demo-description=Full-stack%20developer%2C%20designer%2C%20and%20creator&demo-url=https%3A%2F%2Figorkowalczyk.dev&demo-image=https%3A%2F%2Fgithub.com%2Fuser-attachments%2Fassets%2Fee4cc06b-432d-4e1a-8bd2-59a60d6ae31e>)
2. Fill `GITHUB_ACCESS_TOKEN` with your GitHub access token with public repositories permission
3. Fill `DISCORD_WEBHOOK_URL` with your Discord Webhook URL for contact form
4. Click on `Deploy` button and wait for deploy
5. Click on `Visit` button to see your deployed website
6. In your forked repository change pre-defined values in `config.tsx` file (like `name`, `description`, `socials` etc.)

### 🔩 Self Hosting

1. Clone [this repository](https://github.com/igorkowalczyk/igorkowalczyk.github.io) `git clone https://github.com/IgorKowalczyk/igorkowalczyk.github.io.git`
2. Run `pnpm i` to install all dependencies,
3. Run `pnpm clean` to remove all unnecessary files so you can start with a clean project
4. Copy `.env.example` file and rename it to `.env`
5. In `.env` file set this values:
   - `GITHUB_ACCESS_TOKEN` - Your GitHub access token with public repositories permission
   - `DISCORD_WEBHOOK_URL` - Discord Webhook URL for contact form
   - `CAPTCHA_SECRET` - Your Cloudflare Turnstile secret key (optional)
   - `NEXT_PUBLIC_CAPTCHA_SITEKEY` - Your Cloudflare Turnstile site key (optional)
6. Edit pre-defined values in `config.tsx` file (like `name`, `description`, `socials` etc.)
7. Run `pnpm build` to build the project or `pnpm dev` to run the project in development mode.

> [!NOTE]
> You can also use `npm` or `yarn` instead of `pnpm`

## 📝 `.env` configuration

| Variable                      | Description                                                      | Required |
| ----------------------------- | ---------------------------------------------------------------- | -------- |
| `GITHUB_ACCESS_TOKEN`         | Your GitHub access token with public repositories permission     | `☑️ Yes` |
| `DISCORD_WEBHOOK_URL`         | Discord Webhook URL for contact form                             | `☑️ Yes` |
| `HOTJAR_ID`                   | Your [Hotjar](https://www.hotjar.com) website ID (for analytics) | `❌ No`  |
| `CAPTCHA_SECRET`              | Your Cloudflare Turnstile secret key                             | `❌ No`  |
| `NEXT_PUBLIC_CAPTCHA_SITEKEY` | Your Cloudflare Turnstile site key                               | `❌ No`  |

> [!NOTE]
> You can set these **optional** values:
>
> - `HOTJAR_ID` - Your [Hotjar](https://www.hotjar.com) website ID (for analytics)

## ⁉️ Issues

If you come across any errors or have suggestions for improvements, please create a [new issue here](https://github.com/igorkowalczyk/igorkowalczyk.github.io/issues) and describe it clearly.

## 📥 Pull Requests

When submitting a pull request, please follow these steps:

- Clone [this repository](https://github.com/igorkowalczyk/igorkowalczyk.github.io) `https://github.com/IgorKowalczyk/igorkowalczyk.github.io.git`
- Create a branch from `main` and give it a meaningful name (e.g. `my-awesome-new-feature`).
- Open a [pull request](https://github.com/igorkowalczyk/igorkowalczyk.github.io/pulls) on [GitHub](https://github.com/) and clearly describe the feature or fix you are proposing.

## 📋 License

This project is licensed under the MIT. See the [LICENSE](https://github.com/igorkowalczyk/igorkowalczyk.github.io/blob/master/license.md) file for details
