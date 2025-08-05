# School Website - Projekt frontend + backend

Projekt szkolnej strony internetowej zbudowany z użyciem React (frontend) i Node.js + Express (backend).  
Aplikacja umożliwia wyświetlanie informacji na stronie głównej oraz komunikację z backendem.

---

## Struktura projektu

- `/frontend` — aplikacja React odpowiedzialna za interfejs użytkownika  
- `/backend` — serwer Express obsługujący API i logikę backendową  
- `docker-compose.yml` — plik do uruchamiania obu części projektu w kontenerach Docker

---

## Technologie

- Frontend: React, react-scripts, Vite (opcjonalnie)  
- Backend: Node.js, Express, CORS  
- Baza danych: PostgreSQL (kontener Docker)  
- Docker + Docker Compose do łatwego uruchomienia całego środowiska

---

## Jak uruchomić projekt lokalnie?

1. Sklonuj repozytorium:  
```bash
git clone https://github.com/twoj-user/school-website.git
cd school-website
```

## Uruchom backend, frontend i bazę danych w kontenerach Docker za pomocą docker-compose:
```bash 
docker-compose up --build
```
Po uruchomieniu:

Frontend będzie dostępny pod adresem: http://localhost:5173
Backend działa na porcie: 8000 (np. API pod http://localhost:8000/api)
Baza danych PostgreSQL działa wewnątrz kontenera i jest dostępna dla backendu
Aby zatrzymać działające kontenery, użyj:
```bash
docker-compose down
```
