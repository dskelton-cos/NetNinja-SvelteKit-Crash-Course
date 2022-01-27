export type AllCharacters = {
    readonly "input": null,
    readonly "result": AllCharacters$result
};

export type AllCharacters$result = {
    readonly characters: {
        readonly results: ({
            readonly name: string | null,
            readonly id: string | null,
            readonly image: string | null
        } | null)[] | null
    } | null
};