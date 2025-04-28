# DJx – Discord Bot (JavaScript)

**DJx** is a lightweight Discord bot created purely for learning purposes. It offers three straightforward slash‑commands—`/ping`, `#avatar`, and `/play`—demonstrating how to interact with Discord's Gateway and voice features using **discord.js v14** and **discord‑player**.

---

## ✨ Features

| Command | Description |
|---------|-------------|
| `/ping` | Returns the bot’s current WebSocket latency. |
| `/avatar [user]` | Displays the avatar of the mentioned user (or your own if omitted). |
| `/play <query>` | Streams the requested song/URL into the voice channel you are in. |

> **Roadmap:** queue control (skip, stop, loop), lyrics, and enhanced error handling are on the way.

---

## 🧰 Tech Stack

- **Runtime:** Node.js ≥ 18
- **Discord SDK:** discord.js 14
- **Audio:** discord‑player + @discord‑player/extractor
- **Misc:** ffmpeg‑static, dotenv

---

## 🔧 Getting Started

### Prerequisites
1. A Discord application with a bot token and *Slash Commands* enabled.  
2. FFmpeg available in your PATH (or rely on `ffmpeg‑static`).

### Installation
```bash
# Clone the repo
git clone https://github.com/<your‑username>/DJx.git
cd DJx

# Install dependencies
npm install

# Copy & edit environment variables
cp .env.example .env

# Launch the bot
node index.js
```

#### `.env` example
```env
TOKEN=YOUR_BOT_TOKEN
CLIENT_ID=YOUR_APPLICATION_ID
GUILD_ID=OPTIONAL_TEST_GUILD_ID
```
If you set `GUILD_ID`, commands register instantly in that guild; otherwise allow up to one hour for global registration.

---

## 📂 Project Structure
```
commands/
  fun/avatar.js
  music/play.js
  utility/ping.js
events/
  interactionCreate.js
  ready.js
index.js          # Entry point
deploy.js         # Slash‑command registrar
config.js         # Presence & status
```

---

## License
This project is released under the **ISC License**. See `LICENSE` for details.

---

## Contact
- **Email**: nguyenminh1301.dev@gmail.com
- **GitHub**: [NguyenMinh1301](https://github.com/NguyenMinh1301)

---

This project is part of my self-study and learning path in mastering Spring Boot. Any feedback or suggestions are warmly welcome!

