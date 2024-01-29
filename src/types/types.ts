

export interface Response {
    status: number,
    success: string,
    data: any,
    message: string
}

export interface New {
    "article_id": string,
    "title": string,
    "link": string,
    "keywords": string[],

    "video_url": string | null,
    "description": string,

    "pubDate": string,

    "image_url": string | null,

    "source_id": string,
    "source_url": string,

    "country": string[],
    "category": string[],
}