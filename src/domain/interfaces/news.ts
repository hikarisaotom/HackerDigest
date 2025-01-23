export interface BaseResponse {
    exhaustive: Exhaustive
    exhaustiveNbHits: boolean
    exhaustiveTypo: boolean
    hits: Hit[]
    hitsPerPage: number
    nbHits: number
    nbPages: number
    page: number
    params: string
    processingTimeMS: number
    processingTimingsMS: ProcessingTimingsMs
    query: string
    serverTimeMS: number
}

export interface Exhaustive {
    nbHits: boolean
    typo: boolean
}

export interface Hit {
    _highlightResult: HighlightResult
    _tags: string[]
    author: string
    created_at: string
    created_at_i: number
    num_comments?: number
    objectID: string
    points?: number
    story_id: number
    title?: string
    updated_at: string
    url?: string
    comment_text?: string
    parent_id?: number
    story_title?: string
    story_url?: string
    children?: number[]
}

export interface HighlightResult {
    author: Author
    title?: Title
    url?: Url
    comment_text?: CommentText
    story_title?: StoryTitle
    story_url?: StoryUrl
}

export interface Author {
    matchLevel: string
    matchedWords: any[]
    value: string
}

export interface Title {
    fullyHighlighted: boolean
    matchLevel: string
    matchedWords: string[]
    value: string
}

export interface Url {
    matchLevel: string
    matchedWords: any[]
    value: string
}

export interface CommentText {
    fullyHighlighted: boolean
    matchLevel: string
    matchedWords: string[]
    value: string
}

export interface StoryTitle {
    matchLevel: string
    matchedWords: any[]
    value: string
}

export interface StoryUrl {
    matchLevel: string
    matchedWords: any[]
    value: string
}

export interface ProcessingTimingsMs {
    _request: Request
    afterFetch: AfterFetch
    fetch: Fetch
    total: number
}

export interface Request {
    roundTrip: number
}

export interface AfterFetch {
    format: Format
}

export interface Format {
    highlighting: number
    total: number
}

export interface Fetch {
    query: number
    total: number
}
