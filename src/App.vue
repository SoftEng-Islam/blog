<script setup lang="ts">
// import header_app from './components/HeaderApp.vue';
</script>

<template lang="pug">
  //- header_app
  <h1 class="bg-yellow-400 text-white">Hi 👋, I'm Islam Ahmed from vue app</h1>
  p A Software Engineer from Egypt.
  blockquote "The repositories here will never be complete; they will continue to grow as long as there’s imagination left in the world."

  div(class="section")
    h2 💫 About Me
    ul
      li 🌱 Currently Learning: #[strong Rust, Tauri, Linux (NixOS and Arch)]
      li 💼 Open to Collaborate on: #[strong Desktop and Web Development Projects]
      li 💬 Ask me about: #[strong Vue.js, TypeScript, Node.js, Rust, and Linux]
      li ⚡ Fun Fact: I'm a big fan of cats!
  <div class="section">
    <h2>🛠️ Tech Stack</h2>
    <ul>
      <li>
        <strong>Web Development:</strong> HTML, CSS, JavaScript (ES6+), TypeScript
      </li>
      <li>
        <strong>Frontend Frameworks:</strong> Vue.js, Pinia, TailwindCSS, SASS, Vite
      </li>
      <li><strong>Backend Development:</strong> Node.js, Express.js</li>
      <li><strong>Desktop Development:</strong> Tauri, Rust</li>
      <li><strong>Other Languages:</strong> Python, C++, Bash, Zsh</li>
      <li><strong>Environment:</strong> Linux (NixOS and Arch)</li>
      <li><strong>Testing:</strong> Jest</li>
      <li><strong>Version Control:</strong> Git</li>
    </ul>
  </div>

  div(class="section")
    h2 📱 Connect with Me
    p
      a(href="https://t.me/softeng_islam" class="badge text-white bg-cyan-600" target="_blank") Telegram
      a(href="mailto:softeng.islam@gmail.com" class="badge bg-green-600" target="_blank") Gmail
      a(href="https://m.me/SoftEng.Islam/" class="badge bg-blue-400" target="_blank") Messenger
      a(href="https://codepen.io/softeng-islam" class="badge bg-zinc-600" target="_blank") CodePen
      a(href="https://fb.com/softeng.islam" class="badge bg-blue-600" target="_blank") Facebook
      a(href="https://instagram.com/softeng_islam" class="badge bg-pink-600" target="_blank") Instagram

  div(class="section")
    h2 📊 GitHub Stats
    div( class="stats")
      img(src="https://github-readme-stats.vercel.app/api?username=SoftEng-Islam&show_icons=true&locale=en&theme=onedark" alt="GitHub Stats")
      img(src="https://github-readme-streak-stats.herokuapp.com/?user=SoftEng-Islam&theme=onedark" alt="GitHub Streak")
      img(src="https://github-readme-stats.vercel.app/api/top-langs?username=SoftEng-Islam&show_icons=true&locale=en&layout=compact&theme=onedark" alt="Top Languages")

  div(class="section")
    h2 ☕ Support My Work
    p If you'd like to support my work, consider buying me a coffee or contributing on Ko-fi.
    p
      a(href="https://www.buymeacoffee.com/softeng.islam" target="_blank") Buy me a coffee
      |
      a(href="https://ko-fi.com/softeng_islam" target="_blank") Ko-fi
</template>

<style scoped>
  blockquote {
    font-style: italic;
    color: #555;
    margin-left: 20px;
  }
  a {
    color: #007acc;
    text-decoration: none;
  }
  .badge {
    display: inline-block;
    padding: 8px 12px;
    margin: 5px;
    border-radius: 4px;
    font-weight: bold;
    color: white;
  }
  .stats img {
    width: 100%;
    max-width: 400px;
  }
</style>
