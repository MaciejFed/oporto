type RegularVerb = string

type Verbs = {
    regular: RegularVerb[]
};

export type Schema = {
    verbs: Verbs
};

export const db: Schema = {
    'verbs': {
        'regular': ['Falar']
    }
}
