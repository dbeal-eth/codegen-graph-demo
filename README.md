Codegen Graph Demo
====

This repo serves as a minimalist example use of [`codegen-graph-ts`](https://github.com/dbeal-eth/codegen-graph-ts)

## Usage

```
npm i
npm run codegen
```

The above commands will install dependencies and generate the subgraph query code. At this point, you can experiment with the code within `demo.ts` as desired. To run the code, simply run:

```
npm run start
```

## Rationale

Subgraph schema is initially downloaded to `subgraphs/global-debt.json`. This allows for the repo to remain decoupled
from upstream subgraph changes, and reduces the need to make unnecessary remote queries in CI/CD processes.

Once the schema is downloaded, it can be used to generate the schema locally on demad with a single command.

The `codegen-graph-ts` library is recorded in `dependencies` because it is depended upon by the generated code.

This repo uses `ts-node` to simplify quickly running the demo script, but javascript could be used instead, and a javascript variant of the generated code can be generated with the `--js` option added to the `gen` command.