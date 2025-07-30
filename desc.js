
/* 

core features: 
    -read selected text or full page aloud 
    -control btns - play/pause/stop 
    -speed slider (0.5x - 2x)
    -voice selector (male/female, local voices)
    -start from cursor (read from where you highlight text)
    -keyboard shortcuts (
        alt + r → read selected text, 
        alt + p → pause/resume,
        alt + s → Stop
    )
    -skip hidden elements, ads, nav bars
    -offline-first (use browser voices, read pages offline)
    

📂 screenreader-extension
 ├── manifest.json          # MV3 definition, permissions, shortcuts
 ├── popup.html             # Popup UI
 ├── popup.js               # Controls (play/pause/stop)
 ├── content.js             # Extract page text & handle reading
 ├── background.js          # Handles shortcuts & messaging
 ├── styles.css             # Minimal styling (or Tailwind build)
 └── assets/icons/          # Icons for Chrome store (16/48/128px)


*/