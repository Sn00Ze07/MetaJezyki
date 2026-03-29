# Struktura projektu

Ponizej aktualna struktura projektu z opisem roli najwazniejszych elementow.

```text
cw3_22_03_2026/
|- index.html                 # strona glowna z panelem informacyjnym
|- blog.html                  # podstrona bloga
|- blog.js                    # logika pobierania i renderowania wpisow
|- main.scss                  # glowny plik Sass
|- main.css                   # skompilowany CSS
|- main.css.map               # mapa zrodel CSS
|- style.css                  # starszy/alternatywny arkusz stylow
|- zadanie.4.blog.txt         # tresc poprzedniego zadania
|- data/
|  |- publiczne_posty.json    # dane wpisow opublikowanych
|  |- planowane_posty.json    # dane wpisow zaplanowanych
|- img/                       # obrazy uzywane na stronach
|- sass/
|  |- abstracts/              # zmienne, mixiny, funkcje Sass
|  |- base/                   # style globalne
|  |- components/             # style komponentow UI
|  |- layout/                 # style ukladu (np. obrazy)
|  |- pages/                  # miejsce na style per strona
|  |- themes/                 # miejsce na motywy
|  |- vendors/                # miejsce na style zewnetrzne
```

## Relacje miedzy plikami

- `blog.html` laduje `blog.js` i korzysta z `main.css`.
- `index.html` korzysta z `main.css` oraz ma prosty skrypt do toggle panelu.
- `main.scss` scala moduly Sass i generuje finalny `main.css`.
- `blog.js` czyta dane z `data/*.json` i renderuje wpisy do kontenera `#publiczne-posty`.
