# ReactTiler


primjer radio stanica downloadan je sa Radio Browser API-ja (https://de1.api.radio-browser.info/)

taj api je odabran umjesto rapidapi-ja jer: 
- sadrži geo koordinate(barem za neke stanice)
- jer je besplatan i nema ograničenja na broj upita

konačna lista radiostanica dobivena je sljedećim postupkom:
- pokupe se sve radiostanice 
- odflitriraju se samo one koje imaju geo imformaciju
- odabiru se samo stanice sa jednistvenom geo lokacijom
- iz svake zemlje se uzme najviše 10 stanica