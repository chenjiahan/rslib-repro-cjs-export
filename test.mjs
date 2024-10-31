async function main() {
    const { example } = await import('./dist/index.cjs');
    console.log(example);
}

main();
