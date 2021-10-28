import * as sgExchanges from './generated/global-debt';

const run = async () => {
    const result = await sgExchanges.getDebtStates(
        'https://api.thegraph.com/subgraphs/name/killerbyte/synthetix-global-debt', 
        { first: 10000, orderBy: 'timestamp', orderDirection: 'desc', where: { timestamp_lt: Math.floor(Date.now() / 1000 - 86400 * 30) } }, 
        { timestamp: true, debtEntry: true, debtRatio: true }
    );

    console.log(result.length);

    for(const r of result.slice(result.length / 2, result.length / 2 + 10)) {
        console.log('got data:', new Date(r.timestamp.mul(1000).toNumber()).toISOString(), r.debtEntry.toString(2));
    }
}

run();