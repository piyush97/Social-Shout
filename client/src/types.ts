export interface Post {
    identifier: string;
    title: string;
    slug: string;
    subName: string;
    createdAt: string;
    updatedAt: string;
    body?: string;
    username: string;
    // Virtual Fields
    url: string;
}
