# Warstwa danych

Warstwa danych jest oparta o lokalne pliki JSON i pobieranie przez `fetch()` w przegladarce.

## Zrodla danych

- `data/publiczne_posty.json` - wpisy opublikowane (5 rekordow).
- `data/planowane_posty.json` - wpisy zaplanowane (5 rekordow).

## Model wpisu

W `blog.js` zdefiniowano mapowanie etykiet przez obiekt `labels`:

- `id`
- `autor`
- `tytul`
- `data`
- `kategoria`
- `opis`
- `status`

Podczas renderowania skrypt przechodzi po kluczach z `labels` i dodaje tylko pola, ktore istnieja w danym obiekcie.

## Obsluga brakow danych

Funkcja `createField(key, value)` zastapia brakujace wartosci (`null` albo pusty string) tekstem:

```text
Brak danych
```

Dzieki temu nawet niepelne rekordy sa poprawnie prezentowane na stronie.

## Przeplyw danych

1. `loadPosts(url, container)` wywoluje `fetch(url)`.
2. Po poprawnym `response.ok` nastepuje `response.json()`.
3. `showPosts(data, container)` tworzy elementy `article.post`.
4. W razie bledu kontener dostaje komunikat: `Nie udalo sie wczytac danych`.

## Aktualny stan podstrony blog

- Aktywne ladowanie: `loadPosts("data/publiczne_posty.json", publicPosts);`
- Ladowanie postow planowanych jest przygotowane, ale zakomentowane.
