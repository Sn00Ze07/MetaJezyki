# Projekt: Strona o zwierzetach + blog

Projekt zawiera glowna strone informacyjna o zwierzetach oraz podstrone blogowa z dynamicznym ladowaniem wpisow z plikow JSON.

## Zakres projektu

- Strona glowna (`index.html`) z panelem pokazywanym/ukrywanym przyciskiem.
- Podstrona bloga (`blog.html`) z renderowaniem wpisow jako elementy `article`.
- Ladowanie danych przez `fetch()` z folderu `data/`.
- Style przygotowane w architekturze Sass i kompilowane do `main.css`.

## Jak uruchomic

1. Otworz folder projektu w VS Code.
2. Uruchom lokalny serwer statyczny (np. rozszerzenie Live Server).
3. Otworz `index.html` lub `blog.html`.

## Dokumentacja szczegolowa

- Opis katalogu styli: [STYLES_CATALOG.md](STYLES_CATALOG.md)
- Opis warstwy danych: [DATA_LAYER.md](DATA_LAYER.md)
- Struktura projektu: [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md)
- Historia zmian: [CHANGELOG.md](CHANGELOG.md)

## Najwazniejsze pliki kodu

- `index.html` - strona glowna i logika panelu informacyjnego.
- `blog.html` - widok listy wpisow.
- `blog.js` - pobieranie JSON, mapowanie pol i renderowanie `article`.
- `main.scss` - punkt wejsciowy Sass.
- `main.css` - wynik kompilacji stylow.
