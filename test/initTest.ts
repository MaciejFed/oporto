// @ts-nocheck
global.process.stdin.setRawMode = (mode: boolean) => undefined;

process.stdin.setRawMode = () => {};

jest.spyOn(console, 'log').mockImplementation(() => {});

jest.mock('../src/repository/file', () => {
    const fileModuleActual = jest.requireActual('../src/repository/file');
    return {
      ...fileModuleActual,
      readFromFile: () => `[
        {
          "exercise": {
            "verb": {
              "Infinitive": "ser",
              "Eu": "sou",
              "Tu": "és",
              "Ela/Ele/Vocé": "é",
              "Nós": "somos",
              "Eles/Elas/Vosēs": "sāo"
            },
            "person": "Eles/Elas/Vosēs",
            "exercsiseType": "IrregularVerb",
            "correctAnswer": "sāo"
          },
          "answer": "cc",
          "isCorrect": false,
          "date": "Fri Jul 01 2022 18:20:57 GMT+0200 (Central European Summer Time)"
        }
      ]`,
      saveToFile: (data: string) => { }
    };
  });