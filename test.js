require('colors')
async function test() {
    const { characters, getRandomArbitrary, getRandomInt, jsonRead, jsonWrite, limit, sleep, shuffleArray, randomRgb, hexToRgb, rgbToHex, randomHex, chance, formatBytes, DateExtended, minecraft } = require('.')
    console.log(getRandomArbitrary(-1337, 1337))
    console.log(getRandomInt(420))
    let test = await jsonRead('./test.json')
    console.log(test)
    console.log(test['why-are-you-here'].answers[2])
    test['why-are-you-here'].answers[2] = 'j'
    await jsonWrite('./test.json', test)
    console.log(limit('subscribe to technoblade', 20))
    console.log(characters.string.all)
    console.log(shuffleArray(characters.array.all))
    console.log(chance(50))
    console.log(formatBytes(getRandomInt(10000000000), 3))
    const random = {
        rgb: randomRgb(),
        hex: randomHex()
    }
    console.log(random)
    console.log(rgbToHex(random.rgb))
    console.log(hexToRgb(random.hex))
    console.log(new DateExtended().customFormat('#YYYY# #MMMM# #DDDD# #D##th# #hhhh#:#mm#:#ss#'))
    console.log(minecraft.getRandomCoordinates(true, 'object'))
    await sleep(1000)
    console.log(
        'This should appear a second later\n' +
        'and if it does, then JavaScript test is successful!'
    );
}

(async() => {
    console.log('Checking for ts-node...')
    const { which, exec } = require('shelljs')
    if (!which('ts-node')) {
        console.log('ts-node not found! Only testing JavaScript...')
        console.log('=============== Starting JavaScript testing ==============='.yellow)
        await test()
        console.log('=============== Finished JavaScript testing ==============='.yellow)
        process.exit(0)
    } else {
        console.log('Found ts-node! Will test TypeScript...'.cyan)
        console.log('=============== Starting JavaScript testing ==============='.yellow)
        await test();
        console.log('=============== Finished JavaScript testing ==============='.yellow)
        console.log('=============== Starting TypeScript testing ==============='.cyan)
        exec('ts-node test.ts', (code, stdout, stderr) => {
            if (stderr.length > 0 && !stderr.includes('Debugger attached.')) {
                console.log(
                    'Recieved stderr from ts-node!\n' +
                    `${stderr}\n` +
                    `Exit code: ${code}`
                )
            } else {
                console.log('Both tests '.yellow + 'passed successfully!'.cyan)
                process.exit(0)
            }
        });
    }
})();