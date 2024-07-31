import readline from 'readline';

const MAX_LINE_LENGTH = 75;

export async function findMatchingLines(
  targetInputStream: NodeJS.ReadableStream,
  enInputStream: NodeJS.ReadableStream,
  wordToFind: string,
  numberOfLinesToRead: number = Number.MAX_SAFE_INTEGER
) {
  const wordRegex = new RegExp(`(^|\\s)${wordToFind}($|\\s)`, 'i');
  const readInterfaceTarget = readline.createInterface({
    input: targetInputStream
  });

  const readInterfaceEn = readline.createInterface({
    input: enInputStream
  });

  const matchingLines: string[] = [];
  const matchingLinesEn: string[] = [];
  let linesRead = 0;

  const readInterfacePtIterator = readInterfaceTarget[Symbol.asyncIterator]();
  const readInterfaceEnIterator = readInterfaceEn[Symbol.asyncIterator]();
  while (linesRead < numberOfLinesToRead) {
    const linePtResult = await readInterfacePtIterator.next();
    const lineEnResult = await readInterfaceEnIterator.next();

    if (linePtResult.done || lineEnResult.done) break;

    const linePt = linePtResult.value;
    const lineEn = lineEnResult.value;

    if (wordRegex.test(linePt) && linePt.length < MAX_LINE_LENGTH) {
      if (!matchingLines.includes(linePt)) {
        matchingLines.push(linePt);
        matchingLinesEn.push(lineEn);
      }
    }
    linesRead++;
  }

  readInterfaceTarget.close();
  readInterfaceEn.close();

  return {
    matchingLines,
    matchingLinesEn
  };
}
