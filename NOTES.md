- [x] išskaidyti JS logiką į atskirus failus ir juos iškviesti tinkamu eiliškumu:
    - kintamieji
    - funkcijos
    - funkcijų iškvietimas naudojant kintamuosius

- [x] reikia elemento, kuriame bus generuojamas naujass lentos turinys (#Checkers)

- [x] norint sugeneruoti lentą, reikia žinoti pradinius jos parametrus:
    - lentos dydis (plotis, aukštis)
    - spalvos (balta, juoda)
    - kurioje vietoje generuoti (reikalingas selector'ius)

- [ ] lentos generavimas:
    - duomenų validavimas
        - [ ] ar tinkamai pateiktas lentos dydis
        - [ ] ar tinkamai pateiktos spalvos
        - [ ] ar egzistuoja elementas, į kurį reikės įdėti rezultatą pagal pateiktą selector'ių
    - lentos generavimo logika
        -  būsimos sugeneruotos lentos "HTML kodas" turi būti kaupiamas
        - [ ] iš pradžių tas kintamasis yra tuščias
        - [ ] generavimui naudojam ciklą

    - gauto HTML rezultato įstatymas į reikiamą vietą (pagal selector'ių)