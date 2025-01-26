import { Hit } from '../data/types/news';

const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
};

export const mapToArticle = (data: Hit[]|null ) => {
    let Unknown = 'Unknown';
    return data?.map((item: any) => ({
        id: item.story_id ?? item.objectID,
        title: item.title ?? item.story_title ?? item.comment_text ?? Unknown,
        content: item.content,
        author: item.author ?? Unknown,
        url: item.url ?? item.story_url ?? '',
        date: item.created_at ? formatDate(item.created_at) : Unknown,
    })) ?? [];
};
