// @ts-nocheck
global.process.stdin.setRawMode = (mode: boolean) => undefined;

jest.spyOn(console, 'log').mockImplementation(() => {});

jest.mock('../src/io/file', () => {
    const fileModuleActual = jest.requireActual('../src/io/file');
    return {
      ...fileModuleActual,
      readFromFile: () => `[
        {
          "exercise": {
            "exercsiseType": "RegularVerb",
            "verb": "abrir",
            "person": "Nós",
            "correctAnswer": "abrimos"
          },
          "answer": "abrimos",
          "isCorrect": true,
          "date": "2022-07-04T16:21:49.636Z"
        },
        {
          "exercise": {
            "exercsiseType": "IrregularVerb",
            "verb": {
              "Infinitive": "ser",
              "Eu": "sou",
              "Tu": "és",
              "Ela/Ele/Vocé": "é",
              "Nós": "somos",
              "Eles/Elas/Vocēs": "sāo"
            },
            "person": "Eles/Elas/Vocēs",
            "correctAnswer": "sou"
          },
          "answer": "sao",
          "isCorrect": false,
          "date": "2022-07-04T16:21:54.681Z"
        },
        {
          "exercise": {
            "exercsiseType": "Translation",
            "noun": {
              "english": "girlfriend",
              "portuguese": {
                "word": "namorada",
                "gender": "female"
              }
            },
            "correctAnswer": "a namorada"
          },
          "answer": "aspaceanodsaa",
          "isCorrect": false,
          "date": "2022-07-04T16:22:08.861Z"
        }
      ]`,
      saveToFile: (data: string) => { }
    };
  });