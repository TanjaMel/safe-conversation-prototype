export const responseFlows = {
  greeting: {
    start: [
      "Hei, mukava kuulla sinusta. Miten päiväsi on mennyt?",
      "Hei, mukava että juttelemme. Miten sinulla menee tänään?",
    ],
    followup: [
      "Kiva kuulla. Haluaisitko kertoa päivästäsi vähän lisää?",
      "Mukava kuulla. Oliko päivässäsi jotain erityisen mukavaa?",
    ],
  },

  positive: {
    start: [
      "Ihana kuulla, että päivä on mennyt hyvin. Haluaisitko kertoa, mikä teki päivästä mukavan?",
      "Mukava kuulla. Oliko tänään jotain erityisen hyvää tai rauhallista?",
    ],
    followup: [
      "Se kuulostaa hyvältä. Haluaisitko kertoa siitä vähän lisää?",
      "Kiva kuulla. Pienetkin hyvät hetket voivat tehdä päivästä mukavan.",
    ],
  },

  neutral: {
    start: [
      "Ymmärrän. Tavallinenkin päivä on ihan hyvä lähtökohta. Haluaisitko kertoa, mitä teit tänään?",
      "Selvä. Jos haluat, voit kertoa päivästäsi vähän lisää.",
    ],
    followup: [
      "Kuulostaa rauhalliselta. Haluaisitko kertoa vielä yhdestä hetkestä päivästäsi?",
      "Ymmärrän. Voimme jutella ihan rauhassa, jos haluat jatkaa.",
    ],
  },

  loneliness: {
    start: [
      "Ymmärrän. Olen täällä kuuntelemassa. Haluaisitko kertoa, millainen päiväsi on ollut?",
      "Ikävä kuulla, että sinulla on ollut yksinäinen olo. Voimme jutella ihan rauhassa.",
    ],
    followup: [
      "Kiitos kun kerroit. Haluaisitko sanoa siitä vielä vähän lisää?",
      "Ymmärrän. Jos haluat, voit kertoa, mikä on tuntunut tänään raskaalta.",
    ],
  },

  low_mood: {
    start: [
      "Ikävä kuulla, että päivä on tuntunut raskaalta. Voimme jutella ihan rauhassa.",
      "Ymmärrän. Joskus päivä voi tuntua väsyttävältä tai raskaalta.",
    ],
    followup: [
      "Jos haluat, voit kertoa siitä vähän lisää. Ja jos et halua, sekin on ihan ok.",
      "Ei tarvitse kiirehtiä. Voimme ottaa tämän ihan rauhallisesti.",
    ],
  },

  not_in_mood: {
    start: [
      "Ymmärrän. Ei tarvitse puhua, jos et halua. Voin olla hetken vain tässä.",
      "Se on ihan ok. Jos et ole nyt puhetuulella, voimme olla rauhassa.",
    ],
    followup: [
      "Ei haittaa ollenkaan. Voimme lopettaa tähän tai jatkaa myöhemmin.",
      "Ymmärrän. Kiitos kun sanoit sen suoraan.",
    ],
  },

  confusion: {
    start: [
      "Ei haittaa. Voin sanoa asian toisin.",
      "Ei hätää. Voimme ottaa tämän ihan rauhassa.",
    ],
    followup: [
      "Voimme jatkaa ihan rauhallisesti. Voit kertoa vaikka yhdellä lauseella, miltä päivä on tuntunut.",
      "Ei kiirettä. Voit vastata omassa tahdissasi.",
    ],
  },

  silence: {
    start: [
      "Voit vastata omassa tahdissasi. Olen täällä kuuntelemassa.",
      "Ei kiirettä. Voimme jatkaa silloin kun sinusta tuntuu hyvältä.",
    ],
    followup: [
      "Voimme olla ihan rauhassa tässä hetkessä.",
      "Ei haittaa, jos haluat miettiä hetken.",
    ],
  },

  goodbye: {
    start: [
      "Kiitos keskustelusta. Toivotan sinulle rauhallista ja mukavaa päivänjatkoa.",
      "Kiitos jutteluhetkestä. Mukavaa päivänjatkoa sinulle.",
    ],
    followup: [
      "Kiitos kun juttelit kanssani. Mukavaa päivänjatkoa.",
      "Kiitos keskustelusta. Toivon sinulle hyvää iltaa.",
    ],
  },
};