export default {
    name: "AllCharacters",
    kind: "HoudiniQuery",
    hash: "b597fdb4890067d1c8f3e7cd1d44cba809525ed930a8234dc6190d3be025f4b9",

    raw: `query AllCharacters {
  characters {
    results {
      name
      id
      image
    }
  }
}
`,

    rootType: "Query",

    selection: {
        characters: {
            type: "Characters",
            keyRaw: "characters",

            fields: {
                results: {
                    type: "Character",
                    keyRaw: "results",

                    fields: {
                        name: {
                            type: "String",
                            keyRaw: "name"
                        },

                        id: {
                            type: "ID",
                            keyRaw: "id"
                        },

                        image: {
                            type: "String",
                            keyRaw: "image"
                        }
                    }
                }
            }
        }
    },

    policy: "NetworkOnly"
};