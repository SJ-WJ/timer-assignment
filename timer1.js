const simpleTimer = process.argv.slice(2);
for (let counter of simpleTimer) {
  if (Number(counter) > 0) {
    setTimeout(() => {
      process.stdout.write('Rise and Shine! ');
      console.log('')
    }, counter * 1000);
  }
}